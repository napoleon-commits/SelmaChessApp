<template>
  <Training :json="KnightStrategyText"/>
</template>

<script>
import KnightStrategyText from '@/static/KnightStrategyText.js';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'KnightStrategy',
    components: {
      Training,
    },
    data() {
        return {
            KnightStrategyText,
        };
    },
}
</script>

<style>

</style>