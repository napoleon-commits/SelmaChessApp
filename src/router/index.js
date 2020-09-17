import Vue from 'vue';
import Router from 'vue-router';
import PlayOffline from '@/components/PlayOffline';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PlayOffline',
      component: PlayOffline,
    },
    {
      path: '/offline',
      name: 'PlayOffline',
      component: PlayOffline,
    },
  ],
});
