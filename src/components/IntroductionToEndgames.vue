<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
            {{IntroductionToEndgamesText.header}}
        </div>
        <div class="text-body-1 mb-3">
            {{IntroductionToEndgamesText.body}}
        </div>
        <div class="my-3" v-for="object in IntroductionToEndgamesText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
            <div class="text-body-1 my-3">
                {{object.body}}
            </div>
            <hr :style="`border: 1px solid ${$vuetify.theme.dark?'white':'rgba(0,0,0,0.87)'};`"/>
            <div class="text-xl-h3 text-lg-h3 text-md-h4 text-sm-h5 text-h6 mb-3">
                The Magic Position
            </div>
            <div>
                <ChessLesson :demo="KingAndPawnLesson.demo"/>
            </div>
            <hr :style="`border: 1px solid ${$vuetify.theme.dark?'white':'rgba(0,0,0,0.87)'};`"/>
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