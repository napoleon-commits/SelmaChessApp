<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{OpeningVariationsText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{OpeningVariationsText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="OpeningVariationsText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
    <div class="my-3">
      <div v-if="OpeningVariationsText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="OpeningVariationsText.items[page-1].lessonHeader"
          :demo="OpeningVariationsText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
  </div>
</template>

<script>
import OpeningVariationsText from '@/static/OpeningVariationsText';
import ChessLesson from '@/components/subcomponents/ChessLesson';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'OpeningVariations',
    components: {
        ChessLesson,
        CustomHR,
    },
    data() {
        return {
            OpeningVariationsText,
            page: 1,
        };
    },

}
</script>

<style>

</style>