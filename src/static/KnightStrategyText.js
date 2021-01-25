export default {
    header: 'Knight Strategy',
    body: `
        While the Bishop, Queen, and Rook can sweep across the board, the Knight is limited to its relatively
        short L-shaped movements. As you will see, these limted movements make it all the more important to decide
        early on where you can safely post the Knight and from where it can effectively assist in the battle.
    `,
    items: [
        {
            header: 'Move the Knights to the Center of the Board',
            subtitle: `
                The experience of masters tells us that a Knight belongs in or near the center of the board,
                where the enemy pawns cannot attack it. From this safe post, a Knight can lash out to assist
                in attacks against the enemy King, to deliver unexpected forks, and simply to tie down enemy movement.
            `,
            lessonHeader: 'Attack from the Center',
            demo: [
                {
                    fens: [
                        'n5k1/8/3p4/3Np3/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        In this position, the white Knight is safe from attack in the center and can move to eight
                        different squares. From its central perch on d5, the white Knight is ready to assist in an
                        attack on the black King or to lash out toward the black Queenside (the side of the board
                        where the Queen started is called the Queenside while the side of the board on which the
                        King started is called the Kingside). By clear contrast, the black Knight is in the corner
                        at a8, where it will likely have very little effect on what will happen next.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4N3/8/8/8 w - - 0 1'
                    ],
                    text: `
                        In this position, the white Knight controls eight squares because it is actively
                        placed in the middle of the board. Note that the Knight is occupying a light square on e4 and,
                        as a result, is attacking eight different dark squares.
                    `,
                },
                {
                    fens: ['8/8/8/8/3N4/8/8/8 w - - 0 1'],
                    text: `
                        If you move or place a Knight on a dark square, for example on d4,
                        it would be attacking eight different light squares.
                        Observing the light square/dark square relationship here can help you become
                        more comfortable with the movement of the Knight.
                    `,
                },
                {
                    fens: ['3N4/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        By contrast, if you place the Knight on the side of the board,
                        the Knight will have access to only four squares. In this case,
                        the Knight on d8 can move only to b7, c6, e6, and f7. That's why
                        we can say that "a Knight on the rim is grim."
                    `,
                },
                {
                    fens: ['7n/8/8/8/8/8/N7/8 w - - 0 1'],
                    text: `
                        In this position, the white Knight on the a2 square has access to only three squares:
                        b4, c3, and c1. The black Knight in the corner on h8 can move only to two light squares:
                        f7 and g6. There's a rhyme for that too: "A Knight in the corner makes you a mourner."
                    `,
                }
            ],
        },
        {
            header: `Place Your Knights Where the Enemy Pawns Can't Attack Them`,
            subtitle: `
                The actual rule for Knight strategy is a bit more complicated than simply moving
                you Knights to the center of the board. The key is to move you Knights to central
                squares that you opponent's pawns cannot attack.
            `,
            lessonHeader: 'Avoid Pawn Attacks',
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        Black has just responded to white's opening move of a pawn from e2 to e4 (e2-e4)
                        with Knight g8 to f6 (Ng8-f6). At first, black's move seems strong because the Knight
                        has devloped quickly toward the center and is attacking the white pawn on e4. However,
                        on white's second move, the pawn on e4 can advance again to e5 (e4-e5), attacking the
                        black Knight on f6. The black Knight would need to move again to avoid its loss, but
                        moving the Knight to e4 would invite another pawn attack to d2 to d3 (d2-d3). Moving
                        the black Knight to d5 (Nf6-d5), a better move, would nonetheless invite white to attack
                        the Knight with c2 to c4 (c2-c4). As you can see from this example, advancing your Knights
                        to the center of the board isn't enough; read on.
                    `,
                },
                {
                    fens: [
                        '8/8/3p4/4p3/4P3/8/8/6N1 w - - 0 1',
                        '8/8/3p4/4p3/4P3/8/4N3/8 w - - 0 1',
                        '8/8/3p4/4p3/4P3/2N5/8/8 w - - 0 1',
                        '8/8/3p4/3Np3/4P3/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In this example, the white Knight is on its starting g1-square.
                        The advance of black's central pawns has created a "hole" in black's pawn
                        structure on the d5 square. Note that the black pawns will not be able to
                        attack or capture the white Knight if it's on d5, and from the d5 hole,
                        the Knight would help to control eight squares. On d5, the Knight would
                        possible deliver forks on the c7 square (imagine a black Rook on a8 and
                        the black King on e8).
                    `,
                }
            ],
        },
        {
            header: 'Knight Forks Are Fun!',
            subtitle: `
                The Knight can attack two or more pieces at the same time.
                When a Knight attacks two pieces at once, we call it a Knight fork.
                An attack on more than two pieces is called a family fork. In practice,
                it is rare for a Knight to attack more than two pieces at a time,
                but forks are often the culmination of complex maneuvers and tactical intrigue.
            `,
            lessonHeader: 'Family Fork',
            demo: [
                {
                    fens: [
                        'r3k2r/p2nqp2/b1n3p1/3NP2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r3k2r/p2n1p2/b1n1q1p1/3NP2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r3k2r/p1Nn1p2/b1n1q1p1/4P2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                    ],
                    text: `
                        Here's a position from a sample game, with black set to move.
                        As you can see, the white Knight on d5 is attacking the black Queen on e7.
                        If the black Queen moves forward one square from e7 to e6,
                        a family fork can occur.
                    `,
                },
                {
                    fens: [
                        '5nk1/3p2bp/1p1qp3/p2N4/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5nk1/3p2bp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p1kbp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p1kQp/1p1qpN2/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p2kp/1p1qpN2/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1',
                        '4Nn2/3p2kp/1p1qp3/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1'
                    ],
                    text: `
                        In this more difficult example,
                        white combines a wonderul Queen sacrifice with a clever
                        Knight fork to gain a decisive material advantage. Note that the white Knight
                        on d5 is powerfully located in the center, even though it isbeing attacked
                        by a black pawn on e6.
                    `,
                }
            ],
        },
    ],
};