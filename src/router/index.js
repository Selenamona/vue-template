import Vue from "vue";
import VueRouter from "vue-router";

// 自动加载router文件夹下的所有js文件
const context = require.context("@/router", false, /\.js$/);
let routesConfig = [];
context.keys().forEach(v => {
  if (v === "./index.js") {
    return;
  }
  const obj = context(v);
  routesConfig = routesConfig.concat(obj[Object.keys(obj)[0]]);
});
Vue.use(VueRouter);

const router = new VueRouter({
  routes: routesConfig
});
export default router;
