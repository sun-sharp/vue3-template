import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

// 路由
import router from "./router";
app.use(router);

// vux
import store from "./store";
app.use(store);

// element-plus
import ElementPlus from "element-plus";
import "./assets/scss/element-variables.scss";
import locale from "element-plus/lib/locale/lang/zh-cn";
app.use(ElementPlus, { locale });

// API
import API from "./api/index";
app.config.globalProperties.$API = API;

app.mount("#app");
