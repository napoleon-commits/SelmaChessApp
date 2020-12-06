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

</style>
