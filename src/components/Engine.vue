<template>
  <div>
    <div class="mx-auto">
      <div class="text-center">
          <span>Fen: </span>
          <input
            :style="`border: 2px solid ${customColor}`"
            type="text"
            v-model="fenIn"
            :class="`w-25 ${darkModeClass}`"
            placeholder="7k/p7/1R5K/6r1/6p1/6P1/8/8 w - - bm Rb7"
          />
          <button @click="vueSetFen" :style="`border: 2px solid ${customColor}`">
            Set Position
          </button>
      </div>
    </div>
    <div>
      <table id="chessboard" class="m-auto">
        <tbody>
          <tr v-for="(rank, rankIndex) in chessboard" :key="rankIndex">
            <td
              v-for="(square, fileIndex) in rank"
              :key="fileIndex"
              v-html="getHTMLChessPiece(square)"
              :class="`
                ${(((rankIndex+fileIndex)%2)===0)?'bg-white':'dark-square'}
                ${(
                    rankIndex === rankSelected
                    && fileIndex === fileSelected
                  )?' square-selected':''}
                ${(chessboard[rankIndex][fileIndex] !== '.')?' c-pointer':''}
              `"
              :style="`background-color: ${customColor};`"
              @click="vueClickedSquare(
                fileIndex,
                7 - rankIndex,
                square,
                `${(chessboard[rankIndex][fileIndex] !== '.')?'Piece':'Square'}`
              )"
            />
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <div :style="{width: `${chessboardSize+8}px`}" class="row mx-auto">
      <div class="col">
        <div class="text-center">Thinking Time:</div>
        <select
          :style="`border: 2px solid ${customColor}; text-align-last: center;`"
          :class="`d-block mx-auto ${darkModeClass}`"
          v-model="thinkingTime"
        >
        <option value="1">1 second</option>
        <option value="2">2 seconds</option>
        <option value="4">4 seconds</option>
        <option value="6">6 seconds</option>
        <option value="8">8 seconds</option>
        <option value="10">10 seconds</option>
        <option value="33">33 seconds</option>
        <option value="50">50 seconds</option>
        </select>
        <div class="text-center mt-3">Auto Rotate {{(autoRotate)?'On':'Off'}}</div>
        <label class="switch d-block mx-auto">
          <input type="checkbox" v-model="autoRotate" @click="lockAutoRotate">
          <span class="slider round" :style="sliderStyle"></span>
        </label>
      </div>
      <div class="col">
        <button
          class="d-block mx-auto"
          :style="`border: 2px solid ${customColor}`"
          type="button"
          @click="moveNow">
            Move Now
        </button>
        <button
          class="d-block mx-auto"
          :style="`border: 2px solid ${customColor}`"
          type="button"
          @click="vueNewGame">
            New Game
        </button>
        <button
          class="d-block mx-auto"
          :style="`border: 2px solid ${customColor}`"
          type="button"
          @click="vueTakeBack">
            Take Back
        </button>
      </div>
    </div>
    <div v-if="displayModal">
      <Modal :clickable="false">
        <Spinner />
      </Modal>
    </div>
  </div>
</template>

<script>
/* eslint no-bitwise: ["error", { "allow": ["^",] }] */

import $ from 'jquery';
import { InitFilesRanksBrd, InitHashKeys, InitSq120To64, InitBoardVars } from '@/utils/engine/main';
import { ParseFen, PrintBoard } from '@/utils/engine/board';
import { START_FEN, GameController, GameBoard } from '@/utils/engine/def';
import { SearchPosition } from '@/utils/engine/search';
import { InitMvvLva } from '@/utils/engine/movegen';
import { getHTMLChessPiece, get2DBoard, getReversedBoard } from '@/utils/vueboard';
import { ClickedSpace, ClickedPiece, PreSearch, NewGame, takeBack } from '@/utils/engine/gui';
import Modal from './subcomponents/Modal';
import Spinner from './subcomponents/Spinner';

export default {
  components: {
    Modal,
    Spinner,
  },
  data() {
    return {
      fenIn: '',
      thinkingTime: '1',
      chessboard: [],
      rankSelected: null,
      fileSelected: null,
      chessboardSize: null,
      displayModal: false,
      firstClick: false,
      autoRotate: true,
      autoRotateSide: 0, // 0 -> white, 1 -> black
    };
  },
  mounted() {
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
    this.init();
    // eslint-disable-next-line
    console.log('Main Init Called');
    ParseFen(START_FEN);
    PrintBoard();
    this.chessboard = this.vueReturn2DBoard();
  },
  methods: {
    vueSetFen() {
      ParseFen(this.fenIn);
      PrintBoard();
      SearchPosition();
      this.chessboard = this.vueReturn2DBoard();
    },
    vueClickedSquare(file, rank, square, type) {
      if (
        this.fileSelected !== null
        || this.rankSelected !== null
        || type === 'Square'
      ) {
        this.fileSelected = null;
        this.rankSelected = null;
        if (this.firstClick) {
          this.displayModal = true;
          this.firstClick = false;
        }
      } else {
        this.rankSelected = 7 - rank;
        this.fileSelected = file;
        this.firstClick = true;
      }
      setTimeout(() => {
        if (square === '.') {
          if (this.autoRotate) {
            if (GameBoard.side) {
              ClickedSpace(7 - file, 7 - rank, this.thinkingTime);
            } else {
              ClickedSpace(file, rank, this.thinkingTime);
            }
          } else if (this.autoRotateSide) {
            ClickedSpace(7 - file, 7 - rank, this.thinkingTime);
          } else {
            ClickedSpace(file, rank, this.thinkingTime);
          }
        } else if (this.autoRotate) {
          if (GameBoard.side) {
            ClickedPiece(7 - file, 7 - rank, this.thinkingTime);
          } else {
            ClickedPiece(file, rank, this.thinkingTime);
          }
        } else if (this.autoRotateSide) {
          ClickedPiece(7 - file, 7 - rank, this.thinkingTime);
        } else {
          ClickedPiece(file, rank, this.thinkingTime);
        }
        this.chessboard = this.vueReturn2DBoard();
        this.displayModal = false;
      }, 100);
    },
    init() {
      // eslint-disable-next-line
        console.log('init() called');
      InitFilesRanksBrd();
      InitHashKeys();
      InitSq120To64();
      InitBoardVars();
      InitMvvLva();
    },
    getHTMLChessPiece,
    moveNow() {
      this.displayModal = true;
      setTimeout(() => {
        GameController.PlayerSide = GameController.side ^ 1;
        PreSearch(this.thinkingTime);
        this.chessboard = this.vueReturn2DBoard();
        this.displayModal = false;
      }, 100);
    },
    vueNewGame() {
      NewGame(START_FEN);
      this.chessboard = this.vueReturn2DBoard();
    },
    vueTakeBack() {
      takeBack();
      this.chessboard = this.vueReturn2DBoard();
    },
    vueReturn2DBoard() {
      if (this.autoRotate) {
        if (GameBoard.side) { // if it's black's turn
          return getReversedBoard(get2DBoard());
        }
        return get2DBoard();
      }
      if (this.autoRotateSide) {
        return getReversedBoard(get2DBoard());
      }
      return get2DBoard();
    },
    lockAutoRotate() {
      if (this.autoRotate) { // turn off auto rotate
        this.autoRotateSide = GameBoard.side;
      }
    },
  },
  computed: {
    schoolColor() {
      return this.$store.state.schoolColor;
    },
    customColor() {
      return this.$store.state.customColor;
    },
    sliderStyle() {
      if (this.autoRotate) {
        return { backgroundColor: this.customColor };
      }
      return { boxShadow: `0 0 1px ${this.customColor}` };
    },
    darkModeClass() {
      return this.$store.state.darkModeClass;
    },
  },
};
</script>

<style>
  #chessboard{
    border: 4px solid black;
  }
  .square-selected{
    background-color: #6d7a82 !important;
  }
  select, option{
    cursor: pointer;
  }
</style>
