<template>
  <div
    :class="`mx-auto text-center ${this.$store.state.darkModeClass}`"
    :style="{width: `${this.$store.state.chessboardWidth+8}px`}"
  >
      <div>
          {{
          `"We must make sure that chess will not be like a dead language;
          very interesting but for a very small group."`
          }}
      </div>
      <div>a Byron J-Mil Hall production</div>
      <div>
          <a href="mailto:selmachessapp@gmail.com" target="_top">
              selmachessapp@gmail.com
          </a>
      </div>
  </div>
</template>

<script>
export default {

};
</script>

<style>

</style>
