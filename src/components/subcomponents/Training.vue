<template>
    <div class="mt-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{json.header}}
        </div>
        <div class="text-body-1 mb-3 text-justify">
            {{json.body}}
        </div>
        <v-pagination
            v-model="page"
            :length="json.items.length"
            :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
        ></v-pagination>
        <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
        <div class="my-3">
            <div v-if="json.items[page-1].demo" class="mb-3">
                <ChessLesson 
                    :header="json.items[page-1].lessonHeader"
                    :demo="json.items[page-1].demo"
                />
            </div>
        </div>
        <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
    </div>
</template>

<script>
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'Training',
    props: ['json'],
    components: {
        ChessLesson,
        CustomHR,
    },
    data(){
        return{
            page: 1,
        };
    },
}
</script>

<style>

</style>