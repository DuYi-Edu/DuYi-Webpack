module.exports = class MyPlugin {
    apply(compiler) {
        //在这里注册事件，类似于window.onload  $(function(){})
        compiler.hooks.done.tap("MyPlugin-done", function(compilation){
            //事件处理函数
            console.log("编译完成");
        })
    }
}