export default {
    header: 'An Introduction to Chess',
    body: `
        Successfully lead an empire! Imagine soldiers on foot leading the charge.
        Imagine the mounted troops on horseback. Imagine the King with the Queen at his side.
        In many battles, when the King dies or is captured the battle ends.
        And so it is in the game of chess.
    `,
    items: [
        {
            lessonHeader: `Viewing the Chessboard`,
            demo:[
                {
                    fens: ['8/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        This chessboard is typical of those on which you will play. To set up the board correctly, place it so that a dark square is in the lower-left corner. Or, as chess players like to say, “It’s white on the right.”
                        Some boards are labeled with letters (a–h) and numbers (1–8) in the margins. Others are blank. It is perfectly fine to play with a board that does not have these letters and numbers in the margins. They are there to help you talk about the board, to name each square, and to emphasize certain features. In this book, we use a labeled board so you can easily identify the pieces and moves discussed.
                    `,
                },
                {
                    fens: ['8/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        For example, every board has eight ranks (rows) and eight files (columns). The 1st rank consists of the eight squares directly in front of you. The 8th rank contains the eight squares that are farthest from you. As you can see, ranks are horizontal. Try to visualize each rank in turn: the 2nd rank, the 3rd rank, and so on.
                        Files are vertical.
                    `,
                },
                {
                    fens: ['8/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        The eight squares on the left side of the board are called the a-file. The eight squares on the right side of the board are called the h-file.
                        The alternating colors of the squares are another wonderful visual aid. For the moment, simply note that there are alternating light and dark squares and light and dark diagonals. As you will soon see, some pieces move along the ranks and files, while others move diagonally.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Introducing the Pieces`,
            demo: [
                {
                    fens: ['8/8/8/8/3K4/8/8/8 w - - 0 1'],
                    text: `
                        The King is truly the most important piece because you lose the game if your King is attacked and cannot escape. Kings are abbreviated with the letter K.
                    `,
                },
                {
                    fens: ['8/8/8/8/3Q4/8/8/8 w - - 0 1'],
                    text: `
                        The Queen is considered the most powerful piece in terms of its ability to move around the board. Each player has one at the beginning of the game, though you will see, it’s possible to get more! Queens are abbreviated with the letter Q.
                    `,
                },
                {
                    fens: ['8/8/8/8/3B4/8/8/8 w - - 0 1'],
                    text: `
                        Bishops usually have a nice, tapered appearance. At the beginning of the game, each player starts with two Bishops. They are abbreviated with the letter B.
                    `,
                },
                {
                    fens: ['8/8/8/8/3N4/8/8/8 w - - 0 1'],
                    text: `
                        Knights, like the cavalry, can jump into action. Each player starts with two Knights. They are abbreviated with the letter N.
                    `,
                },
                {
                    fens: ['8/8/8/8/3R4/8/8/8 w - - 0 1'],
                    text: `
                        Rooks are sometimes called towers or castles because they resemble the tower of a castle. Each player starts with two of them. They are abbreviated with the letter R.
                    `,
                },
                {
                    fens: ['8/8/8/8/3P4/8/8/8 w - - 0 1'],
                    text: `
                        The pawns are the smallest unit on the chessboard. They can seem small and unimportant, but they are often very useful in helping to control territory and to launch attacks on your opponent.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Where to Place the Pieces`,
            demo: [
                {
                    fens: ['rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'],
                    text: `
                        The Rooks begin the game in the corners. The Knights (many beginning players call them horses) are next. The Bishops start the game next to the Knights. Finally, the Queen and King fill in the remaining squares on the 1st and 8th ranks. The Queen will always start on its own color. Note that the white Queen is on a white square. The black Queen is on a dark square.
                        Don’t forget the pawns; all eight of them are ready to start the charge. At the beginning of the game, the eight white and eight black pawns form a line just in front of the white and black pieces, across the 2nd and 7th ranks, respectively.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pppppppp/8/8/4P3/8/PPPP1PPP/RNBQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        Chess is played between two players, one in control of the white pieces and one in control of the black pieces. White always has the first move.
                        To decide who gets white and who gets black, it is customary for one player to hide a white and black pawn in each hand. The other player then picks a hand. Whoever picks or is left with the white pawn will get the white pieces and will move first.
                        In the second diagram, white is advancing one of its pawns by moving it forward two squares. As you will soon see, this pawn move helps control the key squares in the very center of the chessboard and permits one of white’s Bishops as well as the white Queen to move out.
                    `,
                },
            ],
        },
        {
            lessonHeader: `How the King Moves and Captures`,
            demo: [
                {
                    fens: ['k7/8/8/8/4K3/8/8/8 w - - 0 1'],
                    text: `
                        A King in the center of the board can move to a total of eight different squares, assuming that your opponent does not control any of those squares. By contrast, the black King in the corner can move to only three squares.
                    `,
                },
                {
                    fens: ['8/8/8/4P3/3pK3/5p2/8/8 w - - 0 1'],
                    text: `
                        Here, only two squares are forbidden to the white King. The King cannot move to a square already occupied by its own pawn, and the King cannot move to the square marked with a red X. The white King is not permitted to move there because one of the black pawns controls that square (see page 16 to learn how the pawns move and capture).
                        White has several interesting options. White can capture either black pawn (to capture, white would simply remove the pawn from the board, placing the King on the square that the pawn occupied). It’s fun to practice such captures. Masters have become adept at moving and snatching a piece in one fluid motion.
                    `,
                },
                {
                    fens: ['8/8/4k3/8/4K3/8/8/8 w - - 0 1'],
                    text: `
                        In this position, both Kings are facing each other. Neither King can move next to the other King. Simply put, a King may never move next to another King. To do so would be illegal because the other King controls those squares. It’s an important point. Both Kings “control” the same three squares!
                    `,
                },
            ],
        },
        {
            lessonHeader: `How Rooks Move and Capture`,
            demo: [
                {
                    fens: ['8/3K4/8/8/3R2n1/8/3b4/8 w - - 0 1'],
                    text: `
                        The white Rook can move toward the black Knight or capture it by replacing the Knight on the square on which the Knight stood. Similarly, you might decide to capture the black Bishop, again simply by taking the Rook and placing it on the square that the Bishop occupied, being sure to remove the Bishop from the board as part of the move. A Rook is not permitted to jump either white or black pieces, so it cannot move on the other side of the white King.
                    `,
                }
            ],
        },
        {
            lessonHeader: `How Bishops Move and Capture`,
            demo: [
                {
                    fens: ['8/8/5n2/8/3B4/8/1N3r2/8 w - - 0 1'],
                    text: `
                        The white Bishop can move toward the black Knight or capture it. Similarly, you might decide here to capture the black Rook, again simply by replacing the black Rook with the white Bishop. The white Bishop is not permitted to jump either the white or black pieces.
                    `,
                },
            ],
        },
        {
            lessonHeader: `How the Queen Moves and Captures`,
            demo: [
                {
                    fens: ['8/5r2/8/3Q4/8/1P6/3b2n1/8 w - - 0 1'],
                    text: `
                        Clearly the Queen has many, many options. For example, the Queen can move toward or capture the black Knight. Similarly, you might decide here to capture the black Rook or the black Bishop. The Queen is not permitted to jump either the white or black pieces.
                    `,
                },
            ],
        },
        {
            lessonHeader: `How Knights Move and Capture`,
            demo: [
                {
                    fens: [
                        '8/8/8/5r2/3N4/1B6/8/8 w - - 0 1',
                        '8/8/8/5N2/8/1B6/8/8 w - - 0 1'
                    ],
                    text: `
                        As you can see, the white Knight can capture the black Rook but cannot occupy the same square as the white Bishop. Remember, two pieces can never occupy the same square. Some players have some difficulty with a Knight’s movement. Keep in mind that a Knight on a dark square, as in this diagram, will only be able to move to light squares. And of course, a Knight on a light square will only be able to move to dark squares.
                    `,
                },
                {
                    fens: [
                        'rnbqkbnr/pppppppp/8/8/8/5N2/PPPPPPPP/RNBQKB1R w KQkq - 0 1'
                    ],
                    text: `
                        A Knight is the only chess piece permitted to jump over other pieces. In this position, the white Knight has just made the first move in the game. As you can see, it has jumped over the white pawns. Note again that the Knight, which started on a dark square, has arrived on a light square. From its new position, the Knight now has access to four new dark squares.
                    `,
                },
            ],
        },
        {
            lessonHeader: `How Pawns Move and Capture`,
            demo: [
                {
                    fens: ['8/8/2p5/8/8/8/5P2/8 w - - 0 1'],
                    text: `
                        In this position, the white pawn can move forward one or two squares. The white pawn has that additional two-move option because it has not yet moved. It does not matter how many moves have been played. A pawn that has never moved will have the additional option to move ahead two squares on its first move.
                        By contrast, the black pawn has already moved. It therefore has only one option, to advance a single square.
                    `,
                },
                {
                    fens: [
                        '8/8/2p5/1N1B4/8/4B1n1/5P2/8 w - - 0 1',
                        '8/8/8/1p1B4/8/4B1n1/5P2/8 w - - 0 1',
                        '8/8/2p5/1N1B4/8/4B1n1/5P2/8 w - - 0 1',
                        '8/8/8/1N1p4/8/4B1n1/5P2/8 w - - 0 1',
                        '8/8/2p5/1N1B4/8/4B1n1/5P2/8 w - - 0 1',
                        '8/8/2p5/1N1B4/8/4B1P1/8/8 w - - 0 1',
                    ],
                    text: `
                        A pawn is the only chessman that captures differently from how it moves. It captures diagonally only one square ahead, as if it were fighting on its side with a short sword.
                        In this position, the white pawn can advance one or two squares, but it also has the opportunity to capture the black Knight. To bring about the capture, simply move the pawn diagonally one square, replacing the black Knight.
                        The black pawn has three options. It can advance a single square, but it can also capture either the white Knight or the white Bishop.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Chess Notation`,
            demo: [
                {
                    fens: ['8/8/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        Just as each piece has a name, so too does every square. In each chess diagram, you will notice that there are eight letters along the top and bottom of every board (a–h) and eight num- bers along each side (1–8). To identify any square, locate its letter and then its number.
                        For example, the square in the bottom left corner is a1. The square in the upper-right corner is h8. The square indicated is d5.
                    `,
                },
                {
                    fens: ['4r3/3b2k1/pp3p2/2pPq1pp/2P1P3/2P5/P1BB2PP/1Q4K1 w - - 0 1'],
                    text: `
                        Using the names of the squares helps us to discuss the board in a very simple, clear manner. For example, in this position, the white Queen is on b1, the black Queen is on e5, and a black Bishop is on d7. White has pawns on c3 and c4. Take a moment to locate them. As you will see, it’s very easy.
                        A numeral and period at the beginning of a notation indicates the move number. For example, in the game shown here, white’s first move was pawn e2 to e4. This is notated 1.e2-e4. You will see this type of notation starting in Chapter 8, “Opening Strategy.”
                    `,
                },
                {
                    fens: ['4r3/3b2k1/pp3p2/2pPq1pp/2P1P3/2P5/P1BB2PP/1Q4K1 w - - 0 1'],
                    text: `
                        Notation also permits us to talk about the movement of pieces. Remember, pieces are abbreviated as follows: K for King, Q for Queen, B for Bishop, N for Knight, and R for Rook (there isn’t an abbreviation for pawn). 
                    `,
                },
                {
                    fens: ['4r3/3b2k1/pp3p2/2pPq1pp/2P1P3/2P5/P1BB2PP/1Q4K1 w - - 0 1'],
                    text: `
                        For a refresher on these abbreviations, see “Pieces and Pawns at a Glance” on page 8. In this position, white has just moved the Queen from d1 to b1. In this book, I use the long form of the notation, “Qd1-b1,” but many chess players abbreviate the move with “Qb1.” As a result of white’s move, the white Queen on b1 is suddenly attacking the black pawn on b6. As you can see, it’s not very hard to find the black b6-pawn. To defend the b6-pawn, black might now play Re8-b8, moving the black Rook from the e8-square to b8.
                    `,
                },
                {
                    fens: ['4r3/3b2k1/pp3p2/2pPq1pp/2P1P3/2P5/P1BB2PP/1Q4K1 w - - 0 1'],
                    text: `
                        Captures are simply recorded with an “x.” And so in this position, if black were to move the black Queen on e5 to capture the white pawn on e4, you would write: Qe5xe4. Of course, that awful Queen move would result in losing the black Queen to the white Bishop (Bc2xe4).
                        When a move results in check, an attack on the enemy King, this is indicated with a “+” at the end of the notation. When a move results in checkmate, this is indicated with a “#” at the end of the move.
                    `,
                },
                {
                    fens: ['8/4P3/8/8/8/8/8/8 w - - 0 1'],
                    text: `
                        In this second position, white is about to promote a pawn. Promoting the e7-pawn to a Queen on e8 would be written e7-e8=Q or simply e8=Q.
                    `,
                },
            ],
        },
        {
            lessonHeader: `Protect Your Pieces`,
            demo: [
                {
                    fens: [
                        'rnbqkbnr/pp2pppp/2p5/3p4/3PP3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3Pp3/8/PPPN1PPP/R1BQKBNR w KQkq - 0 1',
                        'rnbqkbnr/pp2pppp/2p5/8/3PN3/8/PPP2PPP/R1BQKBNR w KQkq - 0 1'
                    ],
                    text: `
                        In this example, recapturing is illustrated with pawns. Black is about to move the pawn on d5 to capture the white pawn on e4. Not to fear. As long as white is alert, black will not “win” the pawn. Rather, white can simply move the Knight to e4 (following the arrow) to recapture the pawn.
                    `,
                },
                {
                    fens: [
                        '1rb2rk1/ppq1bppp/3p1n2/nPp1p3/2B1P3/P1PP1N1P/4QPP1/RNB2RK1 w Q - 0 1',
                        '1rb2rk1/ppq1bppp/3p1n2/1Pp1p3/2n1P3/P1PP1N1P/4QPP1/RNB2RK1 w Q - 0 1',
                        '1rb2rk1/ppq1bppp/3p1n2/1Pp1p3/2P1P3/P1P2N1P/4QPP1/RNB2RK1 w Q - 0 1'
                    ],
                    text: `
                        In this position, the situation is more complicated because more pieces have moved, but the idea of recapturing is the same. Black moves the Knight on a5 to capture the white Bishop on c4. White could respond with many moves, but white should recapture with the white pawn on d3. If white fails to recapture, black will simply move the Knight back to safety and will have taken the white Bishop without losing a thing. It may be hard to believe, but good players will almost always win the game if you give them the advantage of an extra Knight or Bishop.
                    `,
                },
            ],
        }
    ],
}