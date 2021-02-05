<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{MiddlegameStrategyText.header}}
        </div>
        <div class="text-body-1 mb-3 text-justify">
            {{MiddlegameStrategyText.body}}
        </div>
        <div class="my-3" v-for="object in MiddlegameStrategyText.items" :key="object.header">
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
import MiddlegameStrategyText from '@/static/MiddlegameStrategyText';
import ChessLesson from '@/components/subcomponents/ChessLesson';

export default {
    name: 'MiddlegameStrategy',
    components: {
        ChessLesson,
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