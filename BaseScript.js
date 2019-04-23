let path = require('path'), textFileUtil = require('./util/TextFileUtil')

let config = require('./config')


/**
 * 执行补丁
 * @param patch
 * @returns {boolean|*}
 */
let executePatch = function (patch) {
    return patch.execute();
}
/**
 * 执行补丁
 * @returns {boolean}
 */
let execute = function () {
    if (this.patch) {
        try {
            if (this.patch instanceof Array) {
                this.patch.forEach((patch) => {
                    executePatch(patch);
                })
            } else {
                executePatch(this.patch);
            }
        } catch (e) {
            console.error(e);
            return false;
        }
        return true;
    }
    return false;
}


let obj = function () {

    /**
     * 脚本名称
     */
    this.name = path.basename(__filename);
    /**
     * 执行器
     * @returns {boolean}
     */
    this.execute = execute;

    /**
     * 补丁配置
     */
    this.patch = null;


    /**
     * 获取配置文件
     * @returns {{path, default_frame_rate}|*}
     */
    this.getConfig = function () {
        return config;
    }

}


/**
 * 构建新对象
 * @returns {obj}
 */
module.exports.newInstance = function () {
    return new obj;
}

