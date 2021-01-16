<template>
    <v-pagination
        v-model="page"
        :length="length"
        :color="customColor"
        @input="input"
    ></v-pagination>
</template>

<script>
import LearnPagesPagination from '@/static/LearnPagesPagination';

export default {
    name: 'Pagination',
    props: ['componentName'],
    data() {
        return {
            length: LearnPagesPagination.length,
            page: LearnPagesPagination.indexOf(this.componentName) + 1,
        };
    },
    computed: {
        customColor() {
            const {red, green, blue} = this.$store.state.customColor;
            return `rgb(${red},${green},${blue})`;
        }
    },
    methods: {
        input(number){
            if(number !== LearnPagesPagination.indexOf(this.componentName) + 1){
                this.$router.push({name: LearnPagesPagination[number-1]})
            }
        },
    }
}
</script>

<style>

</style>