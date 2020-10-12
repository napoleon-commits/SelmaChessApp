<template>
    <table class="mx-auto">
        <tr v-for="(rank, rankIndex) in board" :key="rankIndex">
            <td
                v-for="(square, fileIndex) in rank"
                :key="fileIndex"
                v-html="getHTMLChessPiece(square)"
                :class="
                  ((((rankIndex+fileIndex)%2)===0)?'bg-white':'dark-square')
                  + ' text-center'
                "
                :style="`background-color: ${customColor}`"
            />
        </tr>
    </table>
</template>

<script>
import getHTMLChessPiece from '@/utils/board';

export default {
  props: ['board'],
  methods: {
    getHTMLChessPiece,
  },
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
  },
};
</script>

<style>

</style>
