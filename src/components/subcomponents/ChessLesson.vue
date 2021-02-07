<template>
  <div>
    <v-row no-gutters :style="smallScreenBackgroundStyle">
        <v-col>
          <div class="text-xl-h3 text-lg-h3 text-md-h4 text-sm-h5 text-h6 mb-3 text-center">
              {{header}}
          </div>
          <v-pagination
              v-model="page"
              :length="demo.length"
              @input="pageChange"
              :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
          ></v-pagination>
          <div class="text-xl-h4 text-lg-h4 text-md-h5 text-sm-h6 text-subtitle-1 mb-3 text-center" v-if="demo[page-1].lessonHeader">
              {{demo[page-1].lessonHeader}}
          </div>
          <div class="text-justify">{{demo[page-1].text}}</div>
        </v-col>
        <v-col>
            <div :id="`${$store.state.school}-chess-board`">
                <StaticChessBoard 
                    :fen="demo[page-1].fens[fenIndex]"
                />
            </div>
        </v-col>
    </v-row>
  </div>
</template>

<script>
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';

export default {
    name: 'ChessLesson',
    props: ['header', 'demo',],
    components: {
        StaticChessBoard,
    },
    data() {
        return {
            page: 1,
            fenIndex: 0,
        };
    },
    methods: {
        incrementFenIndex(){
            if(this.fenIndex + 1 === this.demo[this.page-1].fens.length){
                this.fenIndex = 0;
            }
            else {
                this.fenIndex += 1;
            }
        },
        pageChange(){
            this.fenIndex = 0;
        }
    },
    mounted() {
        setInterval(this.incrementFenIndex, 1500);
    },
    beforeDestroy() {
        clearInterval(this.incrementFenIndex);
    },
    watch: { 
      demo() {
        this.page = 1;
        this.fenIndex = 0;
      }
    },
    computed: {
        smallScreenBackgroundStyle(){
            let style = '';
            if(this.$vuetify.breakpoint.smAndUp === false){
                if(this.$store.state.school === 'Selma'){
                    style += 'color: rgba(0, 0, 0, 0.87) !important;';
                } else {
                    style += 'color: white !important;';
                }
                style += `background-color: rgb(${this.$store.state.customColor.red},${this.$store.state.customColor.green},${this.$store.state.customColor.blue});`;
            }
            return style;
        }
    },
}
</script>

<style>

</style>