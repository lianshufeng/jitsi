//载入工具类
let fs = require('fs'), path = require('path');

let mePath = path.dirname(path.dirname(__filename));

module.exports = {

    // git 更新后的路径
    path: {
        "jitsi-meet": path.join(mePath, "jitsi-meet"),
        "lib-jitsi-meet": path.join(mePath, "lib-jitsi-meet"),
    },
    // 设置默认的帧率
    defaultFrameRate: 40,

    //隐藏水印
    hideWatermark: true

}
