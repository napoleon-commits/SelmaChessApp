import Vue from 'vue';
import Router from 'vue-router';
import PlayOffline from '@/components/PlayOffline';
import HelloWorld from '@/components/HelloWorld';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/offline',
      name: 'PlayOffline',
      component: PlayOffline,
    },
  ],
});
