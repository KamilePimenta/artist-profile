import { createApp } from 'vue'
import App from './App.vue'
import router from './routes';
import screenMixin from './assets/mixins/isMobileScreen';
import '@/assets/scss/main.scss';


const appInstance = createApp({
  extends: App,
});

appInstance.mixin(screenMixin);
appInstance.use(router);
appInstance.mount('#app');
