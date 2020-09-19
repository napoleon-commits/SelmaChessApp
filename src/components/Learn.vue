<template>
  <div :class="`${this.$store.state.darkModeClass} mx-4`">
      <div class="mb-3">
        <div class="h1 px-2">
            {{LandingPageHeader.header}}
        </div>
        <div class="px-2">
            {{LandingPageHeader.description}}
        </div>
      </div>
      <div class="mb-3">
          <div class="h2 px-2">Getting Started</div>
      </div>
      <div class="mb-3">
          <button
            :class="`custom-button-offline ${this.$store.state.darkModeClass} w-100 text-left px-2`"
            type="button"
            data-toggle="collapse"
            data-target="#GoalOfChess"
            aria-controls="GoalOfChess"
            aria-expanded="false"
          >
              What is the goal of a chess game?
          </button>
          <div class="collapse" id="GoalOfChess">
              <div class="px-2">{{GettingStarted[0]}}</div>
          </div>
      </div>
      <div class="mb-3">
          <button
            :class="`custom-button-offline ${this.$store.state.darkModeClass} w-100 text-left px-2`"
            type="button"
            data-toggle="collapse"
            data-target="#StartingPosition"
            aria-controls="StartingPosition"
            aria-expanded="false"
          >
            Starting Position
          </button>
          <div class="collapse" id="StartingPosition">
              <div class="mb-3 px-2">
                  {{GettingStarted[1]}}
              </div>
              <div class="px-2">
                <StaticChessBoard :board="startBoard"/>
              </div>
          </div>
      </div>
      <hr />
      <div class="mb-3">
        <div class="h2">Moving the pieces</div>
      </div>
      <div v-for="(move, index) in ChessMovements" :key="index">
        <div class="mb-3">
          <button
            :class="`custom-button-offline w-100 text-left px-2`"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            :data-target="`#${String(move.piece).replace(' ','')}`"
            :aria-controls="move.piece"
          >
              {{move.piece}}
          </button>
          <div class="collapse px-2" :id="String(move.piece).replace(' ', '')">
            <div class="mb-3">
              {{move.rules}}
            </div>
            <div>
              IMAGE
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import LandingPageHeader from '../static/LandingPageHeader';
import GettingStarted from '../static/GettingStarted';
import ChessMovements from '../static/ChessMovements';

import StaticChessBoard from './subcomponents/StaticChessBoard';
import { startBoard } from '../constants';

export default {
  components: {
    StaticChessBoard,
  },
  data() {
    return {
      LandingPageHeader,
      GettingStarted,
      startBoard,
      ChessMovements,
    };
  },
};
</script>

<style>

</style>
