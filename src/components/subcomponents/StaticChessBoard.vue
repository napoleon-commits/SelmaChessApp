<script>
    import { chessboard }  from 'vue-chessboard';

    export default {
        name: 'StaticChessBoard',
        extends: chessboard,
        mounted() {
            this.board.set({
                viewOnly: true,
            });
        },
    };
</script>