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
                            :class="$store.state.btnClass"
                            outlined
                        >
                            <span :style="`color: ${$store.state.textColor}`">{{item.buttonText}}</span>
                        </v-btn>
                    </template>
                    <v-list>
                    <v-list-item>
                        <v-list-item-title class="text-wrap">
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

export default {
    name: 'ElementaryCheckmates',
    data(){
        return {
            ElementaryCheckmatesText,
        };
    },
}
</script>

<style>

</style>