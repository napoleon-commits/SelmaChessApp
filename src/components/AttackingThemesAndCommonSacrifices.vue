<template>
  <Training :json="AttackingThemesAndCommonSacrificesText"/>
</template>

<script>
import AttackingThemesAndCommonSacrificesText from '@/static/AttackingThemesAndCommonSacrificesText';
import Training from '@/components/subcomponents/Training';

export default {
    name: 'AttackingThemesAndCommonSacrifices',
    components: {
        Training,
    },
    data() {
      return {
        AttackingThemesAndCommonSacrificesText,
      };
    },
}
</script>

<style>

</style>