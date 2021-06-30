<template>
  <Training :json="IntroductionToEndgamesText"/>
</template>

<script>
import IntroductionToEndgamesText from '@/static/IntroductionToEndgamesText.js'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'IntroductionToEndgames',
  components: {
    Training
  },
  data () {
    return {
      IntroductionToEndgamesText,
      page: 1
    }
  }
}
</script>

<style>

</style>
