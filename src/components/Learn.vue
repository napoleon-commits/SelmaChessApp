<template>
  <div :class="`${this.$store.state.darkModeClass} mx-4`">
      <div class="mb-3">
        <div class="h1 pl-2">
            {{LandingPageHeader.header}}
        </div>
        <div class="pl-2">
            {{LandingPageHeader.description}}
        </div>
      </div>
      <div class="mb-3">
          <div class="h2 pl-2">Getting Started</div>
      </div>
      <div class="mb-3">
          <button
            :class="`custom-button-offline ${this.$store.state.darkModeClass} w-100 text-left pl-2`"
          >
              What is the goal of a chess game?
          </button>
      </div>
  </div>
</template>

<script>
import LandingPageHeader from '../static/LandingPageHeader';

export default {
    data(){
        return {
            LandingPageHeader
        }
    }
}
</script>

<style>

</style>