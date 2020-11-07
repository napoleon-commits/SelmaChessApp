<template>
  <div>
    <div class="h5">Can you guess the chess opening?</div>
    <br />
    <div>Streak: {{streak}}</div>
    <br />
    <div
      v-if="openingsArray[openingsArrayIndex]"
    >
      <div>
        {{openingsArray[openingsArrayIndex][0]}}; {{openingsArray[openingsArrayIndex][1]}}
      </div>
      <br />
      <table id="chessboard" class="m-auto">
          <tbody>
              <tr v-for="(rank, rankIndex) in chessboard" :key="rankIndex" >
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
                    :style="`background-color: ${customColor}`"
                    @click="squareClick(
                      8-rankIndex,
                      1+fileIndex,
                      `${(chessboard[rankIndex][fileIndex] !== '.')?'Piece':'Square'}`
                    )"
                    />
              </tr>
          </tbody>
      </table>
      <!-- <br />
      <div>
        Solution: {{openingsArray[openingsArrayIndex][3]}}
      </div> -->
      <br />
    </div>
    <br />
    <div class="row">
      <div class="col">
        <button
          :class="`w-100 ${this.$store.state.darkModeClass}`"
          :style="`border: 2px solid ${customColor}`"
        >
        Show Solution
      </button>
      </div>
      <div class="col">
        <button
          :class="`w-100 ${this.$store.state.darkModeClass}`"
          :style="`border: 2px solid ${customColor}`"
          @click="next"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import ATSV from '@/static/eco/a';
import BTSV from '@/static/eco/b';
import CTSV from '@/static/eco/c';
import DTSV from '@/static/eco/d';
import ETSV from '@/static/eco/e';
import getHTMLChessPiece from '@/utils/board';
import { startBoard } from '@/constants/index';

export default {
  data() {
    return {
      streak: 0,
      openingsArray: [],
      openingsArrayIndex: 0,
      chessboard: startBoard,
      rankSelected: null,
      fileSelected: null,
    };
  },
  mounted() {
    this.openingsArray = ATSV.concat(BTSV).concat(CTSV).concat(DTSV).concat(ETSV);
    for (let i = 0; i < this.openingsArray.length; i += 1) {
      const randomLocation = Math.floor(Math.random() * this.openingsArray.length);
      const randomOpening = this.openingsArray[randomLocation];
      this.openingsArray[randomLocation] = this.openingsArray[i];
      this.openingsArray[i] = randomOpening;
    }
  },
  methods: {
    getHTMLChessPiece,
    squareClick(rank, file, type) {
      if (this.fileSelected !== null || this.rankSelected !== null || type === 'Square') {
        this.fileSelected = null;
        this.rankSelected = null;
      } else {
        this.rankSelected = 8 - rank;
        this.fileSelected = file - 1;
      }
    },
    next() {
      if ((this.openingsArrayIndex + 1) === this.openingsArray.length) {
        this.openingsArrayIndex = 0;
      } else {
        this.openingsArrayIndex += 1;
      }
      this.chessboard = startBoard;
    },
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
