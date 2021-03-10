<template>
  <div class="my-3 mx-3 row">
      <div class="col d-flex justify-center">
        <v-btn @click="goToOfflineChess" block outlined :class="$store.state.btnClass">
            Offline Chess
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn @click="goToTraining" block outlined :class="$store.state.btnClass">
            Training
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn @click="goToOnlineChess" block outlined :class="$store.state.btnClass">
            Online Chess
        </v-btn>
      </div>
      <div class="col d-flex justify-center">
        <v-btn @click="goToSignIn" block outlined :class="$store.state.btnClass">
            Sign In / Register
        </v-btn>
      </div>
  </div>
</template>

<script>
export default {
    name: 'LandingPage',
    methods: {
        goToOfflineChess(){
            this.$router.push({name: 'OfflineChess'});
        },
        goToTraining(){
            this.$router.push({name: 'Introduction'});
        },
        goToOnlineChess(){
          this.$router.push({name: 'OnlineChessSelectionPage'});
        },
        goToSignIn(){
          this.$router.push({name: 'SignIn'});
        }
    }
}
</script>

<style>

</style>