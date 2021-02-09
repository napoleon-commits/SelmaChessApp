<template>
    <Training :json="AttackingTheKingText"/>
</template>

<script>
import AttackingTheKingText from '@/static/AttackingTheKingText';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'AttackingTheKing',
    components: {
      Training,
    },
    data() {
        return {
            AttackingTheKingText,
        };
    },
}
</script>

<style>

</style>