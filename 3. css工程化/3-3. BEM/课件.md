# BEM

BEM是一套针对css类样式的命名方法。

> 其他命名方法还有：OOCSS、AMCSS、SMACSS等等

BEM全称是：**B**lock **E**lement **M**odifier

一个完整的BEM类名：block__element_modifier，例如：```banner__dot_selected```，可以表示：轮播图中，处于选中状态的小圆点

![](assets/2020-01-31-09-53-31.png)

三个部分的具体含义为：

- **Block**：页面中的大区域，表示最顶级的划分，例如：轮播图(```banner```)、布局(```layout```)、文章(```article```)等等
- **element**：区域中的组成部分，例如：轮播图中的横幅图片(```banner__img```)、轮播图中的容器（```banner__container```）、布局中的头部(```layout__header```)、文章中的标题(```article_title```)
- **modifier**：可选。通常表示状态，例如：处于展开状态的布局左边栏（```layout__left_expand```）、处于选中状态的轮播图小圆点(```banner__dot_selected```)

在某些大型工程中，如果使用BEM命名法，还可能会增加一个前缀，来表示类名的用途，常见的前缀有：

- **l**: layout，表示这个样式是用于布局的
- **c**: component，表示这个样式是一个组件，即一个功能区域
- **u**: util，表示这个样式是一个通用的、工具性质的样式
- **j**: javascript，表示这个样式没有实际意义，是专门提供给js获取元素使用的