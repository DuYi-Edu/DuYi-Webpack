var baseConfig = require("./webpack.base")
var devConfig = require("./webpack.dev")
var proConfig = require("./webpack.pro")

module.exports = function (env) {
    if (env && env.prod) {
        return {
            ...baseConfig,
            ...proConfig
        }
    }
    else {
        return {
            ...baseConfig,
            ...devConfig
        }
    }
}