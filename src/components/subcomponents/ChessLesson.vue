<template>
  <div>
    <CustomHR />
    <v-row no-gutters>
        <v-col>
          <div class="text-xl-h3 text-lg-h3 text-md-h4 text-sm-h5 text-h6 mb-3">
              {{header}}
          </div>
          <v-pagination
              v-model="page"
              :length="demo.length"
              @input="pageChange"
              :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
          ></v-pagination>
          {{demo[page-1].text}}
        </v-col>
        <v-col>
            <div :id="`${$store.state.school}-chess-board`">
                <StaticChessBoard 
                    :fen="demo[page-1].fens[fenIndex]"
                />
            </div>
        </v-col>
    </v-row>
    <CustomHR />
  </div>
</template>

<script>
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';
import CustomHR from '@/components/subcomponents/CustomHR';

export default {
    name: 'ChessLesson',
    props: ['header', 'demo',],
    components: {
        StaticChessBoard,
        CustomHR,
    },
    data() {
        return {
            page: 1,
            fenIndex: 0,
        };
    },
    methods: {
        incrementFenIndex(){
            if(this.fenIndex + 1 === this.demo[this.page-1].fens.length){
                this.fenIndex = 0;
            }
            else {
                this.fenIndex += 1;
            }
        },
        pageChange(){
            this.fenIndex = 0;
        }
    },
    mounted() {
        setInterval(this.incrementFenIndex, 1000);
    },
    beforeDestroy() {
        clearInterval(this.incrementFenIndex);
    },
}
</script>

<style>
  .cg-board-wrap {
    margin: auto;
  }
  #Default-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(127,127,127)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Southside-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(255,5,5)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #DC-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(70,165,81)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Selma-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(155,221,255)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Keith-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(0,110,156)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #Default-chess-board > div {
    background-color: initial !important;
  }
  #Southside-chess-board > div {
    background-color: initial !important;
  }
  #DC-chess-board > div {
    background-color: initial !important;
  }
  #Selma-chess-board > div {
    background-color: initial !important;
  }
  #Keith-chess-board > div {
    background-color: initial !important;
  }
  .merida .cg-board piece.rook.black, 
  .merida .cg-board piece.knight.black,
  .merida .cg-board piece.bishop.black,
  .merida .cg-board piece.queen.black,
  .merida .cg-board piece.king.black,
  .merida .cg-board piece.pawn.black,
  .merida .cg-board piece.pawn.white,
  .merida .cg-board piece.rook.white,
  .merida .cg-board piece.knight.white,
  .merida .cg-board piece.bishop.white,
  .merida .cg-board piece.queen.white,
  .merida .cg-board piece.king.white {
    background-color: initial !important;
  }
</style>