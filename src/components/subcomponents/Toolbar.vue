<template>
    <v-card
        flat
        tile
    >
        <v-toolbar>
            <div id="school-color-select">
                <v-select
                    class="mt-5"
                    :items="Object.keys(SchoolColors)"
                    label="School Color"
                    @input="updateColor"
                    v-model="school"
                ></v-select>
            </div>
            <v-spacer></v-spacer>
            <v-tooltip
                v-if="!$vuetify.theme.dark"
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-icon
                        fab
                        v-on="on"
                        @click="toggleTheme"
                        class="mt-3 ml-5"
                    >
                        mdi-moon-waxing-crescent
                    </v-icon>
                </template>
                <span>Dark Mode On</span>
            </v-tooltip>
            <v-tooltip
                v-else
                bottom
            >
                <template v-slot:activator="{ on }">
                    <v-icon
                        fab
                        v-on="on"
                        @click="toggleTheme"
                        class="mt-3 ml-5"
                    >
                        mdi-white-balance-sunny
                    </v-icon>
                </template>
                <span>Dark Mode Off</span>
            </v-tooltip>
        </v-toolbar>
    </v-card>
</template>

<script>
import SchoolColors from '@/static/SchoolColors.json';
import {setCookie, getCookie} from '@/utils/cookies';

export default {
    data(){
        return {
            SchoolColors,
            school: '',
        }
    },
    methods: {
        toggleTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
            setCookie('dark', this.$vuetify.theme.dark);
            this.$store.commit('setTextColor', {dark: this.$vuetify.theme.dark});
        },
        updateColor(color){
            this.$store.state.customColor = SchoolColors[color];
            this.$store.state.school = color;
            if(this.$store.state.customColor){
                setCookie('red', this.$store.state.customColor.red);
                setCookie('green', this.$store.state.customColor.green);
                setCookie('blue', this.$store.state.customColor.blue);
                this.$store.commit('setBtnClass', {
                    red: this.$store.state.customColor.red,
                    green: this.$store.state.customColor.green,
                    blue: this.$store.state.customColor.blue,
                });
            }
            setCookie('school', color);
            return true;
        }
    },
    mounted(){
        if(getCookie('school')){
            this.school = getCookie('school');
            this.$store.state.school = getCookie('school');
        }
    }
}
</script>

<style>
    #school-color-select > div > div > div.v-input__slot {
        width: 156.375px;
    }
    .theme--light.v-icon {
        color: rgba(0, 0, 0, 0.87) !important
    }
</style>