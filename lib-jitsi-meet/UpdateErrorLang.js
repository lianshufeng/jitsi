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

let patch1 = {
    //文件名
    'file': baseScript.getConfig().path['jitsi-meet'] + '/react/features/base/i18n/i18next.js',
    //文件字符编码
    'charset': 'utf-8',
    //从开始的字符串
    'source': ", 'countries'",
    //结束的字符串
    'target': '',
}

let patch2 = {
    //文件名
    'file': baseScript.getConfig().path['jitsi-meet'] + '/react/features/base/i18n/functions.js',
    //文件字符编码
    'charset': 'utf-8',
    //从开始的字符串
    'source': ", 'countries'",
    //结束的字符串
    'target': '',
}

let patch3 = {
    //文件名
    'file': baseScript.getConfig().path['jitsi-meet'] + '/react/features/base/i18n/i18next.js',
    //文件字符编码
    'charset': 'utf-8',
    //从开始的字符串
    'source': "COUNTRIES_RESOURCES,",
    //结束的字符串
    'target': '',
}



baseScript.patch = [require('../updater/ReplacePatch').newInstance(patch1), require('../updater/ReplacePatch').newInstance(patch2) , require('../updater/ReplacePatch').newInstance(patch3)];


