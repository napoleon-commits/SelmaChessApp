<template>
<div class="mt-2">
  <span v-html="tableHTMLTags">
  </span>
</div>
</template>

<script>
import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';

export default {
  data() {
    return {
      boardArray: startBoard,
      rankSelected: null,
      fileSelected: null,
    };
  },
  computed: {
    tableHTMLTags() {
      const rowTags = [];
      for (let i = 0; i < 8; i += 1) {
        const dataTags = [];
        for (let j = 0; j < 8; j += 1) {
          dataTags.push(`<td>${getHTMLChessPiece(this.boardArray[i][j])}</td>`);
        }
        rowTags.push(`<tr>${dataTags.join('')}</tr>`);
      }
      return (
        `
            <table id="chess-board" class="m-auto">
                <tbody>${rowTags.join('')}</tbody>
            </table>
        `
      );
    },
  },
};
</script>

<style>

</style>
