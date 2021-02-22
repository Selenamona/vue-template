import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.scss";

// iView 引入
// import ViewUI from "view-design";
// import "view-design/dist/styles/iview.css";
// Vue.use(ViewUI);

// element-ui 部分引入
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
