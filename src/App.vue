<template>
  <div id="app" :class="this.$store.state.darkModeClass">
    <Toolbar />
    <div :style="{marginTop: `${this.$store.state.toolbarHeight}px`}">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Toolbar,
    Footer,
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
.light-mode{
  background-color: white;
  color: #343a40;
}
.dark-mode{
  background-color: #343a40 !important;
  color: white;
}
.c-pointer{
  cursor: pointer;
}
a{
  color: #42b983;
}
.dark-mode a:hover{
  color: white;
}
.light-mode a:hover{
  color: #343a40;
}
.custom-button-offline {
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #42b983;
}
/* .custom-button-offline.dark-mode{
  background-color: #343a40;
  color: white;
}
.custom-button-offline.light-mode{
  background-color: white;
  color: #343a40;
} */
.dark-square{
    background-color: #42b983;
}
</style>
