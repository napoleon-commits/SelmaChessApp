export default {
    header: 'An Introduction to Endgames',
    body: `
        If both sides have played with reasonable care, the result at the end
        of the game is often what appears at first to be a very simple position.
        There are just one or two pieces on the board and perhaps just a handful
        of pawns. As you will see in this chapter, it is possible to gain victory
        with just a small advantage. You will learn how to win with an extra
        pawn, and hopefully, how to draw if you are down a pawn.
        The strategies in this chapter are relatively straightforward, but they
        form a solid foundation for your middlegame strategy. Perhaps you will
        be able to exchange pieces to reach a position similar to one in this
        chapter. Transitions to favorable endgames are at the heart of a master's
        strategy. Many beginning players prefer to spend their time learning
        opening variations. Strong players often begin at the end, mastering the
        subtleties of these endgames in the expectation that their opponents
        will not know what to do in this phase of the game.
        No one will expect that you will study endgames for years, but having
        knowledge of the positions in this chapter will help you to play your
        endgames with much more confidence. Throughout this chapter, you'll
        also find helpful sidebars highlighting basic endgame principles that
        you need to keep in mind as you play and learn.
    `,
    items: [
        {
            lessonHeader: `King and Pawn`,
            demo: [
                {
                    fens: [
                        '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        This first position is worth remembering because, no matter whose move
                        it is, white will successfully be able to promote the pawn. As you can see,
                        the white King is in front of the pawn. That's the key! In this position, if
                        it is black's move, the black King must move to either d8 or to f8. Either
                        way, the poor King must leave the square on which the white pawn will
                        be promoted. White will then be able to move the King forward to gain
                        control over the Queening square.
                    `,
                },
                {
                    fens: [
                        '3k4/5K2/8/4P3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In this position, after just one move, the situation has become completely
                        clear. White has complete control over the key e8-square as well as the e6
                        and e7 squares through which the white pawn will now travel. White will
                        successfully promote the pawn into a Queen and then proceed with a
                        King and Queen to deliver the checkmate we reviewed in Chapter 12,
                        "Elementary Checkmates."
                    `,
                },
                {
                    fens: [
                        '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        That was easy, but what if white has to move first from the Magic position.
                        It's still a win for white. From this same position, white begins by sliding
                        the King to d6 or f6, making way to push the pawn forward. Whichever
                        direction the white King selects, black will move in the same direction,
                        attempting to prevent the white King from moving forward and capturing
                        easy control over the e8-Queening square.
                    `,
                },
                {
                    fens: [
                        '3k4/8/3K4/4P3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Having made room for the advance of the pawn, white pushes it forward.
                        Black has no choice but to defend the Queening square by occupying it.
                    `,
                },
                {
                    fens: [
                        '4k3/8/3KP3/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Now, white again pushes the e6-pawn to e7. Note the key principle. The
                        pawn advances WITHOUT giving check to the black King. The King has
                        only one legal move, Ke8-f7.
                    `,
                },
                {
                    fens: [
                        '8/4Pk2/3K4/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White has a choice, but only one correct move. Queening the pawn would
                        be a significant error because the black Kf7 would simply capture it! The
                        key move is to patiently move the white King to d7 where it controls the
                        Queening square and prepares the successful advance of the pawn to e8.
                    `,
                },
                {
                    fens: [
                        '8/4k3/8/3KP3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Here, with black on the defense, black must simply prevent the white
                        King from moving in front of its pawn. Black therefore moves Ke7-d7,
                        placing itself opposite the white King. Chess players call this "taking the
                        opposition."
                    `,
                },
                {
                    fens: [
                        '8/3k4/8/3KP3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White now advances the pawn with e6 check. The black King, whenever it
                        can, should occupy the square directly in front of the pawn.
                    `,
                },
                {
                    fens: [
                        '8/4k3/4P3/3K4/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White can't move the pawn because the black King is blocking its path.
                        Therefore, white must move the King. With Kd5-e5, white defends its
                        pawn. Whenever the black King must move from the square in front of
                        the pawn, it needs to move directly backwards.
                    `,
                },
                {
                    fens: [
                        '4k3/8/4P3/4K3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Here's the key. If white advances the King to either d6 or f6, black must
                        take the opposition. On Ke5-d6, black must play King to d8. If instead,
                        white plays Ke5-f6, black must move its King to f8.
                    `,
                },
                {
                    fens: [
                        '3k4/8/3KP3/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Now, when white advances the pawn to e7, it is with a check. The black
                        King moves to block the advance of the pawn with Kd8-e8.
                    `,
                },
                {
                    fens: [
                        '4k3/4P3/3K4/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In this final position, white has a terrible choice. Kd6-e6 is a stalemate, a
                        draw, and all other moves permit black to capture the pawn.
                    `,
                },
                {
                    fens: [
                        '8/8/8/7P/3k4/8/1K6/8 w - - 0 1',
                    ],
                    text: `
                        To make it simpler to calculate long sequences, chess players have introduced
                        a counting tool called "the Rule of the Square."
                        In this position, the white pawn is moving toward the h8-Queening square.
                        You can see that the white h-pawn needs just three more moves to reach
                        the h8-Queening square, while the black King needs four moves to reach h8.
                        To make it simpler to see if the King can capture the pawn, imagine that
                        the white pawn forms a four by four square.
                    `,
                },
                {
                    fens: [
                        '8/8/5p2/7P/3k4/8/1K6/8 w - - 0 1',
                    ],
                    text: `
                        Most rules have exceptions. Here are two special cases. This is the same
                        diagram as above, but with the addition of a black pawn on f6. The black
                        King can enter the square of the white pawn but will not be able to do so
                        again as the white pawn advances. The reason, of course, is that the black
                        pawn on f6 is blocking the black King's path toward the h8-Queening
                        square.
                    `,
                },
                {
                    fens: [
                        'K7/8/8/8/8/8/1k5P/8 w - - 0 1',
                    ],
                    text: `
                        Here is a second exception. It certainly appears at first glance that the
                        black King will be able to reach the white pawn. The square is larger, and
                        after white moves h2-h3, the black King would indeed be able to reach
                        the pawn in time. However, white can begin with h2-h4! Suddenly, by
                        moving ahead two squares, the black King will be unable to reach the
                        pawn.
                    `,
                },
                {
                    fens: [
                        '8/8/8/2K5/8/3k4/7P/8 w - - 0 1',
                    ],
                    text: `
                        You have already seen that using the opposition can help you to draw
                        against a King and a pawn. The opposition can also help you to win. In
                        this position, white could try to advance the h-pawn quickly, but after h2-
                        h4 black would be able to enter the square of the pawn with Kd3-e4 and
                        eventually capture it.
                        Rather than advance the h-pawn directly, white should instead take the
                        opposition with Kc5-d5, blocking the black King's access to the e4-square.
                        Black will therefore continue with Kd3-e3 in an effort to reach the white
                        h-pawn.
                    `,
                },
                {
                    fens: [
                        '8/8/8/3K4/8/4k3/7P/8 w - - 0 1',
                    ],
                    text: `
                        White could now advance the h-pawn with h2-h4, but again the black
                        King would be able to enter the square of the pawn after Ke3-f4. Showing
                        off the power of the opposition, white again continues with Kd5-e5 and
                        black continues to move toward the pawn with Ke3-f3.
                    `,
                },
                {
                    fens: [
                        '8/8/8/4K3/8/5k2/7P/8 w - - 0 1',
                    ],
                    text: `
                        The opposition pays off this time with Ke5-f5 because the black King
                        cannot move to the g3-square. Black therefore tries to reach the h2-pawn
                        with Kf3-g2, an act of some desperation.
                    `,
                },
                {
                    fens: [
                        '8/8/8/5K2/8/8/6kP/8 w - - 0 1',
                    ],
                    text: `
                        The finale is now clear. White simply plays h2-h4 and the black King will
                        not be able to capture it. The h-pawn will race unimpeded down the
                        board and promote on the h8-Queening square.
                    `,
                },
                {
                    fens: [
                        '8/8/8/2Pk4/3P4/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Late in the game, the pawns are often capable of defending themselves
                        from capture. In this position for example, the King can capture the white
                        pawn on d4, but the capture would bring the King outside the square of
                        the c5-pawn. These pawns are therefore said to be "self-supporting."
                    `,
                },
                {
                    fens: [
                        '8/8/3k4/8/2P1P3/8/8/8 w - - 0 1',
                    ],
                    text: `
                        It might surprise you, but these two pawns are also self-supporting. Black
                        can move the King in an attempt to capture one of them, but white will
                        respond simply by advancing the other pawn. For example, black might
                        play the move Kd6-e5, attacking the white e4-pawn. White would
                        respond with c4-c5.
                    `,
                },
                {
                    fens: [
                        '8/8/8/2P1k3/4P3/8/8/8 w - - 0 1',
                    ],
                    text: `
                        It is clear that black dare not capture the e4-pawn here because that
                        capture would bring the King outside the square of the c5-pawn. White
                        would simply advance the c5-pawn to c6 and soon thereafter promote
                        the c-pawn to a Queen.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Rook and Pawn`,
            demo: [
                {
                    fens: [
                        '8/8/2PP4/8/8/8/7r/8 w - - 0 1',
                    ],
                    text: `
                        This first position illustrates that two connected passed pawns on the 6th
                        rank are more powerful than a Rook. Even with black to move, there's
                        simply no way to prevent at least one of the pawns from successfully
                        promoting to a Queen. Black's best hope might be to attack one of the
                        pawns from the rear, but white will respond by advancing the pawn that
                        is not attacked.
                    `,
                },
                {
                    fens: [
                        '8/3P4/2P5/8/8/8/2r5/8 w - - 0 1',
                    ],
                    text: `
                        Black could now capture the c6-pawn, but white would successfully promote
                        the other pawn. Instead, white could move the Rook behind the
                        more advanced d-pawn. Of course, white would respond by advancing
                        the c-pawn.
                    `,
                },
                {
                    fens: [
                        '8/2PP4/8/8/8/8/3r4/8 w - - 0 1',
                    ],
                    text: `
                        It's clear in this position that one of the pawns will Queen. The back Rook
                        can capture the d-pawn, but there's simply no way for the Rook to capture
                        both pawns.
                    `,
                },
                {
                    fens: [
                        '4k3/8/8/3PK3/8/8/r7/1R6 w - - 0 1',
                    ],
                    text: `
                        In the section on King and pawn endgames, you learned that to win, the
                        winning side needs to place its King in front of its advancing pawn. The
                        same holds true here. In this position, white is threatening to play Ke5-e6.
                        Black could try to check the white King with Ra2-e2, but the white King
                        could escape check by moving in front of the pawn on d6. Similarly, after
                        Ke5-e6, black could check the King with Ra2-a6. But white would simply
                        advance the pawn to d6, with the terrible threat of Rb1-b8 checkmate!
                        With black to move, in order to draw, black must play Ra2-a6 to prevent
                        the white King from moving in front of its pawn. White can move the
                        Rook around for a while, but so long as black's Rook maintains control
                        over the 6th rank, the white King will not be able to move in front of its
                        pawn. To make progress, white will therefore have to advance the d5-pawn to d6.
                    `,
                },
                {
                    fens: [
                        '4k3/8/r2P4/4K3/8/8/8/1R6 w - - 0 1',
                    ],
                    text: `
                        As soon as white advances the d-pawn, black must move the Rook back
                        as far as safely possible to the 1st or 2nd rank, in this case, back to a2.
                        White can play Ke5-e6, threatening checkmate with Rb1-b8, but black will
                        be able to draw.
                    `,
                },
                {
                    fens: [
                        '4k3/8/3PK3/8/8/8/r7/1R6 w - - 0 1',
                    ],
                    text: `
                        Although the threat of checkmate with Rb1-b8 is in the air, black has a
                        simple draw. Rather than Ra2-a8 to defend the checkmate, black decides
                        to check the white King with Ra2-e2. Note that, with the pawn on d6,
                        there's simply no place for white to escape a never ending series of
                        checks. If white decides to approach the black Rook with the King, black
                        will be able to approach and then capture the d6-pawn with Ke8-d7.
                    `,
                },
                {
                    fens: [
                        '2k1K3/4P3/8/8/8/8/7R/5r2 w - - 0 1',
                    ],
                    text: `
                        The major difference between this position and the last is that the white
                        King already controls the Queening square on e8. Note, however, that the
                        white King cannot legally move off to one side and then Queen the pawn.
                        For the moment at least, the white King cannot move because the black
                        King defends d8 and d7, and the black Rook defends f8 and f7.
                        In order to win, white must drive back the black King and then find a
                        clever way to shield the white King from attacks by the black Rook. White
                        begins by playing Rh2-c2 check, forcing the black King to retreat to the
                        b-file.
                    `,
                },
                {
                    fens: [
                        '4K3/1k2P3/8/8/8/8/2R5/5r2 w - - 0 1',
                    ],
                    text: `
                        In order to construct a shield of protection for the white King, white plays
                        the impressive move Rc2-c4. The purpose of this Rook move might not be
                        immediately apparent. I recommend that you review this small section at
                        least twice in order to understand the importance of this move. The Rc4
                        will, after several more moves, help to erect a shield in the center with
                        the white King on e5 and the Rook protecting against checks on the
                        e4-square. Chess players call this "building a bridge." Black responds to
                        white's Rc2-c4 by moving its King to b6, hoping to advance to b5 to attack
                        the c4-Rook.
                    `,
                },
                {
                    fens: [
                        '4K3/4P3/1k6/8/2R5/8/8/5r2 w - - 0 1',
                    ],
                    text: `
                        White is now ready to try to promote the e-pawn by playing Ke8-d7. As
                        you can see, after the King leaves the e8-Queening square, white threatens
                        to promote the e-pawn to a Queen. Black must therefore check the
                        King with the Rook (Rf1-d1) in an effort to delay or prevent the pawn promotion.
                    `,
                },
                {
                    fens: [
                        '8/3KP3/1k6/8/2R5/8/8/3r4 w - - 0 1',
                    ],
                    text: `
                        There is no point in returning the King to the e8-square. Rather, white
                        plays Kd7-e6, again threatening to promote the e-pawn. Black continues
                        to check the white King with Rd1-e1 check.
                    `,
                },
                {
                    fens: [
                        '8/4P3/1k2K3/8/2R5/8/8/4r3 w - - 0 1',
                    ],
                    text: `
                        White must be careful here. Ke6-d5, for example, would permit black simply
                        to capture the e-pawn. White therefore prepares the construction of
                        the shield more patiently, first with Ke6-d6. Again, black continues to
                        check the white King by playing Re1-d1 check.
                    `,
                },
                {
                    fens: [
                        '8/4P3/1k1K4/8/2R5/8/8/3r4 w - - 0 1',
                    ],
                    text: `
                        Now, with no direct threat to the e7-pawn, white simply plays Kd6-e5,
                        again with the threat of promoting the e7-pawn. Black must again deliver
                        check with the Rook, this time from e1.
                    `,
                },
                {
                    fens: [
                        '8/4P3/1k6/4K3/2R5/8/8/4r3 w - - 0 1',
                    ],
                    text: `
                        White's strategy has finally paid off. In this position, white simply blocks
                        the check from the black Rook by playing Rc4-e4, the culmination of
                        white's strategy. Black has no chances in the final position because there
                        are no further delaying checks. Black might exchange Rooks, but the
                        white pawn will now Queen successfully.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Bishop and Pawn`,
            demo: [
                {
                    fens: [
                        '6k1/8/6KP/6B1/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        This first Bishop endgame is a very simple win because white's darksquared
                        Bishop is able to control the h8-Queening square. White begins
                        by advancing the h6-pawn to h7, giving check to the black King. Black
                        could retreat to f8, permitting the pawn to Queen, but black prefers to
                        play Kg8-h8 to block the pawn.
                    `,
                },
                {
                    fens: [
                        '7k/7P/6K1/6B1/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        As you can see, now the black King cannot move. All white needs to do is
                        check. Bg5-f6 is a very quick checkmate, all made possible by the fact that
                        white's dark-squared Bishop is able to control the dark h8-Queening
                        square.
                    `,
                },
                {
                    fens: [
                        '6k1/8/6KP/8/6B1/8/8/8 w - - 0 1',
                    ],
                    text: `
                        It surprises many beginners, but even with a Bishop and pawn, white
                        cannot win here. Unlike the last position, the light-squared Bishop on g4
                        will not be able to control the dark h8-Queening square. White again
                        begins by pushing the h6-pawn to h7, and black gladly responds with
                        Kg8-h8.
                    `,
                },
                {
                    fens: [
                        '7k/7P/6K1/8/6B1/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Here, the black King cannot move, but there is no way for white to deliver
                        the final checkmate. On any Bishop move, the game will end in a stalemate.
                        White could retreat the King, but black would then capture the
                        pawn. Unfortunately for white here, a King and Bishop is an insufficient
                        force to deliver checkmate.
                    `,
                },
                {
                    fens: [
                        '8/8/4k3/3bP3/3P3B/4K3/8/8 w - - 0 1',
                    ],
                    text: `
                        In this situation, the remaining Bishops on the board each travel on different
                        colored squares. Black's Bishop can move only on the light squares.
                        White's Bishop can travel only on the dark squares. As such, the two
                        Bishops will never be able to attack each other.
                        Endgames that involve Bishops of opposite color are so drawish (or likely
                        to end a draw) that even with an advantage of two and sometimes even
                        three pawns, they simply cannot be won. As you can see in this position,
                        white is ahead in material by two pawns. However, black has assembled a
                        firm blockade on the light squares with the Bd5 and the Ke6. White, with
                        its dark-squared Bishop, simply cannot force the black King or the black
                        Bishop to move off and permit the white pawns to advance. Indeed, black
                        can simply move the Bishop back and forth between any safe light square
                        and the d5-square. Unable to make any progress, white should offer a draw.
                    `,
                },
                {
                    fens: [
                        '8/2kB2b1/2P5/8/4K1P1/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In endgames with Bishops of opposite color, it is much easier to win
                        when the two pawns are separated by several files because the defending
                        side cannot easily blockade both pawns. In this position, black is blockading
                        the white c6-pawn with the King, but that leaves only the Bg7 to prevent
                        white from advancing and promoting the g4-pawn.
                        White's strategy is simple. Force the black King to commit to stopping
                        one of the pawns and then use the white King to assist the advance of
                        the other pawn. Here, white begins with Ke4-f5, moving toward the
                        g6-square. Black dare not move the King too far away from the c6-pawn.
                        Therefore, black decides to move the Bishop along the long a1-h8 diagonal
                        to b2.
                    `,
                },
                {
                    fens: [
                        '8/2kB4/2P5/5K2/6P1/8/1b6/8 w - - 0 1',
                    ],
                    text: `
                        White continues with g4-g5 to bring the pawn closer to the Queening
                        square. By later bringing the white King to either f7 or h7, the King will
                        be able to guide the g-pawn all the way toward the g8-Queening square.
                        Black again moves the Bishop along the long diagonal, this time to d4.
                    `,
                },
                {
                    fens: [
                        '8/2kB4/2P5/5KP1/3b4/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White now plays Kf5-e6, cutting off the black King's access to d6 and with
                        the idea of Ke6-f7, guiding in the g-pawn toward the g8-square. Black,
                        without any good play, moves the Bishop to e3 to attack the g5-pawn.
                    `,
                },
                {
                    fens: [
                        '8/2kB4/2P1K3/6P1/8/4b3/8/8 w - - 0 1',
                    ],
                    text: `
                        The end is near. White reacts to the threat of Be3xg5 by advancing the
                        pawn to g6. The rest is easy. White will continue with Ke6-f7 and then
                        guide the g-pawn to g7. Black will probably capture the pawn on g7 with
                        the Bishop, but after recapturing black's Bishop, white will have a very easy
                        win. Black will only have the King left and will have to move it, unblocking
                        the c6-pawn and allowing it to promote to a Queen. White will move its
                        King over to assist the advance of the c6-pawn. Checkmate will be just a
                        few moves away.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Knight and Pawn`,
            demo: [
                {
                    fens: [
                        '8/8/4K3/8/8/3k4/2N1p3/8 w - - 0 1',
                    ],
                    text: `
                        In this first example, the black pawn is ready to promote on e1.
                        Only the Knight can stop it. With black to move, the black King could
                        capture the Knight and then Queen the pawn. It is white's move, however,
                        and the Knight is able to maintain control over the Queening square.
                        White begins by moving the Knight to e1, blocking the advance of the
                        pawn. Black responds by moving its King to d2, forcing the white Knight
                        to move.
                    `,
                },
                {
                    fens: [
                        '8/8/4K3/8/8/8/3kp3/4N3 w - - 0 1',
                    ],
                    text: `
                        White has two adequate options here. First, Ne1-g2 would continue to
                        guard the e1-square and also prevent the black King from moving to e3
                        and thereafter to f2 in order to drive off the Knight. The second option is
                        Ne1-f3 check. This move would guard the e1-square and force the black
                        King to move—most likely to e3 in an effort to force the Knight away from
                        its control over the key e1-square.
                    `,
                },
                {
                    fens: [
                        '8/8/4K3/8/8/4kN2/4p3/8 w - - 0 1',
                    ],
                    text: `
                        As you can see, there is simply no way to drive the Knight away. White will
                        respond with Nf3-e1. After some patient maneuvering, both sides are
                        likely to finally agree on a draw.
                    `,
                },
                {
                    fens: [
                        '4k3/6n1/8/4K2P/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        When it is able to control a square through which a passed pawn must
                        travel, the Knight obviously has the ability to prevent the promotion of the
                        pawn.
                        However in this position, the Knight is unable to blockade the pawn. It's
                        white's move. Because white must prevent black from capturing the h5-pawn with Ng7xh5, white advances its pawn to h6 to attack the black
                        Knight.
                        There is no square that the Knight can move to that will help to prevent
                        the pawn from reaching h8. Black instead tries to race the King toward h8
                        by playing Ke8-f8, and in turn, defending the Knight.
                    `,
                },
                {
                    fens: [
                        '5k2/6n1/7P/4K3/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        In this key position, white would make a significant error by capturing the
                        black Knight. That would lead to an uninteresting draw after Kf8xg7.
                        Instead, white cleverly continues to advance the pawn to h7. Notice that
                        the pawn on h7 prevents the black King from moving to g8 where it
                        would be closer to the h7-pawn. The Knight is also unable to prevent the
                        h7-pawn from promoting to a Queen on h8.
                    `,
                },
                {
                    fens: [
                        '7k/8/6KP/6N1/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        Unlike the endgame with a Bishop and pawn when the pawn does not
                        always promote, the Knight
                        will never have a problem controlling the Queening square so the pawn
                        will always be able to promote to a Queen.
                        In this position, white needs only to be careful not to stalemate the black
                        King. For example, if white pushes the h6-pawn to h7, the black King will
                        not be in check and will not have a legal move. The result will be a stalemate,
                        an unfortunate draw for white.
                        To win, white should begin by playing Ng5-f7 check to drive the black
                        King from the Queening square to g8.
                    `,
                },
                {
                    fens: [
                        '6k1/5N2/6KP/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        The rest is quite easy. Now that white has control over the key h8-Queening
                        square, white pushes the pawn to h7, delivering check and forcing the
                        King away to f8.
                    `,
                },
                {
                    fens: [
                        '5k2/5N1P/6K1/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        The h-pawn now Queens, forcing the King to e7.
                    `,
                },
                {
                    fens: [
                        '7Q/4kN2/6K1/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White has a very quick mate, in part because Queens and Knights work
                        very well together. White proceeds by moving the new Queen from h8 to
                        d8, check. It's a powerful move that uses the Knight on f7 to defend the
                        Queen on d8 and forces the black King to e6.
                    `,
                },
                {
                    fens: [
                        '3Q4/5N2/4k1K1/8/8/8/8/8 w - - 0 1',
                    ],
                    text: `
                        White ends the game quickly with a beautiful checkmate, Qd8-d6#, again
                        using the Knight on f7 to support the Queen on d6. Notice how the
                        Knight, Queen, and King work together.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Queen and Pawn`,
            demo: [
                {
                    fens: [
                        'K7/8/Q7/8/8/7p/8/6k1 w - - 0 1',
                    ],
                    text: `
                        As you should expect, the Queen will almost always be able to prevent a
                        pawn from Queening. In this example, the black pawn is only two squares
                        away from the h1-Queening square, and the white King is too far away to
                        provide immediate help. Nonetheless, white can win very quickly.
                        White begins with Qa6-g6+. Black responds with Kg1-f2, with the idea of
                        being able to advance the pawn to h2.
                    `,
                },
                {
                    fens: [
                        'K7/8/6Q1/8/8/7p/5k2/8 w - - 0 1',
                    ],
                    text: `
                        There are many paths to the win here, but white decides to play Qg6-f5+
                        to check and, at the same time, attack the h3-pawn. The black King
                        responds with Kf2-g3 in an effort to prevent the Queen from moving
                        toward the black pawn.
                    `,
                },
                {
                    fens: [
                        'K7/8/8/5Q2/8/6kp/8/8 w - - 0 1',
                    ],
                    text: `
                        White presses on with Qf5-g5+. Black tries to prevent the white Queen
                        from reaching g4 by playing Kg3-f3.
                    `,
                },
                {
                    fens: [
                        'K7/8/8/6Q1/8/5k1p/8/8 w - - 0 1',
                    ],
                    text: `
                        White continues to make steady progress by playing Qg5-h4. It's not
                        check, but it does attack the undefended h-pawn. If black loses the pawn,
                        the resulting endgame is extremely simple. Black therefore defends the
                        h-pawn with Kf3-g2.
                    `,
                },
                {
                    fens: [
                        'K7/8/8/8/7Q/7p/6k1/8 w - - 0 1',
                    ],
                    text: `
                        After white plays Qh4-g4+, the black King has no choice but to continue
                        to defend the h-pawn with Kg2-h2.
                    `,
                },
                {
                    fens: [
                        'K7/8/8/8/6Q1/7p/7k/8 w - - 0 1',
                    ],
                    text: `
                        It is white's move in this position, but white notices that, if it were black's
                        move, black would have only one legal move—Kh2-h1. It's a move that
                        would permit white to capture the h-pawn. White therefore can make any
                        King move to force black to give up the h-pawn after Kh2-h1.
                    `,
                },
                {
                    fens: [
                        '8/8/8/3K4/8/4Q3/4p3/3k4 w - - 0 1',
                    ],
                    text: `
                        In the previous example, the Queen was able to stop the advance of a
                        Rook pawn on the 6th rank all by itself. Here, the pawn is in the middle of
                        the board but more advanced. The Queen can succeed again, but this
                        time only with help from the King.
                        In this position, black is ready to promote the pawn on e1. The white
                        Queen could capture the e2-pawn, but that would lead to an immediate
                        draw once the black King recaptured.
                        Instead, white wants to bring the King on d5 closer to the pawn.
                        Therefore, white begins with Qe3-d3+, knowing that in order to continue
                        to defend the e2-pawn, the black King will have to move to e1, thus
                        blocking its own pawn from Queening.
                    `,
                },
                {
                    fens: [
                        '8/8/8/3K4/8/3Q4/4p3/4k3 w - - 0 1',
                    ],
                    text: `
                        Once the black King is forced to block the advance of the e-pawn, white
                        gains the opportunity to bring the King toward the pawn. White therefore
                        plays Kd5-e4. In an effort to mobilize the pawn, black moves Ke1-f2, again
                        threatening to promote the e-pawn.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4K3/3Q4/4pk2/8 w - - 0 1',
                    ],
                    text: `
                        Once again, white attacks the King by playing Qd3-f3+. Note that on f3,
                        the Queen is attacking both the King and the e2-pawn. In order to continue
                        to defend the pawn, black once again is forced to return to the
                        e1-square, blocking the e-pawn.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/4K3/5Q2/4p3/4k3 w - - 0 1',
                    ],
                    text: `
                        Again, white takes the opportunity to advance the King, this time to the
                        d3-square. Black can resign now, because white will now be able to capture
                        the e2-pawn with the Queen on the next move and deliver checkmate
                        soon thereafter.
                    `,
                },
                {
                    fens: [
                        '8/1K6/8/8/8/7Q/7p/7k w - - 0 1',
                    ],
                    text: `
                        This position is a special case. The black h-pawn is on h2, only one square
                        away from Queening. Unfortunately for white, the white King is far off and
                        there is, as you will see, no way to bring the King close enough to capture
                        the pawn. With white to move, white could simply play Qh3-f1 checkmate.
                        However, with black to move, black will move Kh1-g1, black's only
                        legal move.
                    `,
                },
                {
                    fens: [
                        '8/1K6/8/8/8/7Q/7p/6k1 w - - 0 1',
                    ],
                    text: `
                        White now has a problem. Black is threatening to Queen the h-pawn. To
                        prevent the advance of the pawn, white plays Qh3-g3+, and black happily
                        moves the King back into the corner. As you can see, black is out of
                        moves with its King in the corner and the white Queen on g3. White cannot
                        move the King closer because the game would end immediately in a
                        stalemate.
                    `,
                },
                {
                    fens: [
                        '8/8/K7/8/8/5Q2/5p2/5k2 w - - 0 1',
                    ],
                    text: `
                        It would appear again that white will be able to bring the King on a6
                        closer and closer to the pawn. However, black has an important move to
                        play. White begins by moving its King closer to the action with Ka6-b5.
                        Black responds by moving its King toward the corner with Kf1-g1.
                    `,
                },
                {
                    fens: [
                        '8/8/8/1K6/8/5Q2/5p2/6k1 w - - 0 1',
                    ],
                    text: `
                        In order to try to prevent black from Queening the pawn, white plays
                        Qf3-g3+, expecting that black will move its King back in front of the
                        f2-pawn. Instead, black cleverly moves the King into the h1 corner.
                    `,
                },
                {
                    fens: [
                        '8/8/8/1K6/8/6Q1/5p2/7k w - - 0 1',
                    ],
                    text: `
                        White cannot capture the pawn because that position is a stalemate! Any
                        King move would permit black to Queen the pawn. There's simply no way
                        to make progress.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/3K4/7Q/7p/6k1 w - - 0 1',
                    ],
                    text: `
                        The difference in this position is that the white King is already just close
                        enough to enter the action. White begins with Qh3-g3+. Hoping for a
                        stalemate, black responds with Kg1-h1.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/3K4/6Q1/7p/7k w - - 0 1',
                    ],
                    text: `
                        Rather than bring the King up closer, white releases the black King out of
                        the corner with Qg3-f3+. The King is forced to return to the g1 square.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/3K4/5Q2/7p/6k1 w - - 0 1',
                    ],
                    text: `
                        White could easily repeat the position with Qf3-g3+, but white has the
                        surprising Kd4-e3. Black could delay the game a bit by promoting the
                        pawn to a Knight. (I will leave it to you to see if you can force the checkmate
                        quickly in that position.) Here, black prefers to promote the pawn to
                        a Queen.
                    `,
                },
                {
                    fens: [
                        '8/8/8/8/8/4KQ2/8/6kq w - - 0 1',
                    ],
                    text: `
                        The game ends beautifully with Qf3-f2 checkmate. The new Queen blocks
                        the King's retreat back into the corner! As you can see, a Knight on h1
                        would have prevented this checkmate by guarding the f2-square.
                    `,
                },
            ],
        },
    ],
}