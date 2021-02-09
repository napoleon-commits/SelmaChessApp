export default {
    header: 'Attacking Themes and Common Sacrifices',
    body: `
        Middlegame attacks are often the most exciting phase of the chess
        game. In this chapter, you will be able to review a number of different
        strategic themes for attacking an opponent. By playing through these
        patterns, you will be able to recognize such possibilities in your own
        game—either to bring them about or, if you are being attacked, to be
        able to prevent them. Just as important, you should be able to get a
        sense that successful attacks require careful coordination among many
        pieces, not just one or two.
        Sacrifices are special kinds of attacks in which one player gives
        up or “sacrifices” material, perhaps as little as a pawn or as much as a
        Queen, in order to generate an attack. This chapter will review a number
        of common sacrifices that can occur in your own games.
        In almost every case, attacks and sacrifices occur because one
        player is better developed than the other. For example, you might be
        able to mobilize many pieces around your opponent's King. Or perhaps
        if you remove one of the key defensive pieces, even at a high price, it
        will open direct lines against your opponent's King.
        As attacks develop, you will often see that a King, as checkmate
        approaches, has no moves. As a general rule, when your opponent's
        King can't move, all you need is check! Many strong players use this
        rule. When you reach positions in which the opponent's King can't
        move, know that you can safely sacrifice material if you can find a way
        to deliver the final checkmate.
    `,
    items: [
        {
            lessonHeader: 'The Dragon Variation',
            demo: [
                {
                    fens: ['r2q1rk1/1p1bppbp/p2p1np1/4n3/3NP1P1/1BN1BP2/PPPQ3P/1K1R3R w Kq - 0 1'],
                    text: `
                        Here is a typical Dragon position. Notice that white has castled on the Queenside in order to use both Rooks in the Kingside
                        attack. The white Be3 and the Qd2 are both pointed aggressively toward the weak h6-square. The white pawn on f3 discourages
                        black from moving its e5-Knight to g4, where the Knight might attack the Be3 and help defend the h6-square. The f3-
                        pawn also supports the g4-pawn. Note too that white has taken the useful precaution of moving the King from c1 to b1. It's
                        good advice to safeguard your King from possible checks before you commence an attack.
                        In this position, white has at least two excellent options. There is Be3-h6, seeking to exchange the dark-squared Bishops and
                        leaving the black King without a key defender. White could also play h2-h4, rushing the h-pawn forward toward h5 in an
                        effort to pry open the h-file for use by the Rh1 and a Queen after Qd2-h2.
                    `,
                },
                {
                    fens: [
                        'r2q1rk1/3bppbp/p2p1npB/1p2n3/3NP1PP/PBN2P2/1PPQ4/1K1R3R w Kq - 0 1',
                    ],
                    text: `
                        In this position, one move later, white has
                        begun the attack with Be3-h6 while Black,
                        eager to counterattack, has played b7-b5.
                        White now presses forward with h2-h4,
                        threatening to push the h-pawn forward again
                        to h5. Notice the usefulness of playing g2-g4
                        first. The pawn on g4 discouraged black from
                        trying to defend with h7-h5.
                        Black has a terrible choice to make. If black
                        captures the Bishop on h6, the white Queen
                        will recapture and lead the attack on h6. If
                        black declines to capture on h6, white will be
                        able to capture on g7, which forces the black
                        King to recapture on g7.
                    `,
                },
                {
                    fens: [
                        'r4r2/3bppkp/p2p1np1/qp2n3/3NP1PP/PBN2P2/1PPQ4/1K1R3R w K - 0 1',
                    ],
                    text: `
                        Again, a move later, the exchange of Bishops
                        has occurred on g7. Black is seeking some
                        counterplay on the Queenside with Qd8-a5.
                        White will now continue the attack with h4-h5.
                        The idea, of course, is to open up the h-file
                        with h5xg6 and then with Qd2-h6 check. These
                        attacks are very powerful and fun to play.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'The English Attack',
            demo: [
                {
                    fens: [
                        'r1bq1rk1/1p1nbppp/p2ppn2/8/3NP3/2N1BP2/PPPQ2PP/1K1R1B1R w Kq - 0 1',
                    ],
                    text: `
                        In this position, black has again chosen to
                        castle on the Kingside, but this time the Bf8
                        has developed to e7. Black's Kingside is much
                        more secure because black has avoided the
                        Kingside fianchetto. Nonetheless, white continues
                        as before. White has successfully developed
                        most of its pieces, with the Be3 and
                        Qd2 powerfully pointing toward the Kingside.
                        Once again, the pawn on f3 prevents Nf6-g4
                        and supports the beginning of an attack with
                        g2-g4-g5.
                        After you have completed or nearly completed
                        your development, you will need to make a
                        decision about the nature of your attack. Will
                        the attack be led by your pawns or by your
                        pieces? That interesting decision gets easier
                        with experience. In this position, white will
                        lead the charge with the g-pawn, playing g2-
                        g4. The idea is to push the pawn to g5, where
                        the g-pawn will attack the Nf6 and force this
                        key defender of the black Kingside to move
                        away.
                    `,
                },
                {
                    fens: [
                        'r1bq1rk1/3nbppp/p2ppn2/1p4P1/3NP3/2N1BP2/PPPQ3P/1K1R1B1R w Kq - 0 1',
                    ],
                    text: `
                        In the second figure, two moves later, white
                        has proceeded quickly to advance the g-pawn
                        to g5. Black has countered with b7-b5 with
                        the idea of b5-b4 attacking the white Nc3.
                        Black has an awkward choice in this position.
                        The black Nf6 could retreat to e8 or move to
                        the dim rim at h5.
                    `,
                },
                {
                    fens: [
                        'r2q1rk1/1b1nbppp/p2pp3/1p4Pn/3NP3/4BPN1/PPPQ3P/1K1R1B1R w Kq - 0 1',
                    ],
                    text: `
                        Here, two moves later, black has moved the
                        Bc8-b7, while white has “swung” the Nc3-e2
                        and then on to g3, where it attacks the undefended
                        Nh5. Black dare not defend the Knight
                        with g7-g6 because, after Ng3xh5, the resulting
                        pawn recapture would drastically weaken
                        the black Kingside. If, instead, black captures
                        the Ng3, white will recapture with the h2-
                        pawn, opening up the h-file for a forceful
                        attack.
                    `,
                },
                {
                    fens: [
                        'r2q1rk1/1b1nbppp/p2pp3/1p4P1/3NP3/4BPP1/PPP4Q/1K1R1B1R w Kq - 0 1',
                    ],
                    text: `
                        Here is the culmination of white's idea. After
                        the recapture on g3 with the h2-pawn, white
                        has played Qd2-h2 with the powerful threat
                        of Qxh7 checkmate. Black can stop the checkmate
                        by advancing the h-pawn, but that additional
                        Kingside weakness will leave white with
                        an enormous edge and an easy way to continue
                        the attack with g5xh6.
                    `,
                },
                {
                    fens: [
                        '2rqnrk1/1b1nbppp/p2pp3/1p4PP/3NP3/2N1BP2/PPPQ4/1K3B1R w K - 0 1',
                    ],
                    text: `
                        Here is a position that might have occurred
                        had black retreated the Nf6-e8 rather than
                        play Nf6-h5. Note that white has advanced
                        the h2-pawn to h5. The h-pawn was needed
                        on h2 in the event that white had to play Nc3-
                        e2-g3. Here, the black Knight is on e8 rather
                        than h5. White has therefore rushed the
                        h-pawn to h5, where it can support the additional
                        pawn advance, g5-g6.
                        White's strategy is becoming clear. Black will
                        not be able to use the f7-pawn to capture on
                        g6 because the f7-pawn is required to defend
                        against the threat Nd4xe6 forking the Qd8
                        and the Rf8. Black can prevent the advance
                        of the white g-pawn by playing g7-g6, but that
                        move would weaken the f6 and h6 squares
                        and permit white to open the h-file for its
                        Rook and Queen with h5xg6. In both of these
                        English attack examples, white opens up the
                        h-file for an attack from the heavy pieces,
                        the Rooks and the Queen.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Common Knight Sacrifices',
            demo: [
                {
                    fens: [
                        'r1bqkb1r/pppp1ppp/2n2n2/4p3/2B1P3/5N2/PPPP1PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        In addition to having an amusing name, this
                        opening variation provides a quick attack that
                        many players enjoy. The moves 1.e2-e4 e7-e5,
                        2.Ng1-f3 Nb8-c6, and 3.Bf1-c4 Ng8-f6 are the
                        starting position of what's called the Two
                        Knights' Defense. This position, although only
                        three moves into the game, permits white to
                        try the interesting Nf3-g5 move. The Knight
                        move breaks an important principle of moving
                        a piece twice so early in the game, but it carries
                        the powerful threat of Ng5xf7. To prevent the
                        threat, black usually plays d7-d5, blocking
                        the Bc4's attack on the f7-square.
                    `,
                },
                {
                    fens: [
                        'r1bqkb1r/ppp2ppp/2n2n2/3pp1N1/2B1P3/8/PPPP1PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        White continues by capturing on d5 with the
                        e4-pawn. Experienced players know that
                        black's best response in this position would
                        be to play Nc6-a5, threatening the white Bc4.
                        Instead, black responds with the obvious
                        recapture, Nf6xd5.
                    `,
                },
                {
                    fens: [
                        'r1bqkb1r/ppp2ppp/2n5/3np1N1/2B5/8/PPPP1PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        Here is the critical position. For the moment,
                        white has only one attack on the black Nd5
                        with Bc4, and black has a single defender—
                        Qd8. The Fried Liver Attack begins now with
                        the surprising move Ng5xf7, forking the Qd8
                        and the Rh8. To prevent the capture of the
                        Queen or the Rook, black must recapture the
                        Knight with Ke8xf7.
                    `,
                },
                {
                    fens: [
                        'r1bq1b1r/ppp2kpp/2n5/3np3/2B5/8/PPPP1PPP/RNBQK2R w KQ - 0 1',
                    ],
                    text: `
                        Why would white give up a Knight in this
                        manner? In this case, because white is able to
                        develop very quickly and force the black King
                        into the middle of the board. First, white is
                        able now to play Qd1-f3 check. The Queen
                        move develops the Queen powerfully to f3
                        where, in addition to the check, it adds a second
                        attack on the black Nd5. To defend the
                        Nd5, black must bring the King farther into
                        the center with Kf7-e6. As you might imagine,
                        few players enjoy having their King exposed
                        so early in the game.
                    `,
                },
                {
                    fens: [
                        'r1bq1b1r/ppp3pp/2n1k3/3np3/2B5/5Q2/PPPP1PPP/RNB1K2R w KQ - 0 1',
                    ],
                    text: `
                        White now has two attacks on the black Nd5,
                        while black has two defenders, the Qd8 and
                        the Ke6. Rather than capture the Nd5, white
                        increases the pressure on the pinned Nd5
                        by developing the other Knight with Nb1-c3.
                        Now facing three attacks on it's d5-Knight,
                        black plays Nc6-b4, using the Nb4 to provide
                        a third defense and simultaneously to
                        threaten Nb4xc2 check, forking the white Ke1
                        and the Ra1.
                    `,
                },
                {
                    fens: [
                        'r1bq1b1r/ppp3pp/4k3/3np3/1nB5/2N2Q2/PPPP1PPP/R1B1K2R w KQ - 0 1',
                    ],
                    text: `
                        White now has two interesting options: play
                        Qf3-e4, defending the c2-pawn, or threaten
                        to develop quickly with a2-a3. White plays the
                        amazing a2-a3, attacking the black Nb4 and
                        forcing it to carry out its threat of capturing
                        on c2.
                    `,
                },
                {
                    fens: [
                        'r1bq1b1r/ppp3pp/4k3/3np3/2B5/P1N2Q2/1PnP1PPP/R1B1K2R w KQ - 0 1',
                    ],
                    text: `
                        Having already sacrificed a Knight, white sacrifices
                        an additional Rook. But consider that the
                        Ra1 has not yet moved, while black's Knight
                        on c2 will have moved four times if it proceeds
                        with Nc2xa1. In this position, white's King, in
                        check, moves to d1 to force the Nc2 to move
                        and to open the e1-square for Rh1-e1. With
                        the Knight under attack, black naturally captures
                        the Ra1.
                    `,
                },
                {
                    fens: [
                        'r1bq1b1r/ppp3pp/4k3/3np3/2B5/P1N2Q2/1P1P1PPP/n1BK3R w K - 0 1',
                    ],
                    text: `
                        White is down considerable material, but note
                        that white now has three attacks on the black
                        Nd5 while black has only two defenders. In
                        compensation for the sacrifice of a Knight and
                        a Rook, white is now able to capture the Nd5
                        and continue to attack with moves like Rh1-e1 and d2-d4.
                        Are the sacrifices correct? That question has
                        haunted chess players for more than 400
                        years. Many books have been written on this
                        subject, and still the answer is not yet clear.
                        What is clear is that this type of sacrificial play
                        is very exciting and a joy to play. By all means
                        try to prove the soundness of the sacrifice. Or
                        join the many players who are convinced that
                        the Fried Liver is unsound. Either way, you will
                        have become yet another chess player with
                        an opinion about this exciting line.
                    `,
                },
                {
                    fens: [
                        'r1bqk2r/pp1nbppp/2p1pn2/6N1/2BP4/8/PPP1QPPP/R1B1K1NR w KQkq - 0 1',
                    ],
                    text: `
                        In the Caro-Kann Defense, after the moves
                        1.e2-e4 c7-c6, 2.d2-d4 d7-d5, 3.Nb1-d2
                        d5xe4, 4.Nd2xe4 Nb8-d7, 5.Bf1-c4 Ng8-f6,
                        6.Ne4-g5 e7-e6, 7.Qd1-e2 Bf8-e7, we reach
                        this position. White's Ng5, Bc4, and Qe2 are
                        all aiming at the e6-square. If it were black's
                        move, black would likely castle, moving the
                        King to safety. For the moment, however,
                        the King is the only black piece defending the
                        key f7-pawn, and white has an opportunity
                        to expose the King to a terrific attack. White
                        begins with the Knight sacrifice Ng5xf7. Faced
                        with the Knight fork of the Qd8 and the Rh8,
                        black recaptures with Ke8xf7.
                    `,
                },
                {
                    fens: [
                        'r1bq3r/pp1nbkpp/2p1pn2/8/2BP4/8/PPP1QPPP/R1B1K1NR w KQ - 0 1',
                    ],
                    text: `
                        The white Qe2 and Bc4 are now combining to
                        attack the e6-pawn, which black is defended
                        only with the Kf7. White continues with the
                        powerful Qe2xe6 check. The black King dare
                        not retreat to f8 to face a Qe6-f7 checkmate.
                        Black therefore moves the King forward to g6.
                    `,
                },
                {
                    fens: [
                        'r1bq3r/pp1nb1pp/2p1Qnk1/8/2BP4/8/PPP2PPP/R1B1K1NR w KQ - 0 1',
                    ],
                    text: `
                        Black is clearly in trouble. There are several
                        excellent moves here. The most efficient is
                        Bc4-d3 check. Black's only legal response is
                        Kg6-h5.
                    `,
                },
                {
                    fens: [
                        'r1bq3r/pp1nb1pp/2p1Qn2/7k/3P4/3B4/PPP2PPP/R1B1K1NR w KQ - 0 1',
                    ],
                    text: `
                        The end comes very quickly with Qe6-h3
                        checkmate. Note how well the two white
                        Bishops control the black King's many possible
                        escape squares.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Bishop Sacrifices',
            demo: [
                {
                    fens: [
                        '5rk1/5ppp/8/8/8/3B1N2/5PPP/3Q4 w - - 0 1',
                    ],
                    text: `
                        White begins straight away with Bd3xh7. Black
                        is not required to recapture the Bh7, but
                        avoiding the recapture simply permits white
                        to win the h7-pawn. Few players will decline
                        the offer. If black were to play Kg8-h8, white
                        would simply continue with Nf3-g5 and then
                        Qd1-h5 for a powerful attack.
                    `,
                },
                {
                    fens: [
                        '5r2/5ppk/8/8/8/5N2/5PPP/3Q4 w - - 0 1',
                    ],
                    text: `
                        Black opted to recapture with Kg8xh7; white
                        has given up a Bishop. In compensation for
                        the material, the black King is now exposed.
                        White's plan is to play Nf3-g5 and, if the black
                        King retreats, follow up with Qd1-h5 and then
                        the Qh5-h7 checkmate.
                    `,
                },
                {
                    fens: [
                        'r1bq1rk1/p1pn1ppp/1pn1p3/3pP3/1b1P4/2NB1N2/PPP2PPP/R1BQK2R w KQq - 0 1',
                    ],
                    text: `
                        Many of these sacrifices work because one
                        side has far better development than the
                        other. This is certainly true here. White has
                        successfully advanced the e-pawn to e5,
                        attacking black's Nf6, which has retreated to
                        d7. As a result, the black Knight is no longer
                        on f6, where it can defend the Kingside,
                        notably the h7-square.
                        White begins by playing with Bd3xh7 check.
                        Only the King can recapture. Black is not
                        required to recapture, but moving the King
                        to h8 would lose the h7-pawn with no compensation
                        and only invite additional moves
                        like Nf3-g5 and Qd1-h5 for a powerful attack.
                        Black therefore captures the Bishop with
                        Kg8xh7.
                    `,
                },
                {
                    fens: [
                        'r1bq1r2/p1pn1ppk/1pn1p3/3pP3/1b1P4/2N2N2/PPP2PPP/R1BQK2R w KQ - 0 1',
                    ],
                    text: `
                        Having sacrificed the Bishop, white should
                        play aggressively, not permitting black time
                        to safeguard the King. White therefore continues
                        with Nf3-g5 check. Black dare not capture
                        the Ng5 with the Qd8 because the white
                        Bc1 defends the Knight. Black therefore must
                        move the King. Black rejects the move Kh7-h8
                        because white would win quickly with Qd1-h5
                        check followed by Qh5-h7 checkmate.
                    `,
                },
                {
                    fens: [
                        'r1bq1rk1/p1pn1pp1/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1BQK2R w KQq - 0 1',
                    ],
                    text: `
                        Here, after the retreat of the black King to g8,
                        white continues the attack with Qd1-h5, with
                        the important threat of Qh5-h7 checkmate.
                        Fortunately for black, the Queen's arrival on
                        h5 is not check. To delay the checkmate, black
                        plays Rf8-e8 to give the black King an escape
                        to f8.
                    `,
                },
                {
                    fens: [
                        'r1bqr1k1/p1pn1pp1/1pn1p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                    ],
                    text: `
                        By moving off the f8-square, the black Rook
                        no longer defends the f7-pawn. White, with
                        two attacks on the f7-pawn, plays Qh5xf7
                        check, which forces the black King to retreat
                        to h8.
                    `,
                },
                {
                    fens: [
                        'r1bqr2k/p1pn1Qp1/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqr2k/p1pn2p1/1pn1p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqr1k1/p1pn2p1/1pn1p3/3pP1NQ/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqr1k1/p1pn2pQ/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqrk2/p1pn2pQ/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqrk1Q/p1pn2p1/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQq - 0 1',
                        'r1bqr2Q/p1pnk1p1/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 0 1',
                        'r1bqr3/p1pnk1Q1/1pn1p3/3pP1N1/1b1P4/2N5/PPP2PPP/R1B1K2R w KQ - 0 1',
                    ],
                    text: `
                        In this position, see if you can find the checkmate
                        in four moves. The solution? The game
                        ends quickly after the following forced
                        sequence:
                        Qf7-h5+ Kh8-g8
                        Qh5-h7+ Kg8-f8
                        Qh7-h8+ Kf8-e7
                        Qh8xg7 checkmate
                    `,
                },
                {
                    fens: [
                        '5rk1/5pp1/7p/8/8/3BBN2/3Q1PPP/8 w - - 0 1',
                    ],
                    text: `
                        As you can see, black has weakened the
                        Kingside by advancing the h-pawn to h6. If
                        you have a lead in development, you might
                        want to consider the following Bishop sacrifice.
                        White begins by playing Be3xh6. Not
                        wanting to lose the h6-pawn for no reason,
                        black recaptures with g7xh6.
                    `,
                },
                {
                    fens: [
                        '5rk1/5p2/7p/8/8/3B1N2/3Q1PPP/8 w - - 0 1',
                    ],
                    text: `
                        White has given up the Bishop but, as you
                        can see, the black Kingside has been broken
                        up as a result. Here, white can continue with
                        Qd2xh6, with the immediate threat of Qh6-h7
                        checkmate and, if necessary, Nf3-g5 with the
                        threat of Qh6-h7 mate.
                    `,
                },
                {
                    fens: [
                        'r1bqk1nr/pppnppbp/3p2p1/8/2BPP3/5N2/PPP2PPP/RNBQK2R w KQkq - 0 1',
                    ],
                    text: `
                        It is readily apparent that white has good
                        control over the center in this position. The
                        two center pawns are unopposed, and white's
                        Nf3 and Bc4 are already actively placed. By
                        contrast, black has fianchettoed the Bg7 and
                        developed the Queen's Knight to d7. Black's
                        last move, Nb8-d7, probably should have
                        been Ng8-f6 to develop the Knight toward
                        the center and to prepare for castling.
                        White can now take advantage of black's lack
                        of development by playing the impressive
                        Bc4xf7 check. Black can decline this Bishop
                        sacrifice offer with Ke8-f8, but white would
                        then simply be ahead a pawn with a nice
                        attack brewing with moves such as Nf3-g5
                        and Qd1-f3. Black therefore accepts the sacrifice
                        with Ke8xf7.
                    `,
                },
                {
                    fens: [
                        'r1bq2nr/pppnpkbp/3p2p1/8/3PP3/5N2/PPP2PPP/RNBQK2R w KQ - 0 1',
                    ],
                    text: `
                        White is down material in this position, but
                        there is significant compensation. Black's King
                        is exposed to attack, and white has the development
                        to take advantage of black's weaknesses.
                        White plays Nf3-g5 check. In response,
                        the black King has three choices. Retreating to
                        e8 or f8 loses the Queen immediately after
                        Ng5-e6! Black therefore decides to play it's
                        only other option, Kf7-f6.
                    `,
                },
                {
                    fens: [
                        'r1bq2nr/pppnp1bp/3p1kp1/6N1/3PP3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                    ],
                    text: `
                        Note that the black King can't move now.
                        White therefore plays Qd1-f3 checkmate.
                    `,
                },
            ],
        },
        {
            lessonHeader: 'Exchange Sacrifices',
            demo: [
                {
                    fens: [
                        '5rk1/pp1b3p/3ppnpQ/q7/2rNP1P1/2N2P2/PPP5/1K1R3R w K - 0 1',
                    ],
                    text: `
                        In the Dragon variation, to break through to
                        the King, white often must sacrifice a Rook for
                        a Knight. For example, in this position, white
                        would like to checkmate quickly with Qh6xh7,
                        but the black Nf6 is defending the h7-square.
                        White therefore begins by advancing the g4-pawn to g5, kicking the Nf6. The Knight must
                        move or be captured. Black therefore plays
                        Nf6-h5, blocking the h-file and continuing to
                        prevent white from checkmating on h7.
                    `,
                },
                {
                    fens: [
                        '5rk1/pp1b3p/3pp1pQ/q5Pn/2rNP3/2N2P2/PPP5/1K1R3R w K - 0 1',
                    ],
                    text: `
                        To break through to the King, white continues
                        the attack with an exchange sacrifice, Rh1xh5.
                        Obviously, the move offers the Rh1 for the
                        Nh5, but it succeeds in breaking up the black
                        Kingside and setting up the final checkmate.
                        Faced with the threat of Qh6xh7 and needing
                        compensation for the loss of the Knight, black
                        recaptures with g6xh5.
                    `,
                },
                {
                    fens: [
                        '5rk1/pp1b3p/3pp2Q/q5Pp/2rNP3/2N2P2/PPP5/1K1R4 w - - 0 1',
                    ],
                    text: `
                        With the g6-pawn gone, white is now able
                        to continue the attack with g5-g6. The pawn
                        move permits white to threaten Qh6xh7
                        checkmate. Black could defend against
                        the checkmate by sacrificing the Rf8 on f7,
                        but after g6xf7 check, white would have a
                        significant material advantage. Instead, black
                        captures the pawn on g6 with h7xg6.
                    `,
                },
                {
                    fens: [
                        '5rk1/pp1b4/3pp1pQ/q6p/2rNP3/2N2P2/PPP5/1K1R4 w - - 0 1',
                    ],
                    text: `
                        The end is near. Having broken though, white
                        continues with Qh6xg6 check, which forces
                        the black King into the corner.
                    `,
                },
                {
                    fens: [
                        '5r1k/pp1b4/3pp1Q1/q6p/2rNP3/2N2P2/PPP5/1K1R4 w - - 0 1',
                    ],
                    text: `
                        There are many ways for white to finish the
                        game quickly. The most accurate is the move
                        Rd1-g1, with the threats of Qg6-g7 checkmate,
                        as well as Qg6-h6 checkmate and even
                        Qg6xh5 checkmate. To delay the checkmates,
                        black could sacrifice the Qa5 on a2, but most
                        players with the black pieces would probably
                        resign after Rd1-g1.
                    `,
                },
                {
                    fens: [
                        '2r3k1/pprbppbp/3p1npB/q3n2P/3NP3/2N2P2/PPPQ2P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        Not all sacrifices and victories in the Dragon
                        variation are played by white. Here is a typical
                        exchange sacrifice that will help the player
                        with the black pieces gain a victory or two.
                        In this position, white has begun an attack
                        on the black Kingside with h2-h4-h5 and
                        with Be3-h6. Black has responded by posting
                        the Queen aggressively on a5 and by doubling
                        the Rooks on the c-file. Note that black
                        would like to play Qa5xa2, but the white
                        Nc3 is defending the a-pawn. Black therefore
                        begins with Rc7xc3, an exchange sacrifice that
                        removes a key defender. White could ignore
                        the capture with a move like Bh6xg7, but
                        white decides instead to accept the exchange
                        sacrifice with b2xc3.
                    `,
                },
                {
                    fens: [
                        '2r3k1/pp1bppbp/3p1npB/q3n2P/3NP3/2P2P2/P1PQ2P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        As you can see, the sacrifice of the exchange
                        has resulted in severe damage to the pawns
                        around the white King. The c-pawns are doubled.
                        Black has two attacks on the c3-pawn,
                        which is defended only by the white Queen.
                        Rather than capture the c3-pawn, black
                        decides instead to play Qa5xa2 with the powerful
                        threat Qa2-a1 checkmate. In an effort to
                        guard the a1-square and prevent the immediate
                        checkmate, white responds with Nd4-b3.
                    `,
                },
                {
                    fens: [
                        '2r3k1/pp1bppbp/3p1npB/4n2P/4P3/1NP2P2/q1PQ2P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        Black would like to continue with Rc8xc3, but
                        the white Queen on d2 is guarding the c3-
                        pawn. Black therefore plays Bg7xh6, attacking
                        the Qd2 and forcing white to respond with
                        Qd2xh6, a move that white usually likes to
                        play, but here it removes the Queen from its
                        role in defending the Queenside pawns.
                    `,
                },
                {
                    fens: [
                        '2r3k1/pp1bpp1p/3p1npQ/4n2P/4P3/1NP2P2/q1P3P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        With the white Queen now on h6, black can
                        continue the attack with Rc8xc3, a capture
                        that carries the threat of Rc3xc2 checkmate
                        as well as Qa2xc2 checkmate. Seeing that
                        after Rd1-d2, black could simply play Qa2xb3
                        (taking advantage of the fact that Rc3 pins the
                        white c2-pawn), white responds instead with
                        Nb3-d4, using the Nd4 to defend the c2-pawn.
                    `,
                },
                {
                    fens: [
                        '6k1/pp1bpp1p/3p1npQ/4n2P/3NP3/2r2P2/q1P3P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        Already with firm control over the white
                        Queenside, black now offers a Knight sacrifice
                        with Ne5-g4, attacking the white Queen. With
                        no good retreats for the white Queen (Qh6-
                        g5 meets Rc3-c5, Qh6-f4 meets e7-e5, and
                        Qh6-d2 meets Qa2-a1 checkmate), white
                        captures the black Knight with f3xg4.
                    `,
                },
                {
                    fens: [
                        '6k1/pp1bpp1p/3p1npQ/7P/3NP1P1/2r5/q1P3P1/2KR1B1R w K - 0 1',
                    ],
                    text: `
                        Black now plays Nf6xe4, capturing a central
                        white pawn but, more important, taking
                        control over the key d2-square that the white
                        King needs for its escape. White is now helpless.
                        The white Queen can sacrifice itself to
                        delay checkmate, but the threat of Qa2-a1
                        is simply too difficult to stop. If Nd4-b3, for
                        example, black would immediately end the
                        game with Qa2xc2 checkmate.
                    `,
                },
            ],
        },
    ],
};