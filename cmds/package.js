/**
 * 仅能在 linux下运行 ，且需要 zip 命令
 *
 * @type {{path, defaultFrameRate, hideWatermark}|*}
 */


let config = require('../config');
let path = require('path'), fs = require('fs');
let exec = require('child_process').execSync;


//随机的压缩名
let jitsimeet = 'meet_' + new Date().getTime() + '.zip';
let outoutFile = 'jitsi-meet.zip';

//编译目录
let buildPath = path.join(path.dirname(path.dirname(__filename)), 'build');
if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath);
}
if (!fs.existsSync(path.join(buildPath, 'libs'))) {
    fs.mkdirSync(path.join(buildPath, 'libs'));
}


/**
 * 执行命令
 * @param pwd
 * @param cmd
 */
let runCmd = function (cmd, cwd) {
    try {
        let ret = exec(cmd, {"cwd": cwd});
        console.log(cwd + ' -> ' + ret);
    } catch (e) {
        console.error(e);
    }
}


let copyFile = function (src, dist) {
    fs.writeFileSync(dist, fs.readFileSync(src));
}


let main = function () {


    runCmd('npm install', config.path['lib-jitsi-meet']);

    runCmd('npm install', config.path['jitsi-meet']);
    runCmd('make', config.path['jitsi-meet']);


    //压缩需要的资源文件
    runCmd('zip -r ' + jitsimeet + ' base.html fonts libs scripts connection_optimization  images logging_config.js  sounds css index.html package-lock.json  static favicon.ico  lang  plugin.head.html title.html', config.path['jitsi-meet']);

    //拷贝到编译目录
    let zipPath = path.join(config.path['jitsi-meet'], jitsimeet);
    copyFile(zipPath, path.join(buildPath, outoutFile));
    fs.unlinkSync(zipPath)

    //拷贝库文件
    copyFile(path.join(config.path['lib-jitsi-meet'], 'lib-jitsi-meet.min.js'), path.join(buildPath, 'libs', 'lib-jitsi-meet.min.js'));
    copyFile(path.join(config.path['lib-jitsi-meet'], 'lib-jitsi-meet.min.map'), path.join(buildPath, 'libs', 'lib-jitsi-meet.min.map'));

    //压缩到包里
    runCmd('zip -r ' + outoutFile + ' libs/', buildPath);
}


main();
