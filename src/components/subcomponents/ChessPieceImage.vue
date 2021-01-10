<template>
    <v-img
    :lazy-src="require('@/images/blankSquare.png')"
    max-height="150"
    max-width="250"
    :src="imageSrc"
    ></v-img>
</template>

<script>
export default {
    name: 'ChessPieceImage',
    props: ['letter'],
    computed: {
        imageSrc(){
            if(['r','n','b','q','k','p'].includes(this.letter)){
                return require(`@/images/b${this.letter.toUpperCase()}.png`)
            }
            if(['R','N','B','Q','K','P'].includes(this.letter)){
                return require(`@/images/w${this.letter}.png`);
            }
            return require('@/images/blankSquare.png');
        } 
    }
}
</script>

<style>

</style>