<template>
  <div class="my-3 mx-3 row">
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
      this.$router.push({ name: 'OfflineChess' })
    },
    goToTraining () {
      this.$router.push({ name: 'Introduction' })
    }
  }
}
</script>

<style>

</style>
