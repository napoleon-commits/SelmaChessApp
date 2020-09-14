<template>
  <div id="toolbar">
    <v-toolbar>
      <v-spacer />
      <span v-if="this.$store.state.darkMode" @click="toggleDarkMode" class="c-pointer">
        <v-icon>mdi-white-balance-sunny</v-icon>
      </span>
      <span v-else @click="toggleDarkMode" class="c-pointer">
        <v-icon>mdi-moon-waxing-crescent</v-icon>
      </span>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods:{
    toggleDarkMode(){
      this.$store.commit('toggleDarkMode')
    }
  }
}
</script>

<style>
    #toolbar{
         box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2);
    }
</style>