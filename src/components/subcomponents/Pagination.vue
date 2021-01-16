<template>
    <v-pagination
        v-model="page"
        :length="length"
        :color="customColor"
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
    }
}
</script>

<style>

</style>