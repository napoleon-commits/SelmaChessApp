export default {
    header: 'Bishop Strategy',
    body: `
        The Bishop is forever committed to traveling on the same color.
        To make sure the Bishop will have the most substantial effect on the position,
        it is important to not fix your pawns on the color of your Bishop.
        In an open board where the pawns are mobile, the Bishop can be a very powerful piece.
        You will soon see pins, skewers, and Bishops that can dominate Knights and even Rooks.
        However, in a closed position where many of the pawns are fixes,
        the Bishop's mobility can be seriously limited.
    `,
    items: [
        {
            lessonHeader: `Bad Bishops and Good Bishops`,
            demo: [
                {
                    fens: ['8/8/7p/6pP/5pP1/4pP2/4P3/5B2 w - - 0 1'],
                    text: `
                        In this situation, the white Bishop on f1 can safely move around to g2, h3, and even h1. You can immediately see that, while the Bishop remains on the board, it will have no meaningful effect on the rest of the game. In a real sense, white’s pawns on e2, f3, and g4 have imprisoned or trapped their own light-squared Bishop. The simplest advice: Don’t let this happen to you!
                    `,
                },
                {
                    fens: ['8/6b1/8/3p4/3P4/8/1B6/8 w - - 0 1'],
                    text: `
                        Most of the time, Bishops are not quite that bad, but the principle remains important.
                        Do not fix pawns on the same color as your Bishop. In this example, the two pawns are considered fixed because they cannot advance. The Bishop on b2 is considered “bad” because the white pawn on d4 is fixed on its color. By contrast, the black Bishop on g7 is considered “good” because it is attacking a fixed white pawn.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Bishops Can Dominate Knights`,
            demo: [
                {
                    fens: ['8/8/8/4B2n/8/8/8/8 w - - 0 1'],
                    text: `
                        In this position, the white Bishop on e5 controls all four of the squares to which the black Knight on h5 can move.
                        To improve your play, you should play against others and also play through the games of some the world’s greatest players. As you play through master games, time and again, you will observe the same pattern: Bishops three squares away from enemy Knights, dominating them just as they do in this example.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Fianchettos`,
            demo: [
                {
                    fens: ['8/8/8/8/8/6P1/5P1P/4KBNR w - - 0 1'],
                    text: `
                        At the beginning of a game, you have an opportunity to place your Bishop quickly on the board’s longest diagonal, setting up a fianchetto. In this position, after advancing the g-pawn to g3 (g2-g3), white can play Bishop f1 to g2 (Bf1-g2). Many players like this maneuver, but white must be careful when advancing the g-pawn that black is not able to capture the white Rook on h1 with a Bishop or a Queen coming straight down the long diagonal.
                    `,
                },
                {
                    fens: ['rn1qk2r/pbppppbp/1p3np1/8/8/1P3NP1/PBPPPPBP/RN1QK2R w KQkq - 0 1'],
                    text: `
                        Here, all of the Bishops have been fianchet- toed (flanked by their pawns). Note that both sides have been very careful, developing the Knights to f3 and f6 to prevent any of the Bishops from capturing another Bishop.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Bishops of Opposite Color`,
            demo: [
                {
                    fens: ['8/8/8/4k3/3p1b2/3Bp3/4K3/8 w - - 0 1'],
                    text: `
                        In this position, black appears to have a significant two-pawn advantage. However, white has a light-squared Bishop, while black’s Bishop can travel only on the dark squares. The two can never come into direct conflict. White can effectively blockade the black pawns by moving its Bishop to light squares that stay in contact with the d3 square. For example, white could simply shuttle the Bishop back and forth between d3 and c2. If black moved the King around to c3 in order to prevent Bishop to c2, the white Bishop could move instead to e4. Simply put, there’s no safe way for black to advance the pawns.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Skewers and Pins`,
            demo: [
                {
                    fens: ['r5q1/8/8/3k4/8/8/8/3B4 w - - 0 1'],
                    text: `
                        In this position, it is white’s move. White can carry out a skewer in two different ways. First, white could attack or check the black King by playing Bishop on d1 to f3 (Bd1-f3). The black King on d5 would have to move, permitting white to capture the Rook on a8 (Bf3xa8). Better still, white could play Bishop to b3, check (Bd1-b3+). Here, the skewer will net the Queen on g8 (Bb3xg8).
                    `,
                },
                {
                    fens: ['r2qkbnr/ppp2ppp/2np4/1B2p3/4P1b1/5N2/PPPP1PPP/RNBQ1RK1 w Qkq - 0 1'],
                    text: `
                        In this position, there are two pins. Note that the white Bishop on b5 is pinning the black Knight on c6 to the black King. This is called an absolute pin because the Knight on c6 cannot legally move (remember, you cannot make a move that results in putting your King in check).
                    `,
                },
                {
                    fens: ['r2qkbnr/ppp2ppp/2np4/1B2p3/4P1b1/5N2/PPPP1PPP/RNBQ1RK1 w Qkq - 0 1'],
                    text: `
                        By contrast, the black Bishop on g4 is pinning the white Knight on f3 to the white Queen. This is called a relative pin because the Knight on f3 is permitted to move. Such moves are often unwise though, because mov- ing the Knight would result in the loss of the white Queen.
                        It is far more common, in master play, for players to “unpin” with a move like Bishop f1 to e2 (Bf1-e2), as seen in the photo at the top of this page. Or, white could simply challenge the black Bishop by moving the pawn from h2 to h3 (h2-h3); masters call such pawn maneuvers “putting the question to” or “kicking” the Bishop.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Bad Bishops Against Good Knights`,
            demo: [
                {
                    fens: ['8/8/2p5/p1k1p1p1/P1PnPpP1/2K2P2/8/3B4 w - - 0 1'],
                    text: `
                        In this example, material is even—black and white are evenly matched in the number and value of their pieces. However, black’s Knight is wonderfully posted, while the white Bishop has little scope. In this position, it is white’s turn to move, but every move that white can make will result in a winning advantage for black. If, for example, white moves the Bishop, black will be able to capture it with its Knight and then infiltrate with the King.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Bishops Can Dominate Rooks`,
            demo: [
                {
                    fens: ['5Br1/6P1/8/8/8/p7/Rb6/8 w - - 0 1'],
                    text: `
                        In this example, both Bishops are dominating a Rook. The white Bishop on f8, for example, has trapped the black Rook on g8 with help from the pawn on g7. If the Rook moves to h8, the pawn will capture it. If the Rook captures the Bishop on f8, the pawn will then capture it. If the Rook captures the pawn on g7, the Bf8 will capture it.
                        Similarly, the black Bishop on b2, with help from the advanced black a-pawn, has trapped the white Rook. If the Rook moves to a1 or captures the a3-pawn, the Bishop can capture it. And if the Rook on a2 captures the Bishop on b2, the a3-pawn will be able to recapture. Imagine trapping a Rook in this way and then bringing up another pawn or piece to attack it.
                    `,
                },
                {
                    fens: [
                        'r7/4B1P1/8/1k3p2/1pp5/7p/p2K4/R7 w - - 0 1',
                        '6r1/4B1P1/8/1k3p2/1pp5/7p/p2K4/R7 w - - 0 1',
                        '5Br1/6P1/8/1k3p2/1pp5/7p/p2K4/R7 w - - 0 1',
                    ],
                    text: `
                        This position was reached in the famous 1972 World Championship match between Bobby Fischer and the Russian Boris Spassky. Spassky, playing white, had just played Bishop to e7 and was threatening to play Bishop e7 to f8 (Be7-f8) and then pawn g7 to g8 (g7-g8) to promote to Queen (g7-g8=Q)! Fischer had no choice but to prevent that threat with Rook a8 to g8 (Ra8-g8). Naturally, Spassky followed up with Bishop e7 to f8 (Be7-f8), trapping Fischer’s Rook. In spite of having his Rook trapped, Fischer nonetheless went on to win the game and the match.
                    `,
                },
            ],
        },
    ],
};