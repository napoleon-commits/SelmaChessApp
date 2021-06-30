<template>
  <Training :json="SpecialMovesText"/>
</template>

<script>
import SpecialMovesText from '@/static/SpecialMovesText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'SpecialMoves',
  components: {
    Training
  },
  data () {
    return {
      SpecialMovesText
    }
  }
}
</script>

<style>

</style>
