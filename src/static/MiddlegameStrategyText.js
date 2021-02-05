export default {
    header: 'Middlegame Strategy',
    body: `
        Many players memorize long opening variations but have little to no idea how to proceed
        once they get to the middle of a game. You already know about having good and bad pieces,
        placing Rooks on open files, placing the Knights in the center where the enemy pawns can't attack them,
        and trying to avoid bad Bishops. On this page are four basic principles and strategies that will help
        you integrate many of these ideas.
    `,
    items: [
        {
            header: 'Five Steps to Victory',
            subtitle: `
                The five steps that I outline here were first discussed by Grandmaster Aron Nimzovitsch in his books My System and Blockade. He never actually called them “the five steps to victory,” but these steps are discussed extensively in his books. The five steps are relatively simple but account for many of my victories, and they are present in one form or another in many, if not most, master games.
            `,
            lessonHeader: `The Steps`,
            demo: [
                {
                    fens: ['8/pp3ppp/3p4/4p3/4P3/8/PPP2PPP/8 w - - 0 1'],
                    text: `
                        The first step is simple enough. You will win many games if you train yourself to be aware of and to quickly identify all of your oppo- nent’s pawn weaknesses. In this example, the two central black pawns on d6 and e5 form a pawn chain. As you saw in Chapter 6, “Pawn Strategy,” the backward pawn at d6 is the weaker of the two pawns because no pawn can defend it. Black’s d6-pawn represents a key weakness in the black pawn structure. Having identified the key weakness on d6, you are ready for step 2.
                    `,
                },
                {
                    fens: [
                        '8/pp3ppp/3p4/4p3/4P3/4N3/PPP2PPP/8 w - - 0 1',
                        '8/pp3ppp/3p4/3Np3/4P3/8/PPP2PPP/8 w - - 0 1',
                    ],
                    text: `
                        The second step is quite simple. To prevent black from pushing the d6-pawn to d5, white must fix black’s weakness by occupying or controlling the d5-square.
                        In Chapter 4, “Knight Strategy,” you learned that it is advantageous to place Knights in the center of the board where they can’t be attacked by pawns. Here, you can see that it would be helpful to place a Knight—or another piece, for that matter—in the “hole” at d5.
                        By moving the Knight to d5, or even by using the Knight to control d5, you will prevent black from eliminating the d6-pawn weakness by pushing the pawn from d6 to d5. In this figure, white controls the key d5-square with both the Knight on e3 and the pawn on e4. If black were to push the d6-pawn to d5, white would be able to win it. With the Knight on e3, the pawn on d6 has been fixed because
                        it can’t successfully move without being lost.
                    `,
                },
                {
                    fens: ['8/pp3ppp/3p4/4p3/2P1P3/BP1R4/P2R1PPP/3Q4 w - - 0 1'],
                    text: `
                        Once you have identified and fixed the weak- ness, it’s time for step 3: Attack the weakness with your pieces—not your pawns. In this position, it is clear that white has successfully arranged an attack on black’s d6-pawn with four different pieces, the doubled Rooks on d2 and d3, the Queen on d1, and even the dark-squared Bishop on a3. Notice that white’s attack has been patient in that the Queen is not leading the charge on d3 but rather is attacking from the rear on d1. Strong players know that it’s often more effective to have the less valuable pieces lead the attack. As they say in boxing, “Don’t lead with your nose.”
                    `,
                },
                {
                    fens: ['1q1r2k1/pp1rbppp/3p4/4p3/2P1P3/BP1R4/P2R1PPP/3Q2K1 w - - 0 1'],
                    text: `
                        If you have successfully carried out the first three steps, your opponent must carry out step 4. For every one of your attacks on the pawn weakness, your opponent will have
                        to find a defender. If your opponent fails to defend the pawn adequately, look to take the target-pawn first “with the little thing.” What “little thing,” you ask? It depends on the posi- tion but it is often a Knight or a Bishop.
                        In this position, white is still attacking black’s d6-pawn with four pieces, and black has responded by defending the poor d6-pawn with four pieces—Rd8, Rd7, Be7, and Qb8. As a result, these pieces aren’t very active.
                        Note that, as a result of the first four steps, white has two active Rooks on a semi-open file, while black’s Rooks are stuck defending the d6-pawn. White has a good Bishop on a3, attacking the d6-pawn, while black’s Be7 is bad, stuck behind the fixed d6-pawn. Even the white Queen on d1 is more active than its black counterpart on b8.
                    `,
                },
                {
                    fens: ['1q1r2k1/pp1rbppp/3p4/2P1p3/4P3/BP1R4/P2R1PPP/3Q2K1 w - - 0 1'],
                    text: `
                        By the time your opponent has completed step 4, he’ll know that there’s trouble ahead. Most or all of your pieces will be active by focusing their energy on a single fixed point. By contrast, your opponent’s pieces will be relatively weak, defending rather than attacking a weakness.
                        For the final step, attack the weakness with a pawn. As you can see in this position, white has simply advanced the c4-pawn to c5 and black is in a quandary. The black d6-pawn has three options. It can capture on c5, push forward to d5, or remain where it is. We know that the pawn can’t push forward to d5 because it is fixed. On d5, white would have four attacks on the pawn while black would have only two defenses (the Rooks).
                        Instead, if black were to capture with d6xc5, white would suddenly have three attacks on the Rd7. Capturing the white pawn would lose a black Rook.
                        Black could do nothing, but white would still have five attacks on the d6-pawn, and black would have only four defenses. On white’s next move, white would continue with c5xd6, winning the key black pawn.                    
                    `,
                }
            ],
        },
        {
            header: 'Candidate Moves and Planning',
            subtitle: `
                Consider your options (candidates) at every move. Very few masters move quickly. Instead, they tend to play very thoughtfully. But what are they thinking about?
                At every move, most strong players consider at least three different moves. That may surprise beginners, who are content to play the first good-looking move they find. Emmanuel Lasker summed it up by explaining that even after you find a strong move, keep look- ing. You may find something stronger.
            `,
            lessonHeader: `Making Plans`,
            demo: [
                {
                    fens: ['r2q1rk1/pb2np1p/1p1b2p1/3P2N1/3P4/3B1Q2/P4PPP/R1B2RK1 w - - 0 1'],
                    text: `
                        Many beginners believe that the masters have trained themselves to think many moves ahead. The fact is that masters have an advantage. Masters rarely calculate long forced sequences. Although some rely on intuition or an innate feel for the game, most are able to plan ahead. They have a sense of where the strongest squares are and where each piece belongs. From experience, they know how to conduct attacks and how to coordinate their pieces.
                        To illustrate the process, this section follows the ideas and considerations through 12 consecutive moves of a master game.
                        In this first position, white already has a tangible advantage. The move Nf3-g5 has already caused black to prevent Bd3xh7 with the move g7-g6, a pawn advance that has weakened the black Kingside. Notice that by moving the g-pawn forward, the f6 and h6 squares are now weak. White would like to move the dark-squared Bishop on c1 to h6 where it would attack
                        the black Rf8 and also control the g7-square
                        in front of the black King. White would also like to further weaken the black Kingside.
                        White therefore has two ideas. The first is the move Qf3-h3 with the threat of Qh3xh7 checkmate (Ng5 would defend Qh7). The threat of checkmate would require black
                        to weaken the Kingside with h7-h5. White could also try Ng5-e4, which is a strong looking move with the idea of both Ne4-f6 check as well as opening the Bc1’s path to the h6 square.
                        Both plans are legitimate. Although you should keep in mind the principle that when two moves look good, one is always better than the other. In this case, white plays Qf3-h3 in order to further weaken the black Kingside.
                    `,
                },
                {
                    fens: ['r2q1rk1/pb2np2/1p1b2p1/3P2Np/3P4/3B3Q/P4PPP/R1B2RK1 w - - 0 1'],
                    text: `
                        As you can see, black has prevented the immediate checkmate by advancing the h7- pawn to h5, but the pawn move has further weakened the black Kingside. It would now be more difficult, for example, to drive the Ng5 away, and the support for the g6-pawn has been reduced.
                        White might again try Ng5-e4 with the idea
                        of Ne4-f6 check and Bc1-h6. That idea seems even stronger now that the Kingside is weaker. White could also try to advance the f-pawn to f4 and then f5. Or white could play g2-g4 to try to batter down the black Kingside.
                        White must decide whether to conduct a pawn-led or a piece-led attack. Both pawn moves weaken the white Kingside. White therefore decides on the first course of action, Ng5-e4, with the idea of activating the Bc1. Black responds by capturing on d5 with the Ne7. The Nd5 will be well posted in the center of the board where the white pawns will not be able to attack it.
                    `,
                },
                {
                    fens: ['r2q1rk1/pb3p2/1p1b2p1/3n3p/3PN3/3B3Q/P4PPP/R1B2RK1 w - - 0 1'],
                    text: `
                        White has three candidate moves in this next position. White could capture the Bd6 with the Ne4. White could develop the Bc1 directly to h6, or white could play Bc1-g5. Both Bishop moves take advantage of the weak dark squares around the King.
                        White’s move Ne4xBd6 is very tempting because, in the open board, the Bishop has considerable sway. However, the Knight is
                        a powerful piece in the center of the board where, to drive it away, black would have to play f7-f5, further weakening black’s Kingside.
                        The most tempting move is white’s Bc1-h6, but white would lose quickly after this move with black’s Bb7-c8 attacking the white Queen. In that position, the Queen would be quickly trapped in the center of the board after Qh3- f3 and Bc8-g4.
                        Having seen the trap, white avoids it by first playing the move Bc1-g5, attacking the black Queen. To guard the Queen, black responds with Bd6-e7.
                    `,
                },
                {
                    fens: ['r2q1rk1/pb2bp2/1p4p1/3n2Bp/3PN3/3B3Q/P4PPP/R4RK1 w - - 0 1'],
                    text: `
                        After black’s Bd6-e7, black is threatening simply to capture the white Bg5. White there- fore has two options: capture the black Be7 or play the move Bg5-h6. Fortunately, after Bg5-h6, black is no longer able to trap the white Queen because, without the black Bishop on d6, the Queen will have access to the g3-square. Rather than exchange Bishops, which would reduce the firepower aimed at the black King, white plays Bg5-h6. This move, of course, attacks the Rf8. Rather than move the Rook, black plays Bb7-c8, attacking the white Queen.
                    `,
                },
                {
                    fens: ['r1bq1rk1/p3bp2/1p4pB/3n3p/3PN3/3B3Q/P4PPP/R4RK1 w - - 0 1'],
                    text: `
                        With the attack by the Bc8 on the Qh3, white has two logical moves. To save the Qh3, white can move it to f3 or to g3. On f3, the Queen would be subject to another attack with Bc8- g4. White therefore decides to play Qg3 where the Queen, in conjunction with the Bd3, is generating pressure on the weakened g6- pawn. Black responds by moving Rf8-e8, out of danger from the attack from the Bh6.
                    `,
                },
                {
                    fens: ['r1bqr1k1/p3bp2/1p4pB/3n3p/3PN3/3B2Q1/P4PPP/R4RK1 w - - 0 1'],
                    text: `
                        White has many good moves in this position. For example, white could activate the Ra1 to c1 or the Rf1-e1. The Bd3 could move to b5 to attack the Re8. Or white could play Qg3-e5, threatening checkmate in one move with Qe5-g7. Both Rook moves look useful, but masters know that Rook moves are often the most difficult moves to make because it is hard to know exactly where the Rooks belong. White decides to play Qg3-e5, in part because the move is very difficult to meet. After Qg3-e5 black can’t respond with Be7-f6. White would then play the amazing Qe5xNd5, seeing that after black’s Qd8xd5, white plays Ne4xBf6 check, forking the King, the e8-Rook, and the black Queen on d5.
                        Black therefore must block the checkmate by white’s Queen on g7 by advancing the f7-pawn to f6, yet another weakening of the black Kingside. In this case, the f7-f6 move weakens the now undefended g6-pawn.
                    `,
                },
                {
                    fens: ['r1bqr1k1/p3b3/1p3ppB/3nQ2p/3PN3/3B4/P4PPP/R4RK1 w - - 0 1'],
                    text: `
                        Having forced yet another Kingside weakness, the white Queen must now retreat. In this instance, there is only one safe move: Qe5-g3. Fortunately for white, the Qg3 will now attack the black g6-pawn. To defend it, black decides to push the g6-pawn to g5.
                    `,
                },
                {
                    fens: ['r1bqr1k1/p3b3/1p3p1B/3n2pp/3PN3/3B2Q1/P4PPP/R4RK1 w - - 0 1'],
                    text: `
                        White’s strategy has worked very well. As a result of carefully timed maneuvers, black’s Kingside is in shambles. However, black does suddenly emerge with the idea of trapping the Bh6 behind enemy lines. White could develop one of its Rooks, but to take advan- tage of the Bh6’s advanced position, white decides to play h2-h4. Note that the pawn on h4 represents the fourth attack on the black g5-pawn. Under such pressure, black has no choice but to push the g-pawn yet again.
                    `,
                },
                {
                    fens: ['r1bqr1k1/p3b3/1p3p1B/3n3p/3PN1pP/3B2Q1/P4PP1/R4RK1 w - - 0 1'],
                    text: `
                        This position represents the culmination of white’s initial strategy of forcing the black Kingside pawns to advance. Having caused the damage, white now considers the next phase: how best to take advantage of the open diagonals and the entry squares around the black King.
                        White has many interesting options and, as many strong players like to say, even a bad plan is better than no plan. White could now take aim on the a2-g8 diagonal with moves such as Bd3-c4 and Qg3-b3. Alternatively, white could begin with Ra1-c1 or Rf1-e1. Another interesting option is Ra1-e1, with the idea of advancing the f-pawn against black’s weak pawn structure.
                        White decides on the first plan of Bd3-c4, putting pressure on the white center, pinning the black Nd5 against the Kg8, and taking aim on the e6 and f7 squares. Black responds, as masters often do, by moving the King in order to break the pin (Kg8-h7).
                    `,
                },
                {
                    fens: ['r1bqr3/p3b2k/1p3p1B/3n3p/2BPN1pP/6Q1/P4PP1/R4RK1 w - - 0 1'],
                    text: `
                        In this position, white faces the need to retreat the Bh6. Retreating the Bishop to g5 would lose the Bishop to the f6-pawn. Retreating back to c1 makes little sense, because the Ra1 will probably want to develop there. That leaves d2, e3, and f4. The e3-square is rela- tively inactive because of the fixed d4-pawn, and, with a Bishop on e3, the Qg3 would be blocked from the b3 square. White decides
                        to retreat the Bishop to d2 where, three squares away from the centralized black Nd5, the Bishop dominates the black Knight. Fearful of white’s activity and mindful of the Kingside weaknesses, black responds with Bc8-f5, attacking the undefended Ne4 and immediately taking control over the b1-h7 diagonal on which the black King is sitting.
                    `,
                },
                {
                    fens: ['r2qr3/p3b2k/1p3p2/3n1b1p/2BPN1pP/6Q1/P2B1PP1/R4RK1 w - - 0 1'],
                    text: `
                        With no reasonable retreat for the white Ne4, white will need to defend it. Qg3-d3 is unac- ceptable because white would not want to walk into a pin. Retreating the Bc4-d3 blocks the Queen’s access to the b3 square and the Bc4’s real idea is to pressure the a2-g8 diago- nal. White therefore needs to choose between Ra1-e1 or Rf1-e1. Ra1-e1 would probably commit white to using the Rf1 to push the f-pawn. Rf1-e1 would give white the oppor- tunity to use the Ra1 on the c-file.
                        White selects Rf1-e1 as the more flexible move. Black responds with Bf5-g6 in an effort to fight for control over the f7-square.
                    `,
                },
                {
                    fens: ['r2qr3/p3b2k/1p3pb1/3n3p/2BPN1pP/6Q1/P2B1PP1/R3R1K1 w - - 0 1'],
                    text: `
                        White’s move is relatively easy this time, with Qg3-b3—the most logical move. On b3, the Queen augments the pressure along the a2- g8 diagonal. Black is simply unable to defend the Knight a second time. If, for example, black plays Bg6-f7, white can play Ne4-c3, a third attack on the poor Nd5. If the black Knight
                        on d5 were to move, the black Bishop on f7 would fall.
                        Black therefore retreats the Nd5 to c7, three squares away from the c4-Bishop, in an effort to limit the Bishop’s scope.
                    `,
                },
                {
                    fens: ['r2qr3/p1n1b2k/1p3pb1/7p/2BPN1pP/1Q6/P2B1PP1/R3R1K1 w - - 0 1'],
                    text: `
                        After 12 moves in this middlegame, white has a substantial advantage. You might imagine continuing with Ra1-c1 or Bc4-f7. Both are excellent moves. Ra1-c1 places white’s final undeveloped piece on an open file. White’s Bc4-f7 takes advantage of the entry square
                        on f7. Note that after Bg6xf7, the white Queen would powerfully infiltrate the black Kingside on the f7 square. White’s strategy has resulted in a nice range of options that gives white by far the best chances to win the game.
                        In the actual game (J. Edwards vs. W. Jones, 1993), the contest ended as follows:
                        28.Bc4-f7 Re8-f8 29.Bf7xg6+ Kh7xg6 30.Ne4-g3 Rf8-h8 31.Ra1-c1 Nc7-e8 32.Qb3-e6 Be7-a3 33.Ng3xh5 Ba3xc1 34.Qe6xg4+ Kg6-f7 35.Qg4-e6+ Kf7-g6 36.Nh5-f4+ Kg6-h7 37.Qe6-f7+ Ne8-g7 38.Nf4-h5 1–0
                        Black resigns.
                    `,
                }
            ],
        },
        {
            header: 'Responding to Threats',
            subtitle: `
                Strong moves often contain threats. A threat is simply the move that you would make if, after having moved, you were given an opportunity to make a second consecutive move. When your opponent makes a move that contains a threat, you have an important choice: Stop the threat immediately,
                or make a move that contains a bigger threat. In the following sequence, the moves on both sides contain numerous threats.            
            `,
            lessonHeader: `A Sequence of Threats`,
            demo: [
                {
                    fens: [
                        'r1bqkb1r/pp1p1ppp/2n2n2/4p3/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1',
                    ],
                    text: `
                        This scenario occurred in the Sicilian Defense after the moves 1.e2-e4 c7-c5, 2.Ng1-f3 Nb8- c6, 3.d2-d4 c5xd4, 4.Nf3xd4 Ng8-f6, 5.Nb1-c3 e7-e5. Black’s last move, e7-e5, threatens on the next move to capture white’s Nd4. White has many options for the Knight, including the retreat to f3, but white prefers to play Nd4-b5, where the Knight will threaten the move Nb5-d6 check. Black responds by stopping that threat with the move d7-d6.
                        You might recognize that black’s central pawn structure contains a weakness on d6 and a central hole on d5. White would like to play the move Nc3-d5 but the Nd5 would be cap- tured immediately by the strong Nf6. Rather than play the move Nd5, white threatens to play it by first moving Bc1-g5. The Bishop pins the Nf6 to the black Queen and the threat of Nc3-d5 is now real.
                    `,
                },
                {
                    fens: ['r1bqkb1r/pp3ppp/2np1n2/1N2p3/4P3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1'],
                    text: `
                        Strong players often say that “the threat
                        is stronger than the execution.” They mean that preparing the threat correctly (in this position with Bc1-g5) is better than playing the threat immediately (with Nc3-d5) as you can see in this position.
                        After the move Bc1-g5, black has several interesting candidate moves. Black could un-pin immediately with Bf8-e7. Black could guard the d5-square with Bc8-e6. But black prefers to meet the threat of Nc3-d5 with his own threat, the move a7-a6 threatening to capture the Nb5.
                    `,
                },
                {
                    fens: ['r1bqkb1r/1p3ppp/p1np1n2/1N2p1B1/4P3/2N5/PPP2PPP/R2QKB1R w KQkq - 0 1'],
                    text: `
                        White’s Nb5 is now under attack and has only one logical retreat. White could play Bg5xf6, meeting the threat on the Nb5 with a larger threat, but black might simply recapture with the g7-pawn. White therefore retreats the Nb5-a3. Black responds with b7-b5, a move that carries another threat, a pawn fork with b5-b4.
                    `,
                },
                {
                    fens: ['r1bqkb1r/5ppp/p1np1n2/1p2p1B1/4P3/N1N5/PPP2PPP/R2QKB1R w KQkq - 0 1'],
                    text: `
                        White stops the threat of the pawn fork on b4 simply by moving the Nc3 powerfully to the central hole on d5. The black Nf6 dare not capture the Nd5 because the Bg5 is pin- ning it to the black Queen. Black therefore responds with Bf8-e7, a move that carries another threat, this time the move Nf6xNd5, winning a piece!
                    `,
                },
                {
                    fens: ['r1bqk2r/4bppp/p1np1n2/1p1Np1B1/4P3/N7/PPP2PPP/R2QKB1R w KQkq - 0 1'],
                    text: `
                        Responding to the threat, white now plays Bg5xf6, giving up the Bg5 but stopping the threat of Nf6xd5 and retaining the powerful Nd5. To advance in chess, watch carefully for such threats. Strong chess players develop
                        a finely honed sense of danger. Before you move, always ask: “Does my opponent’s
                        last move contain a threat?” If so, your move should either stop the threat or, even better, you should look for a threat that’s even bigger.
                    `,
                }
            ],
        },
        {
            header: 'Recaptures',
            subtitle: `
                Almost every time that someone captures one of your pieces, you will want to recapture. There are exceptions, however, and there is nothing automatic about recapturing. Always consider other options.
            `,
            lessonHeader: `Recapturing Your Pieces and Pawns`,
            demo: [
                {
                    fens: ['3b2rk/1p5p/p1p1p2q/2Pn1pr1/PPBPp3/4P1PP/3B1Q1K/3R2R1 w - - 0 1'],
                    text: `
                        In this position, black’s advantage is pro- nounced. The Nd5 is in the center the board where it can’t be attacked by white’s pawns. White’s dark-squared Bishop on d2 is bad, locked in by its own pawns. By contrast, the black Bishop on d8 will have an important role to play in black’s attack on the Kingside. Note that black’s Rooks are actively doubled on the g-file and the Qh6 is bearing down on the white Kingside.
                        In an effort to relieve some of the pressure in this position, white played Bc4xd5. Most chess players would gladly recapture immediately with the e6-pawn in order to undouble the black e-pawns. But black has a much stronger response with the move Rg5-h5.
                    `,
                },
                {
                    fens: ['3b2rk/1p5p/p1p1p2q/2PB1p1r/PP1Pp3/4P1PP/3B1Q1K/3R2R1 w - - 0 1'],
                    text: `
                        Black suddenly has the huge threat of a check with Rh5xh3+, forcing the white King to g2. Then white can play Rh5-h2, checking the Kg2 and then winning the white Qf2 with check when the King retreats to f1. Masters achieve their strength in part because they consistently look for such “in-between” moves.
                    `,
                }
            ],
        },
    ],
};