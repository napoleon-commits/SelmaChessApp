<template>
  <div :class="`${this.$store.state.darkModeClass}`">
      <div class="mb-3">
          <div class="h1">Getting Started</div>
      </div>
      <div class="mb-3">
        <div>
            {{LandingPageHeader.description}}
        </div>
      </div>
      <div class="mb-3">
          <button
            :class="`${this.$store.state.darkModeClass} w-100 text-left`"
            :style="`border: 2px solid ${customColor}`"
            type="button"
            data-toggle="collapse"
            data-target="#GoalOfChess"
            aria-controls="GoalOfChess"
            aria-expanded="false"
          >
              What is the goal of a chess game?
          </button>
          <div class="collapse" id="GoalOfChess">
              <div>{{GettingStarted[0]}}</div>
          </div>
      </div>
      <div class="mb-3">
          <button
            :class="`${this.$store.state.darkModeClass} w-100 text-left`"
            :style="`border: 2px solid ${customColor}`"
            type="button"
            data-toggle="collapse"
            data-target="#StartingPosition"
            aria-controls="StartingPosition"
            aria-expanded="false"
          >
            Starting Position
          </button>
          <div class="collapse" id="StartingPosition">
              <div class="mb-3">
                  {{GettingStarted[1]}}
              </div>
              <div>
                <StaticChessBoard :board="startBoard"/>
              </div>
          </div>
      </div>
      <hr />
      <div class="mb-3">
        <div class="h2">Moving the pieces</div>
      </div>
      <div v-for="(move, index) in ChessMovements" :key="'basic-moves'+index">
        <div class="mb-3">
          <button
            class="w-100 text-left"
            :style="`border: 2px solid ${customColor}`"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            :data-target="`#${String(move.piece).replace(' ','')}`"
            :aria-controls="move.piece"
          >
              {{move.piece}}
          </button>
          <div class="collapse" :id="String(move.piece).replace(' ', '')">
            <div class="mb-3">
              {{move.rules}}
            </div>
            <div>
              <StaticChessBoard :board="move.board"/>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3">
        <div class="h2">Special moves</div>
      </div>
      <div v-for="(obj, index) in SpecialMoves" :key="'special-move'+index">
        <div class="mb-3">
          <button
            class="w-100 text-left"
            :style="`border: 2px solid ${customColor}`"
            type="button"
            data-toggle="collapse"
            aria-expanded="false"
            :data-target="`#${String(obj.move).replace(' ','')}`"
            :aria-controls="obj.move"
          >
              {{obj.move}}
          </button>
          <div
            class="collapse"
            :id="String(obj.move).replace(' ', '')"
          >
            <div class="mb-3">
              {{obj.description}}
            </div>
            <div>
              <DynamicChessBoard :moves="obj.moves"/>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import LandingPageHeader from '@/static/LandingPageHeader';
import GettingStarted from '@/static/GettingStarted';
import ChessMovements from '@/static/ChessMovements';
import SpecialMoves from '@/static/SpecialMoves';

import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';
import DynamicChessBoard from '@/components/subcomponents/DynamicChessBoard';
import { startBoard } from '@/constants';

export default {
  components: {
    StaticChessBoard,
    DynamicChessBoard,
  },
  data() {
    return {
      LandingPageHeader,
      GettingStarted,
      startBoard,
      ChessMovements,
      SpecialMoves,
    };
  },
  computed: {
    schoolColor() {
      return this.$store.state.schoolColor;
    },
    customColor() {
      return this.$store.state.customColor;
    },
  },
};
</script>

<style>

</style>
