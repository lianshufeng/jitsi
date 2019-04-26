/**
 * 增加一个hook方法，提供远程桌面播放系统声音的支持
 *
 *
 * lib-jitsi-meet/modules/RTC/RTCUtils.js
 */
let baseScript = require('../BaseScript').newInstance();
module.exports = baseScript;


/**
 * 脚本名称
 * @returns {*}
 */
baseScript.name = __filename;


let source = 'const constraints = getConstraints(um, options);';
let content = 'if (window.JitsiMeetScreenObtainer && window.JitsiMeetScreenObtainer.getUserMedia) {window.JitsiMeetScreenObtainer.getUserMedia(constraints, um, options);}';

let patch = {
    "file": baseScript.getConfig().path['lib-jitsi-meet'] + "/modules/RTC/RTCUtils.js",
    "charset": "utf-8",
    "skip": 0,
    "source": source,
    //结束的字符串
    "target": source + '\n' + content,
}

baseScript.patch = require('../updater/ReplacePatch').newInstance(patch);



