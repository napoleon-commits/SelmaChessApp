export default {
  header: 'Opening Strategy',
  body: `
        Now that you know how to set up the board and how to move and activate the pieces and pawns, it's time to start putting it all together. Playing chess is very much like being a commander in a war. You are in control of all your pieces. Some beginners make the mistake of bringing out only one or two pieces, while leaving the rest of their army on their original squares. To play a good game, it's important to try to coordinate all of the pieces in your army.
        In this chapter, you will learn about using all of your pieces to fight for the center the board. You will see why it's important to develop your Knights before your Bishops and why you should limit the number of early pawn moves. If you place your pieces on active squares, you will find that your attacks succeed more often.
    `,
  items: [
    {
      lessonHeader: `
                Fight for the Center of the Board
            `,
      demo: [
        {
          fens: ['8/8/8/8/8/8/8/8 w - - 0 1'],
          text: `
                        The absolute center consists of the four squares (d4, d5, e4, and e5). From the very beginning of the game, you want to fight for control over these squares.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        The two most common first moves for white are pawn e2 to e4 (1.e2-e4) and pawn d2 to d4 (1.d2-d4). These moves have merit. If you open the game with e2 to e4, as in this example, you can see that the pawn already occupies one of the key center squares and exercises control over another central square, d5.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        Notice also that the white Bishop on f1 and
                        the white Queen on d1 gain the ability to move out. Although you have already learned not to develop your Queen too early, having these early mobility options often proves useful. For example, black should not reply with the move b7 to b5 (1.b7-b5) because white's Bishop on f1 would be able to capture it.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/3PP3/8/PPP2PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        In addition to staking a claim in the center, white's e2-e4 opening move has an important threat. Here, the threat is simply the move that white would make if white could move again—d2 to d4 (2.d2-d4)—taking full command over the center of the board. The two pawns together, if unopposed, occupy two of the squares in the center and exercise control over the other two center squares.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        White's other main possibility at the beginning of the game is d2 to d4 (1.d2-d4). Here, too, the pawn occupies one of the central squares and helps control another key square, e5. In this case, the move provides additional mobility for the white Bishop on c1 and carries the obvious second move threat of e2 to e4 (2.e2-e4).
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/3P4/8/PPP1PPPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        These first moves are bit like a religion: Some players believe firmly in one or the other. Players who prefer e2 to e4 (1.e2-e4) tend to be highly tactical players—players who prefer highly complicated contests that require careful calculation. By contrast, players who open the game with d2 to d4 (1.d2-d4) tend to be more positional players, who prefer a calmer, more strategic approach to chess. In my experience, younger players tend to prefer opening games with 1.e2-e4, and more seasoned players often prefer 1.d2-d4.
                    `
        }
      ]
    },
    {
      lessonHeader: 'An Ideal Setup',
      demo: [
        {
          fens: ['rnbqkbnr/pppppppp/8/8/2BPP3/2N1BN2/PPPQ1PPP/3RR1K1 w kq - 0 1'],
          text: `
                        In this position, white has complete command over the center of the board. The two pawns on d4 and e4 occupy two of the squares in the center. White is exercising very strong control over the d5-square. As you can see, the Knight on c3 (Nc3), the Bishop on c4 (Bc4), and the pawn on e4 all help control the key d5-square. White also has excellent control over the key e5-square. The pawn on d4 and the Knight on f3 (Nf3) are both attacking e5.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/2BPP3/2N1BN2/PPPQ1PPP/3RR1K1 w kq - 0 1'],
          text: `
                        In this ideal setup, white has succeeded in developing every piece. The Rooks occupy the central files and exert influence over the center. Having castled on the Kingside, the white King is safe. Both Bishops have been developed, and the white Queen, while developed, is posted where it will not be easily subject to attack.
                        Note that white is now fully prepared for the next step—an attack on the black King. For example, the white Bishop on c4 (Bc4) is attacking black's f7-pawn, the weakest spot in black's beginning setup. The f7 pawn is weak because only the black King defends it.
                    `
        },
        {
          fens: ['rnbqkbnr/pppppppp/8/8/2BPP3/2N1BN2/PPPQ1PPP/3RR1K1 w kq - 0 1'],
          text: `
                        Keep in mind that every move in chess is important. Beginners often make the mistake of moving the same piece or a small number of pieces over and over again. In the early part of the game, try to place your pieces on strong natural squares, squares that will help to control the center or, like the Bc4, control key diagonals. Try not to move a piece more than once or at most twice in the first ten moves of the game . . . unless by doing so you can capture (or recapture) a piece or force your opponent to retreat. In other words, don't start attacking until all or at least most of your pieces are developed.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Knights Before Bishops',
      demo: [
        {
          fens: ['rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        Most of the time, it is fairly clear where the Knights should be developed. The best squares for the Bishops become apparent a bit later. In this position, white has opened the game with e2 to e4 (1.e2-e4). Black, in an effort to prevent white from carrying out the threat of d2 to d4 for it's second move (2.d2-d4), has responded with an opening move of e7 to e5 (1.e7-e5). This popular response is a favorite at chess tournaments.
                    `
        },
        {
          fens: ['rnbqkbnr/pppp1ppp/8/4p3/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        For its second move, white has several options. Both Knights can develop to their natural squares on c3 and f3. Knight to f3 (2.Ng1-f3) is the preferred response for several reasons. This Knight move attacks the black pawn on e5, and it helps prepare for castling by clearing a square between the King and the h1-Rook. The Knight on f3 also supports the later move d2-d4, an important part of the effort to control the center of the board.
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        All of the possible moves by white's light-squared Bishops are considered not as good. Playing Bishop f1 to a6 (2.Bf1-a6) is the worst Bishop move, not because the move does not help white control the center, but because the black pawn on b7 and the black Knight on b8 both control the a6 square. A second move of Bishop f1 to a6 would lose the Bishop!
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        A second move of Bishop f1 to d3 (2.Bf1-d3) is also considered very weak. On d3, the Bishop would defend the white e4-pawn, but it also blocks the advance of the important white d-pawn. If the d-pawn can't move, white's dark-squared Bishop on c1 might also have a difficult time entering the game.
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        Even Bishop f1 to b5 (2.Bf1-b5) is considered a poor second move because black will be able to play either pawn a7 to a6 (2.a7-a6) or even pawn c7 to c6 (2.c7-c6), attacking the Bishop and forcing it to move again. Your goal with the Bishops is to place them on strong natural squares. If it isn't clear which Bishop move is best, you will want to wait until you have a clear reason why one move might be better than the others.
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        Here, white has played Knight g1 to f3 (2.Ng1-f3), attacking black's e5-pawn. Black has responded to the threat by playing Knight b8 to c6 (2.Nb8-c6). As you can see, the black Knight on c6 defends the black e5-pawn. In this position, white is finally ready to consider moving the Bishop on f1 (Bf1).
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        Many players try Bishop f1 to c4 (3.Bf1-c4), preparing to castle by clearing the squares between the King and h1-Rook and beginning to place pressure on the weak f7-square. (Remember, the f7-pawn is weak because only the King is defending it.) The best third move for white, however, is probably Bishop f1 to b5 (3.Bf1-b5).
                    `
        },
        {
          fens: ['r1bqkbnr/pppp1ppp/2n5/4p3/4P3/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 1'],
          text: `
                        It is a move that was bad just a move ago. But now, the Bishop arrives on b5 with an attack on the black Knight on c6 (Nc6), all with the idea of putting more pressure on the black e5-pawn. White's idea is simple enough. Perhaps, by capturing the black c6-Knight (Bb5xc6), white will be able to win the black pawn on e5 in its fourth move. Black will be busy responding with a Bishop recapture (b7xc6 or d7xc6) for its third move.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Limit Your Early Pawn Moves',
      demo: [
        {
          fens: ['rnbqkbnr/pppp1ppp/8/4p3/6P1/5P2/PPPPP2P/RNBQKBNR w KQkq - 0 1'],
          text: `
                        Certainly, early in the game, try to limit the number of moves made by pawns on the a-, b-, g-, and h-files (these files are called flanks because they're on the outside edges of the board). The following example is a bit extreme. White began by playing g2 to g4 (1.g2-g4) and has continued by advancing the f-pawn (2.f2-f3). Black can punish such play very quickly, in this case with a Queen to h4 checkmate (2.Qd8-h4#)—the fastest possible mate.
                    `
        },
        {
          fens: ['rn1qk1nr/1bppppbp/pp4p1/8/3PP3/3B1N2/PPP2PPP/RNBQR1K1 w Qkq - 0 1'],
          text: `
                        Very few players will fall into that quick checkmate. Here is a more practical example. Black, a beginner, has developed only on the flanks. White, a more experienced player, has taken quick control over the center, castled, and even developed a Rook to the e-file. By con- trast, black has no control over the center other than two attacks from the Bishops. Black would also like to castle on the Kingside in order to safeguard the King, but to do so, the black Knight on g8 (Ng8) would have to move first.
                    `
        },
        {
          fens: ['rn1qk1nr/1bppppbp/pp4p1/8/3PP3/3B1N2/PPP2PPP/RNBQR1K1 w Qkq - 0 1'],
          text: `
                        The natural move, of course, is Knight on g8 to f6 (Ng8-f6). However, the strong white pawn center makes that move very hard to play, as explained on the next page.
                    `
        },
        {
          fens: [
            'rn1qk2r/1bppppbp/pp3np1/8/3PP3/3B1N2/PPP2PPP/RNBQR1K1 w Qkq - 0 1',
            'rn1qk2r/1bppppbp/pp3np1/4P3/3P4/3B1N2/PPP2PPP/RNBQR1K1 w Qkq - 0 1'
          ],
          text: `
                        Here is the position after Knight g8 to f6 (Ng8-f6). White can respond powerfully with pawn e4 to e5 (e4-e5), taking further command over the center and forcing the poor f6-Knight (Nf6) to move again. Notice that if the Knight moves again to d5, g4, or h5, it will be subject to another attack from a white pawn.
                    `
        },
        {
          fens: ['rn1qk2r/1bppppbp/pp4p1/4P2n/3P4/3B1N2/PPP2PPP/RNBQR1K1 w Qkq - 0 1'],
          text: `
                        The worst of these choices is perhaps Knight to h5 (Nf6-h5). By moving to h5, the Knight has moved to the rim and no longer has any safe moves. White might be reluctant to weaken the position in front of the King, but the attacking move pawn g2-g4 (g2-g4) will win the Knight. Like many games, chess has its tradeoffs. In this instance, the capture of the black Knight should compensate white for the weakening of the Kingside.
                        The real point, of course, is to fight for the center and to avoid early maneuvers on the flank that cede the center to your opponent.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Complete Your Development Before You Attack',
      demo: [
        {
          fens: ['r1bqk2r/pppp1ppp/2n2n2/2b1p3/2B1P3/3P1N2/PPP2PPP/RNBQK2R w KQkq - 0 1'],
          text: `
                        Here is a typical example of such a mistake. In this position, white probably should develop the Knight from b1 to c3 (Nb1-c3), or simply castle. Instead, white launches an aggressive attack on the black Kingside with Knight from f3 to g5 (Nf3-g5). White sees that having the Knight on g5 (Ng5), and the white Bishop on c4 (Bc4) will combine to attack the black f7-pawn twice. For the moment, at least, black has only a single defender of f7, the black King.
                    `
        },
        {
          fens: ['r1bq1rk1/pppp1ppp/2n2n2/2b1p1N1/2B1P3/3P4/PPP2PPP/RNBQK2R w KQq - 0 1'],
          text: `
                        Here is the position after black's response, castling Kingside. As you can see, by castling, black now defends the key f7-pawn twice, with the Rook on f8 (Rf8) as well as the King. Intent on the attack, white mistakenly lashes forward, moving the Knight yet again to capture on f7 (Nf3xf7). Black will respond, capturing the white Knight with its Rook (Rf8xf7), and then white answers by capturing the black Rook with its c4-Bishop, putting the King in check (Bc4xf7+). The black King then captures the white Bishop (Kg8xf7). The trade of two minor pieces, in this case a Knight and a Bishop, for a Rook and pawn is rarely a good idea so early in the game. See the next position below for how this plays out.
                    `
        },
        {
          fens: ['r1bq4/pppp1kpp/2n2n2/2b1p3/4P3/3P4/PPP2PPP/RNBQK2R w KQ - 0 1'],
          text: `
                        After the captures have cleared on f7, black's position is well developed. The two Knights are on natural squares, c6 and f6, helping to control the center. The Bishop on c5 (Bc5) is also well placed. Black is likely to continue development with pawn d7 to d6 (d7-d6), bringing the Bishop from c8 to e6 (Bc8-e6), retreating the King back to g8 for safety (Kf7-g8), and then finding files for the Queen and the remaining Rook, probably on the f-file.
                    `
        },
        {
          fens: ['r1bq4/pppp1kpp/2n2n2/2b1p3/4P3/3P4/PPP2PPP/RNBQK2R w KQ - 0 1'],
          text: `
                        By clear contrast, white's development has suffered. Both Rooks, the Knight, the Bishop, and the Queen are—as masters like to say— still "in the box;" they haven't moved from their starting positions. White has made very little progress, while black has an excellent plan to activate every piece.
                        The cause of this catastrophe for white was the premature attack on f7. Rather than lash out by moving the same piece three times in the opening, white should simply have tried to develop slowly, bringing out all or most of the pieces before commencing the attack.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Gain Time',
      demo: [
        {
          fens: [
            'rnbqkb1r/pppppppp/5n2/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1',
            'rnbqkb1r/pppppppp/5n2/4P3/8/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'
          ],
          text: `
                        In this position, black has responded to white's opening move of pawn e2 to e4 (1.e2-e4) with the very sharp Knight g8 to f6 (1.Ng8-f6). This opening—known as Alekhine's Defense, after former world champion Alexander Alekhine—prevents white from playing a second move of pawn d2 to d4 (2.d2-d4) because black's first move threatens to capture the white pawn on e4.
                        White could decide to defend the e4-pawn with pawn d2 to d3 (2.d2-d3), but the white d-pawn really would like to develop directly to d4. White therefore decides to gain time by advancing the e-pawn for a second time to e5 (e4-e5). The second advance of the white e-pawn might appear to break the rule of developing a piece only once, but the advance does present the black Knight with a problem.
                    `
        },
        {
          fens: ['rnbqkb1r/pppppppp/8/2n1P3/8/3P4/PPP2PPP/RNBQKBNR w KQkq - 0 1'],
          text: `
                        Black mistakenly advances the attacked Knight to e4 (Nf6-e4). Knight f6 to d5 (Nf6-d5) is the main line, although the Knight can also be attacked there by the white pawns. In this position, white can continue to attack the black Knight with its d2-pawn (3.d2-d3), gaining time for rapid development. Here is the position after the third moves by white (d2-d3) and black (Ne4-c5). (These moves can be notated together as 3.d2-d3 Ne4-c5).
                        The poor black Knight is being forced to move again and again, while white is successfully establishing a strong pawn center. White's next move is likely to be d3 to d4 (4.d3-d4), followed by the rapid deployment of the white Knights to f3 and c3.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Limit Exchanges',
      demo: [
        {
          fens: ['r1bqkb1r/pp2pppp/2np1n2/8/3NP3/2N5/PPP2PPP/R1BQKB1R w KQkq - 0 1'],
          text: `
                        In this position, both sides have been developing normally, bringing out their Knights first. With white to move, white has an opportunity to exchange Knights on c6 or to develop a Bishop. The best move is probably to develop the Bishop on f1 to c4 (Bf1-c4). If, instead, white decides to capture the black Knight on c6 (Nd4xc6), black will simply recapture with the b7-pawn (b7xc6) and gain time for development. The pawn on c6 would be useful in supporting the later advance of the black d-pawn.
                    `
        },
        {
          fens: ['r1bqkb1r/pp2pppp/3p1n2/8/2BQP3/2N5/PPP2PPP/R1B1K2R w KQkq - 0 1'],
          text: `
                        It is possible that white feared that black would exchange Knights on d4. Here is the position after the white Bishop moves from f1 to c4 (6.Bf1-c4) and the exchange of Knights on d4. It is true that white, in recapturing on d4, had to develop the Queen aggressively and early (Qd1xNd4). Notice, however, that black does not have a useful, immediate way to attack the white Queen. The black pawn move of e7 to e5 (7.e7-e5) permanently weakens the d6-pawn and creates a hole at d5. If black instead moves the Queen from
                        d8 to b6 (7.Qd8-b6) white can exchange Queens, which will in turn result in doubled black pawns on the b-file.
                    `
        }
      ]
    },
    {
      lessonHeader: 'Avoid Exchanging Bishops for Knights',
      demo: [
        {
          fens: ['rnbqkb1r/pppppppp/5n2/6B1/3P4/8/PPP1PPPP/RN1QKBNR w KQkq - 0 1'],
          text: `
                        Here is a position early in a game after white opens d2 to d4, black opens Knight g8 to f6, and white responds Bishop c1 to g5 (1.d2-d4 Ng8-f6 2.Bc1-g5). This opening, called the Trompowski, breaks the important rule of developing a Bishop before the Knights. White's strategy, perhaps flawed, is to weaken the black pawn structure by capturing the black Knight on f6.
                    `
        },
        {
          fens: ['r1b1k2r/pp1nppbp/3p4/2pP1p2/1qP5/2N1P3/PP1Q1PPP/R3KBNR w KQkq - 0 1'],
          text: `
                        Here is the same game a few moves later. Note that the black f-pawns are indeed doubled. In compensation, black has aggressively posted the dark-squared Bishop on g7. This Bishop is quite strong because it is well posted on the long diagonal and because white no longer has a dark-squared Bishop to challenge it. Black may not be able to castle safely on the Kingside, but black could later in the game be able to post a Rook or even dou- ble Rooks on the open g-file. Note also that black's f5-pawn is preventing white from developing normally with e3-e4.
                    `
        },
        {
          fens: ['r1b1k2r/pp1nppbp/3p4/2pP1p2/1qP5/2N1P3/PP1Q1PPP/R3KBNR w KQkq - 0 1'],
          text: `
                        The point, of course, is that such early exchanges of Bishops for Knights are very committal and might determine who will have winning chances. It's best to avoid such exchanges if you have the Bishop and, of course, to seek such exchanges if you have the Knight.
                    `
        }
      ]
    }
  ]
}
