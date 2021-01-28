export default {
    header: 'Pawn Strategy',
    body: `
        Unlike Kings, Queens, Bishops, Knights, and Rooks, pawns can move in only one direction:
        forward, ever forward. Reach the final rank and the lowly pawn, the foot soldier of chess, can transform itself
        into any piece except a King.
        But there is much more to pawns than just the quest to promote into a more powerful piece.
        As the pawns move forward, they open up diagonals for the Bishops, protect other pieces,
        and often lead the way for attacks. They can pry open an opponent's Kingside, but they can also spell doom
        when they become weak, and are then subject to capture.
    `,
    items: [
        {
            header: `Don't Double Your Pawns`,
            subtitle: `
                When pawns are one in front of the other,
                we refer to them as doubled pawns.
                Doubled pawns occur when a pawn captures
                and moves in fron of another pawn.
                There are exceptions to most rules in chess,
                but you should usually try to recapture with a piece
                rather than with a pawn to avoid the weakness of doubled pawns.
            `,
            lessonHeader: `The Weaknesses of Doubled (and Tripled) Pawns`,
            demo: [
                {
                    fens: [
                        '8/2p5/2p5/2p5/8/5P2/5P2/8 w - - 0 1'
                    ],
                    text: `
                        In this position, white has doubled pawns on the f-file,
                        while black has tripled pawns on the c-file.
                        These pawns are weak because they cannot defend one another.
                        If you were playing white, for example,
                        you might attack the black pawns with Rooks along the c-file,
                        and perhaps also with your other pieces.
                        Black might decide to try to defend the pawns or, alternatively,
                        attack the weak white doubled pawns.
                    `,
                },
                {
                    fens: ['3r1rk1/p1p2p1p/2p2p2/8/8/4P3/PPR2PPP/2R3K1 w - - 0 1'],
                    text: `
                        Here, black has not one but two sets of doubled pawns. White's strategy is clear. White has doubled the white Rooks on the c-file and will, on the next move, capture the weak black pawn on c6. In contrast, the white pawn structure seems quite strong with no obvious weaknesses. As a result, black cannot easily mount a counterattack on white's position/
                    `,
                }
            ],
        },
        {
            header: `Pawn Islands`,
            subtitle: `
                Pawns are generally more secure and harder to attack when they are connected
                and able to defend one another. By contrast, when the pawns are scattered around the board,
                they are easier to attack.
            `,
            lessonHeader: `The Fewer Pawn Islands the Better`,
            demo: [
                {
                    fens: ['8/p1p1pp1p/8/8/8/8/PPP2PPP/8 w - - 0 1'],
                    text: `
                        Here, white has two pawn islands. Pawn islands consist of a single pawn or group of
                        side-by-side pawns that are seperated from other pawns by open files. The white
                        pawns on the a-, b-, and c-files form one island, while the white pawns on the f-,
                        g-, and h-files form the other island. Side-by-side, these pawns do not defend one
                        another, but we consider these strong formations because, unlike the doubled pawns
                        we just saw, they contain no permanent weaknesses and are capable of defending one another.
                        By contrast, the black pawns in this diagram form a total of four pawn islands and are
                        considered much weaker. Three of the pawns have no neighbors. Therefore, if attacked
                        these pawns would need to be defended by Knights, Bishops, Rooks, or Queens, pieces
                        that in most cases have more important roles to play than to defend a lowly pawn.
                        The general rule here is simple: During the game, try to have fewer pawn islands than
                        your opponent.
                    `,
                }
            ],
        },
        {
            header: `Some Doubled Pawns Are Strong`,
            subtitle: `
                Many beginning players become so fearful of doubling their pawns that they miss situatiions where
                doubled pawns can be strong.
            `,
            lessonHeader: `Doubled Pawns Supporting the Center`,
            demo: [
                {
                    fens: ['3qk2r/rbp1bppp/pp2pn2/8/P1BPP3/2N1nQ2/1P2NPPP/3R1RK1 w k - 0 1'],
                    text: `
                        In the following position, the black Knight has just captured on the e3 square.
                        White could automatically recapture with the Queen to avoid doubling the white pawns
                        on the e-file. A great American chess player, Frank Marshall, reached this position in
                        a game against Abraham Kupchik in 1915. Marshall decided that capturing with the pawn
                        had some advantages that outweighed the structural weakness of doubled pawns.
                    `,
                },
                {
                    fens: ['3qk2r/rbp1bppp/pp2pn2/8/P1BPP3/2N1PQ2/1P2N1PP/3R1RK1 w k - 0 1'],
                    text: `
                        Here is a position after the pawn capture.
                        The new pawn on e3 helps to support the white center by defending the white d4-pawn.
                        More important, by recapturing with the pawm, white has opened up the f-file for the Rook.
                        To be sure, white now has four pawn islands while black has only two, but Marshall,
                        who went on to win the game, felt that having both the Queen
                        and the Rook on the open file and the strengthened center more than compensated
                        for the doubled pawns and the extra pawn island.
                    `,
                }
            ],
        },
        {
            header: `Pawn Chains`,
            subtitle: `
                In many openings, the pawns form chains along a diagonal.
                Compare these chains to birds flying in formation.
                When three birds fly overhead in formation,
                the best strategy for a hunter is to aim for the last bird.
                The other birds may hear the shot,
                but they won't actually see that the bird has been hit.
                Similarly, the pawn at the rear of the chain is the weakest because no other pawn defends it.
                The best strategy is to aim your attack at the rear of your opponent's pawn chain.
            `,
            lessonHeader: `Introducing Pawn Chains`,
            demo: [
                {
                    fens: ['8/8/8/4P3/3P4/2P5/8/8 w - - 0 1'],
                    text: `
                        In this position, the three white pawns are forming a chain.
                        Note that two of the three white pawns are defended.
                        The most advaned white pawn on e5 is defended by the pawn on d4.
                        The pawn on d4 is defended by the pawn on c3. By contrast,
                        the white pawn on c3 is completely undefended.
                        The pawn in the rear of the chain is considered the weakest of the pawns precisely
                        because the other pawns can no longer protect it.
                    `,
                },
                {
                    fens: [
                        '8/2pn4/4p3/3pP3/3P4/8/4NP2/8 w - - 0 1',
                        '8/3n4/4p3/2ppP3/3P4/8/4NP2/8 w - - 0 1'
                    ],
                    text: `
                        The weak pawn in the chain often becomes the main target of the attack by your opponent.
                        In this position, black has prepared and will now play the move c7 to c5 (c7-c5).
                        If white should capture black's c5 pawn (d4xc5), both of white's remaining pawns would be
                        weak and subject to capture. White would try a similar strategy
                        by advancing the f-pawn from f2 to f4 (f2-f4). White's plan would then be to play f4 to f5 (f4-f5)
                        with the idea of attacking the weak e6-pawn in black's short pawn chain.
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
                        This position offers a more practical example. White, on the attack,
                        advances the pawn to e6 (e5-e6) where is attacks the base of black's f7-g6-h5 pawn chain.
                        If black responds by capturing white's e6-pawn (f7xe6), white will be able to respond with
                        Queen to g6 to capture the middle pawn in the chain, simultanesously putting the King in check
                        (Q3-g6+).
                    `,
                }
            ],
        },
        {
            header: `Pawn Majorities`,
            subtitle: `
                One key goal for the pawns, of course, is to promote at least one to a Queen
                by advancing it to the end of the board. Sometimes, pawns are able to advance
                without any opposition. More often, you will have to find a way to push your
                pawns successfully past your opponent's pawns. A pawn majority means that one player has
                more pawns than the opponent
                on one side of the board. As you will see, some pawn majorities are more useful than others.
            `,
            lessonHeader: ``,
            demo: [
                {
                    fens: [
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/2P5/PP6/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6pp/8/6P1/8 w - - 0 1',
                        '8/pp6/8/PPP5/6p1/7p/6P1/8 w - - 0 1'
                    ],
                    text: `
                        In this position, both sides have useful pawn majorities. On the Queenside, for example,
                        white has three advanced pawns facing only two black pawns. With white to move, white can make
                        significant progress toward promoting a pawn by advancing the c-pawn forward (c5-c6).
                        With no black pawn on c7, white threathens simply to advance the c-pawn from c6 to c7. Black
                        can delay the advance of thw white pawn temporarily by capturing on c6 (b7xc6), but white will be
                        able to use the pwer of this majority to force a white pawn through no matter what black tries.
                        Black, of course, has a useful pawn majority on the Kingside.
                        Knowing that it is not possible to prevent white from Queening a pawn, black might instead seek
                        a Queen by advancing the h-pawn forward to h3 (h4-h3). Here too, white
                        can delay the advance with capture (g2xh3), but the majority will succeed in making a passed pawn
                        (remember, "passed pawn" os just another term for a pawn that can't be opposed by an enemy pawn).
                    `,
                },
                {
                    fens: ['8/4k1p1/2p2p1p/1pP2P1P/1P2K3/1P6/8/8 w - - 0 1'],
                    text: `
                        In this position, on the Queenside, white has a three-pawn majority against only two for black,
                        but the pawns are all fixed and the extra pawn is not capable of being forced through for promotion.
                        Similarly, on the Kingside, black has a pawn majority, but the pawn majority is not useful.
                        Any effort by black to advance the g-pawn will result in the pawn's capture and in a dangerous pawn fro white.
                    `,
                },
            ],
        },
        {
            header: `Isolated Pawns`,
        },
        {
            header: `Backward Pawns`,
        },
        {
            header: `Hanging Pawns`,
        },
        {
            header: `Pawn Masses`,
        },
        {
            header: `Pawns Can Fork, Too!`,
        },
        {
            header: `Passed Pawn Blockaders`,
        },
        {
            header: `Every Pawn Move Creates a Weakness`,
        },
    ],
};