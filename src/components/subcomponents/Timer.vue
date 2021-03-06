<template>
    <div>
        {{String(hours).padStart(2,'0')}} : 
        {{String(minutes).padStart(2,'0')}} .
        {{String(seconds).padStart(2,'0')}}
    </div>
</template>

<script>
export default {
    name: 'Timer',
    props: ['totalSeconds'],
    computed: {
        hours(){
            return Math.floor(this.totalSeconds/3600);
        },
        minutes(){
            return Math.floor((this.totalSeconds-(this.hours*3600))/60);
        },
        seconds(){
            return this.totalSeconds-(this.hours*3600)-(this.minutes*60);
        }
    },
}
</script>

<style>

</style>