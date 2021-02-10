<template>
    <div class="my-5">
        <div :id="`${$store.state.school}-chess-board`">
            <OfflineChessExtended
                :fen="currentFen"
                @onMove="onMove"
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
        };
    },
    methods: {
        onMove(data){
            if(this.fens[this.fens.length - 1] !== data.fen){
                this.fens.push(data.fen);
                this.currentFen = data.fen;
            }
        },
        takeBack(){
            if(this.fens.length > 1){
                this.fens.length -= 1;
            }
            this.currentFen = this.fens[this.fens.length - 1];
        },
        reset(){
            this.fens.length = 1;
            this.currentFen = this.fens[this.fens.length - 1];
        }
    },
}
</script>

<style>

</style>