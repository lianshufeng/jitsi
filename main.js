//载入工具类
var fs = require('fs'), path = require('path');


/**
 * 遍历目录并加入到集合中
 * @param pathName
 * @param list
 */
var joinScript = function (pathName, list) {
    fs.readdirSync(pathName).forEach((fileName) => {
        list.push('./' + pathName + '/' + fileName);
    })
}


/**
 * 找到所有的模型
 * @returns {any[]}
 */
var loadModules = function () {
    let list = new Array();
    joinScript('lib-jitsi-meet', list);
    joinScript('jitsi-meet', list);

    //动态加在
    let modules = new Array();
    list.forEach((file) => {
        let m = new require(file);
        modules.push(m);
    })
    return modules;
}


/**
 *
 * 程序入口
 *
 */
var main = function () {
    var modules = loadModules();
    console.log('------------->>>');
    //执行
    modules.forEach((module) => {
        let time = new Date().getTime();
        let ret = {
            'name': module.name,
            'ret': module.execute(),
            'time': new Date().getTime() - time
        };
        console.log(JSON.stringify(ret));
    })
    console.log('-------------<<<');
}


main();
