<template>
<div>
    <div>
    <div class="h6 text-center">Can you guess the chess opening?</div>
    <HR :width="`${chessboardWidth}px`"/>
    <div class="dropdown text-center">
      <button
        :class="`dropdown-toggle ${darkModeClass}`"
        type="button"
        id="dropdownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
        :style="`border: 2px solid ${customColor}; width: ${chessboardWidth}px;`"
      >
        Filter openings
      </button>
      <div
        class="dropdown-menu"
        aria-labelledby="dropdownMenuButton"
        @click="preventDropdownClosing"
      >
        <span class="dropdown-item">
          <input
            placeholder="Search for a chess opening..."
            type="text"
            :style="`border: 2px solid ${customColor}`"
            v-model="searchText"
            class="w-100"
          />
        </span>
        <hr />
        <span class="dropdown-item">
          <span
            class="custom-checkbox"
            :style="`backgroundColor: ${customColor}`"
            @click="toggleAllCheckbox"
          >
            &#x2713;
          </span>
          <span>All openings</span>
        </span>
        <hr />
        <div class="px-4">
          <span v-for="(eco, index) in ecoCodeArray" :key="index + eco" class="mr-2">
          <span
              class="custom-checkbox"
              :style="`backgroundColor: ${customColor}`"
              @click="toggleCustomCheckBox($event, eco)"
            >
              &nbsp;
            </span>
            {{eco}}
          </span>
        </div>
        <hr />
        <div
          v-if="(
            searchResultOpeningsArray[0]
            && searchResultOpeningsArray[0][1]
            && searchResultOpeningsArray.length >= 5
          )"
        >
          <span class="dropdown-item" v-for="i in 5" :key="i">
            <span
              class="custom-checkbox"
              :style="`backgroundColor: ${customColor}`"
              @click="toggleCustomCheckBox($event, searchResultOpeningsArray[i-1][1])"
            >
              &nbsp;
            </span>
            {{String(`${searchResultOpeningsArray[i-1][0]}: ${searchResultOpeningsArray[i-1][1]}`)}}
          </span>
        </div>
        <div v-else>
          <span
            class="dropdown-item"
            v-for="(opening, index) in searchResultOpeningsArray"
            :key="index + opening"
          >
            <span
              class="custom-checkbox"
              :style="`backgroundColor: ${customColor}`"
              @click="toggleCustomCheckBox($event, opening)"
            >
              &nbsp;
            </span>
            {{String(`${opening[0]}: ${opening[1]}`)}}
          </span>
        </div>
      </div>
    </div>
    <div class="text-center my-2">
      <button
          :class="`${darkModeClass}`"
          :style="`border: 2px solid ${customColor}; width: ${chessboardWidth}px`"
          @click="rotateBoard"
        >
          Rotate Board
      </button>
    </div>
    <div class="row">
      <div class="col">
        <div>
          <div class="text-center">Auto Rotate {{(autoRotate)?'On':'Off'}}</div>
          <label class="switch d-block mx-auto">
            <input type="checkbox" v-model="autoRotate" @click="toggleAutoRotate">
            <span class="slider round" :style="sliderStyle"></span>
          </label>
        </div>
      </div>
    </div>
    <div
      v-if="openingsArray[openingsArrayIndex]"
    >
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
      <div class="text-center w-100">
        <div
          class="my-2 text-center mx-auto"
          :style="`width: ${chessboardWidth}px`"
        >
          {{openingsArray[openingsArrayIndex][0]}}; {{openingsArray[openingsArrayIndex][1]}}
        </div>
      </div>
    </div>
    <HR :width="`${chessboardWidth}px`"/>
    <div class="text-center">Correct Guesses: {{streak}}</div>
    <div class="text-center mt-3">
      <button
        :class="`${darkModeClass}`"
        :style="`border: 2px solid ${customColor}; width: ${chessboardWidth}px;`"
        @click="showSolution"
      >
        Show Solution
      </button>
    </div>
    <div class="text-center my-3">
      <button
        :class="`${darkModeClass}`"
        :style="`border: 2px solid ${customColor}; width: ${chessboardWidth}px`"
        @click="next"
      >
        Next
      </button>
    </div>
  </div>
  <div v-if="displayModal" @click="closeModal" class="c-pointer">
    <Modal :clickable="false">
      <div class="h1 text-white">Correct!</div>
    </Modal>
  </div>
