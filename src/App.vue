<template>
  <v-app>
    <Navbar />
    <Toolbar />
    <v-main>
      <router-view/>
      <div class="ma-3" v-if="LearnPagesPagination.includes($route.name)">
        <div class="text-xl-h3 text-lg-h3 text-md-h4 text-sm-h5 text-h6 mb-3 text-center">
          Chapters
        </div>
        <Pagination :componentName="$route.name" />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/subcomponents/Footer'
import Toolbar from '@/components/subcomponents/Toolbar'
import { setCookie, getCookie } from '@/utils/cookies'
import Pagination from '@/components/subcomponents/Pagination'
import LearnPagesPagination from '@/static/LearnPagesPagination'
import Navbar from '@/components/subcomponents/Navbar'

export default {
  name: 'App',

  components: {
    Footer,
    Toolbar,
    Pagination,
    Navbar
  },

  data: () => ({
    LearnPagesPagination
  }),

  mounted () {
    const cookieTheme = getCookie('dark')
    if (cookieTheme) {
      if (cookieTheme === 'true') {
        this.$vuetify.theme.dark = true
        this.$store.commit('setTextColor', { dark: this.$vuetify.theme.dark })
      } else if (cookieTheme === 'false') {
        this.$vuetify.theme.dark = false
        this.$store.commit('setTextColor', { dark: this.$vuetify.theme.dark })
      }
    } else {
      setCookie('dark', this.$vuetify.theme.dark)
    }
    const customColorRed = getCookie('red')
    const customColorGreen = getCookie('green')
    const customColorBlue = getCookie('blue')
    if (customColorRed && customColorGreen && customColorBlue) {
      this.$store.state.customColor.red = customColorRed
      this.$store.state.customColor.green = customColorGreen
      this.$store.state.customColor.blue = customColorBlue
      this.$store.commit('setBtnClass', {
        red: this.$store.state.customColor.red,
        green: this.$store.state.customColor.green,
        blue: this.$store.state.customColor.blue
      })
    } else {
      setCookie('red', this.$store.state.customColor.red)
      setCookie('green', this.$store.state.customColor.green)
      setCookie('blue', this.$store.state.customColor.blue)
    }
  }
}
</script>

<style>
  @font-face {
    font-family: Roboto;
    src: url('./assets/Roboto.woff2');
  }
  .btn-default {
    border-color: rgb(127,127,127);
  }
  .btn-southside {
    border-color: rgb(254,5,3);
  }
  .btn-selma {
    border-color: rgb(155,221,255);
  }
  .btn-dallas-county{
    border-color: rgb(71,119,1);
  }
  .btn-keith{
    border-color: rgb(255,210,2);
  }
  .cg-board-wrap {
    margin: auto;
  }
  #Default-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(127,127,127)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Southside-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(254,5,3)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #DC-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(71,119,1)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Selma-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(155,221,255)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Keith-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(255,210,2)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Default-chess-board > div {
    background-color: initial !important;
  }
  #Southside-chess-board > div {
    background-color: initial !important;
  }
  #DC-chess-board > div {
    background-color: initial !important;
  }
  #Selma-chess-board > div {
    background-color: initial !important;
  }
  #Keith-chess-board > div {
    background-color: initial !important;
  }
  .merida .cg-board piece.rook.black,
  .merida .cg-board piece.knight.black,
  .merida .cg-board piece.bishop.black,
  .merida .cg-board piece.queen.black,
  .merida .cg-board piece.king.black,
  .merida .cg-board piece.pawn.black,
  .merida .cg-board piece.pawn.white,
  .merida .cg-board piece.rook.white,
  .merida .cg-board piece.knight.white,
  .merida .cg-board piece.bishop.white,
  .merida .cg-board piece.queen.white,
  .merida .cg-board piece.king.white {
    background-color: initial !important;
  }
  #Default-chess-board > div > div > coords.ranks.black {
      background-color: initial !important;
  }
  #Default-chess-board > div > div > coords.files.black {
      background-color: initial !important;
  }
  #DC-chess-board > div > div > coords.ranks.black {
      background-color: initial !important;
  }
  #DC-chess-board > div > div > coords.files.black {
      background-color: initial !important;
  }
  #Selma-chess-board > div > div > coords.ranks.black {
      background-color: initial !important;
  }
  #Selma-chess-board > div > div > coords.files.black {
      background-color: initial !important;
  }
  #Keith-chess-board > div > div > coords.ranks.black {
      background-color: initial !important;
  }
  #Keith-chess-board > div > div > coords.files.black {
      background-color: initial !important;
  }
  #Southside-chess-board > div > div > coords.ranks.black {
      background-color: initial !important;
  }
  #Southside-chess-board > div > div > coords.files.black {
      background-color: initial !important;
  }
</style>
