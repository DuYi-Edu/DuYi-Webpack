/**
* 给某个dom元素应用一个样式
* @param {*} dom dom元素
* @param {*} styles 样式对象
*/
export function applyStyles(dom, ...styles) {
    let targetStyles = {}; //最终合并的样式对象
    for (const style of styles) {
        targetStyles = {
            ...targetStyles,
            ...style
        }
    }

    for (const key in targetStyles) {
        const value = targetStyles[key];
        dom.style[key] = value;
    }
}