<template>
    <div class="mt-3 mx-3">
        <div class="text-xl-h1 text-lg-h1 text-md-h2 text-sm-h3 text-h4 mb-1">
            {{IntroductionToEndgamesText.header}}
        </div>
        <div class="text-body-1 mb-3">
            {{IntroductionToEndgamesText.body}}
        </div>
        <div class="my-3" v-for="object in IntroductionToEndgamesText.items" :key="object.header">
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
                            :class="$store.state.btnClass"
                            outlined
                        >
                            <span :style="`color: ${$store.state.textColor}`">{{item.buttonText}}</span>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title class="text-wrap">
                                <!-- <DynamicChessBoard
                                    :moves="item.moves"
                                    v-if="item.moves"
                                /> -->
                                <v-row>
                                    <v-col>
                                        <div>{{item.demo[0].text}}</div>
                                        <v-pagination
                                            v-model="page"
                                            :length="6"
                                            :color="`rgb(${$store.state.customColor.red},${$store.state.customColor.green},${$store.state.customColor.blue})`"
                                        ></v-pagination>
                                    </v-col>
                                    <v-col>
                                        <StaticChessBoard 
                                            v-if="item.demo[0].staticBoard"
                                            :pieceString="item.demo[0].moves[0]"
                                        />
                                        <DynamicChessBoard
                                            :moves="item.demo[0].moves"
                                            v-if="item.demo[0].staticBoard===false"
                                        />
                                    </v-col>
                                </v-row>
                            </v-list-item-title>
                        </v-list-item>
                    </v-list>
                </v-dialog>
            </div>
        </div>
    </div>
</template>

<script>
import IntroductionToEndgamesText from '@/static/IntroductionToEndgamesText.js';
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';
import DynamicChessBoard from '@/components/subcomponents/DynamicChessBoard';

export default {
    name: 'IntroductionToEndgames',
    components: {
        StaticChessBoard,
        DynamicChessBoard,
    },
    data() {
        return {
            IntroductionToEndgamesText,
            page: 1,
        };
    },
}
</script>

<style>

</style>