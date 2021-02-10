export default {
    header: 'Rook Strategy',
    body: `
        A Rook is a powerful piece. This chapter will help you learn how to make the most of it. Some chess players find it difficult to develop the Rooks effectively because the Rooks begin the game in the corners. Developing your pieces quickly and moving the Rooks toward the central files will help you secure control over the center of the board. And by attacking or controlling distant squares, the Rooks can help your attacks succeed. Experienced players know that Rooks belong on open files (not blocked by pawns) and that Rooks are especially effective when they get to the 7th rank to attack the enemy pawns.
    `,
    items: [
        {
            lessonHeader: 'Rooks Belong on Open Files',
            demo: [
                {
                    fens: [
                        'r7/pppp1ppp/8/8/8/8/8/8 w - - 0 1',
                        '4r3/pppp1ppp/8/8/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        You will often want to move a Rook to an open file where its own pawns cannot block its forward movement. In this example, the black Rook on a8 has the option of moving to any of the squares on the 8th rank. One of those squares, of course, is different. Moving the Rook from a8 to e8 (Ra8-e8) is the best move here because from e8, the Rook will help control all the squares along the 8th rank as well as the squares on the open e-file.
                    `,
                },
                {
                    fens: [
                        'r6r/ppp2ppp/8/8/8/8/8/8 w - - 0 1',
                        '3r3r/ppp2ppp/8/8/8/8/8/8 w - - 0 1',
                        '3rr3/ppp2ppp/8/8/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        In the second example, there are two black Rooks and two open files.
                        If it's good to place one Rook on an open file,
                        it's even better to place both Rooks on open files. In this case,
                        placing the Rooks on d8 (Ra8-d8) and e8 (Rh8-e8) will help black
                        control the important squares in the center of the board.
                    `,
                },
                {
                    fens: [
                        '1kr4r/pppp1ppp/8/8/8/8/8/8 w k - 0 1',
                        '1k2r2r/pppp1ppp/8/8/8/8/8/8 w k - 0 1',
                        '1k5r/pppprppp/8/8/8/8/8/8 w k - 0 1',
                        '1k2r3/pppprppp/8/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In this final example, black has both Rooks but only a single open file. You can begin by moving one of the Rooks to the e-file. Of course, that Rook will be a "good" Rook, while the other will remain "bad." To make both Rooks good, move the Rook at e8 forward, perhaps to e7 or e6. This advance will make room for the other Rook. Complete your Rook maneuver by moving the other Rook to e8. This is called "doubling Rooks" (see the next photo for the resulting doubling Rook position).
                    `,
                },
                {
                    fens: [
                        '1k2r3/pppprppp/8/8/8/8/8/8 w - - 0 1'
                    ],
                    text: `
                        Once you control an open file with a Rook, you can often use the Rook to infiltrate your opponent's position. The Rook is especially effective when it is attacking undefended pawns deep in the enemy's position.
                    `,
                }
            ]
        },
        {
            lessonHeader: 'Advance Your Rooks to the 7th Rank',
            demo: [
                {
                    fens: [
                        'k3r3/pppp1ppp/8/8/8/8/PPPP1PPP/KR6 w - - 0 1',
                        'k7/pppp1ppp/8/8/8/8/PPPPrPPP/KR6 w - - 0 1',
                    ],
                    text: `
                        In this example, the enemy pawns rest on their original squares. And so, masters often talk about advancing their Rooks to the 7th rank where the enemy pawns usually are. The key for black is to advance the Rook on e8 to e2 (Re8-e2). White will then have a problem. The black Rook on e2 will be attacking undefended white pawns on d2 and f2. White can respond by moving its Rook on b1 to d1 (Rb1-d1) or f1 (Rb1-f1), but there's clearly no way to move the Rook on b1 to defend both pawns.
                    `,
                },
                {
                    fens: [
                        '1k6/1pp2ppp/p7/8/8/8/PPPrrPPP/1KR2R2 w - - 0 1'
                    ],
                    text: `
                        In this example, the black Rooks are dominating black's 7th rank. Black has succeeded in doubling the Rooks on the 7th rank, a catastrophe for white. On the 7th rank, the Rooks combine to place tremendous pressure on the white pawns. White has succeeded with the King on b1 and the Rook on c1 to defend the c2-pawn adequately. However, the white f2-pawn is in jeopardy. White could push the f2-pawn forward, but the black Rook on e2 would then capture the g2-pawn instead, and then go on to threaten the h2-pawn.
                    `,
                }
            ]
        },
        {
            lessonHeader: 'Simple Back-Rank Checkmates',
            demo: [
                {
                    fens: [
                        '1k2r3/ppp2pp1/7p/8/8/7R/PPP2PPP/1K6 w - - 0 1',
                        '1k6/ppp2pp1/7p/8/8/7R/PPP2PPP/1K2r3 w - - 0 1',
                    ],
                    text: `
                        One of the reasons that Rooks belong on open files is that they can often deliver checkmate all by themselves. In this example, black has an active Rook on an open file. Moreover, white has no defense along the 1st rank. Black simply moves the Rook forward all the way to e1 (Re8-e1) to attack the white King. White cannot move its King, capture the Rook on e1, or place a piece between the King and the attacking Rook. It's checkmate! Experienced players will often head off this attack by moving a pawn forward in front of their Kings; you will be surprised how often this simple attack works.
                    `,
                },
                {
                    fens: [
                        '1k2r3/ppp1rppp/8/8/8/6R1/PPP2PPP/1K4R1 w - - 0 1',
                        '1k2r3/ppp2ppp/8/8/8/6R1/PPP2PPP/1K2r1R1 w - - 0 1',
                        '1k2r3/ppp2ppp/8/8/8/6R1/PPP2PPP/1K2R3 w - - 0 1',
                        '1k6/ppp2ppp/8/8/8/6R1/PPP2PPP/1K2r3 w - - 0 1',
                    ],
                    text: `
                        In this second example, black shows off the power of doubled Rooks. White does have a Rook defending the key e1-entry square, but black has two attacking Rooks. Black begins by advancing the Rook on e7 to e1, check (Re7-e1+). To avoid checkmate, the white Rook on g1 must capture the black Rook on e1 (Rg1xe1). White then delivers checkmate by playing Rook on e8 takes Rook on e1 (Re8xe1#).
                    `,
                }
            ],
        },
        {
            lessonHeader: 'Fun with Active Rooks',
            demo: [
                {
                    fens: [
                        '1k2r3/ppp1rppQ/3p4/2q5/8/3P1P2/PPP3PP/1K4RR w K - 0 1',
                        '1k2r3/ppp1rppQ/3p4/8/8/3P1P2/PPP3PP/1K4qR w K - 0 1',
                        '1k2r3/ppp1rppQ/3p4/8/8/3P1P2/PPP3PP/1K4R1 w - - 0 1',
                        '1k2r3/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2r1R1 w - - 0 1',
                        '1k2r3/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2R3 w - - 0 1',
                        '1k6/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2r3 w - - 0 1',
                    ],
                    text: `
                        Here's another example of why it is so important to double your Rooks on an open file. The black Rooks are dominating the only open file on the board. As you have seen in previous examples, the Rooks will advance to the 7th rank to attack the enemy pawns. Here, however, black has a much stronger plan. The two black Rooks combine to attack the key e1 square.
                    `,
                },
                {
                    fens: [
                        '1k2r3/ppp1rppQ/3p4/2q5/8/3P1P2/PPP3PP/1K4RR w K - 0 1',
                        '1k2r3/ppp1rppQ/3p4/8/8/3P1P2/PPP3PP/1K4qR w K - 0 1',
                        '1k2r3/ppp1rppQ/3p4/8/8/3P1P2/PPP3PP/1K4R1 w - - 0 1',
                        '1k2r3/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2r1R1 w - - 0 1',
                        '1k2r3/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2R3 w - - 0 1',
                        '1k6/ppp2ppQ/3p4/8/8/3P1P2/PPP3PP/1K2r3 w - - 0 1',
                    ],
                    text: `
                        White is defending the square with two Rooks. The attack will work if black can eliminate one of white's defending Rooks. Black therefore begins with the aggressive Queen sacrifice: The black Queen captures the white Rook on g1, check (Qc5xg1+). White must recapture with the Rook on h1 (Rh1xg1). The result is a simple two-on-one attack on the e1 square. Black moves its e7 Rook to e1 (Re7-e1). White then captures it with its remaining Rook (Rg1xe1). Then black advances its e8 Rook to e1 (Re8-e1#). The white King cannot escape from the final check by the e1-Rook; it's checkmate.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Rooks Belong Behind Passed Pawns',
            demo: [
                {
                    fens: [
                        'r7/P7/8/8/3K1k2/8/8/R7 w - - 0 1'
                    ],
                    text: `
                        In this position, white has placed the Rook on a1 behind the passed pawn on a7. To prevent the pawn from promoting to a Queen, black was forced to play Rook to a8. The white Rook is clearly playing a strong, aggressive role. By contrast, the black Rook is quite passive and cannot move along the rank without permitting the pawn to advance. To win, white will need only to move the King from d4 to the key b7 square. On that square, the white King will attack the black Rook, forcing it to move away or be captured. If black decides to move the Rook along the 8th rank, the pawn will be able to advance and promote to Queen.
                    `,
                }
            ]
        },
    ],
};