<template>
    <v-card
        flat
        tile
    >
        <v-toolbar>
            <v-toolbar-title>Custom Color</v-toolbar-title>
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
export default {
    methods: {
        toggleTheme(){
            this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        }
    }
}
</script>

<style>

</style>