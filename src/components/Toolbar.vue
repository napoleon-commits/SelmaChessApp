<template>
  <div id="toolbar">
    <v-toolbar :class="this.$store.state.darkModeClass">
      <v-spacer />
      <span v-if="this.$store.state.darkMode" @click="toggleDarkMode" class="c-pointer">
        <v-icon class="text-white">mdi-white-balance-sunny</v-icon>
      </span>
      <span v-else @click="toggleDarkMode" class="c-pointer">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
import $ from 'jquery';

export default {
  methods: {
    toggleDarkMode() {
      this.$store.commit('toggleDarkMode');
    },
  },
  mounted() {
    const myInterval = setInterval(() => {
      this.$store.commit('setToolbarHeight', { toolbarHeight: $('#toolbar').height() });
    }, 1);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 3000);
    window.addEventListener('resize', () => {
      this.$store.commit('setToolbarHeight', { toolbarHeight: $('#toolbar').height() });
    });
  },
};
</script>

<style>
    #toolbar{
         box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
        /* background-color: #333; */
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1;
    }
</style>
