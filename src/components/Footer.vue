<template>
  <div
    :class="`${
      (this.$store.state.chessboardWidth)
      ?'mx-auto'
      :'mx-4'
      } text-center ${this.$store.state.darkModeClass}`"
    :style="(()=>{
      if(this.$store.state.chessboardWidth){
        return {width: `${this.$store.state.chessboardWidth+8}px`}
      }
    })()"
  >
      <div>
          {{
          `"We must make sure that chess will not be like a dead language;
          very interesting but for a very small group."`
          }}
      </div>
      <div>a Byron J-Mil Hall production</div>
      <div>
        <a
          href="mailto:selmachessapp@gmail.com"
          target="_top"
          :style="`color: ${customColor} !important`"
        >
            selmachessapp@gmail.com
        </a>
      </div>
  </div>
</template>

<script>
export default {
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
  },
};
</script>

<style>

</style>
