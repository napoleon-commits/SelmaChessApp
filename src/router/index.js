import Vue from 'vue'
import VueRouter from 'vue-router'
import Introduction from '@/components/Introduction';
import ElementaryCheckmates from '@/components/ElementaryCheckmates';
import AttackingTheKing from '@/components/AttackingTheKing';
import IntroductionToEndgames from '@/components/IntroductionToEndgames';
import RookStrategy from '@/components/RookStrategy';
import KnightStrategy from '@/components/KnightStrategy';
import BishopStrategy from '@/components/BishopStrategy';
import PawnStrategy from '@/components/PawnStrategy';
import KingAndQueenStrategy from '@/components/KingAndQueenStrategy';
import MiddlegameStrategy from '@/components/MiddlegameStrategy';
import CommonOpeningFormations from '@/components/CommonOpeningFormations';
import AttackingThemesAndCommonSacrifices from '@/components/AttackingThemesAndCommonSacrifices';
import OpeningStrategy from '@/components/OpeningStrategy';
import OpeningVariations from '@/components/OpeningVariations';
import SpecialMoves from '@/components/SpecialMoves';
import OfflineChess from '@/components/OfflineChess';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'OfflineChess',
    component: OfflineChess,
  },
  {
    path: '/introduction',
    name: 'Introduction',
    component: Introduction,
  },
  {
    path: '/special-moves',
    name: 'SpecialMoves',
    component: SpecialMoves,
  },
  {
    path: '/elementary-checkmates',
    name: 'ElementaryCheckmates',
    component: ElementaryCheckmates,
  },
  {
    path: '/attacking-the-king',
    name: 'AttackingTheKing',
    component: AttackingTheKing,
  },
  {
    path: '/introduction-to-endgames',
    name: 'IntroductionToEndgames',
    component: IntroductionToEndgames,
  },
  {
    path: '/rook-strategy',
    name: 'RookStrategy',
    component: RookStrategy,
  },
  {
    path: '/knight-strategy',
    name: 'KnightStrategy',
    component: KnightStrategy,
  },
  {
    path: '/bishop-strategy',
    name: 'BishopStrategy',
    component: BishopStrategy,
  },
  {
    path: '/pawn-strategy',
    name: 'PawnStrategy',
    component: PawnStrategy,
  },
  {
    path: '/king-and-queen-strategy',
    name: 'KingAndQueenStrategy',
    component: KingAndQueenStrategy,
  },
  {
    path: '/middlegame-strategy',
    name: 'MiddlegameStrategy',
    component: MiddlegameStrategy,
  },
  {
    path: '/common-opening-formations',
    name: 'CommonOpeningFormations',
    component: CommonOpeningFormations,
  },
  {
    path: '/attacking-themes-and-common-sacrifices',
    name: 'AttackingThemesAndCommonSacrifices',
    component: AttackingThemesAndCommonSacrifices,
  },
  {
    path: '/opening-strategy',
    name: 'OpeningStrategy',
    component: OpeningStrategy,
  },
  {
    path: '/opening-variations',
    name: 'OpeningVariations',
    component: OpeningVariations,
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