</div>
</template>

<script>
import $ from 'jquery';
import ATSV from '@/static/eco/a';
import BTSV from '@/static/eco/b';
import CTSV from '@/static/eco/c';
import DTSV from '@/static/eco/d';
import ETSV from '@/static/eco/e';
import { getHTMLChessPiece } from '@/utils/vueboard';
import { startBoard } from '@/constants/index';
import Modal from '@/components/subcomponents/Modal';
import HR from '@/utils/vuecomponents/HR';
import { searchResultOpenings, ecoCodeArray } from '@/utils/ecocode';
import OpeningsUsedPersnally from '@/static/OpeningsUsedPersonally';

export default {
  components: {
    Modal,
    HR,
  },
  data() {
    return {
      streak: 0,
      openingsArray: [],
      openingsArrayIndex: 0,
      chessboard: [[], [], [], [], [], [], [], []],
      rankSelected: null,
      fileSelected: null,
      currentMoveString: '',
      currentMoveIndex: 0,
      openingCompleted: false,
      autoRotate: false,
      turn: 0,
      side: 0,
      playSolutionInterval: () => {},
      savedSide: 0,
      displayModal: false,
      inOrderOpeningsArray: [],
      searchText: '',
      displayAllOpenings: true,
      checkedOpenings: [],
    };
  },
  mounted() {
    this.resetBoard();
    this.inOrderOpeningsArray = ATSV.concat(BTSV).concat(CTSV).concat(DTSV).concat(ETSV);
    this.openingsArray = ATSV.concat(BTSV).concat(CTSV).concat(DTSV).concat(ETSV);
    this.openingsArray = this.openingsArray.filter((opening) => {
      if (OpeningsUsedPersnally.includes(opening[0])) return true;
      return false;
    });
    for (let i = 0; i < this.inOrderOpeningsArray.length; i += 1) {
      // this.inOrderOpeningsArray[i].checked = false;
      // this.openingsArray[i].checked = false;
    }
    for (let i = 0; i < this.openingsArray.length; i += 1) {
      const randomLocation = Math.floor(Math.random() * this.openingsArray.length);
      const randomOpening = this.openingsArray[randomLocation];
      this.openingsArray[randomLocation] = this.openingsArray[i];
      this.openingsArray[i] = randomOpening;
    }
    // eslint-disable-next-line
    console.log(this.openingsArray[this.openingsArrayIndex][3]);
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
  methods: {
    getHTMLChessPiece,
    updateSquareBackground(rank, file, type) {
      if (this.fileSelected !== null || this.rankSelected !== null || type === 'Square') {
        this.fileSelected = null;
        this.rankSelected = null;
      } else {
        this.rankSelected = 8 - rank;
        this.fileSelected = file - 1;
      }
    },
    updateCurrentMoveString(rank, file) {
      if (this.side === 0) {
        if (this.currentMoveString.length === 0 || this.currentMoveString.length === 4) {
          this.currentMoveString = `${String.fromCharCode('a'.charCodeAt(0) + (file - 1))}${rank}`;
        } else if (this.currentMoveString.length === 2) {
          this.currentMoveString += `${String.fromCharCode('a'.charCodeAt(0) + (file - 1))}${rank}`;
        }
      } else if (this.currentMoveString.length === 0 || this.currentMoveString.length === 4) {
        this.currentMoveString = `${String.fromCharCode('h'.charCodeAt(0) - (file - 1))}${9 - rank}`;
      } else if (this.currentMoveString.length === 2) {
        this.currentMoveString += `${String.fromCharCode('h'.charCodeAt(0) - (file - 1))}${9 - rank}`;
      }
    },
    castlingMoves() {
      const tempBoard = [[], [], [], [], [], [], [], []];
      for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
          tempBoard[i][j] = this.chessboard[i][j];
        }
      }
      if (this.currentMoveString === 'e8g8' && this.side === 0) {
        tempBoard[0][6] = 'k';
        tempBoard[0][5] = 'r';
        tempBoard[0][4] = '.';
        tempBoard[0][7] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e8c8' && this.side === 0) {
        tempBoard[0][2] = 'k';
        tempBoard[0][3] = 'r';
        tempBoard[0][4] = '.';
        tempBoard[0][0] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e1g1' && this.side === 0) {
        tempBoard[7][6] = 'K';
        tempBoard[7][5] = 'R';
        tempBoard[7][4] = '.';
        tempBoard[7][7] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e1c1' && this.side === 0) {
        tempBoard[7][2] = 'K';
        tempBoard[7][3] = 'R';
        tempBoard[7][4] = '.';
        tempBoard[7][0] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e8g8' && this.side === 1) {
        tempBoard[7][1] = 'k';
        tempBoard[7][2] = 'r';
        tempBoard[7][3] = '.';
        tempBoard[7][0] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e8c8' && this.side === 1) {
        tempBoard[7][5] = 'k';
        tempBoard[7][4] = 'r';
        tempBoard[7][3] = '.';
        tempBoard[7][7] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e1g1' && this.side === 1) {
        tempBoard[0][1] = 'K';
        tempBoard[0][2] = 'R';
        tempBoard[0][3] = '.';
        tempBoard[0][0] = '.';
        this.chessboard = tempBoard;
        return true;
      } else if (this.currentMoveString === 'e1c1' && this.side === 1) {
        tempBoard[0][5] = 'K';
        tempBoard[0][4] = 'R';
        tempBoard[0][3] = '.';
        tempBoard[0][7] = '.';
        this.chessboard = tempBoard;
        return true;
      }
      return false;
    },
    enPassant(currentMoveArray) {
      if (
        this.chessboard[8 - (Number(currentMoveArray[1]))][currentMoveArray[0].charCodeAt(0) - 97] === 'P'
              && (
                this.chessboard[8 - (Number(currentMoveArray[3]))][currentMoveArray[2].charCodeAt(0) - 97] === '.'
              )
      ) {
        this.chessboard[
          8 - (Number(currentMoveArray[3]))
        ][
          currentMoveArray[2].charCodeAt(0) - 97
        ] = this.chessboard[
          8 - (Number(currentMoveArray[1]))
        ][
          currentMoveArray[0].charCodeAt(0) - 97
        ];
        this.chessboard[8 - (Number(currentMoveArray[1]))][currentMoveArray[0].charCodeAt(0) - 97] = '.';
        if (this.side === 0) {
          this.chessboard[(8 - (Number(currentMoveArray[3]))) + 1][currentMoveArray[2].charCodeAt(0) - 97] = '.';
        } else {
          this.chessboard[(8 - (Number(currentMoveArray[3]))) - 1][currentMoveArray[2].charCodeAt(0) - 97] = '.';
        }
        return true;
      } else if (
        this.chessboard[8 - (Number(currentMoveArray[1]))][currentMoveArray[0].charCodeAt(0) - 97] === 'p'
              && (
                this.chessboard[8 - (Number(currentMoveArray[3]))][currentMoveArray[2].charCodeAt(0) - 97] === '.'
              )
      ) {
        this.chessboard[
          8 - (Number(currentMoveArray[3]))
        ][
          currentMoveArray[2].charCodeAt(0) - 97
        ] = this.chessboard[
          8 - (Number(currentMoveArray[1]))
        ][
          currentMoveArray[0].charCodeAt(0) - 97
        ];
        this.chessboard[8 - (Number(currentMoveArray[1]))][currentMoveArray[0].charCodeAt(0) - 97] = '.';
        if (this.side === 0) {
          this.chessboard[(8 - (Number(currentMoveArray[3]))) - 1][currentMoveArray[2].charCodeAt(0) - 97] = '.';
        } else {
          this.chessboard[(8 - (Number(currentMoveArray[3]))) + 1][currentMoveArray[2].charCodeAt(0) - 97] = '.';
        }
        return true;
      }
      return false;
    },
    updateCurrentMoveIndex() {
      if (this.currentMoveIndex + 1 === this.openingsArray[this.openingsArrayIndex][3].split(' ').length) {
        this.openingCompleted = true;
        this.streak += 1;
        this.displayModal = true;
      } else {
        this.currentMoveIndex += 1;
      }
    },
    movePiece() {
      const currentMoveArray = this.currentMoveString.split('');
      if (
        this.castlingMoves() === false
      ) { // not castling and not en passant
        if (this.side === 0) {
          const tempBoard = [[], [], [], [], [], [], [], []];
          for (let i = 0; i < 8; i += 1) {
            for (let j = 0; j < 8; j += 1) {
              tempBoard[i][j] = this.chessboard[i][j];
            }
          }
          tempBoard[
            8 - (Number(currentMoveArray[3]))
          ][
            currentMoveArray[2].charCodeAt(0) - 97
          ] = tempBoard[
            8 - (Number(currentMoveArray[1]))
          ][
            currentMoveArray[0].charCodeAt(0) - 97
          ];
          tempBoard[8 - (Number(currentMoveArray[1]))][currentMoveArray[0].charCodeAt(0) - 97] = '.';
          this.chessboard = tempBoard;
        } else {
          const tempBoard = [[], [], [], [], [], [], [], []];
          for (let i = 0; i < 8; i += 1) {
            for (let j = 0; j < 8; j += 1) {
              tempBoard[i][j] = this.chessboard[i][j];
            }
          }
          tempBoard[
            7 - (8 - (Number(currentMoveArray[3])))
          ][
            7 - (currentMoveArray[2].charCodeAt(0) - 97)
          ] = tempBoard[
            7 - (8 - (Number(currentMoveArray[1])))
          ][
            7 - (currentMoveArray[0].charCodeAt(0) - 97)
          ];
          tempBoard[
            7 - (8 - (Number(currentMoveArray[1])))
          ][
            7 - (currentMoveArray[0].charCodeAt(0) - 97)
          ] = '.';
          this.chessboard = tempBoard;
        }
      }
    },
    squareClick(rank, file, type) {
      if (this.openingCompleted === false) {
        this.updateSquareBackground(rank, file, type);
        this.updateCurrentMoveString(rank, file);
        if (
          this.currentMoveString.length === 4
          && (
            (this.currentMoveString[0] !== this.currentMoveString[2])
            || (this.currentMoveString[1] !== this.currentMoveString[3])
          )
        ) {
          if (
            this.currentMoveString
          === this.openingsArray[this.openingsArrayIndex][3].split(' ')[this.currentMoveIndex]
          ) {
            this.movePiece();
            this.updateCurrentMoveIndex();
            if (this.autoRotate) {
              this.rotateBoard();
            }
          } else {
            // eslint-disable-next-line
            console.log("Incorrect");
            // eslint-disable-next-line
            console.log(this.currentMoveString.split(''));
          }
        }
      }
    },
    resetBoard() {
      for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
          if (this.side === 0) {
            this.chessboard[i][j] = startBoard[i][j];
          } else {
            this.chessboard[i][j] = startBoard[7 - i][7 - j];
          }
        }
      }
    },
    next() {
      this.side = this.savedSide;
      if ((this.openingsArrayIndex + 1) === this.openingsArray.length) {
        this.openingsArrayIndex = 0;
      } else {
        this.openingsArrayIndex += 1;
      }
      this.resetBoard();
      this.currentMoveIndex = 0;
      this.openingCompleted = false;
      this.rankSelected = null;
      this.fileSelected = null;
      // eslint-disable-next-line
      console.log(this.openingsArray[this.openingsArrayIndex][3]);
      clearInterval(this.playSolutionInterval);
    },
    playSolution() {
      this.resetBoard();
      let playSolutionIndex = 0;
      const movesArray = this.openingsArray[this.openingsArrayIndex][3].split(' ');
      this.currentMoveString = movesArray[playSolutionIndex];
      this.movePiece();
      if (playSolutionIndex + 1 === movesArray.length) {
        playSolutionIndex = 0;
      } else {
        playSolutionIndex += 1;
      }
      this.playSolutionInterval = setInterval(() => {
        this.currentMoveString = movesArray[playSolutionIndex];
        if (playSolutionIndex === 0) this.resetBoard();
        this.movePiece();
        if (playSolutionIndex + 1 === movesArray.length) {
          playSolutionIndex = 0;
        } else {
          playSolutionIndex += 1;
        }
      }, 2000);
    },
    showSolution() {
      if (this.openingCompleted === false) {
        this.savedSide = this.side;
        this.openingCompleted = true;
        this.currentMoveString = '';
        this.rankSelected = null;
        this.fileSelected = null;
        this.currentMoveIndex = 0;
        this.playSolution();
      }
    },
    toggleAutoRotate() {
      this.autoRotate = !this.autoRotate;
    },
    rotateBoard() {
      // eslint-disable-next-line
      this.side ^= 1;
      this.savedSide = this.side;
      const rotatedBoard = [[], [], [], [], [], [], [], []];
      for (let i = 0; i < 8; i += 1) {
        for (let j = 0; j < 8; j += 1) {
          rotatedBoard[i][j] = this.chessboard[7 - i][7 - j];
        }
      }
      this.chessboard = rotatedBoard;
    },
    closeModal() {
      this.displayModal = false;
      this.savedSide = this.side;
      this.next();
    },
    toggleAllCheckbox(e) {
      this.displayAllOpenings = !this.displayAllOpenings;
      // if (this.displayAllOpenings === false) this.checkedOpenings = [];
      // eslint-disable-next-line
      // console.log(this.displayAllOpenings);
      e.stopPropagation();
      if (e.target.innerHTML.includes('&nbsp;')) {
        e.target.innerHTML = '&#x2713;';
      } else {
        e.target.innerHTML = '&nbsp;';
      }
      // eslint-disable-next-line
      // console.log(this.checkedOpenings);
    },
    toggleCustomCheckBox(e, opening) {
      // eslint-disable-next-line
      console.log(`opening: ${opening}`);
      if (this.checkedOpenings.includes(opening)) {
        const index = this.checkedOpenings.indexOf(opening);
        this.checkedOpenings.splice(index, 1);
      } else {
        this.checkedOpenings.push(opening);
      }
      e.stopPropagation();
      if (e.target.innerHTML.includes('&nbsp;')) {
        e.target.innerHTML = '&#x2713;';
      } else {
        e.target.innerHTML = '&nbsp;';
      }
      // eslint-disable-next-line
      console.log(this.checkedOpenings);
    },
    preventDropdownClosing(e) {
      e.stopPropagation();
    },
  },
  computed: {
    customColor() {
      return this.$store.state.customColor;
    },
    sliderStyle() {
      if (this.autoRotate) {
        return { backgroundColor: this.customColor };
      }
      return { boxShadow: `0 0 1px ${this.customColor}` };
    },
    searchResultOpeningsArray() {
      return searchResultOpenings(this.inOrderOpeningsArray, this.searchText);
    },
    chessboardWidth() {
      return this.$store.state.chessboardWidth;
    },
    darkModeClass() {
      return this.$store.state.darkModeClass;
    },
    ecoCodeArray() {
      const searchResults = searchResultOpenings(this.inOrderOpeningsArray, this.searchText);
      if (searchResults.length > 5) searchResults.length = 5;
      return ecoCodeArray(searchResults);
    },
    filteredOpeningsArray() {
      const temp1 = this.inOrderOpeningsArray;
      if (this.displayAllOpenings === false) {
        // temp1 = temp1.filter(opening => opening.checked);
      }
      return temp1;
    },
  },
};
</script>

<style scoped>
  .custom-checkbox{
    height: 16px;
    font: 16px/1em sans-serif;
    width: 16px;
    display: inline-block;
    cursor: pointer;
    margin: 0 .25em 0 0;
    color: white;
    border: 1px solid black;
  }
</style>
