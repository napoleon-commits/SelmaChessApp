<template>
  <div class="mt-3">
    <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
      Introduction
    </div>
    <div class="text-body-1 mb-3">
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
          :color="customColor"
          outlined
        >
          <span :style="`color: ${textColor}`">What is the goal of a chess game?</span>
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
    <div class="my-3">
      <v-dialog>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            block
            :color="customColor"
            outlined
          >
            <span :style="`color: ${textColor}`">Starting Position</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-wrap">
              The chessboard is places with the light square at the right-hand corner nearest to each player.
              The rows are referred to as ranks. The columns are referred to as files.
              <div class="mt-3">
                <StaticChessBoard
                  piece-string="rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR"
                />
              </div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';

  export default {
    name: 'LandingPage',

    components:{
      StaticChessBoard
    },

    data: () => ({

    }),
    computed:{
      customColor(){
        const {red, green, blue} = this.$store.state.customColor;
        return `rgb(${red},${green},${blue})`
      },
      textColor(){
        if(this.$vuetify.theme.dark){
          return '#FFF';
        }
        return 'rgba(0,0,0,0.87)';
      }
    }
  }
</script>
