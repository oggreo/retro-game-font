import { createApp, reactive } from 'vue';
import WebFont from 'webfontloader';
import App from './App.vue';
import router from './router';

const GStore = reactive({ selectedGames: [], inputText: '' });

createApp(App)
  .use(router)
  .provide('GStore', GStore)
  .mount('#app');

WebFont.load({
  custom: { families: ['Roboto'] },
  google: { families: ['Droid Sans', 'Open Sans'] },
});
