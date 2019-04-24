let config = require('../config');
let path = require('path'), fs = require('fs');
var exec = require('child_process').execSync;

//编译目录
let buildPath = path.join(path.dirname(path.dirname(__filename)), 'build');
if (!fs.existsSync(buildPath)) {
    fs.mkdirSync(buildPath);
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


let copyFile = function (source) {

}


let main = function () {
    runCmd('npm install', config.path['lib-jitsi-meet']);

    runCmd('npm install', config.path['jitsi-meet']);
    runCmd('make', config.path['jitsi-meet']);


}


main();
