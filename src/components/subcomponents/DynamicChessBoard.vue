<template>
    <table class="mx-auto">
        <tr v-for="(rank, rankIndex) in moves[moveIndex]" :key="rankIndex">
            <td
                v-for="(square, fileIndex) in rank"
                :key="fileIndex"
                v-html="getHTMLChessPiece(square)"
                :class="(((rankIndex+fileIndex)%2)===0)?'bg-white':'dark-square'"
            />
        </tr>
    </table>
</template>

<script>
import getHTMLChessPiece from '../../utils/board';

export default {
    props:['moves',],
    data(){
        return{
            moveIndex: 0,
        }
    },
    methods: {
        getHTMLChessPiece,
    },
    mounted(){
        setInterval(()=>{
            if((this.moveIndex + 1) === this.moves.length){
                this.moveIndex = 0;
            } else {
                this.moveIndex += 1;
            }
        }, 1000)
    }
}
</script>

<style>

</style>