<template>
  <div id="app" :class="this.$store.state.darkModeClass">
    <Toolbar />
    <div :style="{marginTop: `${this.$store.state.toolbarHeight}px`}">
      <router-view :key="$route.fullPath"/>
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
.c-pointer{
  cursor: pointer;
}
table{
  border: 4px solid #343a40;
}
.light-mode{
  background-color: white;
  color: #343a40;
}
.dark-mode{
  background-color: #343a40 !important;
  color: white !important;
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
.dark-square{
  background-color: #42b983;
}
.text-dark{
  color: #343a40 !important;
}
button{
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
  border: 2px solid #42b983;
  padding: 8px;
  min-width: 105px;
}
input[type=text], select {
  background-color: white;
  border: 2px solid #42b983;
  border-radius: 8px;
  padding: 8px;
  min-width: 105px;
}
</style>
