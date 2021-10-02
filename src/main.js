import { createApp, reactive } from 'vue';
import App from './App.vue';
import router from './router';

const GStore = reactive({ selectedGames: [], inputText: '' });

createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app');
