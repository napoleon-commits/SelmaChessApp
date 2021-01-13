<template>
    <StaticChessBoard 
        :piece-string="moves[moveIndex]"
    />
</template>

<script>
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';

export default {
    name: 'DynamicChessBoard',
    props: ['moves'],
    components: {
        StaticChessBoard,
    },
    data() {
        return {
            moveIndex: 0,
        }
    },
    methods: {
        incrementIndex(){
            if(this.moveIndex + 1 >= this.moves.length){
                this.moveIndex = 0;
            } else {
                this.moveIndex += 1;
            }
        }
    },
    mounted() {
        setInterval(this.incrementIndex, 1000);
    },
    beforeDestroy() {
        clearInterval(this.incrementIndex);
    }
}
</script>

<style>

</style>