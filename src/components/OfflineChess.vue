<template>
    <div>
        <div :id="`${$store.state.school}-chess-board`">
            <OfflineChessExtended 
                :fen="currentFen"
            />
        </div>
        <div class="d-flex justify-center">
            <v-btn outlined :class="$store.state.btnClass" @click="reset">
                Reset
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
            initialFen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
            currentFen: '',
        };
    },
    methods: {
        reset(){
            this.currentFen = this.initialFen;
        }
    },
}
</script>

<style>

</style>