import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './routes';
import VueSplide from '@splidejs/vue-splide';
import screenMixin from './mixins/isMobileScreen';
import '@/assets/scss/main.scss';


const appInstance = createApp({
  extends: App,
});

appInstance.mixin(screenMixin);
appInstance.use(router);
appInstance.use(VueSplide);
appInstance.use(VueAxios, axios);
appInstance.mount('#app');
