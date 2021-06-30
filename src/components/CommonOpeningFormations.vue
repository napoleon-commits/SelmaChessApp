<template>
  <Training :json="CommonOpeningFormationsText"/>
</template>

<script>
import CommonOpeningFormationsText from '@/static/CommonOpeningFormationsText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'CommonOpeningFormations',
  components: {
    Training
  },
  data () {
    return {
      CommonOpeningFormationsText
    }
  }
}
</script>

<style>

</style>
