<template>
  <Training :json="KingAndQueenStrategyText"/>
</template>

<script>
import KingAndQueenStrategyText from '@/static/KingAndQueenStrategyText.js'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'KingAndQueenStrategy',
  components: {
    Training
  },
  data () {
    return {
      KingAndQueenStrategyText
    }
  }
}
</script>

<style>

</style>
