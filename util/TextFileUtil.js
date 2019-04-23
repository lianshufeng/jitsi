let fs = require('fs');


/**
 * 更新文本
 * @param patch
 * @returns {boolean}
 */
module.exports.update = function (patch) {
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
 * 替换文本
 * @param patch
 * @returns {boolean}
 */
module.exports.replace = function (patch) {
    let content = readContent(patch);
    //更新后的文件
    writeContent(patch, content.split(patch.source).join(patch.target));
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
 * 替换文本
 * @param patch
 * @returns {string}
 */
module.exports.replaceAll = function (patch) {
    let content = readContent(patch);
    content.replace();

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
