const baseConfig = require("./webpack.base")
const devConfig = require("./webpack.dev")
const prodConfig = require("./webpack.prod")

module.exports = function (env) {
    if (env && env.prod) {
        //生产环境
        const config = {
            ...baseConfig,
            ...prodConfig
        }
        config.plugins = [...baseConfig.plugins, ...prodConfig.plugins]
        return config;
    }
    else {
        //开发环境
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}