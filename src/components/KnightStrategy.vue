<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{KnightStrategyText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{KnightStrategyText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="KnightStrategyText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR />
    <div class="my-3">
      <div v-if="KnightStrategyText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="KnightStrategyText.items[page-1].lessonHeader"
          :demo="KnightStrategyText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR />
  </div>
</template>

<script>
import KnightStrategyText from '@/static/KnightStrategyText.js';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'KnightStrategy',
    components: {
        ChessLesson,
        CustomHR,
    },
    data() {
        return {
            KnightStrategyText,
            page: 1,
        };
    },
}
</script>

<style>

</style>