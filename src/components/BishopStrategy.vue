<template>
  <Training :json="BishopStrategyText"/>
</template>

<script>
import BishopStrategyText from '@/static/BishopStrategyText';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'BishopStrategy',
    components: {
      Training,
    },
    data() {
        return {
            BishopStrategyText,
        };
    },
}
</script>

<style>

</style>