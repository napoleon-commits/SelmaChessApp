<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{SpecialMovesText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{SpecialMovesText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="SpecialMovesText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR />
    <div class="my-3">
      <div v-if="SpecialMovesText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="SpecialMovesText.items[page-1].lessonHeader"
          :demo="SpecialMovesText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR />
  </div>
</template>

<script>
import SpecialMovesText from '@/static/SpecialMovesText';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
  name: 'SpecialMoves',
  components: {
    ChessLesson,
    CustomHR
  },
  data(){
    return {
      SpecialMovesText,
      page: 1,
    };
  },
}
</script>

<style>

</style>