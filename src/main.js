import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //引入 router
// import "./assets/css/bootstrap.css";

const app = createApp(App);
app.config.globalProperties.isDev = true;
app.use(router);
app.mount('#app');
