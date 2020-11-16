<template>
  <div class="w-100">
      <div class="mx-auto" :style="`width: ${width}`">
          <hr :style="`border: 1px solid ${customColor};`"/>
      </div>
  </div>
</template>

<script>
export default {
  props: ['width'],
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
  },
};
</script>

<style>

</style>
