import { createApp } from "vue";
import App from "./App.vue";
// 路由
import router from "./router";
// vux
import store from "./store";
// element-plus
import ElementPlus from "element-plus";
import "./assets/scss/element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";
// axios
import { Request } from "./plugins/request";
import VueAxios from "vue-axios";
const app = createApp(App);

// app.config.globalProperties.$API = API;
// app.config.globalProperties.$axios = Axios; //this.Axios

app
  .use(router)
  .use(store)
  .use(ElementPlus, { locale })
  .use(VueAxios, Request.init())
  .mount("#app");
