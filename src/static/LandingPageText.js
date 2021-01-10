export default [
    {
        header: 'Moving the Pieces',
        items: [
            {
                buttonText: 'Knight',
                modalText: `
                    The knights are the only pieces that can leap over other pieces. The knights move in an "L" shape.
                    They can move two squares along the file and one square along the rank,
                    or two squares along the rank and one
                    square along the file.
                `,
                staticBoard: true,
                moves: ['..................o.o....o...o.....N.....o...o....o.o...........'],
            },
            {
                buttonText: 'Bishop',
                modalText: 'The bishops can move any number of squares diagonally but cannot leap over other pieces.',
                staticBoard: true,
                moves: ['o.....o..o...o....o.o......B......o.o....o...o..o.....o........o'],
            },
            {
                buttonText: 'Rook',
                modalText: `
                    The rooks can move any number of square along a rank or file,
                    but cannot leap over other pieces. Along with the king, a rook is involved in castling.
                `,
                staticBoard: true,
                moves: ['...o.......o.......o....oooRoooo...o.......o.......o.......o....'],
            },
            {
                buttonText: 'King',
                modalText: `
                    The king can move one square in any direction.
                    The king has a special move called castling
                `,
                staticBoard: true,
                moves: ['....................ooo.....oKo.....ooo.........................'],
            },
            {
                buttonText: 'Queen',
                modalText: `
                    The queen combins the power of the rook and bishop and can move any nuber of squares along a rank,
                    file or diagonal, but cannot leap over other pieces
                `,
                staticBoard: true,
                moves: ['...o...oo..o..o..o.o.o....ooo...oooQoooo..ooo....o.o.o..o..o..o.'],
            },
            {
                buttonText: 'Pawn',
                modalText: `
                    The pawns move forward and attack diagonally.
                    If the pawn is on its first move it can move forward two squares.
                    Otherwise, a pawn can only move forward one square. A pawn has two special moves:
                    the en passant and promotion.
                `,
                staticBoard: true,
                moves: ['........................xox......P...o......xox......P..........'],
            },
        ],
    },
    {
        header: 'Special Moves',
        items: [],
    },
];