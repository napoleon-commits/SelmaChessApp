<template>
  <div :class="`hello ${modeClass}`">
    <Toolbar />
    <h1>Selma Chess App</h1>
    <h2>
      An intuitive open-sourced chess app which contains features
      that on the market chess apps don't provide
    </h2>
  </div>
</template>

<script>
import Toolbar from '@/components/Toolbar';

export default {
  components: {
    Toolbar,
  },
  computed: {
    modeClass() {
      return this.$store.state.modeClass;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
