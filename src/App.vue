<template>
  <div id="app">
    <v-app>
      <router-view/>
    </v-app>
  </div>
</template>

<script>

export default {
  name: 'App',
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
