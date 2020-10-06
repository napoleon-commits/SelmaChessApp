<template>
  <div>
    <div :style="{width: `${chessboardSize+8}px`}" class="row mx-auto">
      <div class="col"><span>Fen: </span></div>
      <div class="col"><input type="text" v-model="fenIn"/></div>
      <div class="col"><button @click="vueSetFen">Set Position</button></div>
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
        <span>Thinking Time:</span><br />
        <select v-model="thinkingTime">
        <option value="1">1s</option>
        <option value="2">2s</option>
        <option value="4">4s</option>
        <option value="6">6s</option>
        <option value="8">8s</option>
        <option value="10">10s</option>
        </select>
        <br /><br />
        <div>
          <label class="switch">
            <input type="checkbox" v-model="autoRotate">
            <span class="slider round"></span>
          </label>
        </div>
        <div>Auto Rotate {{(autoRotate)?'On':'Off'}}</div>
      </div>
      <div class="col">
        <span>BestMove: {{BestMove}}</span><br />
        <span>Depth: {{Depth}}</span><br />
        <span>Score: {{Score}}</span><br />
        <span>Nodes: {{Nodes}}</span><br />
        <span>Ordering: {{Ordering}}</span><br />
        <span>Time: {{Time}}</span><br />
      </div>
      <div class="col">
        <button type="button" @click="moveNow">Move Now</button><br />
        <button type="button" @click="vueNewGame">New Game</button><br />
        <button type="button" @click="vueTakeBack">Take Back</button><br />
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
import { START_FEN, MoveStats, GameController, GameBoard } from '@/utils/engine/def';
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
      Ordering: undefined,
      Depth: undefined,
      Score: undefined,
      Nodes: undefined,
      Time: undefined,
      BestMove: undefined,
      chessboardSize: null,
      displayModal: false,
      firstClick: false,
      autoRotate: true,
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
          if (GameBoard.side) {
            ClickedSpace(7 - file, 7 - rank, this.thinkingTime);
          } else {
            ClickedSpace(file, rank, this.thinkingTime);
          }
        } else if (GameBoard.side) {
          ClickedPiece(7 - file, 7 - rank, this.thinkingTime);
        } else {
          ClickedPiece(file, rank, this.thinkingTime);
        }
        this.updateMoveStats();
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
        this.updateMoveStats();
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
    updateMoveStats() {
      this.Ordering = MoveStats.Ordering;
      this.Depth = MoveStats.Depth;
      this.Score = MoveStats.Score;
      this.Nodes = MoveStats.Nodes;
      this.Time = MoveStats.Time;
      this.BestMove = MoveStats.BestMove;
    },
    vueReturn2DBoard() {
      if (GameBoard.side) { // if it's black's turn
        return getReversedBoard(get2DBoard());
      }
      return get2DBoard();
    },
  },
};
</script>

<style>
  .dark-square{
    background-color: #42b983;
  }
  #chessboard{
    border: 4px solid black;
  }
  .square-selected{
    background-color: #6d7a82 !important;
  }
  .switch {
    position: relative;
    display: inline-block;
    width: 30px;
    height: 17px;
  }
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }
  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 13px;
    left: 2px;
    bottom: 2px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }
  input:checked + .slider {
    background-color: #42b983;
  }
  input:focus + .slider {
    box-shadow: 0 0 1px #42b983;
  }
  input:checked + .slider:before {
    -webkit-transform: translateX(13px);
    -ms-transform: translateX(13px);
    transform: translateX(13px);
  }
  /* Rounded sliders */
  .slider.round {
    border-radius: 17px;
  }
  .slider.round:before {
    border-radius: 50%;
  }

</style>
