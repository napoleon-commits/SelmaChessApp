<template>
  <div id="app" :class="this.$store.state.darkModeClass">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components: {
    Toolbar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}
.light-mode{
  background-color: white;
}
.dark-mode{
  background-color: #343a40 !important;
}
.c-pointer{
  cursor: pointer;
}
</style>
