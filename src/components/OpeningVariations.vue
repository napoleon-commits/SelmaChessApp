<template>
  <Training :json="OpeningVariationsText"/>
</template>

<script>
import OpeningVariationsText from '@/static/OpeningVariationsText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'OpeningVariations',
  components: {
    Training
  },
  data () {
    return {
      OpeningVariationsText
    }
  }

}
</script>

<style>

</style>
