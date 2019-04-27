/**
 * 更新默认的帧率，可提供流畅，但需要更高的带宽
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

let patch = {
    "file": baseScript.getConfig().path['jitsi-meet'] + "/react/features/base/settings/constants.js",
    "charset": "utf-8",
    "skip": 0,
    "from": "export const DEFAULT_SERVER_URL = '",
    "to": "'",
    "update": baseScript.getConfig().defaultServerUrl
}

baseScript.patch = require('../updater/UpdatePatch').newInstance(patch);



