import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; //引入 router
import { createMetaManager } from 'vue-meta';
// import "./assets/css/bootstrap.css";

const app = createApp(App);
app.config.globalProperties.isDev = false;
app.use(router);
app.use(createMetaManager());
app.mount('#app');
