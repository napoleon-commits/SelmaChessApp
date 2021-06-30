export default {
  header: 'Special Moves',
  body: `
        Like many other games, chess has some special moves. There are checks that attack the enemy King, checkmates that are checks from which the enemy King cannot escape, and stalemates—an end to the game in which the enemy is not in check but has no legal moves. There are discovered checks and double checks. You can transform (promote) your pawns into Queens or even under-promote your pawns to become Knights, Bishops, or Rooks. Castling permits you to move your King and Rook at the same time. And there's a special capture called en passant reserved just for the pawns. This chapter explains all these moves and helps you understand how you can use them to improve your play.
    `,
  speech: `
      Like many other games, chess has some special moves. There are checks that attack the enemy King, checkmates that are checks from which the enemy King cannot escape, and stalemates—an end to the game in which the enemy is not in check but has no legal moves. There are discovered checks and double checks. You can transform your pawns into Queens or even under-promote your pawns to become Knights, Bishops, or Rooks. Castling permits you to move your King and Rook at the same time. And there's a special capture called en passant reserved just for the pawns. This chapter explains all these moves and helps you understand how you can use them to improve your play.
  `,
  items: [
    {
      lessonHeader: 'Checks and Checkmate',
      demo: [
        {
          fens: ['8/8/1Q6/3n4/8/8/8/b5k1 w - - 0 1'],
          text: `
                        Check simply means that a King is under attack. In this position, the black King is in check because the white Queen is attacking it along the diagonal.
                    `
        },
        {
          fens: ['8/8/1Q6/3n4/8/8/8/b5k1 w - - 0 1'],
          text: `
                        On the very next move, black must make sure to stop the attack. There are three possibilities. First, the King can move out of check to any square that is not being attacked (f1, g2, h1, or h2). Note that the King cannot move to f2 because that would still be check. Simply put, the King cannot move into check.
                    `
        },
        {
          fens: [
            '8/8/1Q6/3n4/8/8/8/b5k1 w - - 0 1',
            '8/8/1n6/8/8/8/8/b5k1 w - - 0 1'
          ],
          text: `
            Or black could end the attack by capturing the white Queen with the Knight (Nd5xb6).
          `,
          speech: `
            Or black could end the attack by capturing the white Queen with the Knight.
          `
        },
        {
          fens: [
            '8/8/1Q6/3n4/8/8/8/b5k1 w - - 0 1',
            '8/8/1Q6/8/8/4n3/8/b5k1 w - - 0 1',
            '8/8/1Q6/3n4/8/8/8/b5k1 w - - 0 1',
            '8/8/1Q6/3n4/3b4/8/8/6k1 w - - 0 1'

          ],
          text: `
            Or black could move a piece between the attacking Queen and the King in order to interrupt the direct attack. For example, black could move the Bishop to d4 (Ba1-d4) or the Knight to e3 (Nd5-e3).
          `,
          speech: `
            Or black could move a piece between the attacking Queen and the King in order to interrupt the direct attack. For example, black could move the Bishop to d4 or the Knight to e3.
          `
        },
        {
          fens: [
            '6k1/8/1b6/8/8/8/6PP/5BKR w - - 0 1'
          ],
          text: `
                        If the King is under attack and there is no immediate way to end the attack, the game is over. Note that checkmate does not actually involve removing the King from the board. In this position, the black Bishop is attacking the white King. The King has no legal moves because the other white pieces are occupying the escape squares. White cannot capture or block the attack from the Bishop. Checkmate!
                    `
        }
      ]
    },
    {
      lessonHeader: 'Stalemates and Other Draws',
      demo: [
        {
          fens: ['3k4/3P4/3K4/8/8/8/8/8 w - - 0 1'],
          text: `
                        The most exciting form of a draw is the stalemate. On a player's turn, if he or she is not in check and cannot make a legal move, this is a stalemate—neither side wins.In this position, it is black's move. The black King is not in check, and it has no legal moves.
                    `
        },
        {
          fens: ['3k4/3P4/3K4/8/8/8/8/8 w - - 0 1'],
          text: `
                        It cannot capture the white pawn or move
                        to c7 or e7 because the white King controls those squares. Similarly, the black King cannot move to c8 or e8 because the white pawn controls those squares. Remember that the King is not permitted to move to any square controlled by an enemy piece. This position is the most common stalemate in chess.
                    `
        },
        {
          fens: [
            '8/8/8/8/6p1/5nrk/R7/7K w - - 0 1',
            '8/8/8/8/6p1/5n1k/R7/6rK w - - 0 1'
          ],
          text: `
            White appears to be well behind in this position. In fact, black is threatening to move the Rook on g3 to g1 (Rg3-g1#), checkmate. (The Knight on f3 would defend the Rook.)
          `,
          speech: `
            White appears to be well behind in this position. In fact, black is threatening to move the Rook on g3 to g1, checkmate.
          `
        },
        {
          fens: [
            '8/8/8/8/6p1/5nrk/R7/7K w - - 0 1',
            '8/8/8/8/6p1/5nrk/7R/7K w - - 0 1',
            '8/8/8/8/6p1/6rk/7n/7K w - - 0 1'
          ],
          text: `
            However, it is white's move. White surprises black by moving the Rook on a2 to h2, check (Ra2-h2+). At first glance, the move looks terrible because black can simply capture the white Rook with the Knight. But after the Knight on f3 captures the Rook (Nf3xh2), the result is a stalemate. The white King is not in check but cannot move.
          `,
          speech: `
            However, it is white's move. White surprises black by moving the Rook on a2 to h2, check. At first glance, the move looks terrible because black can simply capture the white Rook with the Knight. But after the Knight on f3 captures the Rook, the result is a stalemate. The white King is not in check but cannot move.
          `
        },
        {
          fens: [
            '8/8/8/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        The most common type of draw is by agreement. At any time in a game, you can offer a draw to your opponent. Be mindful of good etiquette, however. Don't offer a draw on every move! Most chess players consider that to be rude.
                    `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
                        In this position, white appears to have an overwhelming advantage and the prospect of a quick win, perhaps with a Rook-from-e4-to-h4 checkmate. But black on the move draws in one of two interesting ways. 
                    `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
            The most spectacular is Qb8-h2 check because, after white captures the black Queen, the result is a stalemate!Black could also draw quickly with what is called a perpetual check, a never ending series of checks. Black moves the Queen from b8 to g3, check (Qb8-g3+). White cannot capture the Queen or block the attack. White therefore must move the King into the corner at h1 (Kg1-h1).
          `,
          speech: `
            The most spectacular is Qb8-h2 check because, after white captures the black Queen, the result is a stalemate!Black could also draw quickly with what is called a perpetual check, a never ending series of checks. Black moves the Queen from b8 to g3, check. White cannot capture the Queen or block the attack. White therefore must move the King into the corner at h1.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
            To draw, black will simply check the white King on h3 (Qg3-h3+) and then again on g3 (Qh3-g3+). Reaching the same position three times in a row is an automatic draw. For a play-by-play of this draw scenario, see the next page.
          `,
          speech: `
            To draw, black will simply check the white King on h3 and then again on g3. Reaching the same position three times in a row is an automatic draw. For a play-by-play of this draw scenario, see the next page.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
            Black could also draw quickly with what is called a perpetual check, a never ending series of checks. Black moves the Queen from b8 to g3, check (Qb8-g3+). White cannot capture the Queen or block the attack. White therefore must move the King into the corner at h1 (Kg1-h1).
          `,
          speech: `
            Black could also draw quickly with what is called a perpetual check, a never ending series of checks. Black moves the Queen from b8 to g3, check. White cannot capture the Queen or block the attack. White therefore must move the King into the corner at h1.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
            To draw, black will simply check the white King on h3 (Qg3-h3+) and then again on g3 (Qh3-g3+). Reaching the same position three times in a row is an automatic draw. For a play-by-play of this draw scenario, see the next page.
          `,
          speech: `
            To draw, black will simply check the white King on h3 and then again on g3. Reaching the same position three times in a row is an automatic draw. For a play-by-play of this draw scenario, see the next page.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1'
          ],
          text: `
                        White is considering a Rook move from e4 to h4, putting black in checkmate, but it's black's move.
                    `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1',
            '7k/5Q2/8/8/4R3/6q1/8/5RK1 w - - 0 1'
          ],
          text: `
            Black moves its Queen from b8 to g3, check (Qb8-g3+).
          `,
          speech: `
            Black moves its Queen from b8 to g3, check.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1',
            '7k/5Q2/8/8/4R3/6q1/8/5RK1 w - - 0 1',
            '7k/5Q2/8/8/4R3/6q1/8/5R1K w - - 0 1'
          ],
          text: `
            White moves its King to h1 to get out of check (Kg1-h1).
          `,
          speech: `
            White moves its King to h1 to get out of check.
          `
        },
        {
          fens: [
            '1q5k/5Q2/8/8/4R3/8/8/5RK1 w - - 0 1',
            '7k/5Q2/8/8/4R3/6q1/8/5RK1 w - - 0 1',
            '7k/5Q2/8/8/4R3/6q1/8/5R1K w - - 0 1',
            '7k/5Q2/8/8/4R3/7q/8/5R1K w - - 0 1'
          ],
          text: `
            Black moves its Queen to check white on h3 (Qg3-h3+), and can simply move back and forth between h3 and g3, keeping the King in perpetual check.
          `,
          speech: `
            Black moves its Queen to check white on h3, and can simply move back and forth between h3 and g3, keeping the King in perpetual check.
          `
        },
        {
          fens: [
            '8/8/8/8/8/8/8/8 w - - 0 1'
          ],
          text: `
            And then there's the merciful 50-move rule. If both players have made their last 50 consecutive moves without moving a pawn and without making a capture, either player can claim a draw. Obviously, you will need to have kept an accurate score sheet to make this claim! In this example from a real game, white just moved the Rook from e3 to e4 (Re3-e4) and used the 50-rule move to claim a draw. This particular game lasted a total of 170 moves.
          `,
          speech: `
            And then there's the merciful 50-move rule. If both players have made their last 50 consecutive moves without moving a pawn and without making a capture, either player can claim a draw. Obviously, you will need to have kept an accurate score sheet to make this claim! In this example from a real game, white just moved the Rook from e3 to e4 and used the 50-rule move to claim a draw. This particular game lasted a total of 170 moves.
          `
        }
      ]
    },
    {
      lessonHeader: 'Discovered Checks and Double Checks',
      demo: [
        {
          fens: [
            'rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
            'rnbqkb1r/pppp1ppp/2N2n2/8/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1'
          ],
          text: `
                        In this first position, the black King would be in check from the white Queen except that, for the moment, the white Knight on e5 is blocking the attack. With white to move, any move by the Knight will expose the attack from the Queen and place black in check, thus the discovered check.
                    `
        },
        {
          fens: [
            'rnbqkb1r/pppp1ppp/5n2/4N3/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1',
            'rnbqkb1r/pppp1ppp/2N2n2/8/8/8/PPPPQPPP/RNB1KB1R w KQkq - 0 1'
          ],
          text: `
            White could play the Knight to g6 check (Ne5-g6+), winning the h8-Rook on the next move. Better still, white selects the Knight to c6 check (Ne5-c6+), knowing that no matter what black does to block the check from the white Queen, the white Knight will capture the black Queen on the next move.
          `,
          speech: `
            White could play the Knight to g6 check, winning the h8-Rook on the next move. Better still, white selects the Knight to c6 check, knowing that no matter what black does to block the check from the white Queen, the white Knight will capture the black Queen on the next move.
          `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1'
          ],
          text: `
                        In this second position, black has more material than white has, but white can quickly win the black Knight and the Queen by using a discovered check. White begins by moving the Rook on b1 to b7, capturing the black b7-pawn. The Rook on b7 would place the black King in check because the Rook on b7 attacks the b8 square. The white Bishop on g2 defends the Rook on b7 (in other words, the black King cannot capture the Rook because it would then be in check from the white Bishop).
                    `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1'
          ],
          text: `
            Therefore, under attack from the Rook, black has no choice but to retreat the King into the corner at a8 (Kb8-a8). White then continues with a powerful discovered check: The white Rook takes the black Knight on e7 (Rb7xe7), leaving the diagonal open, with the white Bishop now holding the black King in check. After black gets out of check by moving its King back to b8 (Ka8-b8), white will move the Rook (now on e7) to capture the black Queen on f7 (Re7xf7).
          `,
          speech: `
            Therefore, under attack from the Rook, black has no choice but to retreat the King into the corner at a8. White then continues with a powerful discovered check: The white Rook takes the black Knight on e7, leaving the diagonal open, with the white Bishop now holding the black King in check. After black gets out of check by moving its King back to b8, white will move the Rook (now on e7) to capture the black Queen on f7.
          `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1',
            '1kr5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1'
          ],
          text: `
            The white Rook captures the black pawn on b7, putting the black King in check (Rb1-b7+).
          `,
          speech: `
            The white Rook captures the black pawn on b7, putting the black King in check.
          `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1',
            '1kr5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            'k1r5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1'
          ],
          text: `
            Black retreats its King to a8 (Kb8-a8).
          `,
          speech: `
            Black retreats its King to a8.
          `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1',
            '1kr5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            'k1r5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            'k1r5/p3Rq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1'
          ],
          text: `
            The white Rook captures the black Knight on e7, revealing the discovered check from the white Bishop (Rb7xe7).
          `,
          speech: `
            The white Rook captures the black Knight on e7, revealing the discovered check from the white Bishop.
          `
        },
        {
          fens: [
            '1kr5/pp2nq2/8/8/5P2/6P1/6BP/1R3K2 w - - 0 1',
            '1kr5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            'k1r5/pR2nq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            'k1r5/p3Rq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            '1kr5/p3Rq2/8/8/5P2/6P1/6BP/5K2 w - - 0 1',
            '1kr5/p4R2/8/8/5P2/6P1/6BP/5K2 w - - 0 1'
          ],
          text: `
            Black moves its King back to b8 to get out of check (Ka8-b8). Then white moves its Rook to capture the black Queen on f7 (Re7xf7).
          `,
          speech: `
            Black moves its King back to b8 to get out of check. Then white moves its Rook to capture the black Queen on f7.
          `
        },
        {
          fens: [
            'rnb1kb1r/pp3ppp/2p5/4q3/8/3Q4/PPPB1nPP/2KR1BNR w Kkq - 0 1',
            'rnbQkb1r/pp3ppp/2p5/4q3/8/8/PPPB1nPP/2KR1BNR w Kkq - 0 1'
          ],
          text: `
                        At first glance, it appears that black has a significant advantage in this game. The Knight on f2 is attacking the white Queen and both of the white Rooks. Note also that black has two Knights while white has only one.
                    `
        },
        {
          fens: [
            'rnbk1b1r/pp3ppp/2p5/4q3/8/8/PPPB1nPP/2KR1BNR w Kkq - 0 1',
            'rnbk1b1r/pp3ppp/2p5/4q1B1/8/8/PPP2nPP/2KR1BNR w Kkq - 0 1'
          ],
          text: `
            This is the position after the Queen sacrifice. White now moves the Bishop on d2 to g5 (Bd2-g5+), giving double check from both the Bishop and the Rook on d1. Note that black is attacking both of these white pieces, but it is not possible to capture both with one move.
          `,
          speech: `
            This is the position after the Queen sacrifice. White now moves the Bishop on d2 to g5, giving double check from both the Bishop and the Rook on d1. Note that black is attacking both of these white pieces, but it is not possible to capture both with one move.
          `
        },
        {
          fens: [
            'rnbk1b1r/pp3ppp/2p5/4q3/8/8/PPPB1nPP/2KR1BNR w Kkq - 0 1',
            'rnbk1b1r/pp3ppp/2p5/4q1B1/8/8/PPP2nPP/2KR1BNR w Kkq - 0 1'
          ],
          text: `
                        To get out of the double check, black must move the King from d8. If the King moves to c7, white has the amazing Bishop g5 to d8 checkmate! If, instead, black moves the King from d8 to e8, white delivers checkmate by advancing the Rook to d8.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Promoting (and Under-Promoting) Your Pawns',
      demo: [
        {
          fens: [
            '6Q1/8/1kp4P/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1',
            '6QQ/8/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1'
          ],
          text: `
                        Advance a pawn to the 8th rank and a wonderful transformation will occur. The rules require that you convert the pawn to a Knight, Bishop, Rook, or Queen. As the most powerful piece, the Queen is the most obvious choice, and most players promote to a Queen.
                    `
        },
        {
          fens: [
            '6Q1/8/1kp4P/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1',
            '6QQ/8/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1'
          ],
          text: `
            This position is from a game between former world chess champion Bobby Fischer (playing white) and the Russian Tigran Petrosian (playing black). Petrosian advanced the pawn on a2 to a1 (a2-a1=Q) and promoted it to a Queen. Fischer replied by advancing his h6 pawn to h7 (h6-h7). Petrosian was unable to prevent Fischer from promoting that pawn to a Queen on the next move (h7-h8=Q).
          `,
          speech: `
            This position is from a game between former world chess champion Bobby Fischer (playing white) and the Russian Tigran Petrosian (playing black). Petrosian advanced the pawn on a2 to a1 and promoted it to a Queen. Fischer replied by advancing his h6 pawn to h7. Petrosian was unable to prevent Fischer from promoting that pawn to a Queen on the next move.
          `
        },
        {
          fens: [
            '6Q1/8/1kp4P/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/p7/5BK1 w - - 0 1',
            '6Q1/7P/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1',
            '6QQ/8/1kp5/2q1p3/2PpP3/2nP2P1/8/q4BK1 w - - 0 1'
          ],
          text: `
                        With eight pawns at the beginning of the game, you can, in theory, have a total of nine Queens on the board. It is rare, of course, to have more than two Queens. Some modern sets come with two Queens. If you have only one in your set, it is customary to use an upside-down Rook as the second Queen.
                    `
        },
        {
          fens: [
            '2R5/8/8/4kpp1/8/1P3KP1/r3pP2/8 w - - 0 1'
          ],
          text: `
            Under-promotion is rare, but it's always fun when it occurs. Here, with black to move, black dares not promote the pawn on e2 to a Queen because white will quickly respond by moving its Rook on b8 to e8 (Rb8-e8+), checking the black King, and, on the next move, capturing the new Queen on e1.
          `,
          speech: `
            Under-promotion is rare, but it's always fun when it occurs. Here, with black to move, black dares not promote the pawn on e2 to a Queen because white will quickly respond by moving its Rook on b8 to e8, checking the black King, and, on the next move, capturing the new Queen on e1.
          `
        },
        {
          fens: [
            '2R5/8/8/4kpp1/8/1P3KP1/r3pP2/8 w - - 0 1',
            '2R5/8/8/4kpp1/8/1P3KP1/r4P2/4n3 w - - 0 1',
            '2R5/8/8/4kpp1/8/1P2K1P1/r4P2/4n3 w - - 0 1'
          ],
          text: `
            Instead, black under-promotes the e-pawn to a Knight! Suddenly, the white King is in check from the new Knight with only a single legal move: King from f3 to e3 (Kf3-e3). Note that on e3, the King no longer has any legal moves. The new Knight controls d3 and f3.
          `,
          speech: `
            Instead, black under-promotes the e-pawn to a Knight! Suddenly, the white King is in check from the new Knight with only a single legal move: King from f3 to e3. Note that on e3, the King no longer has any legal moves. The new Knight controls d3 and f3.
          `
        },
        {
          fens: [
            '2R5/8/8/4kpp1/8/1P3KP1/r3pP2/8 w - - 0 1',
            '2R5/8/8/4kpp1/8/1P3KP1/r4P2/4n3 w - - 0 1',
            '2R5/8/8/4kpp1/8/1P2K1P1/r4P2/4n3 w - - 0 1'
          ],
          text: `
            The Rook on a2 controls the squares on the 2nd rank. And the black King controls d4, e4, and f4. Black should therefore attack the trapped King by advancing the f-pawn from f5 to f4 (f5-f4). That's check, with mate to follow on the next move (after two pawn captures on f4)!
          `,
          speech: `
            The Rook on a2 controls the squares on the 2nd rank. And the black King controls d4, e4, and f4. Black should therefore attack the trapped King by advancing the f-pawn from f5 to f4. That's check, with mate to follow on the next move (after two pawn captures on f4)!
          `
        }
      ]
    },
    {
      lessonHeader: 'Castling',
      demo: [
        {
          fens: [
            '8/8/8/8/8/8/PPP2PPP/R3K2R w KQ - 0 1',
            '8/8/8/8/8/8/PPP2PPP/R4RK1 w Q - 0 1',
            '8/8/8/8/8/8/PPP2PPP/R3K2R w KQ - 0 1',
            '8/8/8/8/8/8/PPP2PPP/2KR3R w K - 0 1'
          ],
          text: `
                        Here, the white King can castle on either side of the board. To castle, follow these steps: Move the King two squares toward the Rook (in this example, from e1 to c1 or from e1 to g1. Move the Rook to the square immediately on the other side of the King (in this example, to d1 or f1). Technically, castling is a King move, so be sure to move the King first. If you touch the Rook first in a tournament, you will be required to move just the Rook.
                    `
        },
        {
          fens: [
            '8/6bq/8/8/8/7b/8/R3K2R w - - 0 1'
          ],
          text: `
                        Note that castling is permitted only when your King and Rook have not previously moved. In addition, there are two simple rules to keep in mind: You cannot castle out of, through, or into check. If your King is being attacked, castling is not an option for getting out of check. All of the squares between the King and the Rook must be vacant.
                    `
        },
        {
          fens: [
            '8/6bq/8/8/8/7b/8/R3K2R w - - 0 1'
          ],
          text: `
                        Note that you can castle if your Rook is under attack. You can even castle if your Rook passes through a square controlled by
                        your opponent.
                    `
        },
        {
          fens: [
            '8/6bq/8/8/8/7b/8/R3K2R w - - 0 1'
          ],
          text: `
                        In this diagram, white is not in check but cannot castle on the Kingside because the black Bishop on h3 controls the f1 square through which the King would have to move. White is permitted to castle Queenside despite the fact that black's Bishop on g7 is attacking the Rook on a1 and the black Queen on h7 is attacking the b1 square through which the white Rook would move.
                    `
        }
      ]
    },
    {
      lessonHeader: 'The En Passant Capture',
      demo: [
        {
          fens: [
            '8/8/8/8/4p3/8/3P4/8 w - - 0 1',
            '8/8/8/8/3Pp3/8/8/8 w - - 0 1',
            '8/8/8/8/8/3p4/8/8 w - - 0 1'
          ],
          text: `
                        In this diagram, the white pawn on d2 has not yet moved. It has the option of moving one or two squares. If it moved ahead a single square to d3, the black pawn would clearly be able to capture it. If the white pawn moves ahead two squares, however, the black pawn on the neighboring e-file would like to have the chance to capture it before the white pawn can advance toward its Queening square, d8. The en passant rule applies here. For one move only, the black pawn can respond by capturing the white pawn as if it had moved only a single square.
                    `
        },
        {
          fens: [
            '8/8/8/8/4p3/8/3P4/8 w - - 0 1',
            '8/8/8/8/3Pp3/8/8/8 w - - 0 1',
            '8/8/8/8/8/3p4/8/8 w - - 0 1'
          ],
          text: `
                        To capture the white pawn, move the black pawn forward diagonally as if the white pawn had moved only a single square. This diagram shows the final position. Note that only pawns can capture en passant, and that only a pawn on an adjacent square can capture in this way.
                    `
        },
        {
          fens: [
            '7k/1p5P/p6K/P7/8/8/8/8 w - - 0 1',
            '7k/7P/p6K/Pp6/8/8/8/8 w - - 0 1',
            '7k/7P/pP5K/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                    In this position, it is black's move. The black King
                    has no legal moves. In fact, black's only legal move
                    is with the black b7-pawn. If black advances its pawn two squares from b7 to b5, white has a very strong response with the en passant capture, a5xb6.
                    `
        },
        {
          fens: [
            '7k/1p5P/p6K/P7/8/8/8/8 w - - 0 1',
            '7k/7P/p6K/Pp6/8/8/8/8 w - - 0 1',
            '7k/7P/pP5K/8/8/8/8/8 w - - 0 1'
          ],
          text: `
                        Without the en passant capture, black might actually win the game by advancing the b-pawn and promoting it to a Queen on b1. With the en passant capture, white will quickly advance the b6-pawn all the way to b8, promoting to a Queen (or Rook) with checkmate!
                    `
        }
      ]
    }
  ]
}
