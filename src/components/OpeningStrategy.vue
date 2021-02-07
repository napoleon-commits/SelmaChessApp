<template>
  <Training :json="OpeningStrategyText"/>
</template>

<script>
import OpeningStrategyText from '@/static/OpeningStrategyText';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'OpeningStrategy',
    components: {
      Training,
    },
    data() {
        return {
            OpeningStrategyText,
        };
    },
}
</script>

<style>

</style>