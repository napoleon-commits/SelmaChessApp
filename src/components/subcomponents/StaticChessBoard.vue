<template>
  <div>
      <table class="ma-auto">
          <tr v-for="(n, rank) in 8" :key="rank">
              <td v-for="(n, file) in 8" :key="file">
                  {{pieceString[rank*8+file]}}
              </td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
    name: 'StaticChessBoard',
    props: ['pieceString'],
}
</script>

<style>

</style>