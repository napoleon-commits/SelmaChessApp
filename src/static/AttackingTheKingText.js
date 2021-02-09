export default {
    header: `Attacking the King`,
    body: `
        The most exciting phase of the game of chess is the attacks leading to
        checkmate or to the gain of substantial material. In this chapter, you
        will be able to review a number of different patterns for attacking an
        opponent. By playing through these patterns, you will learn to recognize
        such possibilities in your own game—either how to bring about the
        attacks or how to stop them.
        In almost every section, you will see that the black King, as checkmate
        approaches, has no moves. As a general rule, when your opponent's
        King cannot move, all you need is check! Many strong players use this
        rule. When they reach positions in which their opponent's King cannot
        move, they know that they can safely sacrifice considerable material if
        they can find a way to deliver the final blow.
        Note: As I did in the later sections of Chapter 12, “Elementary
        Checkmates,” I again show these checkmates move by move, starting
        the move numbering with “1.” Again, these move numbers are not
        indicative of a start-to-finish game, but are instead used to easily illustrate
        the order of the moves necessary to achieve these checkmates.
    `,
    items: [
        {
            lessonHeader: `Smothered Mate`,
            demo: [
                {
                    fens: [
                        'r6k/6pp/8/6N1/8/1Q6/8/8 w - - 0 1',
                        'r6k/5Npp/8/8/8/1Q6/8/8 w - - 0 1',
                        'r5k1/5Npp/8/8/8/1Q6/8/8 w - - 0 1',
                    ],
                    text: `
                        Are you wondering why the black player would have allowed such a powerful
                        move? The actual checkmate usually begins in a position like this
                        one. As you can see, the black Rook is not on g8 and would certainly not
                        want to move there voluntarily.
                        White begins by moving the Ng5-f7, giving check to the black King. The
                        King has no choice but to move out of the corner to g8.
                    `,
                },
                {
                    fens: [
                        'r5k1/5Npp/8/8/8/1Q6/8/8 w - - 0 1',
                        'r5k1/6pp/7N/8/8/1Q6/8/8 w - - 0 1',
                        'r6k/6pp/7N/8/8/1Q6/8/8 w - - 0 1',
                    ],
                    text: `
                        The power of the double check! White continues by moving the Nf7-h6,
                        giving check to the black King from both Nh6 and Qb3. Black cannot
                        capture the white Knight with the g7-pawn because the black King is
                        also in check from the Queen.
                        Black must move its King, but not to f8 where the white Queen, supported
                        by the Nh6, would deliver checkmate with 3.Qb3-f7. The black King therefore
                        retreats back into the corner.
                    `,
                },
                {
                    fens: [
                        'r6k/6pp/7N/8/8/1Q6/8/8 w - - 0 1',
                        'r5Qk/6pp/7N/8/8/8/8/8 w - - 0 1',
                        '6rk/6pp/7N/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Rather than check again with the Knight on f7, white plays the amazing
                        Qb3-g8+. Black cannot capture the Queen with the its King because the
                        Knight on h6 supports the g8 square. Black therefore must capture on g8
                        with the Rook.
                    `,
                },
                {
                    fens: [
                        '6rk/6pp/7N/8/8/8/8/8 w - - 0 1',
                        '6rk/5Npp/8/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White's final move of Nh6-f7# is pleasing to the eye. Watch for such combinations
                        in your own games. You might be surprised how often this
                        smothered checkmate occurs in practice.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Back Rank Mate`,
            demo: [
                {
                    fens: [
                        '3r1k2/5ppp/8/3q4/8/4Q3/8/4R3 w - - 0 1',
                        '3r1k2/4Qppp/8/3q4/8/8/8/4R3 w - - 0 1',
                        '3r2k1/4Qppp/8/3q4/8/8/8/4R3 w - - 0 1',
                    ],
                    text: `
                        In this position, white does not have a direct checkmate if it moves its
                        Queen to the e8-square because the black King on f8 and the Rook on
                        d8 both help to defend e8. White therefore first plays the Queen to the
                        e7-square in order to drive the black King back to g8.
                    `,
                },
                {
                    fens: [
                        '3r2k1/4Qppp/8/3q4/8/8/8/4R3 w - - 0 1',
                        '3rQ1k1/5ppp/8/3q4/8/8/8/4R3 w - - 0 1',
                        '4r1k1/5ppp/8/3q4/8/8/8/4R3 w - - 0 1',
                    ],
                    text: `
                        The rest is simple. White has two attacks on the key e8-square. Black has
                        only the Rook defending. White therefore sacrifices the Queen on e8 with
                        Qe7-e8+, forcing Black to capture with Rd8xe8.
                    `,
                },
                {
                    fens: [
                        '4r1k1/5ppp/8/3q4/8/8/8/4R3 w - - 0 1',
                        '4R1k1/5ppp/8/3q4/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Although white has lost the Queen, the result is clear. The white Rook
                        moves to e8 to capture black's Rook. This move is checkmate, because
                        the black King, thanks to its own pawns, has no escape.
                    `,
                },
                {
                    fens: [
                        '5rk1/R4ppp/6r1/8/8/3q4/5Q2/5R2 w - - 0 1',
                        '5rk1/R4Qpp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                    ],
                    text: `
                        Here is a somewhat more challenging example of the back rank checkmate.
                        Notice first that white has three attacks on the black f7-pawn, while
                        black has only two defenses. White could therefore begin with 1.Ra7xf7,
                        although there would be no immediate checkmate if black responded
                        with Rg6-f6.
                        White begins instead with the neat Queen sacrifice on f7 (Qf2xf7+). In
                        check, black cannot simply retreat the King into the corner or white will
                        checkmate quickly with 2.Qf7xf8 checkmate. Black therefore must capture
                        the Queen with Rf8xf7.
                    `,
                },
                {
                    fens: [
                        '6k1/R4rpp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                        'R5k1/5rpp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                        'R4rk1/6pp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                    ],
                    text: `
                        At first glance, it might appear that white has simply lost a Queen. But
                        don't forget about the back rank checkmate. White plays Ra7-a8, delivering
                        check to the Kg8. Black could bring the Queen back to d8, but white
                        would simply capture the Queen. Black therefore blocks the check by
                        retreating Rf7-f8.
                    `,
                },
                {
                    fens: [
                        'R4rk1/6pp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                        'R4Rk1/6pp/6r1/8/8/3q4/8/8 w - - 0 1',
                        'R4rk1/6pp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                        '5Rk1/6pp/6r1/8/8/3q4/8/5R2 w - - 0 1',
                    ],
                    text: `
                        To end the game, white will capture the black Rf8 with either of its Rooks
                        (Ra8xf8 or Rf1xf8)—checkmate!
                    `,
                },
            ],
        },
        {
            lessonHeader: `Gueridon Mate`,
            demo: [
                {
                    fens: [
                        'r1bqk1nr/pppnbppp/3p4/8/2BNP3/8/PPP2PPP/RNBQK2R w KQkq - 0 1',
                        'r1bqk1nr/pppnbBpp/3p4/8/3NP3/8/PPP2PPP/RNBQK2R w KQkq - 0 1',
                        'r1bq2nr/pppnbkpp/3p4/8/3NP3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                    ],
                    text: `
                        Some combinations seem to come from nowhere. White does have excellent
                        control over the center and appears to be ready to castle and to play
                        Nb1-c3.
                        Instead, white launches a power attack on the black King with Bc4xf7+.
                        The f7-pawn, defended only by the black King, is black's weakest pawn.
                        Black could decline the sacrifice and opt not to recapture with the King,
                        but that would leave black's King on f8 and white would be able to fork
                        the black King and Queen with Nd4-e6+. So black recaptures the Bishop
                        with Ke8xf7.
                    `,
                },
                {
                    fens: [
                        'r1bq2nr/pppnbkpp/3p4/8/3NP3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                        'r1bq2nr/pppnbkpp/3pN3/8/4P3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                        'r1bq2nr/pppnb1pp/3pk3/8/4P3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                    ],
                    text: `
                        White presses forward with the amazing Nd4-e6, threatening the black
                        Queen. Note that black could simply move the Qd8 to safety on e8. Doing
                        so, however, would invite Ne6xc7, forking the Rook and Queen, and white
                        would probably continue to attack with Qd1-d5. Instead, black, noticing
                        that the advanced white Knight is undefended on e6, captures it with the
                        King.
                    `,
                },
                {
                    fens: [
                        'r1bq2nr/pppnb1pp/3pk3/8/4P3/8/PPP2PPP/RNBQK2R w KQ - 0 1',
                        'r1bq2nr/pppnb1pp/3pk3/3Q4/4P3/8/PPP2PPP/RNB1K2R w KQ - 0 1',
                        'r1bq2nr/pppnb1pp/3p1k2/3Q4/4P3/8/PPP2PPP/RNB1K2R w KQ - 0 1',
                    ],
                    text: `
                        It is extremely dangerous to move a King so early into the middle of the
                        board. White is quick to punish the black King. White continues with Qd1-d5 check, attacking the black King with support from its e4-pawn. Black,
                        blocked by a pawn, a Knight, and a Bishop, has only one legal move:
                        Ke6-f6.
                    `,
                },
                {
                    fens: [
                        'r1bq2nr/pppnb1pp/3p1k2/3Q4/4P3/8/PPP2PPP/RNB1K2R w KQ - 0 1',
                        'r1bq2nr/pppnb1pp/3p1k2/5Q2/4P3/8/PPP2PPP/RNB1K2R w KQ - 0 1',
                    ],
                    text: `
                        The white Queen delivers the Gueridon checkmate with Qd5-f5. The
                        white Queen smothers the black King, with black's own pieces blocking
                        the escape.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Greco's Mate`,
            demo: [
                {
                    fens: [
                        'r1b2r1k/ppn3pp/1qp5/2b1N3/3p4/NB3Q2/PPPn1PPP/R4RK1 w Qq - 0 1',
                        'r1b2r1k/ppn3pp/1qp3N1/2b5/3p4/NB3Q2/PPPn1PPP/R4RK1 w Qq - 0 1',
                        'r1b2r1k/ppn3p1/1qp3p1/2b5/3p4/NB3Q2/PPPn1PPP/R4RK1 w Qq - 0 1',
                    ],
                    text: `
                        At first glance, it might appear that white is in trouble. After all, the black
                        Knight on d2 is forking the white Qf3 and the Rf1. However, notice that
                        the white Bb3 is cutting straight through to the g8-square, preventing the
                        black King from moving.
                        White begins by checking with the e5-Knight to g6. This Knight check
                        would be checkmate, except that black can capture the Knight with its
                        h7-pawn. Black has no choice but to accept this Knight sacrifice (h7xg6).
                    `,
                },
                {
                    fens: [
                        'r1b2r1k/ppn3p1/1qp3p1/2b5/3p4/NB3Q2/PPPn1PPP/R4RK1 w Qq - 0 1',
                        'r1b2r1k/ppn3p1/1qp3p1/2b5/3p4/NB5Q/PPPn1PPP/R4RK1 w Qq - 0 1',
                    ],
                    text: `
                        White ends the game quickly with Qh3 checkmate, a pretty example of
                        Greco's mate.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Epaulette Mate`,
            demo: [
                {
                    fens: [
                        '5rkr/p3Qppp/5n2/qp6/3p4/1B1R4/P1P2PPP/5RK1 w k - 0 1',
                        '5rkr/p4ppp/5Q2/qp6/3p4/1B1R4/P1P2PPP/5RK1 w k - 0 1',
                        '5rkr/p4p1p/5p2/qp6/3p4/1B1R4/P1P2PPP/5RK1 w k - 0 1',
                    ],
                    text: `
                        Black's position looks secure, but white will win quickly, starting with
                        Qe7xf6. The Queen capture pries open the black Kingside. Black is not
                        forced to recapture and, indeed other moves would permit the game to
                        go on. Nonetheless, the winning of a Knight is very useful and usually
                        enough to guarantee victory. Black therefore responds with g7xf6.
                    `,
                },
                {
                    fens: [
                        '5rkr/p4p1p/5p2/qp6/3p4/1B1R4/P1P2PPP/5RK1 w k - 0 1',
                        '5rkr/p4p1p/5p2/qp6/3p4/1B4R1/P1P2PPP/5RK1 w k - 0 1',
                    ],
                    text: `
                        Now that the g7-pawn has captured the white Queen on f6, the g-file
                        is open for the white Rook to deliver the checkmate. Once white plays
                        Rd3-g3, the King is in check. Black cannot capture or block the Rook, and
                        the black King has no escape from the check. It's checkmate!
                    `,
                },
            ],
        },
        {
            lessonHeader: `Anastasia's Mate`,
            demo: [
                {
                    fens: [
                        '3r1rk1/p1p2ppp/1pb5/5N2/q4P2/6P1/PPPQ4/1K5R w K - 0 1',
                        '3r1rk1/p1p1Nppp/1pb5/8/q4P2/6P1/PPPQ4/1K5R w K - 0 1',
                        '3r1r1k/p1p1Nppp/1pb5/8/q4P2/6P1/PPPQ4/1K5R w K - 0 1',
                    ],
                    text: `
                        With white to move, it plays the Knight to e7 check, which forces the
                        black King into the corner at h8. After black's move, note that the black
                        King cannot move. All white needs is to check.
                    `,
                },
                {
                    fens: [
                        '3r1r1k/p1p1Nppp/1pb5/8/q4P2/6P1/PPPQ4/1K5R w K - 0 1',
                        '3r1r1k/p1p1NppR/1pb5/8/q4P2/6P1/PPPQ4/1K6 w - - 0 1',
                        '3r1r2/p1p1Nppk/1pb5/8/q4P2/6P1/PPPQ4/1K6 w - - 0 1',
                    ],
                    text: `
                        White blasts through the black defense with a nice Rook sacrifice on h7.
                        Black has no choice but to recapture the Rook with its King. The mate is
                        now set up. The white Knight on e7 controls both g8 and g6, while the
                        black pawn blocks any escape by the black King to g7.
                    `,
                },
                {
                    fens: [
                        '3r1r2/p1p1Nppk/1pb5/8/q4P2/6P1/PPPQ4/1K6 w - - 0 1',
                        '3r1r2/p1p1Nppk/1pb5/8/q4P2/6P1/PPP4Q/1K6 w - - 0 1',
                    ],
                    text: `
                        White ends the game with Anastasia's mate, this time with the check from
                        the Queen on h2.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Boden's Mate`,
            demo: [
                {
                    fens: [
                        '2kr4/pp1n4/2p5/8/8/5Q2/7B/5B2 w - - 0 1',
                        '2kr4/pp1n4/2Q5/8/8/8/7B/5B2 w - - 0 1',
                        '2kr4/p2n4/2p5/8/8/8/7B/5B2 w - - 0 1',
                    ],
                    text: `
                        White begins with Qf3xc6+, a spectacular Queen
                        sacrifice that rips open the black Queenside.
                        The black King cannot move to b8 because the
                        Bh2 controls the b8-h2 diagonal, and there is
                        no way to block the check. Black therefore
                        has no choice but to accept the sacrifice by
                        capturing the Queen, b7xc6.
                    `,
                },
                {
                    fens: [
                        '2kr4/p2n4/2p5/8/8/8/7B/5B2 w - - 0 1',
                        '2kr4/p2n4/B1p5/8/8/8/7B/8 w - - 0 1',
                    ],
                    text: `
                        The game ends abruptly with the check
                        from the light-squared Bishop, Bf1-a6. Notice
                        how the two Bishops by themselves deliver
                        this pleasing checkmate.
                    `,
                },
                {
                    fens: [
                        '1bkr3r/pp1n1ppp/2q1pn2/1N5b/P7/3B1Q1P/1PP1NPPB/3RR2K w k - 0 1',
                        '1bkr3r/Np1n1ppp/2q1pn2/7b/P7/3B1Q1P/1PP1NPPB/3RR2K w k - 0 1',
                        '2kr3r/bp1n1ppp/2q1pn2/7b/P7/3B1Q1P/1PP1NPPB/3RR2K w k - 0 1',
                    ],
                    text: `
                        White begins by ditching the Nb5, capturing the pawn on a7 and forcing
                        black to recapture with the Bb8. Once the exchange on a7 occurs, you will
                        start to recognize Boden's mate.
                    `,
                },
                {
                    fens: [
                        '2kr3r/bp1n1ppp/2q1pn2/7b/P7/3B1Q1P/1PP1NPPB/3RR2K w k - 0 1',
                        '2kr3r/bp1n1ppp/2Q1pn2/7b/P7/3B3P/1PP1NPPB/3RR2K w k - 0 1',
                        '2kr3r/b2n1ppp/2p1pn2/7b/P7/3B3P/1PP1NPPB/3RR2K w k - 0 1',
                    ],
                    text: `
                        In this example, there is no Queen sacrifice, simply an exchange of
                        Queens on the c6-square. But the result is the same. White's light-squared
                        Bishop now has access to the key a6-square.
                    `,
                },
                {
                    fens: [
                        '2kr3r/b2n1ppp/2p1pn2/7b/P7/3B3P/1PP1NPPB/3RR2K w k - 0 1',
                        '2kr3r/b2n1ppp/B1p1pn2/7b/P7/7P/1PP1NPPB/3RR2K w k - 0 1',
                    ],
                    text: `
                        The a6-square is now open for the checkmate. Even though there wasn't
                        a true Queen sacrifice here (black and white just exchanged Queens), the
                        final checkmate is still very satisfying.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Blackburne's Mate`,
            demo: [
                {
                    fens: [
                        '5rk1/5p2/6p1/6Np/8/3B4/1B3PPP/3Q2K1 w - - 0 1',
                        '5rk1/5p2/6p1/6NQ/8/3B4/1B3PPP/6K1 w - - 0 1',
                        '5rk1/5p2/8/6Np/8/3B4/1B3PPP/6K1 w - - 0 1',
                    ],
                    text: `
                        White begins with a Queen sacrifice that black simply cannot refuse. The
                        Qd1xh5 threatens both Qh5-h7 checkmate and the Qh5-h8 checkmate.
                        Once the g6xh5 recapture has occurred, the Bishop's diagonals are fully
                        open.
                    `,
                },
                {
                    fens: [
                        '5rk1/5p2/8/6Np/8/3B4/1B3PPP/6K1 w - - 0 1',
                        '5rk1/5p1B/8/6Np/8/8/1B3PPP/6K1 w - - 0 1',
                    ],
                    text: `
                        In this example, white offered a Queen sacrifice to open lines for a
                        Blackburn's checkmate. Bishop d3-h7 finishes the job. The fault here, of
                        course, is black's for having weakened its Kingside with the advance of
                        both the g- and h-pawns.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Lolli's Mate`,
            demo: [
                {
                    fens: [
                        '5rk1/5ppp/8/5PQ1/8/8/8/8 w - - 0 1',
                        '5rk1/5ppp/5P2/6Q1/8/8/8/8 w - - 0 1',
                        '5rk1/5p1p/5Pp1/6Q1/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        As you can see in this example, the advance
                        of the white pawn to f6 will often serve to
                        weaken the black pawn structure, whether or
                        not the f-pawn is taken. Here, of course, with
                        the Queen pinning the g7-pawn, the g7xf6
                        capture is illegal. White's f5-f6 pawn advance
                        threatens checkmate on g7 with Qg5xg7.
                        Because black is unable to use a piece to capture
                        on f6 or to defend the g7-pawn, black
                        will have to respond with g7-g6, further weakening
                        the Kingside. As you know, every pawn
                        move creates a weakness. In this case, the
                        g7-g6 pawn push creates a significant weakness
                        on the h6-square.
                    `,
                },
                {
                    fens: [
                        '5rk1/5p1p/5Pp1/6Q1/8/8/8/8 w - - 0 1',
                        '5rk1/5p1p/5PpQ/8/8/8/8/8 w - - 0 1',
                        '5r1k/5p1p/5PpQ/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White takes immediate advantage of the
                        new weakness on h6 to move the Queen
                        there. The threat, often unstoppable, is the
                        Qh6-g7 checkmate.
                    `,
                },
                {
                    fens: [
                        '5r1k/5p1p/5PpQ/8/8/8/8/8 w - - 0 1',
                        '5r1k/5pQp/5Pp1/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        An abrupt finish. It's mate.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Pillsbury's Mate`,
            demo: [
                {
                    fens: [
                        '5rk1/6pp/8/8/8/8/1B6/6R1 w - - 0 1',
                        '5rk1/6Rp/8/8/8/8/1B6/8 w - - 0 1',
                        '5r1k/6Rp/8/8/8/8/1B6/8 w - - 0 1',
                    ],
                    text: `
                        Here, white captures on g7 with the Rook
                        because the black King is forced into the
                        corner and white will now have a powerful
                        discovered check.
                    `,
                },
                {
                    fens: [
                        '5r1k/6Rp/8/8/8/8/1B6/8 w - - 0 1',
                        '5r1k/7p/8/8/8/8/1B6/6R1 w - - 0 1',
                        '7k/7p/5r2/8/8/8/1B6/6R1 w - - 0 1',

                    ],
                    text: `
                        White responds with Rg7-g1 for check (actually
                        white could deliver check by withdrawing
                        the Rook to any of the other squares along the
                        g-file. The discovered check looks like mate
                        but black can delay the inevitable by blocking
                        the check with the Rf8-f6.
                    `,
                },
                {
                    fens: [
                        '7k/7p/5r2/8/8/8/1B6/6R1 w - - 0 1',
                        '7k/7p/5B2/8/8/8/8/6R1 w - - 0 1',

                    ],
                    text: `
                        Another checkmate that is pleasing to the eye.
                        The black King is jailed in the corner by the
                        white Rook and the black pawn. The little
                        Bishop delivers the final blow.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Domiano's Mate`,
            demo: [
                {
                    fens: [
                        '5rk1/q5p1/3p2P1/8/2p5/1pP5/1P6/1KQ4R w - - 0 1',
                        '5rkR/q5p1/3p2P1/8/2p5/1pP5/1P6/1KQ5 w - - 0 1',
                        '5r1k/q5p1/3p2P1/8/2p5/1pP5/1P6/1KQ5 w - - 0 1',
                    ],
                    text: `
                        The Rook sacrifice here brings the King to the h8-square and opens up the
                        h1-square for the Queen. Black has no choice but to capture the Rook and
                        place the King in jeopardy on h8.
                    `,
                },
                {
                    fens: [
                        '5r1k/q5p1/3p2P1/8/2p5/1pP5/1P6/1KQ5 w - - 0 1',
                        '5r1k/q5p1/3p2P1/8/2p5/1pP5/1P6/1K5Q w - - 0 1',
                        '5rk1/q5p1/3p2P1/8/2p5/1pP5/1P6/1K5Q w - - 0 1',
                    ],
                    text: `
                        With the black King exposed on h8, the white Queen gains access with
                        check to the h-file and especially to the key h7-square. The black King has
                        only one move, to retreat to the g8-square.
                    `,
                },
                {
                    fens: [
                        '5rk1/q5p1/3p2P1/8/2p5/1pP5/1P6/1K5Q w - - 0 1',
                        '5rk1/q5pQ/3p2P1/8/2p5/1pP5/1P6/1K6 w - - 0 1',
                    ],
                    text: `
                        Another nice finish. White finishes the game by moving the Queen to the
                        key h7-square. The Qh7, defended by the pawn on g6, checkmates the
                        black King.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Legal's Mate`,
            demo: [
                {
                    fens: [
                        'rn1qkbnr/ppp2p1p/3p2p1/4p3/2B1P1b1/2N2N2/PPPP1PPP/R1BQK2R w KQkq - 0 1',
                        'rn1qkbnr/ppp2p1p/3p2p1/4N3/2B1P1b1/2N5/PPPP1PPP/R1BQK2R w KQkq - 0 1',
                        'rn1qkbnr/ppp2p1p/3p2p1/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 1',
                    ],
                    text: `
                        White begins by breaking the pin from the
                        Bg4. Black is not obligated to capture the
                        Queen, although most beginners would. By
                        simply recapturing the Ne5 with its d6-pawn
                        instead, black would only be down a pawn
                        after white's anticipated next move of
                        2.Qd1xg4. But black opts to capture the
                        Queen.
                    `,
                },
                {
                    fens: [
                        'rn1qkbnr/ppp2p1p/3p2p1/4N3/2B1P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 1',
                        'rn1qkbnr/ppp2B1p/3p2p1/4N3/4P3/2N5/PPPP1PPP/R1BbK2R w KQkq - 0 1',
                        'rn1q1bnr/ppp1kB1p/3p2p1/4N3/4P3/2N5/PPPP1PPP/R1BbK2R w KQ - 0 1',
                    ],
                    text: `
                        Although down a Queen, white has a mate in
                        two moves! White continues with the pawn
                        capture on f7, check, taking advantage of the
                        centralized Knight on e5, which now defends
                        the f7-Bishop. The King has only one legal
                        move, to e7.
                    `,
                },
                {
                    fens: [
                        'rn1q1bnr/ppp1kB1p/3p2p1/4N3/4P3/2N5/PPPP1PPP/R1BbK2R w KQ - 0 1',
                        'rn1q1bnr/ppp1kB1p/3p2p1/3NN3/4P3/8/PPPP1PPP/R1BbK2R w KQ - 0 1',
                    ],
                    text: `
                        In the final position, the white pieces harmoniously
                        cooperate to cover all of the King's
                        possible moves. The Nc3-d5 delivers the
                        checkmate by attacking the King and by covering
                        the f6 escape square. The Ne5 covers d7
                        and f7, while the Bf7 covers e8 and e6. It's
                        checkmate!
                    `,
                },
            ],
        },
    ],
}