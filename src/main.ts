import { createPinia } from 'pinia';
import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

import './assets/main.css';

// UnoCSS
// For development
// import 'uno.css'
// import 'virtual:unocss-devtools'
import 'virtual:uno.css';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
