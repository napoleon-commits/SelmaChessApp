export default {
    header: 'Knight Strategy',
    body: `
        While the Bishop, Queen, and Rook can sweep across the board, the Knight is limited to its relatively short L-shaped movements. As you will see, these limited movements make it all the more important to decide early on where you can safely post the Knight and from where it can effectively assist in the battle.
    `,
    items: [
        {
            lessonHeader: 'Move the Knights to the Center of the Board',
            demo: [
                {
                    fens: [
                        'n5k1/8/3p4/3Np3/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        In this position, the white Knight is safe from attack in the center and can move to eight different squares. From its central perch on d5, the white Knight is ready to assist in an attack on the black King or to lash out toward the black Queenside (the side of the board where the Queen started is called the Queenside while the side of the board on which the
                        King started is called the Kingside). By clear contrast, the black Knight is in the corner at a8, where it will likely have very little effect on what will happen next.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4N3/8/8/8 w - - 0 1'
                    ],
                    text: `
                        In this position, the white Knight controls eight squares because it is actively placed in the middle of the board. Note that the Knight is occupying a light square on e4 and, as a result, is attacking eight different dark squares.
                    `,
                },
                {
                    fens: ['8/8/8/8/3N4/8/8/8 w - - 0 1'],
                    text: `
                        If you move or place a Knight on a dark square, for example on d4, it would be attacking eight different light squares. Observing the light square/dark square relationship here can help you become more comfortable with the movement of the Knight.
                    `,
                },
                {
                    fens: ['3N4/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        By contrast, if you place the Knight on the side of the board, the Knight will have access to only four squares. In this case, the Knight on d8 can move only to b7, c6, e6, and f7. That's why we say that “a Knight on the rim is grim.”
                    `,
                },
                {
                    fens: ['7n/8/8/8/8/8/N7/8 w - - 0 1'],
                    text: `
                        In this position, the white Knight on the a2 square has access to only three squares: b4, c3, and c1. The black Knight in the corner on h8 can move only to two light squares: f7 and g6. There's a rhyme for that too: “A Knight in the corner makes you a mourner.”
                    `,
                }
            ],
        },
        {
            lessonHeader: `Place Your Knights Where the Enemy Pawns Can't Attack Them`,
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        Black has just responded to white's opening move of pawn from e2 to e4 (e2-e4) with Knight g8 to f6 (Ng8-f6). At first, black's move seems strong because the Knight has developed quickly toward the center and is attacking the white pawn on e4. However, on white's second move, the pawn on e4 can advance again to e5 (e4-e5), attacking the black Knight on f6. The black Knight would need to move again to avoid its loss, but moving the Knight to e4 would invite another pawn attack d2 to d3 (d2-d3). Moving the black Knight to d5 (Nf6-d5), a better move, would nonetheless invite white to attack the Knight with c2 to c4 (c2-c4). As you can see from this example, advancing your Knights to the center of the board isn't enough; read on.
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
                        In this example , the white Knight is on its starting g1-square. The advance of black's central pawns has created a “hole” in black's pawn structure on the d5 square. Note that the black pawns will not be able to attack or capture the white Knight if it's on d5, and from the d5 hole, the Knight would help to control eight squares. On d5, the Knight would be able to assist a Kingside attack or possibly deliver forks on the c7 square (imagine a black Rook on a8 and the black King on e8). To learn about forks, see “Knight Forks Are Fun!,” on the next page. The arrows show the fastest and safest path for the Knight to follow to reach the key d5 square in this scenario: g1-e2-c3-d5.
                    `,
                }
            ],
        },
        {
            lessonHeader: 'Knight Forks Are Fun!',
            demo: [
                {
                    fens: [
                        'r3k2r/p2nqp2/b1n3p1/3NP2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r3k2r/p2n1p2/b1n1q1p1/3NP2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r3k2r/p1Nn1p2/b1n1q1p1/4P2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                    ],
                    text: `
                        Here's a position from a sample game, with black set to move. As you can see, the white Knight on d5 is attacking the black Queen on e7. If the black Queen moves forward one square from e7 to e6, do you see how white can move the white Knight to deliver a family fork?
                        The answer is Knight from d5 to c7 (Nd5-c7); resulting in check, as well as a family fork. The white Knight on c7 is attacking black's Knight (Ke8), Queen (Qe6), Rook (Ra8), as well as the Bishop (Ba6).
                    `,
                },
                {
                    fens: [
                        '5nk1/3p2bp/1p1qp3/p2N4/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                    ],
                    text: `
                        In this more difficult example, white combines a wonderful Queen sacrifice with a clever Knight fork to gain a decisive material advantage. Note that the white Knight on d5 is powerfully located in the center, even though it is being attacked by a black pawn on e6.
                        As chess books like to say, it's white to move and win, in this case by winning a piece. White begins by moving its Knight to f6, putting the King in check (Nd5-f6+). Note that black cannot capture the Knight with its Bishop because the white Queen on g4 is pinning the Bishop on g7. 
                    `,
                },
                {
                    fens: [
                        '5nk1/3p2bp/1p1qp3/p2N4/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                    ],
                    text: `
                        Simply put, you are not allowed to make a move that places your King in check. Black must therefore respond by moving the King to f7 or into the corner to h8. White then has a wonderful combination ending with a Knight fork. White captures the black Bishop with its Queen, putting the King in check (Qg4xg7+). Black must respond by recapturing the Queen with its King (Kxg7). This then yields a Knight fork opportunity for white that will regain the Black Queen. Can you find the solution?
                        The answer is Knight to e8, check (Nf6-e8+), forking the King and Queen. The play-by-play of this combination is detailed on the next page.
                    `,
                },
                {
                    fens: [
                        '5nk1/3p2bp/1p1qp3/p2N4/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5nk1/3p2bp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                    ],
                    text: `
                        White moves Knight to f6, putting the King in check (Nd5-f6+).
                    `,
                },
                {
                    fens: [
                        '5nk1/3p2bp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p1kbp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                    ],
                    text: `
                        Black's King moves to f7 to get out of check (Kg8-f7) (the King could also move to h8).
                    `,
                },
                {
                    fens: [
                        '5n2/3p1kbp/1p1qpN2/p7/P1P3QP/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p1kQp/1p1qpN2/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1',
                    ],
                    text: `
                        White's Queen captures the black Bishop, putting the King in check again (Qg4xg7+).
                    `,
                },
                {
                    fens: [
                        '5n2/3p1kQp/1p1qpN2/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1',
                        '5n2/3p2kp/1p1qpN2/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1',
                        '4Nn2/3p2kp/1p1qp3/p7/P1P4P/1P2B1P1/7K/8 w - - 0 1'
                    ],
                    text: `
                        Black responds, capturing white's Queen with the King (Kxg7). This reveals the Knight fork opportunity for white (Nf6-e8+), forking the King and Queen.
                    `,
                },
            ],
        },
    ],
};