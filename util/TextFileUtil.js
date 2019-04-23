let fs = require('fs');


/**
 * 例子配置
 * @type {{file: string, charset: string, skip: number, from: string, to: string, update: number}}
 */
let _patch = {
    //文件名
    "file": "/modules/RTC/RTCUtils.js",
    //文件字符编码
    "charset": "utf-8",
    //跳过
    "skip": 0,
    //从开始的字符串
    "from": "SS_DEFAULT_FRAME_RATE = ",
    //结束的字符串
    "to": ";",
    //替换为
    "update": 40
};


/**
 修改文本
 */
module.exports.write = function (patch) {
    let content = readContent(patch);
    let fromAt = findStr(content, patch.from, patch.skip);
    let toAt = findStr(content, patch.to, fromAt + patch.from.length);

    let leftText = content.substring(0, fromAt + patch.from.length);
    let rightText = content.substring(toAt, content.length);

    //更新后的文件
    writeContent(patch, leftText + patch.update + rightText);

    return true;
}


/**
 * 读取文本
 * @param patch
 * @returns {null}
 */
module.exports.read = function (patch) {
    let content = readContent(patch);
    let fromAt = findStr(content, patch.from, patch.skip);
    let toAt = findStr(content, patch.to, fromAt + patch.from.length);
    return content.substring(fromAt + patch.from.length, toAt);
}


/**
 * 读取文件内容
 * @param fileName
 * @param charset
 * @returns {*}
 */
let readContent = function (patch) {
    return fs.readFileSync(patch.file, {encoding: patch.charset ? patch.charset : 'UTF-8'});
}

/**
 * 写内容
 * @param patch
 * @param content
 */
let writeContent = function (patch, content) {
    fs.writeFileSync(patch.file, content, {encoding: patch.charset ? patch.charset : 'UTF-8'});
}


/**
 * 查找字符串
 * @param content
 * @param skip
 * @param str
 */
let findStr = function (content, str, skip) {
    return content.indexOf(str, skip);
}


module.exports.readContent = readContent;
