<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
            {{BishopStrategyText.header}}
        </div>
        <div class="text-body-1 mb-3">
            {{BishopStrategyText.body}}
        </div>
        <div class="my-3" v-for="object in BishopStrategyText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
        </div>
    </div>
</template>

<script>
import BishopStrategyText from '@/static/BishopStrategyText';

export default {
    name: 'BishopStrategy',
    data() {
        return {
            BishopStrategyText,
        };
    },
}
</script>

<style>

</style>