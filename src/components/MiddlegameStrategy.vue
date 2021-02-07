<template>
  <Training :json="MiddlegameStrategyText"/>
</template>

<script>
import MiddlegameStrategyText from '@/static/MiddlegameStrategyText';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'MiddlegameStrategy',
    components: {
      Training,
    },
    data() {
        return {
            MiddlegameStrategyText,
        };
    },
}
</script>

<style>

</style>