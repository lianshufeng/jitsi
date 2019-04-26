let config = require('../config');
let path = require('path');
var exec = require('child_process').execSync;


/**
 * 执行命令
 * @param pwd
 * @param cmd
 */
let runCmd = function (cmd, cwd) {
    let ret = exec(cmd, {"cwd": cwd});
    console.log(cwd + ' -> ' + ret);
}


let main = function () {
    runCmd('git reset --hard', config.path['jitsi-meet']);
    runCmd('git pull', config.path['jitsi-meet']);

    runCmd('git reset --hard', config.path['lib-jitsi-meet']);
    runCmd('git pull', config.path['lib-jitsi-meet']);
}


main();
