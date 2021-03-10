<template>
    <div class="my-3">
        <div class="h1 text-center">
            Select a Time Control
        </div>
        <div class="d-flex justify-center my-5">
            <v-btn outlined :class="$store.state.btnClass" @click="searchForOpponent">
                <v-progress-circular
                indeterminate
                :color="circularProgressColor"
                ></v-progress-circular>
                <span class="mx-5">30 Minutes + 0 second increment</span>
                <v-progress-circular
                indeterminate
                :color="circularProgressColor"
                ></v-progress-circular>
            </v-btn>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OnlineChessSelectionPage',
    data(){
        return {
            isSearching: false,
        };
    },
    computed: {
        circularProgressColor(){
            if(this.isSearching){
                const {red, green, blue} = this.$store.state.customColor;
                return `rgb(${red},${green},${blue})`;
            } return 'transparent'
        }
    },
    methods: {
        searchForOpponent(){
            this.isSearching = !this.isSearching;
        }
    },
}
</script>

<style>

</style>