<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
            {{KnightStrategyText.header}}
        </div>
        <div class="text-body-1 mb-3">
            {{KnightStrategyText.body}}
        </div>
        <div class="my-3" v-for="object in KnightStrategyText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
        </div>
    </div>
</template>

<script>
import KnightStrategyText from '@/static/KnightStrategyText.js';

export default {
    name: 'KnightStrategy',
    data() {
        return {
            KnightStrategyText,
        };
    },
}
</script>

<style>

</style>