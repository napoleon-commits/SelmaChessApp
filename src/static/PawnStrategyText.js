export default {
    header: 'Pawn Strategy',
    body: `
        Unlike Kings, Queens, Bishops, Knights, and Rooks, pawns can move in only one direction: forward, ever forward. Reach the final rank and the lowly pawn, the foot soldier of chess, can transform itself into any piece except a King (players most often opt to promote to a Queen). But there is much more to pawns than just the quest to promote into a more powerful piece. As the pawns move forward, they open up diagonals for the Bishops, protect other pieces, and often lead the way for attacks. They can pry open an opponent's Kingside, but they can also spell doom when they become weak, and are then subject to capture.
    `,
    items: [
        {
            lessonHeader: `Don't Double Your Pawns`,
            demo: [
                {
                    fens: [
                        '8/2p5/2p5/2p5/8/5P2/5P2/8 w - - 0 1'
                    ],
                    text: `
                        In this position, white has doubled pawns
                        on the f-file, while black has tripled pawns on the c-file. These pawns are weak because they cannot defend one another. If you were playing white, for example, you might attack the black pawns with Rooks along the c-file, and perhaps also with your other pieces. Black might decide to try to defend the pawns or, alternatively, attack the weak white doubled pawns.
                    `,
                },
                {
                    fens: ['3r1rk1/p1p2p1p/2p2p2/8/8/4P3/PPR2PPP/2R3K1 w - - 0 1'],
                    text: `
                        Here, black has not one but two sets of doubled pawns. White's strategy is clear. White has doubled the white Rooks on the c-file and will, on the next move, capture the weak black pawn on c6. In contrast, the white pawn structure seems quite strong with no obvious weaknesses. As a result, black cannot easily mount a counterattack on white's position.
                    `,
                },
                {
                    fens: ['3r1rk1/p1p2p1p/2p2p2/8/8/4P3/PPR2PPP/2R3K1 w - - 0 1'],
                    text: `
                        It is worth noting that there are many situations in which you need not be in rush to attack such weaknesses. By all means do so if you see a clear win as a result, as in this situa- tion, but keep in mind that weaknesses such as doubled pawns are "structural" in that the weaknesses will usually be there for the whole game, and you will easily be able to capture such pawns once all of your pieces are well developed.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Pawn Islands`,
            demo: [
                {
                    fens: ['8/p1p1pp1p/8/8/8/8/PPP2PPP/8 w - - 0 1'],
                    text: `
                        Here, white has two pawn islands. Pawn islands consist of a single pawn or group of side-by-side pawns that are separated from other pawns by open files. The white pawns on the a-, b-, and c-files form one island, while the white pawns on the f-, g-, and h-files form the other island. Side-by-side, these pawns do not defend one another, but we consider these strong formations because, unlike the doubled pawns we just saw, they contain no permanent weaknesses and are capable of defending one another.
                    `,
                },
                {
                    fens: ['8/p1p1pp1p/8/8/8/8/PPP2PPP/8 w - - 0 1'],
                    text: `
                        By contrast, the black pawns in this diagram form a total of four pawn islands and are considered much weaker. Three of the pawns have no neighbors. Therefore, if attacked, these pawns would need to be defended by Knights, Bishops, Rooks, or Queens, pieces that in most cases have more important roles to play than to defend a lowly pawn.
                        The general rule here is simple: During the game, try to have fewer pawn islands than your opponent.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Some Doubled Pawns Are Strong`,
            demo: [
                {
                    fens: ['3qk2r/rbp1bppp/pp2pn2/8/P1BPP3/2N1nQ2/1P2NPPP/3R1RK1 w k - 0 1'],
                    text: `
                        In the following position, the black Knight has just captured on the e3 square. White could automatically recapture with the Queen to avoid doubling the white pawns on the e-file. A great American chess player, Frank Marshall, reached this position in a game against Abraham Kupchik in 1915. Marshall decided that capturing with the pawn had some advantages that outweighed the structural weakness of doubling the pawns.
                    `,
                },
                {
                    fens: ['3qk2r/rbp1bppp/pp2pn2/8/P1BPP3/2N1PQ2/1P2N1PP/3R1RK1 w k - 0 1'],
                    text: `
                    Here is the position after the pawn capture. The new pawn on e3 helps to support the white center by defending the white d4-pawn. More important, by recapturing with the pawn, white has opened up the f-file for the Rook. To be sure, white now has four pawn islands while black has only two, but Marshall, who went on to win the game, felt that having both the Queen and the Rook on the open file and the strengthened center more than compensated for the doubled pawns and the extra pawn island.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Pawn Chains`,
            demo: [
                {
                    fens: ['8/8/8/4P3/3P4/2P5/8/8 w - - 0 1'],
                    text: `
                        In this position, the three white pawns are forming a chain. Note that two of the three white pawns are defended. The most advanced white pawn on e5 is defended by the pawn on d4. The pawn on d4 is defended by the pawn on c3. By contrast, the white pawn on c3 is completely undefended. The pawn in the rear of the chain is considered the weakest of the pawns precisely because the other pawns can no longer protect it.
                    `,
                },
                {
                    fens: [
                        '8/2pn4/4p3/3pP3/3P4/8/4NP2/8 w - - 0 1',
                        '8/3n4/4p3/2ppP3/3P4/8/4NP2/8 w - - 0 1'
                    ],
                    text: `
                        The weak pawn in the chain often becomes the main target of the attack by your oppo- nent. In this position, black has prepared and will now play the move c7 to c5 (c7-c5).
                        If white should capture black's c5-pawn (d4xc5), both of white's remaining pawns would be weak and subject to capture. White would try a similar strategy by advancing the f-pawn from f2 to f4 (f2-f4). White's plan would then be to play f4 to f5 (f4-f5) with the idea of attacking the weak e6-pawn in black's short pawn chain.
                    `,
                },
                {
                    fens: [
                        'r2qk2r/p2n1p2/b1n3p1/3NP2p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r2qk2r/p2n1p2/b1n1P1p1/3N3p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r2qk2r/p2n4/b1n1p1p1/3N3p/3P4/6Q1/PPP2PP1/2KR3R w Kkq - 0 1',
                        'r2qk2r/p2n4/b1n1p1Q1/3N3p/3P4/8/PPP2PP1/2KR3R w Kkq - 0 1',
                    ],
                    text: `
                    This position offers a more practical example. White, on the attack, advances the pawn to e6 (e5-e6) where it attacks the base of black's f7-g6-h5 pawn chain. If black responds by capturing white's e6-pawn (f7xe6), white will be able to respond with Queen to g6 to capture the middle pawn in the chain, simultaneously putting the King in check (Q3-g6+).
                    `,
                }
            ],
        },
        {
            lessonHeader: `Pawn Majorities`,
            demo: [
                {
                    fens: [
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/2P5/PP6/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6p1/7p/6P1/8 w - - 0 1'
                    ],
                    text: `
                        In this position, both sides have useful pawn majorities. On the Queenside, for example, white has three advanced pawns facing only two black pawns. With white to move, white can make significant progress toward promoting a pawn by advancing the c-pawn forward (c5-c6). With no black pawn on c7, white threatens simply to advance the c-pawn from c6 to c7. Black can delay the advance of the white pawn temporarily by capturing on c6 (b7xc6), but white will be able to use the power of this majority to force a white pawn through no matter what black tries.
                    `,
                },
                {
                    fens: [
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/2P5/PP6/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6p1/7p/6P1/8 w - - 0 1'
                    ],
                    text: `
                        Black, of course, has a useful pawn majority on the Kingside. Knowing that it is not possible to prevent white from Queening a pawn, black might instead seek a Queen by advancing the h-pawn forward to h3 (h4-h3). Here too, white can delay the advance with a capture (g2xh3), but the majority will succeed in making a passed pawn (remember, "passed pawn" is just another term for a pawn that can't be opposed by an enemy pawn).
                    `,
                },
                {
                    fens: ['8/4k1p1/2p2p1p/1pP2P1P/1P2K3/1P6/8/8 w - - 0 1'],
                    text: `
                        In this next position, on the Queenside, white has a three-pawn majority against only two for black, but the pawns are all fixed and the extra pawn is not capable of being forced through for promotion.
                        Similarly, on the Kingside, black has a pawn majority, but the pawn majority is not useful. Any effort by black to advance the g-pawn will result in the pawn's capture and in a dangerous passed pawn for white.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Isolated Pawns`,
            demo: [
                {
                    fens: ['8/ppp3pp/4p3/8/3P4/8/PP3PPP/8 w - - 0 1'],
                    text: `
                        In this position, white and black both have three pawn islands. Black's smallest island, the e6-pawn, is an isolated pawn. Notice there are no black pawns on the d-file or on the f-file. If a white piece was to attack the black e6-pawn, black would have to defend the isolated e-pawn with a piece because there are no pawns to do the job. To try to eliminate the isolated pawn, black might try to push it to e5 in an effort to exchange it.
                        Similarly, one of white's island is the isolated pawn on d4. Faced with a lasting weakness, white might consider advancing the pawn
                        to d5 in an effort to exchange it for black's e6-pawn.
                    `,
                },
                {
                    fens: ['8/ppp3pp/4p3/8/3P4/8/PP3PPP/8 w - - 0 1'],
                    text: `
                        Isolated pawns like these play an important role in shaping strategy. Here, black might try to double Rooks. For example,
                        black might place a Rook or two on the d-file to place pressure on or perhaps capture the isolated white d-pawn. White could try a similar strategy, doubling the white Rooks on the e-file to attack black's weak e6-pawn.
                    `,
                },
                {
                    fens: ['8/ppp3pp/4p3/3nN3/3P4/8/PP3PPP/6K1 w - - 0 1'],
                    text: `
                        In this next position, white and black have both succeeded in blockading each other's isolated pawns. The white Knight on e5 occupies a key square, right in the center of the board where the black pawns will not be able to attack it.
                        Similarly, the black Knight on d5 blockades white's isolated d-pawn. From these key squares, the Knights will often have opportunities to lash out with forks or to assist in the attacks on each other's Kings.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Backward Pawns`,
            demo: [
                {
                    fens: ['8/p7/1p6/1P3p2/6p1/6P1/5P1P/8 w - - 0 1'],
                    text: `
                        There are several backward pawns in the following position. Black's a7-pawn is a glaring example. If black moves the a7-pawn forward, white will be able to capture it on a6. Note that white would be able to capture en passant if black advanced the a-pawn two squares to a5. For a refresher on en passant captures, see Chapter 2, "Special Moves."
                        There are three other backward pawns in this position: f5, f2, and h2. Imagine blockading these pawns with a Knight, or mounting an attack on them with your Bishops, Rooks, and Queen.
                    `,
                },
                {
                    fens: ['8/p7/Rp6/1P3p2/6p1/6P1/5P1P/R7 w - - 0 1'],
                    text: `
                        In this position, white has succeeded in fixing and attacking black's backward a7-pawn with both Rooks. Because no pawns can defend the backward pawn, black will either have
                        to defend the pawn with a piece or else
                        let white capture it. Try to imagine how to defend the a7-pawn. Perhaps you would move a Bishop to b8. Or perhaps, you would use two Rooks along the 7th rank.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Hanging Pawns`,
            demo: [
                {
                    fens: ['8/p4ppp/8/2pp4/8/6P1/PP2PP1P/8 w - - 0 1'],
                    text: `
                        In this position, black's pawns on c5 and d5 are said to be "hanging." The word suggests danger, and as you will see, such pawns can bring about wonderful attacking chances or be the cause of defeat. With white to play, imagine how you might organize your pieces to attack either the c5- or the d5-pawn. Perhaps you might double your Rooks on the c- or d-file. Perhaps you might use your Knights to attack one of the pawns. In this section, there are several examples that will illustrate the potential strength and weakness of hanging pawns.
                    `,
                },
                {
                    fens: ['4r3/p3rppp/b7/2p5/3p4/6P1/PP2PP1P/8 w - - 0 1'],
                    text: `
                        In this position, the hanging pawns have helped black to attack the white pawn on e2 (d5-d4). Notice that the advanced black pawn on d4 helps to control the key e3 square. White cannot advance the e2-pawn without black having an opportunity to capture with the d-pawn on e3. Notice that black has assembled a massive amount of pressure on the white e2-pawn. The two Rooks and the black Bishop on a6 are all combining to pressure white's e2-pawn. It should be clear that black's hanging pawns are assisting in the attack. The most meaningful weakness in the position is on e2.
                    `,
                },
                {
                    fens: ['1r6/pr3ppp/5b2/3p4/2p5/6P1/PP2PP1P/8 w - - 0 1'],
                    text: `
                        Similarly, in this position, the hanging pawns have helped black to attack the white pawn on b2. In this case, black has advanced the c-pawn to c4 (c5-c4), helping to fix and attack the key white pawn on b2. Black's pieces are poised here for the attack, with both Rooks and the black Bishop joining in the attack on the b2-pawn. In this case, the most meaningful pawn weakness is on b2.
                    `,
                },
                {
                    fens: ['8/p4ppp/8/2p5/2Rp4/BP1N2P1/P3PP1P/2R5 w - - 0 1'],
                    text: `
                        In this position, the hanging pawns are very weak. Black has advanced the d-pawn to d4 (d5-d4), creating a "hole" in the pawn struc- ture on c4. Rather than play passively and permit an attack on the e2-pawn, white has responded aggressively by fixing and then attacking the backward pawn on c5. As you can see, all four of the white pieces have joined in on the attack on black's c5-pawn.
                    `,
                },
                {
                    fens: ['8/p4ppp/8/3p4/2p5/2N1B1P1/PP1RPPBP/3R4 w - - 0 1'],
                    text: `
                        Here, the hanging pawns are also very weak. This time, black has pushed the c-pawn to c4 (c5-c4), leaving a backward pawn on d5. White has again responded aggressively by mounting a huge attack on the backward d5-pawn. As you can see, the white Knight, the two white Rooks, and white's light-squared Bishop have all joined in the attack.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Pawn Masses`,
            demo: [
                {
                    fens: [
                        'r3k2r/pb2q3/3b1np1/1P5p/1PpppP2/P6N/4B1PP/R1BQ1RK1 w Qkq - 0 1',
                        'r3k2r/pb2q3/3b1np1/1P5p/1Pp1pP2/P2p3N/4B1PP/R1BQ1RK1 w Qkq - 0 1'
                    ],
                    text: `
                        In this position, three black pawns have crashed through the enemy lines and together, threaten to overwhelm the white army. The simplest way for black to proceed is to advance the black d-pawn forward from d4 to d3 (d4-d3). On d3, the well-protected pawn attacks the white Bishop on e2. Note that the Bishop, once attacked, would have no safe retreats.
                        As you might imagine, pawn masses are fun to have. Make sure, of course, that you protect your pawns carefully. For example, in this position, if it were white's move, the white Bishop could capture the undefended black c4-pawn or the white Queen could safely capture the d4-pawn.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Pawns Can Fork, Too!`,
            demo: [
                {
                    fens: [
                        '8/8/3r1n2/8/4P3/8/8/8 w - - 0 1',
                        '8/8/3r1n2/4P3/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        Here's a simple example. By advancing the white e-pawn to e5, the little white pawn will be attacking the black Rook and Knight at the same time. Be on the lookout for such moves because they often result in the gain of material.
                    `,
                },
                {
                    fens: ['1qr1r1k1/1b1nbppp/pp1ppn2/8/2PNPB2/1PN5/P1Q1BPPP/2RR2K1 w - - 0 1'],
                    text: `
                        In this position, white has just moved the dark-squared Bishop to f4. By advancing the black e-pawn from e6 to e5 (e6-e5), black can fork the white Bishop and the white Knight
                        on d4.
                        If white responds by moving the Knight, black could capture the Bishop. And of course, if white were to retreat the Bishop, black could capture the Knight.
                    `,
                }
            ],
        },
        {
            lessonHeader: `Passed Pawn Blockaders`,
            demo: [
                {
                    fens: ['8/P1n5/8/8/8/8/8/R7 w - - 0 1'],
                    text: `
                        In this position, with black to move, the Knight can prevent the white a-pawn from promoting into a Queen by blockading the pawn. Move the Knight into the corner at a8, and you will prevent the further advance of the a-pawn.
                        Knights usually make the best blockaders. If you block a passed pawn with a more powerful piece, a Queen for example, the Queen would have to move off its blockading square if attacked by a piece of lesser value. The Knight makes the best blockader because it is the least valuable among the major (Queen and Rook) and minor (Bishop and Knight) pieces.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Every Pawn Move Creates a Weakness`,
            demo: [
                {
                    fens: [
                        '1qr1r1k1/1b1nbppp/pp1ppn2/8/2PNP3/1PN1B3/P1Q1BPPP/2RR2K1 w - - 0 1',
                        '1qr1r1k1/1b1nbppp/pp1p1n2/4p3/2PNP3/1PN1B3/P1Q1BPPP/2RR2K1 w - - 0 1'
                    ],
                    text: `
                        In this position, with black to move, black is considering the possibility of advancing the pawn on e6 to e5. The pawn move makes some sense. The pawn will move forward and force the white Knight on d4 to move. However, the pawn on e6 currently defends the d5 and f5 squares. If black advances the e-pawn to e5, both the d5 and f5 squares will become weak.
                    `,
                },
                {
                    fens: ['1qr1r1k1/1b1nbppp/pp1p1n2/4p3/2PNP3/1PN1B3/P1Q1BPPP/2RR2K1 w - - 0 1'],
                    text: `
                        Here is the position after the advance of the black e-pawn. It is true that the white Knight on d4 must move, but white has the strong move Knight d4 to f5 (Nd4-f5). On f5, the white Knight attacks the black Bishop on e7 and places more pressure on what is now a backward black pawn on d6.
                    `,
                },
                {
                    fens: ['1qr1r1k1/1b1nbppp/pp1p1n2/4p3/2PNP3/1PN1B3/P1Q1BPPP/2RR2K1 w - - 0 1'],
                    text: `
                        More important, perhaps, the advance of the black e-pawn has created a hole in the black pawn structure on the key central d5-square. For example, white is likely, within a few moves, to move the Knight on c3 into the hole on d5. Both of these key moves, Knight to f5 (Nd4-f5) and Knight to d5 (Nc3-d5), are possible because black decided to advance the e-pawn to e5. So keep in mind, all pawn moves create such weaknesses. Be sure to locate the weaknesses and consider their importance before you lash out with pawn moves.
                    `,
                },
            ],
        },
    ],
};