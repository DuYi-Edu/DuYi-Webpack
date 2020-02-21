import a from "./a";
import "./index.css"
console.log(a);

if (module.hot) {
  // 是否开启了热更新
  module.hot.accept(); // 接受热更新
}
