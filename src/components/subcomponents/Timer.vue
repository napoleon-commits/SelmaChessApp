<template>
    <div>
        {{String(minutes)}} :
        {{String(seconds).padStart(2,'0')}}
    </div>
</template>

<script>
export default {
  name: 'Timer',
  props: ['totalSeconds'],
  computed: {
    minutes () {
      return Math.floor((this.totalSeconds) / 60)
    },
    seconds () {
      return this.totalSeconds - (this.minutes * 60)
    }
  }
}
</script>

<style>

</style>
