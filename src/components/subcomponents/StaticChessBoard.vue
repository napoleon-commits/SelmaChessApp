<template>
    <div
        class="ma-auto"
        :style="`
            width: ${windowWidth < 842 ? (windowWidth*goldenRatio)+4: (842*goldenRatio)+4}px;
            border: 2px solid ${$vuetify.theme.dark?'#fff':'rgba(0,0,0,0.87)'};
        `"
    >
        <v-row no-gutters v-for="(n, rank) in 8" :key="rank">
            <v-col
                v-for="(n, file) in 8"
                :key="file"
                :style="`background-color: ${((rank+file)%2===0)?'#FFF':`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`} !important;`"
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
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';
import goldenRatio from '@/static/GoldenRatio';

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
    },

    beforeDestroy() { 
        window.removeEventListener('resize', this.onResize); 
    },
}
</script>

<style>

</style>