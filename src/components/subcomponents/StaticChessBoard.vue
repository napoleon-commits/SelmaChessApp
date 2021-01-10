<template>
    <table id="table_id" class="ma-auto" :style="`border: 2px solid ${borderColor}; backgroundColor: rgba(0,0,0,0.87);`">
        <thead><tr><th></th><th></th><th></th><th></th><th></th><th></th><th></th><th></th></tr></thead>
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
                <div
                    v-if="pieceString[rank*8+file]==='x' || pieceString[rank*8+file]==='o'"
                    class="text-xl-h3 text-lg-h3 text-md-h3 text-sm-h3 text-subtitle-2"
                    style="color: rgba(0,0,0,0.87); text-align: center;"
                >
                    <span v-if="pieceString[rank*8+file]==='x'">&times;</span>
                    <span v-else>&bull;</span>
                </div>
                <ChessPieceImage
                    :letter="pieceString[rank*8+file]"
                    :maxWidth="windowWidth*(goldenRatio)/8"
                    :maxHeight="windowHeight*(goldenRatio)/8"
                    v-else
                />
            </td>
        </tr>
    </table>
</template>

<script>
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';
import goldenRatio from '@/static/GoldenRatio';
window.$ = window.jquery = require('jquery');
window.dt = require('datatables.net');

export default {
    name: 'StaticChessBoard',
    props: ['pieceString'],
    components:{
        ChessPieceImage,
    },
    data(){
        return {
            windowHeight: window.innerHeight,
            windowWidth: window.innerWidth,
            goldenRatio,
        }
    },
    computed: {
        customColor(){
            const {red, green, blue} = this.$store.state.customColor;
            return `rgb(${red},${green},${blue})`;
        },
        borderColor(){
            if(this.$vuetify.theme.dark){
                return 'white';
            }
            const {red, green, blue} = this.$store.state.customColor;
            return `rgb(${red},${green},${blue})`;
        }
    },
    methods: {
        onResize() {
            this.windowHeight = window.innerHeight;
            this.windowWidth = window.innerWidth;
        }
    },
    mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        });
        const table = window.$('#table_id').DataTable({
            bPaginate: false,
            bInfo: false,
            searching: false,
        });
        setTimeout(()=>{
            table.columns.adjust().draw();
        }, 625);
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
}
</script>

<style>
    #table_id > tbody, #table_id > thead {
        display: none;
    }
</style>