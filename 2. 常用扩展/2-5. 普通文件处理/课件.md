file-loader: 生成依赖的文件到输出目录，然后将模块文件设置为：导出一个路径\

```js
//file-loader
function loader(source){
	// source：文件内容（图片内容 buffer）
	// 1. 生成一个具有相同文件内容的文件到输出目录
	// 2. 返回一段代码   export default "文件名"
}
```

url-loader：将依赖的文件转换为：导出一个base64格式的字符串


```js
//file-loader
function loader(source){
	// source：文件内容（图片内容 buffer）
	// 1. 根据buffer生成一个base64编码
	// 2. 返回一段代码   export default "base64编码"
}
```