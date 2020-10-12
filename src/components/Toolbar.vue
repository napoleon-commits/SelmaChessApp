<template>
  <div id="toolbar">
    <v-toolbar :class="this.$store.state.darkModeClass">
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          id="dropdownMenuButton"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          School Colors
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
          <div class="dropdown-item c-pointer" @click="setSchoolColor('dallas')">
            <span>Dallas County</span>
            <span class="h2 dallas-county-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('southside')">
            <span>Southside</span>
            <span class="h2 southside-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('keith')">
            <span>Keith</span>
            <span class="h2 keith-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer" @click="setSchoolColor('selma')">
            <span>Selma</span>
            <span class="h2 selma-high-text-color">&bull;</span>
          </div>
          <div class="dropdown-item c-pointer">
            <span>Custom Colors</span>
            <span class="h2 text-white">&bull;</span>
          </div>
        </div>
      </div>
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
    setSchoolColor(schoolColor) {
      this.$store.commit('setSchoolColor', { schoolColor });
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
