<template>
    <v-pagination
        v-model="page"
        :length="length"
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
}
</script>

<style>

</style>