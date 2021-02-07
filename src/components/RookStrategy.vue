<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{RookStrategyText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{RookStrategyText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="RookStrategyText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
    <div class="my-3">
      <div v-if="RookStrategyText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="RookStrategyText.items[page-1].lessonHeader"
          :demo="RookStrategyText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
  </div>
</template>

<script>
import RookStrategyText from '@/static/RookStrategyText';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'RookStrategy',
    components: {
        ChessLesson,
        CustomHR,
    },
    data() {
        return {
            RookStrategyText,
            page: 1,
        };
    },
}
</script>

<style>

</style>