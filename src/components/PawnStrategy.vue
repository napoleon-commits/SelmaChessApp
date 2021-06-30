<template>
  <Training :json="PawnStrategyText"/>
</template>

<script>
import PawnStrategyText from '@/static/PawnStrategyText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'PawnStrategy',
  components: {
    Training
  },
  data () {
    return {
      PawnStrategyText
    }
  }
}
</script>

<style>

</style>
