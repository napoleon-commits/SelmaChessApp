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
        items: [
            {
                buttonText: 'Check',
                modalText: `
                    When a king is under immediate attack by an opponent's piece, it is said to be in check.
                    The only option is to remove the king from check. This can by capturing the attacking piece,
                    placing a piece in between the attacker and the king, or move the king to a square where
                    it is no longer in check. The king can not castle when it is in check.
                `,
                staticBoard: false,
                moves: [
                    '..................k....................................R....K...',
                    '..................k...............................R.........K...',
                ],
            },
            {
                buttonText: 'Castling',
                modalText: `
                    Castling is a move often made in the early parts of the game.
                    In most cases, it moves the king to a safer position.
                    Castling involves the moving the king two squares to the left or two squares to the right,
                    and placing the rook to the opposite side of the king.
                    A player is only allowed to castle if the king and rook have not been moved.
                    Also, castling can not happen if the king is in check,
                    or if the king will pass through a check or if the king will end up in check.
                `,
                staticBoard: false,
                moves: [
                    '................................................PPP..PPPR...K..R',
                    '................................................PPP..PPPR....RK.',
                    '................................................PPP..PPPR...K..R',
                    '................................................PPP..PPP..KR...R',
                ],
            },
            {
                buttonText: 'Pawn Promoting',
                modalText: `
                    When a pawn reaches the end of the board, that pawn is promoted.
                    The pawn can be exchanged for a queen, rook, bishop, or knight.
                    Usually, the pawn is promoted to a queen. In some strategies the pawn is promoted to a rook,
                    bishop, or knight. This is called underpromoting.
                `,
                staticBoard: false,
                moves: [
                    '..kr....ppp..pp...p.......b..b....P.pPPq.P..P...PBQPB.p.RN.K.R..',
                    '..kr....ppp..pp...p.......b..b....P.pPPq.P..P...PBQPB...RN.K.q..',
                ],
            },
            {
                buttonText: 'En Passant',
                modalText: `
                    When a pawn moves forward two squares and there is an opponent's pawn next to it,
                    the opponent can capture the pawn by moving to the square the first pawn skipped.
                    Thic an only be done only on the very next turn.
                `,
                staticBoard: false,
                moves: [
                    'rnbqkbnrppp.pppp...........P....................PPPP.PPPRNBQKBNR',
                    'rnbqkbnrppp..ppp...........Pp...................PPPP.PPPRNBQKBNR',
                    'rnbqkbnrppp..ppp....P...........................PPPP.PPPRNBQKBNR',
                ],
            },
        ],
    },
];