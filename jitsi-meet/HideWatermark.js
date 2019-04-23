/**
 隐藏水印
 */

let baseScript = require('../BaseScript').newInstance();
let ReplacePatch = require('../updater/ReplacePatch');

module.exports = baseScript;

/**
 * 脚本名称
 * @returns {*}
 */
baseScript.name = __filename;


//需要隐藏
if (baseScript.getConfig().hideWatermark) {

    let patchs = new Array();

    patchs.push(ReplacePatch.newInstance({
        "file": baseScript.getConfig().path['jitsi-meet'] + "/react/features/base/react/components/web/Watermarks.js",
        "charset": "utf-8",
        "source": "this._renderJitsiWatermark()",
        "target": ""
    }));

    patchs.push(ReplacePatch.newInstance({
        "file": baseScript.getConfig().path['jitsi-meet'] + "/react/features/base/react/components/web/Watermarks.js",
        "charset": "utf-8",
        "source": "this._renderBrandWatermark()",
        "target": ""
    }));

    patchs.push(ReplacePatch.newInstance({
        "file": baseScript.getConfig().path['jitsi-meet'] + "/react/features/base/react/components/web/Watermarks.js",
        "charset": "utf-8",
        "source": "this._renderPoweredBy()",
        "target": ""
    }));


    baseScript.patch = patchs;


}

