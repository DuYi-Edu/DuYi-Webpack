function loader(source){
  return `new source`
}

loader.pitch = function(filePath){
  // 可返回可不返回
  // 如果返回，返回源代码
}

module.exports = loader;