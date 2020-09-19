<template>
  <div :class="`${this.$store.state.darkModeClass} mx-4`">
      <div class="mb-3">
        <div class="h1">
            {{LandingPageHeader.header}}
        </div>
        <div>
            {{LandingPageHeader.description}}
        </div>
      </div>
      <div class="mb-3">
          <div class="h2">Getting Started</div>
      </div>
      <div class="mb-3">
          <button>
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