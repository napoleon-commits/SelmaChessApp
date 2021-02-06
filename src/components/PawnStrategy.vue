<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{PawnStrategyText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{PawnStrategyText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="PawnStrategyText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR />
    <div class="my-3">
      <div v-if="PawnStrategyText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="PawnStrategyText.items[page-1].lessonHeader"
          :demo="PawnStrategyText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR />
  </div>
</template>

<script>
import PawnStrategyText from '@/static/PawnStrategyText';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'PawnStrategy',
    components: {
        ChessLesson,
        CustomHR,
    },
    data() {
        return {
            PawnStrategyText,
            page: 1,
        };
    },
}
</script>

<style>

</style>