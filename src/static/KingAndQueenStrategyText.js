export default {
    header: 'King and Queen Strategy',
    body: `
        The King and Queen are the tow strongest pieces. The Queen has tremendous scope, especially in the open board,
        but it is important not to bring the Queen out too early. If you do, you might find that your opponent is able
        to attack the Queen and make it move again and again, often a clear waste of time. The King, of course, is the most
        important piece. If it is attacked and has no escape, you lose the game. Therefor, you typically want to safeguard your King
        before you begin your attacks. In most games, you will usually want to castle to safeguard your King and activate a Rook.
        Once castled, try not to move the pawns in front of your King.
    `,
    items: [
        {
            header: `Don't Develop Your Queen Early`,
            subtitle: `
                Most of the time, you will want to develop your Knights, Bishops, and perhaps also your Rooks before you bring out your Queen. The Queen is so valuable that it is difficult early on to be sure exactly where the Queen belongs. If you advance your Queen into the middle of the board, your opponent will have a chance, for example, to develop their Knights, Bishops, and Rooks and, at the same time, attack your Queen. You will lose valuable development opportunities because you will have to move your Queen over and over again while your opponent will be properly developing many pieces.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        'rnb1kbnr/ppp1pppp/8/3q4/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                        'rnb1kbnr/ppp1pppp/8/3q4/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        In this position, black has developed the Queen before bringing out any of the black Knights, Bishops, or Rooks. As a result, white has a very strong move, developing the Knight on b1 to c3 (Nb1-c3). The Knight develops to a strong natural square and, at the same time, attacks the Queen. The Queen, a much more valuable piece than the white Knight, will have to move again.
                    `,
                },
                {
                    fens: [
                        'rnb1kbnr/ppp1pppp/8/4q3/8/2N5/PPPPPPPP/R1BQKBNR w KQkq - 0 1',
                        'rnb1kbnr/ppp1pppp/8/4q3/8/2N2N2/PPPPPPPP/R1BQKB1R w KQkq - 0 1'
                    ],
                    text: `
                        Some players might simply retreat the black Queen to its starting square. Imagine, how- ever, that black decides to move the Queen to e5 giving check (Qd5-e5+). Here, white has responded to the check from the Queen by developing the light-squared Bishop to e2 (Bf1-e2). Then, with white to move, white can bring out another piece, in this case the Knight on g1 to f3 yet again attacking the black Queen. As you can see, white is busy developing pieces actively while black is forced to make moves again and again with the Queen.
                    `,
                }
            ],
        },
        {
            header: `Beat Back Early Queen Aggression`,
            subtitle: `
                Many beginning players have never been told, or simply don’t believe, that you shouldn’t bring the Queen out early. But, please heed my warning
                and fight the urge to make an early Queen move.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/4p2Q/4P3/8/PPPP1PPP/RNB1KBNR w KQkq - 0 1'
                    ],
                    text: `
                        In this position, white has broken the rule and posted the white Queen very aggressively on just the second move of the game. At first glance, you might wonder why the move is so bad. After all, the Queen attacks the undefended black pawn on e5. The Queen’s move, however, offers black a simple way to develop effectively. First, black can defend the e5-pawn by developing the Knight on b8 to c6 (Nb8-c6). On the next move, black can simply advance the g-pawn to g6, gaining time by attacking the Queen and getting ready to develop the Knight from g8 to f6 and the Bishop from f8 to g7.
                    `,
                },
            ],
        },
        {
            header: `Safeguard Your Queen`,
            subtitle: `
                Rather than develop the Queen too early, where it might be a target and assist your opponent’s development, try developing all of your other pieces first. That way, your opponent may not be able to figure out what you intend to do with your Queen. Remaining flexible is often a good idea in chess, especially when it comes to developing your Queen.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        'bqr2bk1/2rn1ppp/pp1ppn2/8/2P1PP2/P1NBB1P1/1P1N3P/1Q1R1RK1 w - - 0 1'
                    ],
                    text: `
                        In this position from a game between two masters, both players have placed their Queens far from the center. Neither Queen can be easily attacked, yet both are likely to aid in the later action.
                    `,
                },
            ],
        },
        {
            header: `Don't Risk Your King!`,
            subtitle: `
                The goal in chess, of course, is checkmate, an attack on the King from which there is no escape. The most important advice, therefore, is to secure your King before you launch your attacks. Masters often spend an extra move or two to make sure that their Kings are safely removed from open files and diagonals before they begin their attacks. They know from experience that complicated maneu- vers will often fail because, at the end of a complicated set of moves, an exposed King will be attacked, pinned, or skewered.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        'rn1qkbnr/pbpppppp/1p6/8/3PP3/3B4/PPP2PPP/RNBQK1NR w KQkq - 0 1',
                        'rn1qkbnr/pbppp1pp/1p6/5p2/3PP3/3B4/PPP2PPP/RNBQK1NR w KQkq - 0 1',
                    ],
                    text: `
                        In this position, white has dominated the center quickly with pawns on d4 and e4 and developed a Bishop, while black has pre- ferred to fianchetto the Queen’s Bishop (see Chapter 5 for more on fianchettos). Seeing an opportunity for a quick attack, black advances the f-pawn to f5 (f7-f5).
                    `,
                },
                {
                    fens: [
                        'rn1qkbnr/pbppp1pp/1p6/5P2/3P4/3B4/PPP2PPP/RNBQK1NR w KQkq - 0 1',
                        'rn1qkbnr/p1ppp1pp/1p6/5P2/3P4/3B4/PPP2PbP/RNBQK1NR w KQkq - 0 1',
                        'rn1qkbnr/p1ppp1pp/1p6/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1',
                        'rn1qkbnr/p1ppp2p/1p4p1/5P1Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1'
                    ],
                    text: `
                        White takes advantage of black’s poor devel- opment by capturing the pawn on f5 (e4xf5). At first glance, it would appear that white has made a terrible mistake. After all, black can now capture the white pawn on g2 with the light-squared Bishop (Bb7xg2). That move certainly looks like it will win the white Rook on h1.
                        However, white has a very powerful response that takes advantage of the undeveloped black King. White plays the Queen to h5, giving check (Qd1-h5+). As you can see, the King cannot move. Black has no choice but to block the check by advancing the g-pawn (g7-g6).
                    `,
                },
                {
                    fens: [
                        'rn1qkbnr/p1ppp2p/1p4P1/7Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1',
                        'rn1qkb1r/p1ppp2p/1p3nP1/7Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1',
                        'rn1qkb1r/p1ppp2P/1p3n2/7Q/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1',
                    ],
                    text: `
                        As this next position shows, white has contin- ued the attack by capturing the black g6-pawn with the white pawn on f5 (f5xg6). Black sim- ply does not have time to capture the white Rook on h1 because any move by the white pawn on g6 will be checkmate!
                        Black therefore decides to develop the Knight on g8 to f6 (Ng8-f6), attacking the white Queen. White now has a fabulous checkmate in two more moves. White continues with pawn take pawn (g6xh7), sacrificing the Queen to the f6 Knight!
                    `,
                },
                {
                    fens: [
                        'rn1qkb1r/p1ppp2P/1p6/7n/3P4/3B4/PPP2PbP/RNB1K1NR w KQkq - 0 1',
                        'rn1qkb1r/p1ppp2P/1p4B1/7n/3P4/8/PPP2PbP/RNB1K1NR w KQkq - 0 1'
                    ],
                    text: `
                        Here is the position after black responds with the only possible move, Knight captures Queen (Nf6xh5). White ends the game with the amazing Bishop to g6 checkmate (Bd3- g6#)! This wonderful game emphasizes the need for more rapid development and making sure that your King is safe before your lash out with an attack.
                    `,
                }
            ],
        },
        {
            header: `Castling Long or Short`,
            subtitle: `
                Generally speaking, it is safer to castle on the Kingside (short). Simply put, there is less space to defend. On the Queenside (long), you often have to spend time moving your King at least once more toward the corner. Of course, there are exceptions. If your opponent has castled Kingside, consider castling Queenside in order to launch an attack that includes the advance of the Kingside pawns.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        '5rk1/5ppp/8/8/8/8/PPP5/2KR4 w - - 0 1'
                    ],
                    text: `
                        Here, white has castled on the Queenside, while black has castled on the Kingside. White gains an advantage because the white Rook lands on an open file. But the white King has a bit more space to defend. An attack by black on the white a-pawn might require white to move the King again or to advance the a- pawn. And, of course, after castling on the Queenside, the white King is exposed on the c1-h6 diagonal
                        By contrast, black’s King is slightly safer. The King is not exposed to any checks, and all of black’s Kingside pawns are defended. However, unlike the white Rook, the black Rook is usually not on an open file after castling on the Kingside.
                    `,
                },
                {
                    fens: [
                        'r4rk1/1bqnbppp/p1npp3/1p4PP/3NP3/2N1BP2/PPPQ4/2KR1B1R w Kq - 0 1',
                        'r4rk1/1bqnbppp/p1npp3/6PP/1p1NP3/2N1BP2/PPPQ4/2KR1B1R w Kq - 0 1'
                    ],
                    text: `
                        In this example, white has castled Queenside and taken the added precaution of moving the King further to b1. On c1, the King would rest on a file that black is likely to use to dou- ble the black Rooks. By castling on the Queenside, white is able to advance the Kingside pawns forward in a menacing way. White might continue, for example, by advancing the g- or h-pawn again.
                        Black has castled Kingside here, and is not without possibilities. With black to move, black would likely advance the b-pawn to attack the white Knight (b5-b4). There are good attacking chances for both sides in this position. White will be attempting to coordi- nate an attack on black’s Kingside with moves like g5-g6 and Qd2-h2. Black must not wait for the attack, but rather move aggressively against the white King with moves such as b5-b4, Rf8-c8, and perhaps Nc6-e5-c4.
                    `,
                }
            ],
        },
        {
            header: `Don't Push Your Pawns in Front of a Castled King`,
            subtitle: `
                In Chapter 6, “Pawn Strategy,” you learned that every pawn move creates a weakness. This section presents three additional examples that demonstrate the consequence of advancing pawns in front of a castled King.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        '5rk1/5p1p/6p1/8/7P/8/1B1Q4/7R w - - 0 1'
                    ],
                    text: `
                        In this first example, black has advanced the g-pawn (g7-g6). As a result, two squares have become weak: f6 and h6. Both of these are squares that the pawn controlled before moving forward.
                        White has many different moves that might take advantage of these weaknesses. For example, white might move the Queen to c3 or to h6, threatening to deliver checkmate with the Queen on the g7 square. Or white might simply advance the h-pawn to h5 in an effort to open the h-file and to blow apart the black Kingside. Generally speaking, the more moves made in front of a castled King, the more vulnerable the King will be.
                    `,
                },
                {
                    fens: [
                        '5rk1/5pp1/7p/5P2/6PP/8/3Q4/6R1 w - - 0 1',
                        '5rk1/5pp1/5P1p/8/6PP/8/3Q4/6R1 w - - 0 1'
                    ],
                    text: `
                        In this second example, black has weakened the Kingside by advancing the h-pawn to h6. As a result, white has at least two plans for breaking through. First, white could simply challenge the black h6-pawn by playing g4 to g5. Note that the white h-pawn, the Rook, and the Queen all support the g4 to g5 advance. But let’s consider an interesting alternative. The advance of the black h-pawn has created a short pawn chain. The black h6-pawn is the strong pawn in the chain. By contrast, the black pawn on g7 is the weak pawn in the chain. White might therefore consider the pawn move f5 to f6.
                        Black’s movement of the black g7-pawn to g6 or f6 would permit white to capture the h6- pawn with the Queen. If, instead, black advanced the g-pawn to g5, white could pry apart the Kingside with the h4 to g5 pawn capture (h4xg5). And black’s third option of leaving the pawn on g7 would, of course, permit the f6 to g7 pawn capture, (f6xg7). Things don’t look good for black.
                    `,
                },
                {
                    fens: [
                        '5rk1/5p2/7p/6p1/8/8/4Q2P/1B5R w - - 0 1'
                    ],
                    text: `
                        In this last example, black has advanced two pawns in front of the King. Again, the weak- ness of black’s Kingside creates many good options for white. For example, the white Queen might move to d3 or e4 in order to threaten Queen to h7 checkmate. Or the white Queen might move to h5 in order to attack the backward black h-pawn. Or white could simply advance the h-pawn to h4 in an effort to break apart black’s pawn structure.
                        You don’t need to remember all of the details. However, you should remember that moving the pawns in front of a castled King exposes the King to many dangers. Advance those pawns at your own peril.
                    `,
                }
            ],
        },
    ],
};