<template>
  <v-app>
    <Toolbar />
    <v-main>
      <router-view/>
      <div class="ma-3">
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

export default {
  name: 'App',

  components: {
    Footer,
    Toolbar,
    Pagination,
  },

  data: () => ({
    //
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
