<template>
<div class="mx-4 my-2">
  <table id="chessboard" class="m-auto">
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
  <div class="mt-2">
    <div id="chessmenu" class="mx-auto" :style="{width: `${chessboardSize+8}px`}">
      <div class="row mx-0">
        <button
          @click="takeBack"
          type="button"
          :class="`custom-button-offline col ${this.$store.state.darkModeClass}`"
        >
          Take Back
        </button>
        <button
          @click="newGame"
          type="button"
          :class="`custom-button-offline col ${this.$store.state.darkModeClass}`"
        >
          New Game
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import { startBoard } from '../constants';
import getHTMLChessPiece from '../utils/board';
import { clickedPieceJSX, clickedSquareJSX, getJSXBoard, newGame, takeBack } from '../utils/engine';

export default {
  data() {
    return {
      chessboard: startBoard,
      rankSelected: null,
      fileSelected: null,
      chessboardSize: null,
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
        this.fileSelected = null;
        this.rankSelected = null;
      } else {
        this.rankSelected = 8 - rank;
        this.fileSelected = file - 1;
      }
    },
    takeBack() {
      takeBack();
      this.chessboard = getJSXBoard();
      this.fileSelected = null;
      this.rankSelected = null;
    },
    newGame() {
      newGame();
      this.chessboard = getJSXBoard();
      this.fileSelected = null;
      this.rankSelected = null;
    },
  },
  mounted() {
    newGame();
    const myInterval = setInterval(() => {
      this.chessboardSize = $('#chessboard').width();
    }, 1);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 3000);
    window.addEventListener('resize', () => {
      this.chessboardSize = $('#chessboard').width();
    });
  },
};
</script>

<style>
  .dark-square{
    background-color: #42b983;
  }
  .square-selected{
    background-color: #6d7a82 !important;
  }
  #chessboard{
    border: 4px solid #343a40;
  }
  .custom-button-offline {
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    border-radius: 8px;
    border: 2px solid #42b983;
  }
  .custom-button-offline.dark-mode{
    background-color: #343a40;
    color: white;
  }
  .custom-button-offline.light-mode{
    background-color: white;
    color: #343a40;
  }
</style>
