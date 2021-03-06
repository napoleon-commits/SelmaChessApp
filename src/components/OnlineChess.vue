<template>
  <div>
      <div :class="`text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-3 text-center`">
          Coming Soon
      </div>
      <ComingSoonIcon />
      <div>
          <Timer :totalSeconds="blackSeconds"/>
      </div>
      <hr />
        <v-btn @click="startWhiteClock">Start Game</v-btn>
        <v-btn @click="endGame">End Game</v-btn>
        <v-btn @click="makeMove">Make Move</v-btn>
      <hr />
      <div>
          <Timer :totalSeconds="whiteSeconds"/>
      </div>
      <hr />
  </div>
</template>

<script>
import ComingSoonIcon from '@/components/subcomponents/ComingSoonIcon';
import Timer from '@/components/subcomponents/Timer';

export default {
    name: 'OnlineChess',
    components: {
        ComingSoonIcon,
        Timer,
    },
    data(){
        return{
            move: 'white',
            whiteSeconds:(60*30),
            blackSeconds:(60*30),
            whiteClockInterval: null,
            blackClockInterval: null,
        }
    },
    methods: {
        startWhiteClock(){
            this.whiteClockInterval = setInterval(()=>{
                this.whiteSeconds -= 1;
            },1000)
        },
        stopWhiteClock(){
            clearInterval(this.whiteClockInterval)
        },
        startBlackClock(){
            this.blackClockInterval = setInterval(()=>{
                this.blackSeconds -= 1;
            },1000)
        },
        stopBlackClock(){
            clearInterval(this.blackClockInterval);
        },
        endGame(){
            clearInterval(this.whiteClockInterval);
            clearInterval(this.blackClockInterval);
        },
        makeMove(){
            if(this.move === 'white'){
                this.stopWhiteClock();
                this.startBlackClock();
                this.move = 'black';
            } else {
                this.stopBlackClock();
                this.startWhiteClock();
                this.move = 'white';
            }
        }
    },
}
</script>

<style>

</style>