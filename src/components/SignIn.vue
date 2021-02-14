<template>
    <div>
        <div :class="`text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3 text-center`">
            Coming Soon
        </div>
        <div class="text-body-1 mb-3 text-center">
            <v-list-item two-line>
                <v-list-item-content>
                    <v-list-item-title>Benefit of signing in:</v-list-item-title>
                    <v-list-item-subtitle>Remember your chess rating</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
        </div>
      <ComingSoonIcon />
  </div>
</template>

<script>
import ComingSoonIcon from '@/components/subcomponents/ComingSoonIcon';

export default {
    name: 'SignIn',
    components: {
        ComingSoonIcon,
    },
}
</script>

<style>

</style>