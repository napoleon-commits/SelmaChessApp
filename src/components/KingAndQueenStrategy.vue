<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{KingAndQueenStrategyText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{KingAndQueenStrategyText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="KingAndQueenStrategyText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
    <div class="my-3">
      <div v-if="KingAndQueenStrategyText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="KingAndQueenStrategyText.items[page-1].lessonHeader"
          :demo="KingAndQueenStrategyText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
  </div>
</template>

<script>
import KingAndQueenStrategyText from '@/static/KingAndQueenStrategyText.js';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'KingAndQueenStrategy',
    components: {
        ChessLesson,
        CustomHR,
    },
    data() {
        return {
            KingAndQueenStrategyText,
            page: 1,
        }
    },
}
</script>

<style>

</style>