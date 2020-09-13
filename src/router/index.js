import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import PlayOffline from '@/components/PlayOffline';

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
