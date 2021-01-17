<template>
  <v-app>
    <Navbar />
    <Toolbar />
    <v-main>
      <router-view/>
      <div class="ma-3" v-if="LearnPagesPagination.includes($route.name)">
        <Pagination :componentName="$route.name" />
      </div>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/subcomponents/Footer';
import Toolbar from '@/components/subcomponents/Toolbar';
import {setCookie, getCookie} from '@/utils/cookies';
import Pagination from '@/components/subcomponents/Pagination';
import LearnPagesPagination from '@/static/LearnPagesPagination';
import Navbar from '@/components/subcomponents/Navbar';

export default {
  name: 'App',

  components: {
    Footer,
    Toolbar,
    Pagination,
    Navbar,
  },

  data: () => ({
    LearnPagesPagination,
  }),

  mounted() {
    const cookieTheme = getCookie('dark');
    if(cookieTheme){
      if(cookieTheme === 'true'){
        this.$vuetify.theme.dark = true;
      }
      else if(cookieTheme === 'false'){
        this.$vuetify.theme.dark = false;
      }
    }
    else {
      setCookie('dark', this.$vuetify.theme.dark);
    }
    const customColorRed = getCookie('red');
    const customColorGreen = getCookie('green');
    const customColorBlue = getCookie('blue');
    if(customColorRed && customColorGreen && customColorBlue){
      this.$store.state.customColor.red = customColorRed;
      this.$store.state.customColor.green = customColorGreen;
      this.$store.state.customColor.blue = customColorBlue;
    } else {
      setCookie('red', this.$store.state.customColor.red);
      setCookie('green', this.$store.state.customColor.green);
      setCookie('blue', this.$store.state.customColor.blue);
    }
  },
};
</script>

<style>
  .btn-default {
    border-color: rgb(127,127,127);
  }
  .btn-southside {
    border-color: rgb(255,5,5);
  }
  .btn-selma {
    border-color: rgb(155,221,255);
  }
  .btn-dallas-county{
    border-color: rgb(70,165,81);
  }
  .btn-keith{
    border-color: rgb(0,110,156);
  }
</style>