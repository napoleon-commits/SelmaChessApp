export default {
    header: 'Opening Variations',
    body: `
        The beginning moves of a chess game, the first phase of the game, are called the opening. Some players spend years memorizing long opening variations, but you can get far in chess with a firm understanding of just a few key principles. Make sure that you fight for control of the center of the board. In your fight for the center, try to limit the number of your pawn moves. Before you attack, try to develop most of your pieces on squares that help control the center and from which they can’t easily be attacked. In other words, pick safe, good squares for your pieces, and don’t keep moving one piece if you have many other pieces that have not been moved.
        Of course, don’t play like a robot. You can have a good plan or idea for where all your pieces may go, but carefully watch the moves that your opponent makes. If your opponent makes a move that threatens something, it’s often best to eliminate that threat before you continue with your development. Most of the openings in this section conform to these principles. I have also included a set of bad openings that break these rules. As you will see, there are good reasons to avoid such moves.
        One more thing: In previous chapters, I described moves with both text (move the Knight on b4 to c2) and with chess notation (Nb4-c2). In this chapter through the end of the book, you’ll see that I mainly use chess notation to identify pieces and to describe moves. Review the “Chess Notation” section in Chapter 1 for a refresher on this notation.
    `,
    items: [
        {
            lessonHeader: 'Double King Pawn Openings',
            demo: [
                {
                    fens: ['rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'],
                    text: `
                        In this common opening position, white has several logical ideas for its second move. I examine the most common choice, 2.Ng1-f3, just below. In this section, I introduce several interesting alternatives for white. The King’s Gambit offers a pawn in exchange for quick development. The Vienna Game offers a tamer alternative that will permit you to develop quickly. The Center Game is a less favored choice because white’s Queen enters the game too early.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4PP2/8/PPPP2PP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/8/4Pp2/8/PPPP2PP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        The famous King’s Gambit continues with 2.f2-f4. Black, of course, will often simply capture the pawn on f4 with e5xf4. Gambits are openings that offer material, here the white pawn on f4, in exchange for space or rapid development. As a result of the capture on f4, black takes a material advantage, the extra pawn on f4. White offers the f-pawn in the King’s Gambit in an effort to obtain immediate control over the center with 3.Ng1-f3 and 4.d2-d4. Black has interesting ideas here as well. If white does not play 3.Ng1-f3, black could try the very aggressive 3.Qd8-h4+. If white does play 3.Ng1-f3, black can play 3.g7-g5, a move that breaks the rule about fighting for the center but the move does hold on to the extra pawn and it threatens 4.g5-g4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        The Vienna Game, 2.Nb1-c3, is another option. Rather than offer the f-pawn with 2.f2-f4, white prepares the advance of the f-pawn with moves such as 3.Bf1-c4, 4.d2-d3, and then 5.f2-f4, when white’s Bishop (Bc1) would be able to recapture on f4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                    ],
                    text: `
                        The disadvantage of the Vienna Game is that white’s second move does not contain an immediate threat. Black can therefore respond aggressively with 2.Ng8-f6. If white continues with the plan of 3.Bf1-c4, black has an interesting tactical shot.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4p3/2B1N3/8/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                        'rnbqkb1r/ppp2ppp/8/3pp3/2B1N3/8/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                    ],
                    text: `
                        Black can play 3.Nf6xe4 because, if white recaptures on e4 with 4.Nc3xe4, black can recover a piece with an amazing pawn fork. As you can see in this diagram, the pawn move 4.d7-d5 is attacking both the Bishop (Bc4) and the Knight (Ne4).
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/2N5/PPPP1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/2B1P3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4p3/2B1n3/2N5/PPPP1PPP/R1BQK1NR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4p2Q/2B1n3/2N5/PPPP1PPP/R1B1K1NR w KQkq - 0 1',
                    ],
                    text: `
                        Of course, white wasn’t required to recapture on e4. Instead, the most interesting move for white is the very aggressive 4.Qd1-h5. In this position, white is already threatening checkmate on f7, as well as to recapture the white Knight on e4. Black would need to retreat Ne4-d6 to stop both threats with an interest- ing and complex game ahead.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/8/3pP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        The Center Game is a relatively poor opening choice for white. Although white’s second move does place pressure on the center, white will find that, after black counters with 2.e5xd4, there is simply no good way to recapture. Recapturing the d4-pawn with 3.Qd1xd4 places the white Queen prematurely in the center where it will be easy for black to attack with Nb8-c6. As you might imagine, an early Ng1-f3 would have improved white’s plan, because the Knight on f3 rather than the Queen would then be able to recapture on d4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        The most common second move for white after 1.e2-e4 e7-e5 is simply to develop the Knight on g1 to f3 (Ng1-f3). The Knight move threatens to capture the black pawn on e5, develops the Knight to a logical square that exerts influence over two central squares (d4 and e5), helps to prepare the advance of the white d-pawn to d4, and the move brings white a little closer to castling. The openings in this section all begin with 2.Ng1-f3.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        For the reasons stated just above, most players find that 2.Ng1-f3 is the most logical second move for white. Black’s most common response is to defend the black e5-pawn by playing Nb8-c6.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/1B2p3/4P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        White’s third move, 3.Bf1-b5, defines the opening as the Ruy Lopez, or the Spanish game. The Bishop on b5 threatens to capture the black Knight that is defending the black e-pawn. Just as important, the Bishop move prepares white to castle on the Kingside and then to bring the King’s Rook to e1, where it will exert significant support for the center.
                    `,
                },
                {
                    fens: [
                        'r1bqkbnr/2pp1ppp/p1n5/1p2p3/3PP3/1BP2NN1/PP3PPP/R1BQK2R w KQkq - 0 1',
                    ],
                    text: `
                        In the Ruy Lopez, white will often proceed very slowly, preparing the move d2-d4. Here is an ideal setup for white in the Ruy Lopez. Note that white has prepared the advance d2-d4 with c2-c3. If black were to capture on d4, white would recapture with the c3-pawn, maintaining a strong pawn center. Note also that white’s Queen’s Knight has reached the g3-square, where it usefully supports the white pawn on e4 and aims to advance aggressively with Ng3-f5.
                    `,
                },
                {
                    fens: [
                        'r1bqkbnr/2pp1ppp/p1n5/1p2p3/3PP3/1BP2NN1/PP3PPP/R1BQK2R w KQkq - 0 1',
                    ],
                    text: `
                        To get to the g3 square, the Knight followed the interesting path Nb1-d2-f1-g3, a very common maneuver in the Ruy Lopez. Finally, note that black “kicked” the white Bishop on b5 back to b3 with both a7 to a6 and then with b7 to b5. This Bishop is sometimes called the Ruy Bishop. If white succeeds in advancing the center pawns, this Bishop can become a very powerful force in assisting attacks on black’s Kingside. If the central pawns become fixed, this “Ruy Bishop” could remain bad.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'r1bqkbnr/pppp1ppp/2n5/4p3/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        White does not have to play 3.Bf1-b5. On the third move, white has the choice of entering the Scotch game with 3.d2-d4. Unlike the Ruy Lopez, in which white carefully prepares the d2-d4 advance, in the Scotch game, white plays the move straight away. The move often leads to quick exchanges that can limit white’s attacking chances, which is the main reason strong chess players prefer the Ruy Lopez to the Scotch game.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        Rather than defending the e-pawn on the second move, black has the option of counterattacking with Petrov’s Defense. As you can see, like white, black has also developed the King’s Knight, ignoring the attack on the e5-pawn, and instead countering with an attack on the white e4-pawn. At first glance, it would seem that each side now has the opportunity to capture a pawn. White can play 3.Nf3xe5 and black could respond with 3.Nf6xe4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        In this position, both players have captured a pawn but white also has a very strong response with 4.Qd1-e2. Note that the two Knight captures have completely opened up the e-file. With the move 4.Qd1-e2, white immediately threatens to capture the undefended black Knight on e4.
                        Black cannot continue to copy white’s moves because, after 4.Qd8-e7, the white Queen will successfully capture the black Knight on e4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
                    ],
                    text: `
                        Black has an enormous problem in this position. If black moves the Knight on e4 away, say to f6, white will be able to take full advantage of the open e-file with a powerful discovered check.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/8/4N3/4n3/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/2N2n2/8/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
                    ],
                    text: `
                        The best move for white after black’s 4.Ne4-f6 is the amazing 5.Ne5-c6, revealing a check from the Queen. The discovered check will, no matter what black does, result in the loss of the black Queen to the white Knight!
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/5n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/ppp2ppp/3p1n2/4N3/4P3/8/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        Rather than copy white’s capture in the center, black must first attack the advanced white Knight. Here, black has played the essential move, 3.d7-d6, attacking the white Knight on e5 and forcing it to move away. Once the Knight moves off, black will be able to capture successfully on e4 without having to face the devastating discovered check.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Other Replies to 1.e2-e4',
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Black’s first move, 1.c7-c5, defines the opening as a Sicilian. Black’s move is aggressive.
                        It immediately aims to prevent white from taking command over the center with d2-d4. With just one move, black intends to capture white’s central pawn when it reaches d4 and, by so doing, open up the c-file for activity with black’s Rooks.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1',
                        'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        In the Sicilian, white usually develops actively with 2.Ng1-f3 and then 3.d2-d4. When black captures on d4 with the c5-pawn, white intends to recapture with the Knight on f3 rather than the Queen.
                        Here is a typical Sicilian position after just five moves by each side. White has played d2-d4 and, after a pawn capture, recaptured with a Knight from f3. Both sides have developed their other Knights to posts that help to exert some control over the center. Black has also played the move d7-d6 in an effort to develop the Bishop on c8 and to exert additional control over the e5-square.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/8/2p5/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/8/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/2p5/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/2p5/3PP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/8/3pP3/5N2/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/3p4/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/8/PPP2PPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/pp2pppp/3p1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1',
                        'r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        Notice that black’s c-file is now open. Black’s plan might be to develop the Bishop Bf8-e7 (with e7-e6 first or to g7 with g7-g6 first), and then to castle on the Kingside. Within the next dozen moves, or so, black would hope to have doubled Rooks on the c-file.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        In the French Defense, with 1.e7-e6, black makes no immediate effort to prevent white from playing 2.d2-d4. Here is the basic position in the French Defense after just two moves by each player. As you can see, white has placed both central pawns on their best squares. Black has countered with one pawn in the center, the d5-pawn, supported by the e6-pawn.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/4p3/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/4p3/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3pP3/3P4/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Most positions in the French Defense involve an immediate or slightly delayed e4-e5 pawn push by white. Note that, in this position, the black Bishop on c8 is a bad Bishop because it is already trapped by its own fixed pawns on e6 and d5. Note also that both sides have fixed pawn chains. White would like to proceed aggressively against the black Kingside with moves such as Ng1-f3, Bf1-d3, and perhaps even h2-h4 and Rh1-h3.
                        Black would likely play against the relative weak d4-pawn and break up white’s central pawn chain by playing c7-c5 and then Nb8-c6. Both sides have active and interesting play.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        In a strategy very similar to the French Defense, black delays the fight against white’s center for one move, but this time beginning with 1.c7-c6, the Caro-Kann Defense. As you can see, black has again used a pawn to support the d7-d5 pawn push on black’s second move. In one key respect, the Caro-Kann is better than the French Defense because the black pawns do not imprison the black Bishop on c8. Indeed, in this opening, black’s light-squared Bishop will be able to play a much more active role than its counterpart in the French Defense.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Here is a typical position in the Caro-Kann after just four moves. Black has captured in the center with d5xe4, and the white Knight, which entered the game on c3, has recap- tured. Black has taken advantage of the Caro- Kann pawn structure to activate the light-squared Bishop from c8 to f5. As you can see, this Bishop is far more active than the Bishop in the French Defense. In this position, white must either defend or move the currently undefended Knight on e4. The most commonly played move for white here is to retreat the Knight to g3, attacking the black Bishop on f5 and forcing black to retreat it —- most commonly to g6.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp1ppppp/2p5/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3Pp3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rn1qkbnr/pp2pppp/2p5/5b2/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rn1qkbnr/pp2pppp/2p5/5b2/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rn1qkbnr/pp2pppp/2p3b1/8/3P4/6N1/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Note that, in this position after the white Knight plays Ne4-g3 and the black Bishop moves Bf5-g6, the black Bishop winds up three squares away from the white Knight. As you saw in Chapter 5, “Bishop Strategy,” Bishops can dominate Knights in this manner. A typical white plan from this position involves the idea of a quick flank attack with h2-h4, threatening to trap the Bg6 with h4-h5. Black can respond by making “luft” (the German word for space) for its Bishop with h7-h6.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Alekhine’s Defense, named after former world champion Alexander Alekhine, is not for beginners. On the very first move, black prevents white from playing 2.d2-d4 by challenging the white e4-pawn directly. As you saw in Chapter 8, white should proceed in this position by pushing the e-pawn to e5, forcing the Knight to move again. The correct response for black is Nf6-d5.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Already on move two, the unusual character of Alekhine’s Defense is clear. Black is trying to provoke many pawn moves, while white would like to gain full control over the center and prove that black’s strategy of moving the Knight over and over is fatally flawed. In this position after move two, white already has two excellent alternatives: to gain more control over the center with 3.d2-d4 or to challenge black’s Knight yet again with 3.c2-c4.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/8/3nP3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/8/3nP3/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/1n6/4P3/2P5/8/PP1P1PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/1n6/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP4/8/PP3PPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/ppp1pppp/1n1p4/4P3/2PP1P2/8/PP4PP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        Here is a common position in Alekhine’s Defense, an opening variation known as the Four Pawns Attack. After white’s c2-c4 move, the black Knight retreated once again, this time to b6. White will likely continue with development moves such as Nb1-c3 and Ng1- f3. Few beginners would be happy with the black position, although, in tournament experience, white often finds it difficult to defend all of the forward pawns.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Double Queen Pawn Openings',
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/8/2pP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        White usually continues with 2.c2-c4, a move that gambits a pawn, though it is rare that black accepts the offer. After 2.c2-c4 d5xc4, white is able to gain undisputed control over the center of the board with 3.Nb1-c3 and 4.e2-e4. Indeed, once white develops normally, it might be able to recapture on c4 with the Bf1. To prevent that, black might have to play moves such as a7-a6 and b7-b5. So many pawn moves on the flank will only encourage white to take full command over the center.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        Most players prefer to decline the gambit and to fight for a share of the center. Here is a typical position in the Queen’s Gambit Declined after just three moves. White has continued with c2-c4 and then Nb1-c3, which is pressuring the d5-square. Black has responded to this pressure by developing first with e7-e6 and then Ng8-f6.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp2ppp/4p3/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/ppp2ppp/4pn2/3p4/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        White would like to play e2-e4, but the black d5-pawn and the black Knight both control the key e4-square. White usually continues with Bc1-g5 in an effort to pin the black Knight and then to play e2-e4. Reacting to the threat, black will usually break the pin with Bf8-e7.
                        This position has some resemblance to the French Defense in that black’s light-squared Bishop is blocked in by the black pawns on e6 and d5. This bad Bishop is one of the main drawbacks for black in the Queen’s Gambit Declined.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/ppp1pppp/8/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/3p4/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        The Slav Defense is very similar to the Queen’s Gambit Declined except that black defends the d5-pawn by playing c7-c6 rather than e7-e6. As you can see in this position, black has avoided the problem of sealing in the Bishop on c8. In this respect, the Slav Defense is also similar to the Caro-Kann Defense.
                    `,
                },
                {
                    fens: [
                        '2r1r1k1/pbqnbppp/1pp1pn2/3p2B1/2PP4/2NBPN2/PPQ2PPP/2R1R1K1 w - - 0 1',
                    ],
                    text: `
                        In the Slav, black will usually be able to develop the c8-Bishop aggressively on f5 or g4. In this position, a typical one that might be reached from either the Queen’s Gambit, the Queen’s Gambit Declined, or the Slav Defense, black has elected instead to fianchetto the Bishop on b7. The black Bishop on b7 is much less active than white’s light-squared Bishop on d3. Note that, with the black pawn on c6, the Knight on b8 developed to d7 rather than to c6.
                    `,
                },
                {
                    fens: [
                        '2r1r1k1/pbqnbppp/1pp1pn2/3p2B1/2PP4/2NBPN2/PPQ2PPP/2R1R1K1 w - - 0 1',
                    ],
                    text: `
                        As you can see, black is making it difficult for white to play the attacking move e3-e4. The pawn on d5 and the Knight on f6 stand ready to capture on e4, and black hopes for counter-play with the aggressive move c6-c5, freeing the Bishop on b7.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Indian Defenses',
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppp1p/5np1/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppp1p/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/ppppppbp/5np1/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        In the King’s Indian Defense, white proceeds with the idea of 2.c2-c4 and 3.Nb1-c3. Black, in turn, pursues a Kingside fianchetto. After just three moves, it has become clear that black’s defense does not prevent white from playing 4.e2-e4. White will therefore be able to achieve a broad pawn center.
                    `,
                },
                {
                    fens: [
                        'r1bq1rk1/ppp3bp/3p1np1/3Ppp1n/2P1P3/2NBBP2/PP1QN1PP/2KR3R w Kq - 0 1',
                    ],
                    text: `
                        This typical position in the King’s Indian provides a sense of the opening’s unusual character. Black has challenged white’s pawn center by advancing the e-pawn and later the f-pawn. Black is likely to attack on the Kingside in spite of the fact that its King is castled there.
                        White has achieved much more central space and often attacks on the Queenside with the idea later of c4-c5. The black Knight that opened the game at f6 has moved to the h5 square first to prepare f7-f5 and to make room for the other black Knight, which arrived at f6 from b8 and then d7. See Chapter 10 for a related opening formation -— the King’s Indian Attack.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 1',
                        'rnbqkb1r/p1pp1ppp/1p2pn2/8/2PP4/5N2/PP2PPPP/RNBQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        The Queen’s Indian Defense involves a fianchetto on the Queenside. Here is the position in the Queen’s Indian after just three moves. White has again opened with d2-d4 and then c2-c4. Black has countered with 1.Ng8-f6, 2.e7-e6, and then 3.b7-b6. Black intends to play Bc8-b7 where the Bishop, in conjunction with the Knight on f6, tries to prevent white from playing e2-e4.
                    `,
                },
                {
                    fens: [
                        'rn1qk2r/pbppbppp/1p2pn2/6B1/2PP4/2N1PN2/PP3PPP/R2QKB1R w KQkq - 0 1',
                    ],
                    text: `
                        Here is a typical position in the Queen’s Indian Defense. Black has completed a Queenside fianchetto and is ready to castle. However, with black to move, black has the option of preventing e3-e4 by playing Nf6-e4. This sharp resource is one of reasons this defense is popular.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        The very popular Nimzo-Indian Defense is named after Aron Nimzovitch, a great chess theorist of the early 20th century. In this opening, black aggressively prevents white from playing e2-e4 by pinning the white Knight on c3.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppp1ppp/4pn2/8/2PP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/pppp1ppp/4pn2/8/1bPP4/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        As you can see, white has developed normally with 2.c2-c4 and with 3.Nb1-c3. Black has responded with 1.Ng8-f6, 2.e7-e6, and, unlike the Queen’s Indian, with 3.Bf8-b4. The Bishop on b4 pins the white Knight on c3 and, by so doing, prevents white from playing 4.e2-e4. If white were to play 4.e2-e4, black would simply capture the e4-pawn with the Knight on f6 (Nf6).
                        As you might expect, the early placement of the black Bishop on b4 can lead to its exchange for the white Knight on c3. Often, the white c-pawns become doubled, but white will then have an uncontested dark-squared Bishop as compensation.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Two Bad Openings',
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppp1ppp/8/4p3/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        In this opening, black responds to white’s 1.d2-d4 with an awful move that simply loses a pawn. As you can see, the Englund Gambit involves an immediate 1.e7-e5 by black. On just the second move, white wins a pawn with little or no compensation for black. To win the pawn, of course, white simply plays 2.d4xe5.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/6P1/8/PPPPPP1P/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        The name of this opening is far more compelling than the move itself. Rather than contest the center, white opens the game with 1.g2-g4. Black should respond to white’s flank move by capturing a part of the center with 1.d7-d5 or 1.e7-e5.
                    `,
                },
            ],
        },
    ],
};