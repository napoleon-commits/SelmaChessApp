<template>
  <Training :json="IntroductionText"/>
</template>

<script>
  import IntroductionText from '@/static/IntroductionText';
  import Training from '@/components/subcomponents/Training';

  export default {
    name: 'LandingPage',
    components: {
      Training,
    },
    data: () => ({
      IntroductionText,
    }),
  }
</script>
