import Vue from 'vue';
import Router from 'vue-router';
import PlayOffline from '@/components/PlayOffline';
import Introduction from '@/components/Introduction';
import Engine from '@/components/Engine';
import Register from '@/components/Register';
import Login from '@/components/Login';
import OpeningExplorer from '@/components/OpeningExplorer';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Introduction',
      component: Introduction,
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
    {
      path: '/mate/queen',
      name: 'PlayOfflineQueenMate',
      component: PlayOffline,
      props: {
        type: 'mate',
        mateType: 'queen',
      },
    },
    {
      path: '/mate/rook',
      name: 'PlayOfflineRookMate',
      component: PlayOffline,
      props: {
        type: 'mate',
        mateType: 'rook',
      },
    },
    {
      path: '/mate/pawn',
      name: 'PlayOfflinePawnMate',
      component: PlayOffline,
      props: {
        type: 'mate',
        mateType: 'pawn',
      },
    },
    {
      path: '/engine',
      name: 'Engine',
      component: Engine,
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/opening-explorer',
      name: 'OpeningExplorer',
      component: OpeningExplorer,
    },
  ],
});
