<template>
    <div class="my-5">
        <div :id="`${$store.state.school}-chess-board`">
            <OfflineChessExtended
                :fen="currentFen"
                @onMove="onMove"
                :orientation="orientation"
            />
        </div>
        <div class="d-flex justify-center">
            <v-btn outlined :class="$store.state.btnClass" @click="reset">
                New Game
            </v-btn>
            <v-btn outlined :class="$store.state.btnClass" @click="takeBack">
                Take Back
            </v-btn>
        </div>
    </div>
</template>

<script>
import OfflineChessExtended from '@/components/subcomponents/OfflineChessExtended';

export default {
    name: 'OfflineChess',
    components: {
        OfflineChessExtended,
    },
    data(){
        return {
            fens: [],
            currentFen: '',
            orientation: 'white',
            moveCount: 0,
        };
    },
    methods: {
        onMove(data){
            if(this.fens[this.fens.length - 1] !== data.fen){
                this.fens.push(data.fen);
                this.currentFen = data.fen;
            }
            if(this.fens.length > 1 && this.fens.length - 1 > this.moveCount){
                if(this.orientation === 'white'){
                    this.orientation = 'black';
                } else {
                    this.orientation = 'white';
                }
                this.moveCount += 1;
            }
        },
        takeBack(){
            if(this.fens.length > 1){
                this.fens.length -= 1;
                if(this.fens.length + 1 > this.moveCount){
                    if(this.orientation === 'white'){
                        this.orientation = 'black';
                    } else {
                        this.orientation = 'white';
                    }
                    this.moveCount -= 1;
                }
            }
            this.currentFen = this.fens[this.fens.length - 1];
        },
        reset(){
            this.fens.length = 1;
            this.currentFen = this.fens[this.fens.length - 1];
            this.orientation = 'white';
            this.moveCount = 0;
        }
    },
}
</script>

<style>

</style>