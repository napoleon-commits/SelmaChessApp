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
                :style="`background-color: ${customColor}`"
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
          :class="`col ${this.$store.state.darkModeClass}`"
          :style="`border: 2px solid ${customColor}`"
          v-if="type !== 'mate'"
        >
          Take Back
        </button>
        <button
          @click="newGame"
          type="button"
          :class="`col ${this.$store.state.darkModeClass}`"
          :style="`border: 2px solid ${customColor}`"
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
import getHTMLChessPiece from '../utils/board';
import { clickedPieceJSX, clickedSquareJSX, getJSXBoard, newGame, takeBack } from '../utils/engine';
import {
  clickedPieceJSX as computerClickedPieceJSX,
  clickedSquareJSX as computerClickedSquareJSX,
  getJSXBoard as computerGetJSXBoard,
  NewGame as computerNewGame,
} from '../utils/ComputerEngine';

export default {
  props: ['type', 'mateType'],
  data() {
    return {
      chessboard: [],
      rankSelected: null,
      fileSelected: null,
      chessboardSize: null,
    };
  },
  methods: {
    getHTMLChessPiece,
    squareClick(rank, file, type) {
      if (this.type === 'mate') {
        if (type === 'Piece') {
          computerClickedPieceJSX(file, rank);
        } else if (type === 'Square') {
          computerClickedSquareJSX(file, rank);
        }
        this.chessboard = computerGetJSXBoard();
      } else {
        if (type === 'Piece') {
          clickedPieceJSX(file, rank);
        } else if (type === 'Square') {
          clickedSquareJSX(file, rank);
        }
        this.chessboard = getJSXBoard();
      }
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
      if (this.type === 'mate') {
        if (this.mateType === 'bishop-knight') {
          computerNewGame('2k5/8/8/N7/8/6K1/8/3B4 w - - 0 1');
        } else if (this.mateType === 'queen') {
          computerNewGame('4k3/8/8/2K5/7Q/8/8/8 w - - 0 1');
        } else if (this.mateType === 'rook') {
          computerNewGame('8/8/4R3/8/1k6/8/7K/8 w - - 0 1');
        } else if (this.mateType === 'pawn') {
          computerNewGame('8/1k6/8/8/8/7K/7P/8 w - - 0 1');
        }
        this.chessboard = computerGetJSXBoard();
      } else {
        newGame();
        this.chessboard = getJSXBoard();
      }
      this.fileSelected = null;
      this.rankSelected = null;
    },
  },
  mounted() {
    this.newGame();
    const myInterval = setInterval(() => {
      this.chessboardSize = $('#chessboard').width();
      this.$store.commit('setChessBoardWidth', { chessboardWidth: this.chessboardSize });
    }, 1);
    setTimeout(() => {
      clearInterval(myInterval);
    }, 3000);
    window.addEventListener('resize', () => {
      this.chessboardSize = $('#chessboard').width();
      this.$store.commit('setChessBoardWidth', { chessboardWidth: this.chessboardSize });
    });
  },
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
  },
};
</script>

<style>
  .square-selected{
    background-color: #6d7a82 !important;
  }
</style>
