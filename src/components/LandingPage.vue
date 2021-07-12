<template>
  <div class="my-3 mx-3 row">
    <div class="col d-flex justify-center">
        <v-btn @click="goToLogin" block outlined :class="$store.state.btnClass">
            Login/Register
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn @click="goToOfflineChess" block outlined :class="$store.state.btnClass">
            Offline Chess
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn block outlined :class="$store.state.btnClass">
            Daily Chess Opening
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn block outlined :class="$store.state.btnClass">
            Position Analyzer
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn @click="goToTraining" block outlined :class="$store.state.btnClass">
            Training
        </v-btn>
      </div>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  methods: {
    goToOfflineChess () {
      if (this.$route.name !== 'OfflineChess') {
        this.$router.push({ name: 'OfflineChess' })
      }
    },
    goToTraining () {
      if (this.$route.name !== 'Introduction') {
        this.$router.push({ name: 'Introduction' })
      }
    },
    goToLogin () {
      if (this.$route.name !== 'Login') {
        this.$router.push({ name: 'Login' })
      }
    }
  }
}
</script>

<style>

</style>
