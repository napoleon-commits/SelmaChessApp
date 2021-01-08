<template>
  <v-app>
    <Toolbar />
    <v-main>
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from '@/components/subcomponents/Footer';
import Toolbar from '@/components/subcomponents/Toolbar';

export default {
  name: 'App',

  components: {
    Footer,
    Toolbar,
  },

  data: () => ({
    //
  }),

  beforeCreate(){
    this.$vuetify.theme.dark = true;
  }
};
</script>
