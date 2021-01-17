<template>
  <div class="mt-3 mx-3">
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
          :class="btnClass"
          outlined
        >
          <span :style="`color: ${textColor}`">What is the goal?</span>
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
            :class="btnClass"
            outlined
          >
            <span :style="`color: ${textColor}`">Starting Position</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-wrap">
              <StaticChessBoard
                piece-string="rnbqkbnrpppppppp................................PPPPPPPPRNBQKBNR"
              />
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
            :class="btnClass"
            outlined
          >
            <span :style="`color: ${textColor}`">{{item.buttonText}}</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item>
            <v-list-item-title class="text-wrap">
              <StaticChessBoard
                v-if="item.staticBoard"
                :piece-string="item.moves[0]"
              />
              <DynamicChessBoard
                v-else
                :moves="item.moves"
              />
              <div class="mt-3 text-center">{{item.modalText}}</div>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-dialog>
    </div>
  </div>
</template>

<script>
  import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';
  import LandingPageText from '@/static/LandingPageText';
  import DynamicChessBoard from '@/components/subcomponents/DynamicChessBoard';

  export default {
    name: 'LandingPage',

    components:{
      StaticChessBoard,
      DynamicChessBoard,
    },

    data: () => ({
      LandingPageText,
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
      },
      btnClass(){
        const {red, green, blue} = this.$store.state.customColor;
        if(red==127 && green==127 && blue==127){
          return 'btn-default';
        }
        if(red==70 && green==165 && blue==81){
          return 'btn-dallas-county';
        }
        if(red==155 && green==221 && blue==255){
          return 'btn-selma';
        }
        if(red==255 && green==5 && blue==5){
          return 'btn-southside';
        }
        if(red==0 && green==110 && blue==156){
          return 'btn-keith';
        }
        return '';
      }
    }
  }
</script>
