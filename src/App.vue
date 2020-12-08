<template>
  <div id="app">
    <v-app>
      <Toolbar />
      <router-view/>
    </v-app>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';

export default {
  name: 'App',
  components: {
    Toolbar,
  },
};
</script>

<style>
  .dark-mode{
    background-color: #272727;
    color: #fff;
  }
  .light-mode{
    background-color: #fff;
    color: rgba(0,0,0,.54);
  }
</style>
