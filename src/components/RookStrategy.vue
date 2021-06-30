<template>
  <Training :json="RookStrategyText"/>
</template>

<script>
import RookStrategyText from '@/static/RookStrategyText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'RookStrategy',
  components: {
    Training
  },
  data () {
    return {
      RookStrategyText
    }
  }
}
</script>

<style>

</style>
