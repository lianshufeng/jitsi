let textFileUtil = require('../util/TextFileUtil');


let obj = function (config) {
    //构造文件
    this.config = config;

    /**
     * 开始执行
     */
    this.execute = function () {
        return textFileUtil.update(this.config);
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
        //跳过
        "skip": 0,
        //从开始的字符串
        "from": null,
        //结束的字符串
        "to": null,
        //替换为
        "update": null
    };
}


