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
      name: 'HtmlView', //ok
      component: () => import('@/views/HtmlView.vue'),
    },
    {
      path: '/css',
      name: 'CSS', //ok
      component: () => import('@/views/CSSView.vue'),
    },
    {
      path: '/about',
      name: 'About', //ok
      component: () => import('@/views/AboutView.vue'),
    },
    // тута все что надо будет потом
  ],
});
