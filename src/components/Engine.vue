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
    <div v-if="this.$store.state.showModal">
      <Modal :clickable="false"/>
    </div>
  </div>
</template>

<script>
/* eslint no-bitwise: ["error", { "allow": ["^",] }] */

import $ from 'jquery';
import { InitFilesRanksBrd, InitHashKeys, InitSq120To64, InitBoardVars } from '@/utils/engine/main';
import { ParseFen, PrintBoard } from '@/utils/engine/board';
import { START_FEN, MoveStats, GameController } from '@/utils/engine/def';
import { SearchPosition } from '@/utils/engine/search';
import { InitMvvLva } from '@/utils/engine/movegen';
import { getHTMLChessPiece, get2DBoard } from '@/utils/vueboard';
import { ClickedSpace, ClickedPiece, PreSearch, NewGame, takeBack } from '@/utils/engine/gui';
import Modal from './subcomponents/Modal';

export default {
  components:{
    Modal,
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
    this.chessboard = get2DBoard();
  },
  methods: {
    vueSetFen() {
      ParseFen(this.fenIn);
      PrintBoard();
      SearchPosition();
      this.chessboard = get2DBoard();
    },
    vueClickedSquare(file, rank, square, type) {
      if (
        this.fileSelected !== null
        || this.rankSelected !== null
        || type === 'Square'
      ) {
        this.fileSelected = null;
        this.rankSelected = null;
      } else {
        this.rankSelected = 7 - rank;
        this.fileSelected = file;
      }
      if (square === '.') {
        ClickedSpace(file, rank, this.thinkingTime);
      } else {
        ClickedPiece(file, rank, this.thinkingTime);
      }
      this.updateMoveStats();
      this.chessboard = get2DBoard();
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
      this.$store.commit('toggleShowModal');
      setTimeout(()=>{
        GameController.PlayerSide = GameController.side ^ 1;
        PreSearch(this.thinkingTime);
        this.updateMoveStats();
        this.chessboard = get2DBoard();
        this.$store.commit('toggleShowModal');
      }, 1)
    },
    vueNewGame() {
      NewGame(START_FEN);
      this.chessboard = get2DBoard();
    },
    vueTakeBack() {
      takeBack();
      this.chessboard = get2DBoard();
    },
    updateMoveStats() {
      this.Ordering = MoveStats.Ordering;
      this.Depth = MoveStats.Depth;
      this.Score = MoveStats.Score;
      this.Nodes = MoveStats.Nodes;
      this.Time = MoveStats.Time;
      this.BestMove = MoveStats.BestMove;
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
</style>
