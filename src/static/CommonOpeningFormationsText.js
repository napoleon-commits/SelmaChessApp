export default {
    header: 'Common Opening Formations',
    body: `
        To improve in chess, it helps to be able to recognize certain pawn structures and have a coordinated plan for how to proceed. In this chapter, I present several different structures and opening formations. Most are relatively easy to set up and can be very effective even in the hands of a relatively inexperienced player. As you will see, every structure has its strengths and weaknesses. Understanding the role of each piece within the structure will help guide your play.
        The first two sections involve opening formations that you might use with the white pieces. The second two are structures commonly used by the player with the black pieces. The only danger is that you might decide to set up these formations without regard to what your opponent is doing. It's great to have these plans at your disposal, but watch and consider all of your opponent's moves before you play your next move.
    `,
    items: [
        {
            lessonHeader: `King's Indian Attack`,
            demo: [
                {
                    fens: ['8/8/8/8/4P3/3P1NP1/PPPN1PBP/R1BQK2R w KQ - 0 1'],
                    text: `
                        The King's Indian Attack is essentially a King's Indian Defense, but played with the white pieces rather than with black. As you might expect, the extra move that white has by moving first gives the opening a bit more punch than the defense.
                        In the King's Indian Attack, white aims to achieve this position by move 7. Note that white has fianchettoed the light-squared Bishop. The Knight on g1 has developed to f3. The Knight on b1 has developed to d2. White has a modest but solid central pawn structure with pawns on d3 and e4.
                    `,
                },
                {
                    fens: ['8/8/8/8/4P3/3P1NP1/PPPN1PBP/R1BQK2R w KQ - 0 1'],
                    text: `
                        To achieve this position, white could have opened the game with either 1.e2-e4 or even 1.Ng1-f3. Many players reach this position by playing 1.Ng1-f3 first, fiancettoing quickly with 2.g2-g3 and 3.Bf1-g2, and then castling. It may surprise you that the move e2-e4 can actually be played in this opening system on move 7 rather than on move 1. So, after castling, white might continue with 5.d2-d3, 6.Nb1-d2, and finally 7.e2-e4.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4P3/3P1NP1/PPPN1PBP/R1BQK2R w KQ - 0 1',
                        '8/8/8/8/4P2N/3P2P1/PPPN1PBP/R1BQK2R w KQ - 0 1',
                        '8/8/8/8/4PP1N/3P2P1/PPPN2BP/R1BQK2R w KQ - 0 1',
                    ],
                    text: `
                        White's next moves very much depend, of course, on what black is trying to do. But white does have a straightforward plan for making progress. As long as the Knight can't be captured there, white might try Nf3-h4, or otherwise Nf3-e1, followed by the quick advance of the f-pawn from f2-f4.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4P3/3P1NP1/PPPN1PBP/R1BQK2R w KQ - 0 1',
                        '8/8/8/8/4P2N/3P2P1/PPPN1PBP/R1BQK2R w KQ - 0 1',
                        '8/8/8/8/4PP1N/3P2P1/PPPN2BP/R1BQK2R w KQ - 0 1',
                    ],
                    text: `
                        In this position, white is getting ready to attack with e4-e5 or possibly f4-f5. Perhaps you might decide first to develop the Queen to e2 or (after the Nd2 moves) Bc1-e3. However you proceed, you have the possibility to play ten moves or so without significant error, even against a relatively strong player. Even if you lose eventually, your opponent will be impressed that you have made quick progress as a chess player, and you will have the opportunity for an exciting middlegame with an active set of pieces. For middlegame strategies, see Chapter 11.
                    `,
                },
                {
                    fens: [
                        'r1bqk2r/pp2bppp/2n2n2/2p1p3/3pP3/3P1NP1/PPPN1PBP/R1BQK2R w KQkq - 0 1',
                    ],
                    text: `
                        This King's Indian Attack position was reached after just seven moves. White has reached the ideal position. Black responded to 7.e2-e4 by pushing the d-pawn through to d4. In this position, white decides to play Nd2-c4, an interesting move that combines with the Nf3 to attack the black e5-pawn twice. Black is forced to defend the pawn by playing 8.Qd8-c7.
                    `,
                },
                {
                    fens: [
                        'r1bqk2r/pp2bppp/2n2n2/2p1p3/3pP3/3P1NP1/PPPN1PBP/R1BQK2R w KQkq - 0 1',
                        'r1bqk2r/pp2bppp/2n2n2/2p1p3/2NpP3/3P1NP1/PPP2PBP/R1BQK2R w KQkq - 0 1',
                        'r1b1k2r/ppq1bppp/2n2n2/2p1p3/2NpP3/3P1NP1/PPP2PBP/R1BQK2R w KQkq - 0 1'
                    ],
                    text: `
                        Rather than play quickly or automatically, white realizes that black might try to attack the Nc4 by playing b7-b5. White would like to keep the Knight on c4, near the middle of the board. White therefore plays 9.a2-a4 in order to safeguard the Nc4 from attack. Notice that the Nd2-c4 maneuver now permits Bc1 to move out, perhaps to the g5 square. If you find this kind of position to your liking, you now know how to reach it!
                    `,
                },
            ],
        },
        {
            lessonHeader: `Colle System`,
            demo: [
                {
                    fens: ['8/8/8/8/3P4/2PBPN2/PPQN1PPP/R1B1R1K1 w Q - 0 1'],
                    text: `
                        White begins the game with a rather unassuming setup. Rather than fight immediately for the center, white has chosen a pawn structure that delays the occupation of e4. This idea is very simple. White wants to prepare e3-e4 rather than play it immediately. And so note that the white Qc2, the Bd3, the Nd2, and the Re1 are all poised to support the move e3-e4. When the move comes, it will have half an army to defend it.
                    `,
                },
                {
                    fens: ['r1b2rk1/ppqn1ppp/3bpn2/2pp4/3P4/2PBPN2/PPQN1PPP/R1B1R1K1 w Qq - 0 1'],
                    text: `
                        To bring the position about, white usually begins the game with 1.d2-d4, and continues with 2.Ng1-f3, 3.e2-e3, 4.Nb1-d2 (Knights before Bishops), and then 5.c2-c3, 6.Bf1-d3, and then castles Kingside (0-0), Rf1-e1, and Qd1-c2. Be sure not to play these moves automatically. If black initiates a capture, be sure to recapture. And do not permit black to safely advance the black e-pawn to e4 where it would fork white's Bd3 and Nf3.
                    `,
                },
                {
                    fens: ['r1b2rk1/ppqn1ppp/3bpn2/2pp4/3P4/2PBPN2/PPQN1PPP/R1B1R1K1 w Qq - 0 1'],
                    text: `
                        In this position from a real game, white plays 9.e3-e4 immediately in order to threaten e4-e5, forking the Bd6 and the Nf6. As you can see, the e4-push can be very strong, and white will usually develop a strong attack if the pawn can safely advance to the e5- square.
                        If there is a drawback to the Colle System, it is that white has made no effort to activate the Bc1. With black, you should certainly try to prevent white from playing e3-e4 and, if possible, to advance the black e-pawn to the key e4-square.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Hedgehog`,
            demo: [
                {
                    fens: ['8/5ppp/pp1pp3/8/2P1P3/8/8/8 w - - 0 1'],
                    text: `
                        Here is the Hedgehog pawn structure. The black pawns on a6, b6, d6, and e6 form a defensive wall that aims to prevent white from advancing. Some people believe that the black pawn structure resembles a hedgehog, hence its name. Note that the black c-pawn is missing. Black usually exchanges the c-pawn for the white d-pawn, as you have already seen in the Sicilian Defense.
                    `,
                },
                {
                    fens: ['q1r3k1/1brnbppp/pp1ppn2/8/2P1P3/8/8/8 w - - 0 1'],
                    text: `
                        This example illustrates a common setup for all of black's pieces within the Hedgehog. Note that the black Rooks are aggressively doubled on the c-file. The Bishop on b7 and the Queen on a8 are joining forces with the Nf6 to deliver three attacks on the white e4-pawn. The Knight on d7 can help direct the attack. If the Knight moves to e5, it will become the third attack on the white c-pawn. If the Nd7 moves to c5, it will become the fourth attack on white's e4-pawn.
                    `,
                },
                {
                    fens: ['q1r3k1/1brnbppp/pp1ppn2/8/2PNP3/1PN2P2/P3QBPP/1BR1R1K1 w - - 0 1'],
                    text: `
                        One of the best features of the Hedgehog is that there are no meaningful pawn weaknesses in the black camp. To reach the Hedgehog structure, black can play a Sicilian against 1.e2-e4. When white plays d2-d4, black should capture the pawn so long as a Knight or a Queen will recapture. Black usually begins to set up the Hedgehog structure with e7-e6, a7-a6, d7-d6, Ng8-f6, Nb8-d7, and often Qd8-c7. The Bishops then move to e7 and b7 and, after castling, black will play Ra8-c8. The Queen on c7 "tucks" to b8 and perhaps to a8, where it is very safe from attack, and plays an important role in attacking the white center.
                    `,
                },
                {
                    fens: ['q1r3k1/1brnbppp/pp1ppn2/8/2PNP3/1PN2P2/P3QBPP/1BR1R1K1 w - - 0 1'],
                    text: `
                        The Hedgehog is considered an all-purpose weapon because it can be reached easily against 1.e2-e4, 1.c2-c4, and 1.Ng1-f3, all by beginning with black's move 1.c7-c5.
                        This position illustrates a common Hedgehog tactic. Black has completed the development of all the pieces. Black now plays b6-b5, knowing that if white captures on b5 with the c4-pawn, black can unleash the power of the doubled Rooks with Rook capturing Nc3.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Avant-Garde`,
            demo: [
                {
                    fens: ['r2q1rk1/pbpnnpbp/1p1pp1p1/8/8/8/8/8 w - - 0 1'],
                    text: `
                        You will see that this setup would not be difficult to achieve. Both Bishops are fianchettoed, the Knights have developed toward the center at d7 and e7. Black's position is cramped but quite versatile; there are no weaknesses. Most white players decide to expand in the center and simply can't resist trying to break down this system.
                    `,
                },
                {
                    fens: ['r2q1rk1/pbpnnpbp/1p1pp1p1/8/3PP3/2N2N2/8/8 w - - 0 1'],
                    text: `
                        In this figure showing black's position as well as a portion of white's center, white can decide to move forward with e4-e5. Black will not capture on e5 but rather will respond with d6-d5 and then c7-c5, counterattacking on the Queenside.
                        If, instead, white attacks with d4-d5, black, rather than capture, will often play e6-e5 and then f7-f5, counterattacking on the Kingside. One Canadian Grandmaster, Duncan Suttles, made a chess career out of playing such positions with black and with white as well. Many others find the system to be very slow, but Suttles showed that with sufficient patience, the Avant-Garde can be a dangerous weapon.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Dragon`,
            demo: [
                {
                    fens: ['r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w Kq - 0 1'],
                    text: `
                        The Dragon is a specific variation of the Sicilian Defense, but for our purposes, think of the Dragon simply as one possible strategy for developing the white and black pieces. In this position, black has fianchettoed the dark-squared Bishop within the Dragon's head and castled on the Kingside. Black's formation is set for a sharp attack on the white Queenside.
                    `,
                },
                {
                    fens: ['r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w Kq - 0 1'],
                    text: `
                        Black's decision is whether to attack first with the pawns or with the pieces. In a pawn-led attack, black might advance the a-pawn to a6 and the b-pawn to b5 and then perhaps on to b4. Then black might continue with Qd8–a5. In a piece-led attack, black might play Bc8-d7 and Ra8-c8, bringing the Rook quickly to the open c-file. Black might then continue with Nc6-e5 and then Ne5-c4, where the Knight would fork the white Queen and the Bishop on e3.
                    `,
                },
                {
                    fens: ['r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w Kq - 0 1'],
                    text: `
                        The position is "double-edged" because
                        white also has a plan to slay the Dragon. White has two ideas here. The pawn-led attack involves g2-g4 and then h2-h4-h5, an effort to pry open the h-file for the Rook on h1 and perhaps also the Queen after Qd2-h2.
                    `,
                },
                {
                    fens: ['r1bq1rk1/pp2ppbp/2np1np1/8/3NP3/2N1BP2/PPPQ2PP/2KR1B1R w Kq - 0 1'],
                    text: `
                        In a piece-led attack, white might try Bf1-c4 as well as Be3-h6—an attempt to exchange black's dark-squared Bishop, which is an important defender of the black Kingside. In order to fianchetto, black had to advance the g-pawn to g6. We know that every pawn move creates weaknesses. In this case, the h6-square is no longer defended by the black g-pawn.
                        Notice how carefully white has constructed the attack to go after the weakness on h6. White has castled on the Queenside in order to be able to push the Kingside pawns forward without compromising the King's safety. And white has pointed the Qd2 and the Be3 toward the key h6-square. White has also safeguarded the Be3 by placing the f-pawn on f3 where it prevents the annoying Nf6-g4.
                    `,
                },
                {
                    fens: ['2r3k1/pp1bpp1p/3p1npQ/q1r5/4P1P1/2NR1P2/PPP1N3/2K4R w K - 0 1'],
                    text: `
                        During tournament play in this position, white (Anatoly Karpov) and black (Victor Kortchnoi) were engaged in a titanic struggle in which white eventually won. In this Dragon, white has succeeded in exchanging the dark-squared Bishops and, hoping to play Qh6xh7, would now like to eliminate the key Nf6. Karpov therefore played g4-g5 and, after black's Rc5xg5, continued with the amazing Rd3-d5, a move that looks bad because the Nf6 attacks the d5-square. Of course, the Nf6 must not move because it is needed to defend the h7-square from the threat of Qh6xh7. As you can appreciate, games in the Dragon tend to be among the most complex in chess.
                    `,
                },
            ],
        },
        {
            lessonHeader: `French Winawer`,
            demo: [
                {
                    fens: ['rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1'],
                    text: `
                        As you saw in Chapter 9, in the French Defense, white is able to place both the d- and e-pawns on the 4th rank. Black supports the d7-d5 counter with e7-e6. The French Winawer variation begins after 3.Nb1-c3 and then black's move, 3.Bf8-b4. This Bishop move is interest- ing. Black breaks the rule of moving a Bishop before a Knight, but the pin on white's Nc3 is annoying. The Knight was defending the white e4-pawn, which white must now advance or further defend.
                    `,
                },
                {
                    fens: [
                        'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        White prefers to push with 4.e4-e5 in order
                        to imprison black's bad light-squared Bishop on c8. The pawn chain that emerges has the strong pawn on e5 but also the weak pawn on d4. Black therefore plays the move 4.c7-c5 in an effort to disrupt white's pawn chain. White now "puts the question" to the black Bb4 with 5.a2-a3. After all, the Bishop moved early and is now being forced to move again.
                    `,
                },
                {
                    fens: [
                        'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1b5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        Black responds by capturing the Nc3 with Bb4, check, and white of course recaptures with the b2-pawn. The following position includes one additional move by black, 6.Ng8-e7, a logical square for the Knight now that the white pawn on e5 is guarding the natural f6-square.
                        In this interesting position, notice that both sides have long pawn chains. White's pawn chain stretches from c3 through e5, while black's reaches from the backward pawn on f7 through to d5. As a result of the two chains, black's Bishop on c8 is bad because it is boxed in by the fixed black pawns. Unfortunately for black, the good dark-squared Bishop has already been traded.
                    `,
                },
                {
                    fens: [
                        'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1b5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        White can try to take advantage of the absence of black's dark-squared Bishop in two ways. First, white could advance the a-pawn once again to a4 and then play Bc1-a3. From a3, the Bishop would exert powerful pressure on the a3-f8 diagonal.
                        Or, white could play the surprising Qd1-g4. White has not yet developed the Ng1 or the Bishops, but the early Queen move causes a real problem for black. With the black Bishop gone from f8, how should black defend the pawn on g7? Black could castle, but it's not hard to visualize a powerful attack brewing with moves such as Bf1-d3, Bc1-h6, h2-h4, Rh1-h3-g3, and Ng1-e2-f4.
                    `,
                },
                {
                    fens: [
                        'rnbqk1nr/ppp2ppp/4p3/3p4/1b1PP3/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/ppp2ppp/4p3/3pP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/2N5/PPP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/1b1P4/P1N5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1b5/1PP2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk1nr/pp3ppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqk2r/pp2nppp/4p3/2ppP3/3P4/P1P5/2P2PPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        In response to 7.Qd1-g4, black could push the g-pawn to g6. But every pawn move creates weaknesses, in this case on the f6 and h6 squares. In most games, black therefore plays 7.Qd8–c7, permitting white to capture the g7-pawn and hoping for counter-play on the Queenside.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Stonewall`,
            demo: [
                {
                    fens: ['8/8/4p3/3p1p2/3P1P2/4P3/8/8 w - - 0 1'],
                    text: `
                        Notice that each side will have a bad Bishop. This fixed structure makes white's dark-squared Bishop bad. Black's light-squared Bishop will also be bad. Each side would very much like to trade its bad Bishop for another Bishop or a Knight.
                    `,
                },
                {
                    fens: ['r4rk1/pp2q1pp/2pbpn2/3p1p2/2PPnP2/1P1BPQ2/P2N2PP/1RB2RK1 w - - 0 1'],
                    text: `
                        In open positions, Bishops are better than Knights. Here, with the pawns locked in the center, the Knights can be more valuable. This is a stonewall position in which black is doing very well. Black has managed to trade the light-squared Bishop for a Knight on the f3-square. Black's Knight on e4 is especially strong, located in the middle of the board where the enemy pawns can't attack it.
                        White would also like to place a Knight on the key e5-square, but the Queen on f3, which arrived there to recapture black's Bishop, is blocking the Nd2's path to f3 and then e5. With such wonderful activity, black draws up a neat attacking plan. Black will play Kg8-h8, slide the Rf8-g8, and attempt to attack on the flank with g7-g5.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Benoni`,
            demo: [
                {
                    fens: [
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        As you can see in this position, the black pawn on c5 presents three options to white. White can capture the black c5-pawn, but that would simply double white's c-pawns and invite black to recapture in any number of ways. The strongest method for black would probably be 3.e7-e6, hoping to recapture with the Bishop. If then 4.b2-b4, black has the strong response 4.a7-a5, attacking the b4-c5 pawn chain at the base.
                        As an alternative, white could defend the pawn with Ng1-f3, but that would invite black to capture the d4-pawn with the flank c5-pawn and reach a Hedgehog position with e7-e6, a7-a6, and Qd8-c7.
                    `,
                },
                {
                    fens: [
                        'rnbqkb1r/pppppppp/5n2/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pppppppp/5n2/8/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1ppppp/5n2/2p5/2PP4/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1ppppp/5n2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/8/PP2PPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1p1ppp/4pn2/2pP4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1p1ppp/5n2/2pp4/2P5/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp1p1ppp/5n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkb1r/pp3ppp/3p1n2/2pP4/8/2N5/PP2PPPP/R1BQKBNR w KQkq - 0 1',
                    ],
                    text: `
                        White's best move in this position is to push the d4-pawn to d5. Here is the position after 3.d4-d5 e7-e6, 4.Nb1-c3 e6xd5, 5.c4xd5 d7-d6. As you can see, there is a significant imbalance in the pawn structure. Black has three pawns on the Queenside, a majority compared to white's two pawns. By contrast, white has a five-on-four advantage on the Kingside.
                        White would like to continue with e2-e4 with the idea of preparing for an e4-e5 advance. Apart from trying to prevent white's advance of the e-pawn, black will try to advance the Queenside pawns. The fianchetto of the black's dark-squared Bishop and castling on the Kingside will assist in that goal.
                    `,
                },
                {
                    fens: [
                        '1rbqr1k1/ppn2pbp/3p1np1/2pP4/P3PP2/2N5/1P1NB1PP/R1BQ1RK1 w - - 0 1',
                    ],
                    text: `
                        Here is a Benoni after 12 moves. Black has fianchettoed the dark-squared Bishop, castled, and brought a Rook to e8 to watch over the key e5-square. Black has also prepared to advance the b7-pawn by playing the Nb8-a6-c7 and by sliding the Rook from a8 to b8.
                        White played f2-f4 to support an e4-e5 advance. The Be2 is likely soon to support the white center with Be2-f3. The Nd2 will likely move to c4 in order to support e4-e5 and to place some pressure on black's weak pawn on d6.
                    `,
                },
            ],
        },
    ],
};