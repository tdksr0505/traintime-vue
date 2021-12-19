import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; //引入 router
// import "./assets/css/bootstrap.css";

createApp(App).use(router).mount("#app");
