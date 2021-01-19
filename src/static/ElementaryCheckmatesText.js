export default {
    header: 'Elementary Checkmates',
    body: `
        To win a chess game, you must deliver a checkmate --
        placing your opponent's King in check with the King having no legal move. On this page,
        you will be able to explore all the most basic checkmates. Some of these checkmates are very simple.
        In fact, if you're clever enough to Queen a pawn,
        the checkmate with two Queens against a lone King is easy and fun to do.
        The other checkmates listed are somewhat more challenging.
    `,
    items: [
        {
            header: 'Two Queens',
            body: `
                You can have more than one Queen by promoting pawns. Some players enjoy promoting more than two,
                if they can, but two Queens are almost always enough to deliver checkmate.
            `,
            buttons: [
                {
                    buttonText: `The Basic Checkmate`,
                    moves: [
                        '....................k...Q........Q..............................',
                        '.................Q..k...Q.......................................',
                        '...........k.....Q......Q.......................................',
                        '........Q..k.....Q..............................................',
                        '....k...Q........Q..............................................',
                        '.Q..k...Q.......................................................',
                    ]
                },
                {
                    buttonText: `Another Way to Checkmate`,
                    moves: [
                        '.........................Q...........k....Q.....................',
                        '............................Q........k....Q.....................',
                        '............................Q.........k...Q.....................',
                        '............................Q.........k.......Q.................',
                    ]
                },
            ],
        },
        {
            header: 'Queen and Rook',
            body: `
                Together, the Queen and Rook are almost as powerful as the two Queens. And in most chess games,
                you are likely to have a Queen and Rook in an endgame than two Queens.
            `,
            buttons: [
                {
                    buttonText: `The First Technique`,
                },
                {
                    buttonText: `The Second Technique`,
                },
            ],
        },
        {
            header: 'Two Rooks',
            body: `
                Using two Rooks is another common checkmate.
                It is slightly more difficult to do because the Rooks are not as powerful as the Queens.
            `,
            buttons: [
                {
                    buttonText: 'How to Get There',
                }
            ],
        },
        {
            header: 'King and Queen',
            body: `
                It might surprise you to learn that the Queen alone cannot deliver checkmate.
                When it's down to King and Queen vs. the King,
                the Queen requires close cooperation with its King to deliver the mate.
            `,
            buttons: [
                {
                    buttonText: 'A Simple Checkmate',
                },
                {
                    buttonText: 'Other Ways to Checkmate',
                },
                {
                    buttonText: 'Moves to Avoid',
                },
            ],
        },
        {
            header: 'King and Rook',
            body: `
                Mating with a Rook is somewhat more challenging than mating with a Queen,
                although many players prefer this mate because there are fewer possibilities for a stalemate.
            `,
            buttons: [
                {
                    buttonText: 'The Basic Checkmate',
                }
            ]
        },
        {
            header: 'King and Two Bishops',
            body: `
                A checkmate with two Bishops does not occur often. If it does, you will fid that patience is required.
                The first step is to force the King toward any edge of the board and then toward any corner.
            `,
            buttons: [
                {
                    buttonText: 'How to Get There'
                }
            ],
        },
        {
            header: 'King, Bishop, and Knight',
            body: `
                Of all the checkmates on this page, the checkmate with a King, Bishop, and Knight is the most complex.
                It is so difficult
                that some masters have failed to deliver the checkmate within the 50-move limit rule.
                (The U.S. Chess Federation rule book states that the result of a game is a draw if,
                after 50 consecutive moves by each player, there have been no captures or pawn moves.)
            `,
            buttons: [
                {
                    buttonText: 'How to Get There'
                }
            ]
        },
    ],
}