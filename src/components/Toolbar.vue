<template>
  <v-card flat>
    <v-container fluid style="padding-bottom: 0; padding-top: 0;">
      <v-row class="child-flex">
        <div>
          <v-toolbar :dark="this.$store.state.darkMode">
            <v-spacer></v-spacer>

            <v-btn icon v-if="this.$store.state.darkMode" @click="toggleMode">
              <v-icon>mdi-white-balance-sunny</v-icon>
            </v-btn>

            <v-btn icon v-else @click="toggleMode">
              <v-icon>mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </v-toolbar>
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {
  methods: {
    toggleMode() {
      this.$store.commit('toggleDarkMode');
    },
  },
};
</script>

<style>

</style>
