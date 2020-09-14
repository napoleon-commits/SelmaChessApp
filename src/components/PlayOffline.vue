<template>
<div class="mx-4 mt-2">
  <table class="m-auto">
      <tbody>
          <tr :key="rankIndex" v-for="(rank, rankIndex) in chessboard">
              <td
                :key="fileIndex"
                v-for="(square, fileIndex) in rank"
                v-html="getHTMLChessPiece(square)"
                @click="squareClick(
                  8-rankIndex,
                  1+fileIndex,
                  `${(chessboard[rankIndex][fileIndex] !== '.')?'Piece':'Square'}`
                )"
                :class="`
                  ${(((rankIndex+fileIndex)%2)===0)?'bg-white':'dark-square'}
                  ${(
                    rankIndex === rankSelected
                    && fileIndex === fileSelected
                  )?' square-selected':''}
                  ${(chessboard[rankIndex][fileIndex] !== '.')?' c-pointer':''}
                  `"
                />
          </tr>
      </tbody>
  </table>
</div>
</template>

<script>
import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';
import { clickedPieceJSX, clickedSquareJSX, getJSXBoard, newGame } from '../utils/engine';

export default {
  data() {
    return {
      chessboard: startBoard,
      rankSelected: null,
      fileSelected: null,
    };
  },
  methods: {
    getHTMLChessPiece,
    squareClick(rank, file, type) {
      if (type === 'Piece') {
        clickedPieceJSX(file, rank);
      } else if (type === 'Square') {
        clickedSquareJSX(file, rank);
      }
      this.chessboard = getJSXBoard();
      if (this.fileSelected !== null || this.rankSelected !== null || type === 'Square') {
        this.rankSelected = null;
        this.fileSelected = null;
      } else {
        this.rankSelected = 8 - rank;
        this.fileSelected = file - 1;
      }
    },
  },
  mounted() {
    newGame();
  },
};
</script>

<style>
  .dark-square{
    background-color: #61dafb;
  }
  .square-selected{
    background-color: #6d7a82 !important;
  }
  .c-pointer{
    cursor: pointer;
  }
</style>
