# 利用webpack拆分css {ignore}

要拆分css，就必须把css当成像js那样的模块；要把css当成模块，就必须有一个构建工具（webpack），它具备合并代码的能力

而webpack本身只能读取css文件的内容、将其当作JS代码进行分析，因此，会导致错误

于是，就必须有一个loader，能够将css代码转换为js代码

## css-loader

css-loader的作用，就是将css代码转换为js代码

它的处理原理极其简单：将css代码作为字符串导出

例如：

```css
.red{
    color:"#f40";
}
```

经过css-loader转换后变成js代码：

```js
module.exports = `.red{
    color:"#f40";
}`
```

> 上面的js代码是经过我简化后的，不代表真实的css-loader的转换后代码，css-loader转换后的代码会有些复杂，同时会导出更多的信息，但核心思想不变

再例如：

```css
.red{
    color:"#f40";
    background:url("./bg.png")
}
```

经过css-loader转换后变成js代码：

```js
var import1 = require("./bg.png");
module.exports = `.red{
    color:"#f40";
    background:url("${import1}")
}`;
```

这样一来，经过webpack的后续处理，会把依赖```./bg.png```添加到模块列表，然后再将代码转换为

```js
var import1 = __webpack_require__("./src/bg.png");
module.exports = `.red{
    color:"#f40";
    background:url("${import1}")
}`;
```

再例如：

```css
@import "./reset.css";
.red{
    color:"#f40";
    background:url("./bg.png")
}
```

会转换为：

```js
var import1 = require("./reset.css");
var import2 = require("./bg.png");
module.exports = `${import1}
.red{
    color:"#f40";
    background:url("${import2}")
}`;
```

总结，css-loader干了什么：

1. 将css文件的内容作为字符串导出
2. 将css中的其他依赖作为require导入，以便webpack分析依赖

## style-loader

由于css-loader仅提供了将css转换为字符串导出的能力，剩余的事情要交给其他loader或plugin来处理

style-loader可以将css-loader转换后的代码进一步处理，将css-loader导出的字符串加入到页面的style元素中

例如：

```css
.red{
    color:"#f40";
}
```

经过css-loader转换后变成js代码：

```js
module.exports = `.red{
    color:"#f40";
}`
```

经过style-loader转换后变成：

```js
module.exports = `.red{
    color:"#f40";
}`
var style = module.exports;
var styleElem = document.createElement("style");
styleElem.innerHTML = style;
document.head.appendChild(styleElem);
module.exports = {}
```

> 以上代码均为简化后的代码，并不代表真实的代码
> style-loader有能力避免同一个样式的重复导入