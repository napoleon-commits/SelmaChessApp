<template>
  <Training :json="ElementaryCheckmatesText"/>
</template>

<script>
import ElementaryCheckmatesText from '@/static/ElementaryCheckmatesText'
import Training from '@/components/subcomponents/Training'

export default {
  name: 'ElementaryCheckmates',
  components: {
    Training
  },
  data () {
    return {
      ElementaryCheckmatesText
    }
  }
}
</script>

<style>

</style>
