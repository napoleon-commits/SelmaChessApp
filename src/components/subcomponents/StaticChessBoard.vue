<template>
    <table class="ma-auto">
        <tr v-for="(n, rank) in 8" :key="rank">
            <td
                v-for="(n, file) in 8" 
                :key="file" 
                :style="`
                backgroundColor: ${
                ((rank+file)%2===1)?'#FFF':customColor
                } !important;
                `"
            >
                <ChessPieceImage
                    :letter="pieceString[rank*8+file]"
                    :maxWidth="30"
                    :maxHeight="30"
                />
            </td>
        </tr>
    </table>
</template>

<script>
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';

export default {
    name: 'StaticChessBoard',
    props: ['pieceString'],
    components:{
        ChessPieceImage,
    },
    computed: {
        customColor(){
            const {red, green, blue} = this.$store.state.customColor;
            return `rgb(${red},${green},${blue})`;
        }
    }
}
</script>

<style>

</style>