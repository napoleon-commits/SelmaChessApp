import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: () => import(/* webpackChunkName: "LandingPage" */ '@/components/LandingPage'),
  },
  {
    path: '/offline',
    name: 'OfflineChess',
    component: () => import(/* webpackChunkName: "OfflineChess" */ '@/components/OfflineChess'),
  },
  {
    path: '/online',
    name: 'OnlineChessSelectionPage',
    component: () => import(/* webpackChunkName: "OnlineChessSelectionPage" */ '@/components/OnlineChessSelectionPage'),
  },
  {
    path: '/online/play',
    name: 'OnlineChess',
    component: () => import(/* webpackChunkName: "OnlineChess" */ '@/components/OnlineChess'),
    props: true
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import(/* webpackChunkName: "SignIn" */ '@/components/SignIn'),
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: () => import(/* webpackChunkName: "Introduction" */ '@/components/Introduction'),
  },
  {
    path: '/special-moves',
    name: 'SpecialMoves',
    component: () => import(/* webpackChunkName: "SpecialMoves" */ '@/components/SpecialMoves'),
  },
  {
    path: '/elementary-checkmates',
    name: 'ElementaryCheckmates',
    component: () => import(/* webpackChunkName: "ElementaryCheckmates" */ '@/components/ElementaryCheckmates'),
  },
  {
    path: '/attacking-the-king',
    name: 'AttackingTheKing',
    component: () => import(/* webpackChunkName: "AttackingTheKing" */ '@/components/AttackingTheKing'),
  },
  {
    path: '/introduction-to-endgames',
    name: 'IntroductionToEndgames',
    component: () => import(/* webpackChunkName: "IntroductionToEndgames" */ '@/components/IntroductionToEndgames'),
  },
  {
    path: '/rook-strategy',
    name: 'RookStrategy',
    component: () => import(/* webpackChunkName: "RookStrategy" */ '@/components/RookStrategy'),
  },
  {
    path: '/knight-strategy',
    name: 'KnightStrategy',
    component: () => import(/* webpackChunkName: "KnightStrategy" */ '@/components/KnightStrategy'),
  },
  {
    path: '/bishop-strategy',
    name: 'BishopStrategy',
    component: () => import(/* webpackChunkName: "BishopStrategy" */ '@/components/BishopStrategy'),
  },
  {
    path: '/pawn-strategy',
    name: 'PawnStrategy',
    component: () => import(/* webpackChunkName: "PawnStrategy" */ '@/components/PawnStrategy'),
  },
  {
    path: '/king-and-queen-strategy',
    name: 'KingAndQueenStrategy',
    component: () => import(/* webpackChunkName: "KingAndQueenStrategy" */ '@/components/KingAndQueenStrategy'),
  },
  {
    path: '/middlegame-strategy',
    name: 'MiddlegameStrategy',
    component: () => import(/* webpackChunkName: "MiddlegameStrategy" */ '@/components/MiddlegameStrategy'),
  },
  {
    path: '/common-opening-formations',
    name: 'CommonOpeningFormations',
    component: () => import(/* webpackChunkName: "CommonOpeningFormations" */ '@/components/CommonOpeningFormations'),
  },
  {
    path: '/attacking-themes-and-common-sacrifices',
    name: 'AttackingThemesAndCommonSacrifices',
    component: () => import(/* webpackChunkName: "AttackingThemesAndCommonSacrifices" */ '@/components/AttackingThemesAndCommonSacrifices'),
  },
  {
    path: '/opening-strategy',
    name: 'OpeningStrategy',
    component: () => import(/* webpackChunkName: "OpeningStrategy" */ '@/components/OpeningStrategy'),
  },
  {
    path: '/opening-variations',
    name: 'OpeningVariations',
    component: () => import(/* webpackChunkName: "OpeningVariations" */ '@/components/OpeningVariations'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
