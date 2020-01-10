# 入口和出口

![](assets/2020-01-09-15-51-07.png)

> node内置模块 - path: https://nodejs.org/dist/latest-v12.x/docs/api/path.html

**出口**

这里的出口是针对资源列表的文件名或路径的配置

出口通过output进行配置

**入口**

**入口真正配置的是chunk**

入口通过entry进行配置

规则：

- name：chunkname
- hash: 总的资源hash，通常用于解决缓存问题
- chunkhash: 使用chunkhash
- id: 使用chunkid，不推荐