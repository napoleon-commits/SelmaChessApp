<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
            {{IntroductionText.header}}
    </div>
    <div class="text-body-1 mb-3 text-justify">
            {{IntroductionText.body}}
    </div>
    <v-pagination
        v-model="page"
        :length="IntroductionText.items.length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
    ></v-pagination>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
    <div class="my-3">
      <div v-if="IntroductionText.items[page-1].demo" class="mb-3">
        <ChessLesson 
          :header="IntroductionText.items[page-1].lessonHeader"
          :demo="IntroductionText.items[page-1].demo"
        />
      </div>
    </div>
    <CustomHR v-if="$vuetify.breakpoint.smAndUp === true" />
  </div>
</template>

<script>
  import IntroductionText from '@/static/IntroductionText';
  import ChessLesson from '@/components/subcomponents/ChessLesson';
  import CustomHR from '@/components/subcomponents/CustomHR';

  export default {
    name: 'LandingPage',
    components: {
      ChessLesson,
      CustomHR,
    },
    data: () => ({
      IntroductionText,
      page: 1,
    }),
  }
</script>
