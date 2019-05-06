/**
 * 更新屏幕共享默认走系统音量的配置
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


let source1 = "logger.info('Get media constraints', constraints);";
let content1 = 'if(window.JitsiMeetScreenObtainer&&window.JitsiMeetScreenObtainer.needDesktopAudio){constraints["audio"]={mandatory:{chromeMediaSource:"desktop",echoCancellation:true}}};';
let patch1 = {
    "file": baseScript.getConfig().path['lib-jitsi-meet'] + "/modules/RTC/RTCUtils.js",
    "charset": "utf-8",
    "skip": 0,
    "from": source1,
    "to": "\n",
    "update": content1
}


let source2 = "const maybeCreateAndAddDesktopTrack = function(desktopStream) {";
let content2 = 'if(desktopStream){mediaStreamsMetaData.push({stream:desktopStream.stream,sourceId:desktopStream.sourceId,sourceType:desktopStream.sourceType,track:desktopStream.stream.getVideoTracks()[0],videoType:VideoType.DESKTOP})};';
let patch2 = {
    "file": baseScript.getConfig().path['lib-jitsi-meet'] + "/modules/RTC/RTCUtils.js",
    "charset": "utf-8",
    "skip": 0,
    "from": source2,
    "to": "\n",
    "update": content2
}


baseScript.patch = [require('../updater/UpdatePatch').newInstance(patch1), require('../updater/UpdatePatch').newInstance(patch2)];



