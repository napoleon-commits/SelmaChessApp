<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
            {{ElementaryCheckmatesText.header}}
        </div>
        <div class="text-body-1 mb-3">
            {{ElementaryCheckmatesText.body}}
        </div>
        <div class="my-3" v-for="object in ElementaryCheckmatesText.items" :key="object.header">
            <div class="text-xl-h2 text-lg-h2 text-md-h3 text-sm-h4 text-h5 mb-3">
                {{object.header}}
            </div>
            <div class="text-body-1 my-3">
                {{object.body}}
            </div>
            <div v-for="item in object.buttons" :key="item.buttonText">
                <v-dialog>
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                            v-bind="attrs"
                            v-on="on"
                            block
                            :class="btnClass"
                            outlined
                        >
                            <span :style="`color: ${textColor}`">{{item.buttonText}}</span>
                        </v-btn>
                    </template>
                    <v-list>
                    <v-list-item>
                        <v-list-item-title class="text-wrap">
                            <DynamicChessBoard
                                :moves="item.moves"
                                v-if="item.moves"
                            />
                        </v-list-item-title>
                    </v-list-item>
                    </v-list>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import ElementaryCheckmatesText from '@/static/ElementaryCheckmatesText';
import DynamicChessBoard from '@/components/subcomponents/DynamicChessBoard';

export default {
    name: 'ElementaryCheckmates',
    components: {
        DynamicChessBoard,
    },
    data(){
        return {
            ElementaryCheckmatesText,
        };
    },
    computed: {
        textColor(){
            if(this.$vuetify.theme.dark){
                return '#FFF';
            }
                return 'rgba(0,0,0,0.87)';
        },
        btnClass(){
            const {red, green, blue} = this.$store.state.customColor;
            if(red==127 && green==127 && blue==127){
                return 'btn-default';
            }
            if(red==70 && green==165 && blue==81){
                return 'btn-dallas-county';
            }
            if(red==155 && green==221 && blue==255){
                return 'btn-selma';
            }
            if(red==255 && green==5 && blue==5){
                return 'btn-southside';
            }
            if(red==0 && green==110 && blue==156){
                return 'btn-keith';
            }
            return '';
        },
        customColor(){
            const {red, green, blue} = this.$store.state.customColor;
            return `rgb(${red},${green},${blue})`
        },
    },
}
</script>

<style>

</style>