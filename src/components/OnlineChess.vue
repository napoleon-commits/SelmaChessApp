<template>
  <div>
      <div :class="`text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3 text-center`">
          Coming Soon
      </div>
      <ComingSoonIcon />
  </div>
</template>

<script>
import ComingSoonIcon from '@/components/subcomponents/ComingSoonIcon';

export default {
    name: 'OnlineChess',
    components: {
        ComingSoonIcon,
    },
}
</script>

<style>

</style>