<template>
  <div class="mt-3 mx-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3">
      Introduction
    </div>
    <div class="text-body-1 mb-3 text-justify">
      Successfully lead an empire! Imagine soldiers on foot leading the charge.
      Imagine the mounted troops on horseback. Imagine the King with the Queen at his side.
      In many battles, when the King dies or is captured the battle ends.
      And so it is in the game of chess.
    </div>
    <v-dialog>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          block
          :class="$store.state.btnClass"
          outlined
        >
          <span :style="`color: ${$store.state.textColor}`">What is the goal?</span>
        </v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title class="text-wrap">
            The goal in chess is to checkmate your opponent's King.
            When a king cannot avoid capture, then it is checkmated and the game is over.
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-dialog>
    <div class="mb-3">
      <v-dialog>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            block
            :class="$store.state.btnClass"
            outlined
          >
            <span :style="`color: ${$store.state.textColor}`">Starting Position</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-wrap">
              <div class="mt-3 text-center">
                The chessboard is placed with the light square at the right-hand corner nearest to each player.
                The white pieces always has the first move. To decide who gets white and who gets black,
                it is customary for one player to hide a white and black pawn in each hand.
                The other player then picks a hand. Whoever picks or is left with the white pawn will
                get the white pieces and will move first.
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-dialog>
    </div>
    <div class="my-3" v-for="object in LandingPageText" :key="object.header">
      <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
        {{object.header}}
      </div>
      <v-dialog v-for="item in object.items" :key="item.buttonText">
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            block
            :class="$store.state.btnClass"
            outlined
          >
            <span :style="`color: ${$store.state.textColor}`">{{item.buttonText}}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-wrap">
              <div class="mt-3 text-center">{{item.modalText}}</div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  import LandingPageText from '@/static/LandingPageText';

  export default {
    name: 'LandingPage',

    data: () => ({
      LandingPageText,
    }),
  }
</script>
