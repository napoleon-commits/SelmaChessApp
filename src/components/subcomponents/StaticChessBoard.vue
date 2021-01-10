<template>
  <div>
      <table class="ma-auto">
          <tr v-for="(n, rank) in 8" :key="rank">
              <td v-for="(n, file) in 8" :key="file">
                  <ChessPieceImage :letter="pieceString[rank*8+file]"/>
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';

export default {
    name: 'StaticChessBoard',
    props: ['pieceString'],
    components:{
        ChessPieceImage,
    }
}
</script>

<style>

</style>