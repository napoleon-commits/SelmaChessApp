<template>
    <div class="my-5">
        <div class="d-flex justify-center">
            <div class="mr-5">
                <Timer :totalSeconds="blackSeconds"/>
            </div>
            <div class="ml-5">
                El_Verdugo_Del_GM : 2410
            </div>
        </div>
        <div :id="`${$store.state.school}-chess-board`">
            <OfflineChessExtended
            :fen="''"
            @onMove="''"
            :orientation="'white'"
            />
        </div>
        <div class="d-flex justify-center">
            <div class="mr-5">
                <Timer :totalSeconds="whiteSeconds"/>
            </div>
            <div class="ml-5">
                PresidentoftheUSA : 2518
            </div>
        </div>
        <div class="d-flex justify-center mt-3">
            <div>
                <v-btn outlined :class="$store.state.btnClass">
                    <span :style="`color: ${$vuetify.theme.dark?'rgba(0, 0, 0, 0.87)':'white'};`">__</span>
                    <span>Resign</span>
                    <span :style="`color: ${$vuetify.theme.dark?'rgba(0, 0, 0, 0.87)':'white'};`">__</span>
                </v-btn>
            </div>
            <div>
            <v-btn outlined :class="$store.state.btnClass">
                Offer Draw
            </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
import Timer from '@/components/subcomponents/Timer';
import OfflineChessExtended from '@/components/subcomponents/OfflineChessExtended';

export default {
    name: 'OnlineChess',
    components: {
        Timer,
        OfflineChessExtended,
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