let textFileUtil = require('../util/TextFileUtil');


let obj = function (config) {
    //构造文件
    this.config = config;
    //执行更新
    this.execute = function () {
        return textFileUtil.replace(this.config);
    }
}

/**
 * 构建新对象
 * @returns {obj}
 */
module.exports.newInstance = function (config) {
    return new obj(config);
}


/**
 * 获取默认的配置文件
 * @returns {{charset: string, file: null, update: null, skip: number, from: null, to: null}}
 */
module.exports.defaultConfig = function () {
    return {
        //文件名
        "file": null,
        //文件字符编码
        "charset": "utf-8",
        //从开始的字符串
        "source": null,
        //结束的字符串
        "target": null,
    };
}


