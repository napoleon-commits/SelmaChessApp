<template>
  <div id="app">
    <Toolbar />
    <router-view/>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar';

export default {
  name: 'App',
  components:{
    Toolbar
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.custom-button {
  background-color: white;
  border: 2px solid #42b983;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  font-size: 16px;
  border-radius: 8px;
}
.c-pointer{
  cursor: pointer;
}
</style>
