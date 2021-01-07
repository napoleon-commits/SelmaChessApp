<template>
    <v-card
        flat
        tile
    >
        <v-toolbar>
            <v-select
                class="mt-5"
                :items="Object.keys(SchoolColors)"
                label="School Color"
                @input="updateColor"
            ></v-select>
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

export default {
    data(){
        return {
            SchoolColors,
        }
    },
    methods: {
        toggleTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        },
        updateColor(color){
            this.$store.state.customColor = SchoolColors[color];
            return true;
        }
    }
}
</script>

<style>

</style>