import Vue from 'vue';
import Router from 'vue-router';
//import HtmlView from '@/views/HtmlView.vue'; нет!

Vue.use(Router);

export default new Router({
  mode: 'history', //для красоты :)
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/html',
      name: 'HtmlView', //название дич, надо подправить
      component: () => import('@/views/HtmlView.vue'),
    },
    // тута все что надо будет потом
  ],
});
