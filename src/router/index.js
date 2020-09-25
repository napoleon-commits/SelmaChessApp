import Vue from 'vue';
import Router from 'vue-router';
import PlayOffline from '@/components/PlayOffline';
import Learn from '@/components/Learn';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Learn',
      component: Learn,
    },
    {
      path: '/offline',
      name: 'PlayOffline',
      component: PlayOffline,
      props: {
        type: 'offline',
        mateType: '',
      },
    },
    {
      path: '/mate/bishop-knight',
      name: 'PlayOfflineBishopKnightMate',
      component: PlayOffline,
      props: {
        type: 'mate',
        mateType: 'bishop-knight',
      },
    },
  ],
});
