export default {
  header: 'Elementary Checkmates',
  body: `
        To win a chess game, you must deliver a checkmate (or mate, for
        short)—placing your opponent's King in check with the King having no
        legal move. In this chapter, you will be able to explore all the most basic
        checkmates. As you will see, some of these checkmates are very simple.
        In fact, if you're clever enough to Queen a pawn, the checkmate with
        two Queens against a lone King is easy and fun to do. The other checkmates
        in this chapter are somewhat more challenging, but with a bit of
        practice, you'll be able to deliver checkmate with just a Rook or even
        with a King, Bishop, and Knight.
        You will also learn to recognize when there is insufficient material
        to deliver a checkmate. That way, you won't play on and on, trying to do
        the impossible. Or perhaps when you're trailing, you will be able to
        reach such an endgame and avoid a loss.
    `,
  items: [
    {
      lessonHeader: 'Two Queens',
      demo: [
        {
          fens: [
            '4k3/Q7/1Q6/8/8/8/8/8 w - - 0 1',
            '1Q2k3/Q7/8/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Here is the basic checkmate. With white to move, white can deliver a check on several squares, but the move Qb6-b8 is
                        checkmate. On b8, the Queen will be attacking the black King, which cannot escape from the attack. Note that the Queen on
                        a7 controls all of the squares of the 7th rank while, after Qb6-b8, the Queen on b8 controls all of the squares of the 8th rank.
                    `
        },
        {
          fens: [
            '8/8/4k3/Q7/1Q6/8/8/8 w - - 0 1',
            '8/8/1Q2k3/Q7/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The simplest method for this checkmate is
                        illustrated here. The technique is a bit like
                        walking a dog, forcing the King step by step
                        toward the top edge of the board. Here, white
                        has many paths to the checkmate, but the
                        simplest is clearly Qb4-b6, attacking the lone
                        King. The King must retreat to the 7th rank.
                    `
        },
        {
          fens: [
            '8/3k4/1Q6/Q7/8/8/8/8 w - - 0 1',
            '8/Q2k4/1Q6/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Here, after the retreat of the King to d7, white
                        will continue to force the King toward the top
                        of the board by playing Qa5-a7. Note that,
                        given the power of the white Queens, the
                        black King is unable to approach the Queens
                        in an effort to prevent the checkmate.
                        After Qa5-a7, you will be in the same position
                        illustrated at the beginning of this section (see
                        the previous page). As you can see, checkmating
                        with two Queens is relatively simple.
                    `
        },
        {
          fens: [
            '8/8/8/1Q6/5k2/2Q5/8/8 w - - 0 1',
            '8/8/8/4Q3/5k2/2Q5/8/8 w - - 0 1'
          ],
          text: `
                        Here is another example of a checkmate with
                        two Queens. White could simply proceed
                        with the technique we just reviewed, but
                        there is a much faster and more elegant
                        checkmate. The Qb5 controls the 5th rank
                        while the Qc3 controls the 3rd rank.
                        White begins with Qb5-e5 check. Note that,
                        after the check, black has only a single legal
                        move, to g4.
                    `
        },
        {
          fens: [
            '8/8/8/4Q3/6k1/2Q5/8/8 w - - 0 1',
            '8/8/8/4Q3/6k1/6Q1/8/8 w - - 0 1'
          ],
          text: `
                        White completes the checkmate by playing
                        Qc3-g3#, using the Queen on e5 to support
                        the Qg3. It is a beautiful checkmate!
                        In many chess games, however, you might not
                        have the luxury of having so much extra material.
                        In the following sections, we will explore
                        checkmates with less material.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Queen and Rook',
      demo: [
        {
          fens: [
            '8/3k4/1R6/Q7/8/8/8/8 w - - 0 1',
            '3k4/Q7/1R6/8/8/8/8/8 w - - 0 1',
            '1R1k4/Q7/8/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In this position, the Queen and Rook combine very
                        much like the two Queens. White brings about a quick
                        checkmate by playing Qa5-a7 and then, once the King
                        retreats to the 8th rank, with Rb6-b8 checkmate.
                    `
        },
        {
          fens: [
            '8/8/8/2Q5/4k3/2R5/8/8 w - - 0 1',
            '8/8/8/2Q5/4k3/4R3/8/8 w - - 0 1'
          ],
          text: `
                        This position requires a slightly different technique.
                        Here, the Queen covers all the squares on the 5th rank,
                        while the Rook covers the 3rd rank. White begins by
                        playing Rc3-e3 check. Note that the Qc5 defends the
                        Rook on e3.
                    `
        },
        {
          fens: [
            '8/8/8/2Q5/5k2/4R3/8/8 w - - 0 1',
            '8/8/8/4Q3/5k2/4R3/8/8 w - - 0 1',
            '8/8/8/4Q3/6k1/4R3/8/8 w - - 0 1'
          ],
          text: `
                        Black has no choice but to retreat along the 4th rank to
                        f4. White continues with Qc5-e5 check, driving the King
                        farther along the 4th rank to g4. The technique should
                        be clear now. White alternates Rook and Queen moves,
                        driving the King to the edge of the board.
                    `
        },
        {
          fens: [
            '8/8/8/4Q3/6k1/4R3/8/8 w - - 0 1',
            '8/8/8/4Q3/6k1/6R1/8/8 w - - 0 1',
            '8/8/8/4Q3/7k/6R1/8/8 w - - 0 1',
            '8/8/8/6Q1/7k/6R1/8/8 w - - 0 1'
          ],
          text: `
                        Checkmate is near. White continues, with the Re3-g3
                        check, driving the King to the edge on h4. White then
                        follows with the Qe5-g5 checkmate. The Queen and
                        Rook are defending each other while covering all of the
                        King's possible retreats.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Two Rooks',
      demo: [
        {
          fens: [
            '8/8/4k3/1R6/R7/8/8/8 w - - 0 1',
            '8/8/R3k3/1R6/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The Rooks will attempt to walk the black King toward
                        the 8th rank. This time, however, the King will be able to
                        approach the Rooks and disrupt the simple checkmate.
                        White begins as expected by playing Ra4-a6, forcing the
                        black King to retreat toward the 8th rank.
                    `
        },
        {
          fens: [
            '8/3k4/R7/1R6/8/8/8/8 w - - 0 1',
            '8/1R1k4/R7/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        As you can see, the King retreated to the d7-square,
                        approaching the Rooks. As with the Queens, white continues
                        with Rb5-b7, forcing the black King to the top
                        edge of the board.
                    `
        },
        {
          fens: [
            '2k5/1R6/R7/8/8/8/8/8 w - - 0 1',
            '2k5/7R/R7/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Black moved Kd7-c8, attacking Rb7. The Rooks do not
                        support each other like the two Queens and the Queen
                        and Rook did. If white carelessly played Ra6-a8 check,
                        black could escape with Kc8xRb7. Instead, white safeguards
                        the Rb7 by moving it across the 7th rank to h7.
                    `
        },
        {
          fens: [
            '2k5/7R/R7/8/8/8/8/8 w - - 0 1',
            '2k5/7R/6R1/8/8/8/8/8 w - - 0 1',
            '1k6/7R/6R1/8/8/8/8/8 w - - 0 1',
            '1k4R1/7R/8/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        With the threat of Ra6-a8 checkmate looming, black
                        must defend the a8-square by playing Kc8-b8. The
                        defense is annoying, but white can still win by shifting
                        the a6-Rook toward the Kingside with Ra6-g6. Facing
                        the inevitable move Rg6-g8 checkmate, black might
                        resign here. Few chess players like being checkmated.
                    `
        }
      ]
    },
    {
      lessonHeader: 'King and Queen',
      demo: [
        {
          fens: [
            '3k4/3Q4/3K4/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Here is the simplest of the checkmates with a Queen and a King. Notice that the Qd7 is smothering the black King against
                        the top edge of the board. Simply put, the Queen is attacking the King and covering all the black King's possible retreats.
                        Moreover, the black King cannot capture the Queen because the Qd7 is defended by the white King.
                    `
        },
        {
          fens: [
            '4k3/6Q1/3K4/8/8/8/8/8 w - - 0 1',
            '4k1Q1/8/3K4/8/8/8/8/8 w - - 0 1',
            '4k3/6Q1/3K4/8/8/8/8/8 w - - 0 1',
            '4k3/4Q3/3K4/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In this position, white can bring about a similar
                        checkmate by playing Qg7-e7 checkmate.
                        Even though the white King is on d6, the
                        Queen on e7 will still be defended and will
                        be smothering the black King against the
                        edge of the board. White has an additional
                        option, playing Qg7-g8 checkmate. In this
                        position, the white King is preventing a black
                        retreat to d7 and e7, while the Queen not
                        only attacks the black King but also covers the
                        key d8, f8, and f7 squares.
                    `
        },
        {
          fens: [
            '4k3/8/4K3/8/8/8/6Q1/8 w - - 0 1',
            '4k1Q1/8/4K3/8/8/8/8/8 w - - 0 1',
            '4k3/8/4K3/8/8/8/6Q1/8 w - - 0 1',
            'Q3k3/8/4K3/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In this position, white again has two possible
                        checkmates in one move. White can play
                        either Qg2-a8 or Qg2-g8. Both moves attack
                        the black King, and cover all of the squares
                        on the 8th rank, while the white King prevents
                        any move by the black King to the 7th rank.
                    `
        },
        {
          fens: [
            '4k3/8/1Q2K3/8/8/8/8/8 w - - 0 1',
            '4k3/8/3QK3/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In bringing about the checkmate with your
                        King and Queen, there are two key moves
                        to avoid. In this position, white has a simple
                        checkmate with Qb6-b8. However, Qb6-d6
                        is a move that many players make without
                        realizing the danger.
                        With the white Queen on d6, black has been
                        stalemated! Black of course must move, but
                        black has no legal move and the black King is
                        not in check. Note that stalemate applies only
                        when one side has no legal move whatsoever.
                        For more on stalemates, see the section
                        "Stalemates and Other Draws" in Chapter 2.
                        There are many positions in which the King
                        or another piece cannot move. It is only a
                        stalemate if one side is not in check and has
                        no legal moves anywhere on the board.
                    `
        },
        {
          fens: [
            '7k/Q7/8/8/8/5K2/8/8 w - - 0 1',
            '7k/5Q2/8/8/8/5K2/8/8 w - - 0 1'
          ],
          text: `
                        In this interesting position, white should march
                        the white King toward f6 and deliver checkmate
                        with the Queen. This strategy speaks to the key
                        of all of these King and Queen checkmates: To
                        win, the King and Queen must work together
                        in harmony. Instead, white blundered with
                        Qa7-f7?, again with a stalemate.
                        Notice that the black King is not in check. But
                        because of the bad move by the white Queen,
                        the black King has no legal moves.
                    `
        }
      ]
    },
    {
      lessonHeader: 'King and Rook',
      demo: [
        {
          fens: [
            '5R1k/8/6K1/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Here is the basic checkmate. The Rf8 is checking
                        the black King and preventing Kh8-g8. As
                        in the King and Queen endgames, the white
                        King plays an essential role by preventing the
                        black King from escaping to either g7 or h7.
                    `
        },
        {
          fens: [
            '7k/5R2/6K1/8/8/8/8/8 w - - 0 1',
            '5R1k/8/6K1/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Backing up just one move, the checkmate in
                        this position should be clear. White simply
                        advances the Rook from f7 to f8 checkmate. A
                        significant mistake would be Rf7-g7, resulting
                        in the only stalemate with a King and Rook.
                        Therefore, it is a key move to avoid.
                    `
        },
        {
          fens: [
            '6k1/5R2/6K1/8/8/8/8/8 w - - 0 1',
            '6k1/8/6K1/8/8/8/8/5R2 w - - 0 1'
          ],
          text: `
                        Here, if it were black's move, the black
                        King would have only one move—Kg8-h8.
                        White would then checkmate with Rf7-f8 as
                        we have seen.
                        But if it is white's move, white wants to make
                        sure that the black King does not escape to
                        the Queenside. White therefore plays Rf7-f1.
                        Actually, any backward movement of the Rook
                        along the f-file would accomplish the purpose,
                        but most chess players like dramatic finishes.
                    `
        },
        {
          fens: [
            '6k1/8/6K1/8/8/8/8/5R2 w - - 0 1',
            '7k/8/6K1/8/8/8/8/5R2 w - - 0 1',
            '5R1k/8/6K1/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Black has no choice in this position but to
                        move the King directly into the corner at h8.
                        With a flourish, white can play Rf1-f8, delivering
                        checkmate.
                    `
        },
        {
          fens: [
            '8/8/5k2/4R3/4K3/8/8/8 w - - 0 1',
            '8/8/5k2/4R3/5K2/8/8/8 w - - 0 1'
          ],
          text: `
                        Checkmating with a King and Rook is easy once the King is in the corner.
                        Here's how you can force the enemy King into the corner. Notice that the
                        white Re5 has already placed the black King in a box. The Rook controls
                        e6, e7, and e8, as well as the key squares on the 5th rank: f5, g5, and h5.
                        The black King is trapped inside those squares and has only nine squares
                        at its disposal (f6, f7, f8, g6, g7, g8, h6, h7, and h8).
                        To make some headway, the white King and Rook must work together.
                        White begins with Ke4-f4, waiting for the black King to move backward.
                    `
        },
        {
          fens: [
            '8/8/5k2/4R3/5K2/8/8/8 w - - 0 1',
            '8/5k2/8/4R3/5K2/8/8/8 w - - 0 1'
          ],
          text: `
                        Black is in a quandary. If black moves to g6, white has Re5-f5 to push black
                        further toward the corner and close the box from nine squares to just six
                        (g6, g7, g8, h6, h7, and h8). Therefore, black decides to move instead to f7.
                    `
        },
        {
          fens: [
            '8/5k2/8/4R3/5K2/8/8/8 w - - 0 1',
            '8/5k2/8/4RK2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The moment that black gives ground, white should step forward to claim
                        that territory. In this case, white has the strong move Kf4-f5, claiming control
                        over both f6 and g6.
                    `
        },
        {
          fens: [
            '8/5k2/8/4RK2/8/8/8/8 w - - 0 1',
            '8/6k1/8/4RK2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Fearing an imminent checkmate, black does not want to retreat to the top
                        edge of the board. Rather, black tries to hold ground with Kf7-g7.
                    `
        },
        {
          fens: [
            '8/6k1/8/4RK2/8/8/8/8 w - - 0 1',
            '8/4R1k1/8/5K2/8/8/8/8 w - - 0 1',
            '8/4R3/7k/5K2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White could continue slowly with Re5-e6 and, indeed, you might want to
                        practice such a slow procedure. As it turns out, white can proceed more
                        quickly here with a check Re5-e7 check. Black might not want to respond
                        by moving the King to f8 where, after Kf5-f6, white is very close to the
                        checkmate that introduced this section. Instead, black tries to escape from
                        the corner with Kg7-h6.
                    `
        },
        {
          fens: [
            '8/4R3/7k/5K2/8/8/8/8 w - - 0 1',
            '8/R7/7k/5K2/8/8/8/8 w - - 0 1',
            '8/R7/8/5K1k/8/8/8/8 w - - 0 1',
            '8/7R/8/5K1k/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In this position, white moves toward the end of the game quickly with a
                        dramatic Re7-a7 (other Rook moves to b7, c7, d7, or f7 also work), forcing
                        the black King to move to h5.
                        At the end of a long sequence, white has a beautiful checkmate in one
                        move with Ra7-h7. As you can see, these checkmates require patience. Of
                        course, it helps to recognize the mating patterns. You will find that, after a
                        bit of practice, you will be able to deliver checkmate with just a King and
                        a Rook.
                    `
        }
      ]
    },
    {
      lessonHeader: 'King and Two Bishops',
      demo: [
        {
          fens: [
            '8/4k3/8/4K3/4BB2/8/8/8 w - - 0 1',
            '8/4k3/8/4KB2/5B2/8/8/8 w - - 0 1',
            '3k4/8/8/4KB2/5B2/8/8/8 w - - 0 1'
          ],
          text: `
                        There are many ways to proceed in this position. White would like to drive
                        the black King toward the top edge of the board and then walk the King
                        into one of the corners. Black would like to try to run away from white's
                        King and Bishop and therefore might try Ke7-d7. White therefore begins
                        with 1.Be4-f5 to prevent black from moving to d7. Black continues to try
                        to escape toward the a-file with Ke7-d8.
                    `
        },
        {
          fens: [
            '3k4/8/8/4KB2/5B2/8/8/8 w - - 0 1',
            '3k4/8/3K4/5B2/5B2/8/8/8 w - - 0 1',
            '4k3/8/3K4/5B2/5B2/8/8/8 w - - 0 1'
          ],
          text: `
                        White prevents any further movement of the black King toward the
                        Queenside by advancing the King from e5 to d6. Black has no choice but
                        to continue with Kd8-e8.
                    `
        },
        {
          fens: [
            '4k3/8/3K4/5B2/5B2/8/8/8 w - - 0 1',
            '4k3/8/3K4/5BB1/8/8/8/8 w - - 0 1',
            '8/5k2/3K4/5BB1/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Here, white's move Bf4-g5 captures control over the d8-square and prevents
                        the black King from moving toward the Queenside. Black responds
                        by moving off the 8th rank with Ke8-f7 to try to hold on to as much territory
                        as possible.
                    `
        },
        {
          fens: [
            '8/5k2/3K4/5BB1/8/8/8/8 w - - 0 1',
            '8/3K1k2/8/5BB1/8/8/8/8 w - - 0 1',
            '5k2/3K4/8/5BB1/8/8/8/8 w - - 0 1'
          ],
          text: `
                        In turn, white takes control over the e8-square that black vacated by
                        advancing Kd6-d7. Black again tries to avoid moving toward the corner
                        with Kf7-f8.
                    `
        },
        {
          fens: [
            '5k2/3K4/8/5BB1/8/8/8/8 w - - 0 1',
            '5k2/8/4K3/5BB1/8/8/8/8 w - - 0 1',
            '4k3/8/4K3/5BB1/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White progresses with the King toward the key g6-square. Black again
                        tries to escape toward the Queenside, Kf8-e8.
                    `
        },
        {
          fens: [
            '4k3/8/4K3/5BB1/8/8/8/8 w - - 0 1',
            '4k3/8/4K1B1/6B1/8/8/8/8 w - - 0 1',
            '5k2/8/4K1B1/6B1/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White regains control over the e8-square, forcing the black King toward
                        the corner with Bf5-g6+. To get out of check, black's King makes its only
                        legal move, Ke8-f8.
                    `
        },
        {
          fens: [
            '5k2/8/4K1B1/6B1/8/8/8/8 w - - 0 1',
            '5k2/8/4K1BB/8/8/8/8/8 w - - 0 1',
            '6k1/8/4K1BB/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White's dark-squared Bishop moves aggressively to h6 to control both the
                        f8 and g7 squares. Black again makes the only legal move it has, Kf8-g8.
                    `
        },
        {
          fens: [
            '6k1/8/4K1BB/8/8/8/8/8 w - - 0 1',
            '6k1/8/4K2B/8/4B3/8/8/8 w - - 0 1',
            '7k/8/4K2B/8/4B3/8/8/8 w - - 0 1'
          ],
          text: `
                        White moves the light-squared Bishop to e4 where it continues to control
                        the h7 escape square but also readies the idea of Be4-d5. Black is forced
                        to move the King to h8.
                    `
        },
        {
          fens: [
            '7k/8/4K2B/8/4B3/8/8/8 w - - 0 1',
            '7k/8/5K1B/8/4B3/8/8/8 w - - 0 1',
            '6k1/8/5K1B/8/4B3/8/8/8 w - - 0 1'
          ],
          text: `
                        White brings its King closer to the g6-square where it can control the g7
                        and h7 squares without help from the Bishops. Black again moves back
                        to g8.
                    `
        },
        {
          fens: [
            '6k1/8/5K1B/8/4B3/8/8/8 w - - 0 1',
            '6k1/8/6KB/8/4B3/8/8/8 w - - 0 1',
            '7k/8/6KB/8/4B3/8/8/8 w - - 0 1'
          ],
          text: `
                        The movement back and forth is not a threefold repetition because
                        white's moves have been different. Indeed, white continues to make
                        progress, with the King having reached the key g6-square. Black retreats
                        again to h8.
                    `
        },
        {
          fens: [
            '7k/8/6KB/8/4B3/8/8/8 w - - 0 1',
            '7k/6B1/6K1/8/4B3/8/8/8 w - - 0 1',
            '6k1/6B1/6K1/8/4B3/8/8/8 w - - 0 1'
          ],
          text: `
                        White moves Bh6-g7 for check and is very close to checkmate. White's
                        Bg7+ move forces the black King back to g8 where, suddenly, it has no
                        moves.
                    `
        },
        {
          fens: [
            '6k1/6B1/6K1/8/4B3/8/8/8 w - - 0 1',
            '6k1/6B1/6K1/3B4/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White's Be4-d5 is a pretty checkmate.
                    `
        }
      ]
    },
    {
      lessonHeader: 'King, Bishop, and Knight',
      demo: [
        {
          fens: [
            '6k1/8/6KN/8/3B4/8/8/8 w - - 0 1'
          ],
          text: `
                        Here is the final checkmate. Note that the white King controls the g7 and h7 escape squares. The Nh6 plays a key role in controlling
                        g8. And of course, the Bd4 is delivering the final check. The key to this endgame is that the checkmate can be forced
                        only in the corner that the Bishop can control. Players with the lone King should therefore run into the "wrong" corner and
                        see if their opponent can figure out how to force the checkmate.
                    `
        },
        {
          fens: [
            '4k3/8/4K3/4BN2/8/8/8/8 w - - 0 1',
            '4k3/8/4KB2/5N2/8/8/8/8 w - - 0 1',
            '5k2/8/4KB2/5N2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Be5-f6 prevents the black King from moving to d8 and toward the wrong
                        corner. Black's response to f8 is black's only legal move.
                    `
        },
        {
          fens: [
            '5k2/8/4KB2/5N2/8/8/8/8 w - - 0 1',
            '5k2/4B3/4K3/5N2/8/8/8/8 w - - 0 1',
            '6k1/4B3/4K3/5N2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The Bishop check on e7 forces the black King to g8 because Kf8-e8 would
                        allow Nf5-d6 checkmate!
                    `
        },
        {
          fens: [
            '6k1/4B3/4K3/5N2/8/8/8/8 w - - 0 1',
            '6k1/4B3/5K2/5N2/8/8/8/8 w - - 0 1',
            '8/4B2k/5K2/5N2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The white King heads toward the key g6-square, moving Ke6-f6. Black
                        moves the King to Kg8-h7 to prevent white from moving to g6 and in an
                        effort to run the King toward h1.
                    `
        },
        {
          fens: [
            '8/4B2k/5K2/5N2/8/8/8/8 w - - 0 1',
            '8/4BK1k/8/5N2/8/8/8/8 w - - 0 1',
            '7k/4BK2/8/5N2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        White makes a "waiting move" with Kf6-f7, knowing that black will have
                        no choice but to leave the h7-square, moving Kh7-h8.
                    `
        },
        {
          fens: [
            '7k/4BK2/8/5N2/8/8/8/8 w - - 0 1',
            '7k/4B3/6K1/5N2/8/8/8/8 w - - 0 1',
            '6k1/4B3/6K1/5N2/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The white King has reached the g6-square with Kf7-g6. The black King has
                        no choice but to shuttle back and forth between g8 and h8.
                    `
        },
        {
          fens: [
            '6k1/4B3/6K1/5N2/8/8/8/8 w - - 0 1',
            '6k1/4B3/6KN/8/8/8/8/8 w - - 0 1',
            '7k/4B3/6KN/8/8/8/8/8 w - - 0 1',
            '7k/8/5BKN/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The white Knight moves to h6, delivering check and forcing the black King
                        into the correct corner. The final move of the game will be 7.Be7-f6 checkmate,
                        a beautiful final position.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Insufficient Mating Material',
      demo: [
        {
          fens: [
            '3N2k1/8/6KN/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Please note that it is not possible to force a checkmate with just a Bishop or just a Knight. Even with a King and two Knights,
                        no checkmate can be forced. In this position, white will be able to deliver checkmate if black plays the Kg8 into the h8-corner.
                        But black can avoid all trouble simply by playing Kg8-f8.
                    `
        }
      ]
    }
  ]
}
