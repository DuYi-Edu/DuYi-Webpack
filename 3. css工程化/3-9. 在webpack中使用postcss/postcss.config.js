module.exports = {
    map: false, //关闭source-map
    plugins: {
        "postcss-preset-env": {
            stage: 0, //哪怕是处于草案阶段的语法，也需要转换
            preserve: false
        }
    }
}