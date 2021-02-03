<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{IntroductionToEndgamesText.header}}
        </div>
        <div class="text-body-1 mb-3 text-justify">
            {{IntroductionToEndgamesText.body}}
        </div>
        <div class="my-3" v-for="object in IntroductionToEndgamesText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
            <div class="text-body-1 my-3 text-justify">
                {{object.body}}
            </div>
            <ChessLesson :header="'The Magic Position'" :demo="KingAndPawnLesson.demo"/>
        </div>
    </div>
</template>

<script>
import IntroductionToEndgamesText from '@/static/IntroductionToEndgamesText.js';
import KingAndPawnLesson from '@/static/KingAndPawnLesson';
import ChessLesson from '@/components/subcomponents/ChessLesson';

export default {
    name: 'IntroductionToEndgames',
    components: {
        ChessLesson,
    },
    data() {
        return {
            IntroductionToEndgamesText,
            KingAndPawnLesson
        };
    },
}
</script>

<style>

</style>