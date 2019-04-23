/**
 * 更新默认的帧率，可提供流畅，但需要更高的带宽
 *
 *
 * lib-jitsi-meet/modules/RTC/RTCUtils.js
 */
let baseScript = require('../BaseScript').newInstance();


/**
 * 脚本名称
 * @returns {*}
 */
baseScript.name = __filename;


/**
 * 补丁的配置
 * @type {{fileName: string, start: string, end: string, update: number}}
 */
baseScript.patch = {
    "file": baseScript.getConfig().path['lib-jitsi-meet'] + "/modules/RTC/RTCUtils.js",
    "charset": "utf-8",
    "skip": 0,
    "from": "SS_DEFAULT_FRAME_RATE = ",
    "to": ";",
    "update": baseScript.getConfig().default_frame_rate
};


module.exports = baseScript;
