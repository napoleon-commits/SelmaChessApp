<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{KingAndQueenStrategyText.header}}
        </div>
        <div class="text-body-1 mb-3 text-justify">
            {{KingAndQueenStrategyText.body}}
        </div>
        <div class="my-3" v-for="object in KingAndQueenStrategyText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
            <div v-if="object.subtitle" class="mb-3 text-justify">
                {{object.subtitle}}
            </div>
            <div v-if="object.demo" class="mb-3">
                <ChessLesson 
                    :header="object.lessonHeader"
                    :demo="object.demo"
                />
            </div>
        </div>
    </div>
</template>

<script>
import KingAndQueenStrategyText from '@/static/KingAndQueenStrategyText.js';
import ChessLesson from '@/components/subcomponents/ChessLesson';

export default {
    name: 'KingAndQueenStrategy',
    components: {
        ChessLesson,
    },
    data() {
        return {
            KingAndQueenStrategyText,
        }
    },
}
</script>

<style>

</style>