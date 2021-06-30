<template>
    <v-pagination
        v-model="page"
        :length="length"
        :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
        @input="input"
    ></v-pagination>
</template>

<script>
import LearnPagesPagination from '@/static/LearnPagesPagination'

export default {
  name: 'Pagination',
  props: ['componentName'],
  data () {
    return {
      length: LearnPagesPagination.length
    }
  },
  computed: {
    page: {
      get () {
        return LearnPagesPagination.indexOf(this.componentName) + 1
      },
      set () {}
    }
  },
  methods: {
    input (number) {
      if (number !== LearnPagesPagination.indexOf(this.componentName) + 1) {
        this.$router.push({ name: LearnPagesPagination[number - 1] })
        // document.body.scrollTop = document.documentElement.scrollTop = 0;
      }
    }
  }
}
</script>

<style>

</style>
