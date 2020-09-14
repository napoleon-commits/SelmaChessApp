<template>
<div class="mt-2">
  <table class="m-auto">
      <tbody>
          <tr :key="rankIndex" v-for="(rank, rankIndex) in chessboard">
              <td
                :key="squareIndex"
                v-for="(square, squareIndex) in rank"
                v-html="getHTMLChessPiece(square)"
                @click="squareClick"
                />
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';

export default {
  data() {
    return {
      chessboard: startBoard,
    };
  },
  methods: {
    getHTMLChessPiece,
    squareClick() {
      // eslint-disable-next-line
      console.log('!!!');
    },
  },
};
</script>

<style>

</style>
