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
            mockSearchTimer: 0,
            mockSearchInterval: null
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
            if(this.isSearching){
                this.mockSearchInterval = setInterval(()=>{
                    this.mockSearchTimer += 1;
                    if(this.mockSearchTimer >= 2500){
                        clearInterval(this.mockSearchInterval);
                        this.isSearching = false;
                        this.$router.push({
                            name: 'OnlineChess',
                            params: {orientation: (Math.floor(Math.random() * 100) % 2 === 0)?'white':'black' },
                        });
                    }
                },1);
            } else {
                clearInterval(this.mockSearchInterval);
                this.mockSearchTimer = 0;
            }
        }
    },
}
</script>

<style>

</style>