<template>
  <div id="app" :class="darkModeClass">
    <div id="custom-header">
      <Navbar />
      <Toolbar />
    </div>
    <div
      :style="{marginTop: `${toolbarHeight}px`}"
      :class="`pt-3 ${darkModeClass}`"
    >
      <router-view :key="$route.fullPath"/>
    </div>
    <Footer />
  </div>
</template>

<script>
import $ from 'jquery';
import Toolbar from '@/components/Toolbar';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default {
  name: 'App',
  components: {
    Toolbar,
    Footer,
    Navbar,
  },
  mounted() {
    const myInterval = setInterval(() => {
      this.$store.commit('setToolbarHeight', { toolbarHeight: $('#custom-header').height() });
    }, 1);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 3000);
    window.addEventListener('resize', () => {
      this.$store.commit('setToolbarHeight', { toolbarHeight: $('#custom-header').height() });
    });
  },
  computed: {
    darkModeClass() {
      return this.$store.state.darkModeClass;
    },
    toolbarHeight() {
      return this.$store.state.toolbarHeight;
    },
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #343a40;
  min-height: 100vh;
}
.c-pointer{
  cursor: pointer;
}
table{
  border: 4px solid #343a40;
}
.light-mode{
  background-color: white !important;
  color: #343a40 !important;
}
.dark-mode{
  background-color: #343a40 !important;
  color: white !important;
}
.dark-mode a:hover{
  color: white;
}
.light-mode a:hover{
  color: #343a40;
}
.text-dark{
  color: #343a40 !important;
}
button{
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
  min-width: 105px;
}
input[type=text], select {
  border-radius: 8px;
  padding: 8px;
  min-width: 105px;
}

.selma-high-text-color{
  color: rgb(155, 221, 255);
}
.southside-high-text-color{
  color: rgb(255, 5, 5);
}
.dallas-county-high-text-color{
  color: rgb(70, 165, 81);
}
.keith-high-text-color{
  color: rgb(0, 110, 156);
}
#custom-header{
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}
.square-selected{
  background-color: #6d7a82 !important;
}
</style>
