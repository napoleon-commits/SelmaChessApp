import ReplaceString from '@/utils/ReplaceString';
import EmptyChessBoardString from '@/static/EmptyChessBoardString';
import StartingPositionString from '@/static/StartingPositionString';
import CreateBoardStringFromObject from '@/utils/CreateBoardStringFromObject';

export default {
    header: 'Attacking the King',
    body: `
        The most exciting phase of the game of chess is the attacks leading to checkmate
        or to gain the substantial material. On this page,
        you will be able to review a number of different patterns for attacking an opponent.
        By playing through these patterns, you will learn to recognize such possibilities in your own game --
        either how to bring about the attacks or how to stop them.
    `,
    items: [
        {
            header: 'Smothered Mate',
            body: `
                The smothered checkmate is one of the prettiest in chess. A lone Knight,
                with the help of the enemy forces, checkmates the King.
            `,
            buttons: [
                {
                    buttonText: 'The Smothered Mate in Action',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),30,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),13,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,6,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),13,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,6,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),41,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString, 0, 'r',
                                            )
                                        ,7,'k',
                                    ),14,'p',
                                ),15,'p',
                            ),23,'N',
                        ),6,'Q',),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            EmptyChessBoardString, 6, 'r',
                                        )
                                    ,7,'k',
                                ),14,'p',
                            ),15,'p',
                        ),23,'N'),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            EmptyChessBoardString, 6, 'r',
                                        )
                                    ,7,'k',
                                ),14,'p',
                            ),15,'p',
                        ),13,'N'),
                    ],
                }
            ],
        },
        {
            header: 'Back Rank Mate',
            body: `
                The back rank mate is both simple and elegant. The white Rook checks the King along the back rank,
                and black's own pawn prevent the King from escaping. In practice,
                the back rank mate can be easy or surprisingly difficult.
            `,
            buttons: [
                {
                    buttonText: 'AN EASY BACK RANK MATE',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),5,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),44,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),5,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),12,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),6,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),12,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,3,'r'
                                                    ),6,'k'
                                                ),13,'p'
                                            ),14,'p'
                                        ),15,'p'
                                    ),27,'q'
                                ),4,'Q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    EmptyChessBoardString,4,'r'
                                                ),6,'k'
                                            ),13,'p'
                                        ),14,'p'
                                    ),15,'p'
                                ),27,'q'
                            ),60,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                EmptyChessBoardString,4,'R'
                                            ),
                                            6,'k'
                                        ),13,'p'
                                    ),14,'p'
                                ),15,'p'
                            ),27,'q'
                        ),
                    ],
                },
                {
                    buttonText: 'A MORE DIFFICULT MATE',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                EmptyChessBoardString,5,'r'
                                                            ),6,'k'
                                                        ),8,'R'
                                                    ),13,'p'
                                                ),14,'p'
                                            ),15,'p'
                                        ),22,'r'
                                    ),43,'q'
                                ),53,'Q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            EmptyChessBoardString,5,'r'
                                                        ),6,'k'
                                                    ),8,'R'
                                                ),14,'p'
                                            ),15,'p'
                                        ),22,'r'
                                    ),43,'q'
                                ),13,'Q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,13,'r'
                                                    ),6,'k'
                                                ),8,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,13,'r'
                                                    ),6,'k'
                                                ),0,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        EmptyChessBoardString,5,'r'
                                                    ),6,'k'
                                                ),0,'R'
                                            ),14,'p'
                                        ),15,'p'
                                    ),22,'r'
                                ),43,'q'
                            ),61,'R'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    EmptyChessBoardString,5,'R'
                                                ),6,'k'
                                            ),0,'R'
                                        ),14,'p'
                                    ),15,'p'
                                ),22,'r'
                            ),43,'q'
                        ),
                    ],
                }
            ],
        },
        {
            header: 'Gueridon Mate',
            body: `
                Here is another very pleasing checkmate in which the King's own forces block its escape.
            `,
            buttons: [
                {
                    buttonText: 'The Gueridon Mate in Action',
                    moves: [
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        StartingPositionString,1,'.'
                                                                    ),5,'.'
                                                                ),11,'n'
                                                            ),12,'b'
                                                        ),19,'p'
                                                    ),62,'.'
                                                ),61,'.'
                                            ),52,'.'
                                        ),51,'.'
                                    ),35,'N'
                                ),36,'P'
                            ),34,'B'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        StartingPositionString,1,'.'
                                                                    ),5,'.'
                                                                ),11,'n'
                                                            ),12,'b'
                                                        ),19,'p'
                                                    ),62,'.'
                                                ),61,'.'
                                            ),52,'.'
                                        ),51,'.'
                                    ),35,'N'
                                ),36,'P'
                            ),13,'B'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            StartingPositionString,1,'.'
                                                                        ),5,'.'
                                                                    ),11,'n'
                                                                ),12,'b'
                                                            ),19,'p'
                                                        ),62,'.'
                                                    ),61,'.'
                                                ),52,'.'
                                            ),51,'.'
                                        ),35,'N'
                                    ),36,'P'
                                ),13,'k'
                            ),4,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                StartingPositionString,1,'.'
                                                                            ),5,'.'
                                                                        ),11,'n'
                                                                    ),12,'b'
                                                                ),19,'p'
                                                            ),62,'.'
                                                        ),61,'.'
                                                    ),52,'.'
                                                ),51,'.'
                                            ),20,'N'
                                        ),36,'P'
                                    ),13,'k'
                                ),4,'.'
                            ),35,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                StartingPositionString,1,'.'
                                                                            ),5,'.'
                                                                        ),11,'n'
                                                                    ),12,'b'
                                                                ),19,'p'
                                                            ),62,'.'
                                                        ),61,'.'
                                                    ),52,'.'
                                                ),51,'.'
                                            ),20,'k'
                                        ),36,'P'
                                    ),13,'.'
                                ),4,'.'
                            ),35,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        StartingPositionString,1,'.'
                                                                                    ),5,'.'
                                                                                ),11,'n'
                                                                            ),12,'b'
                                                                        ),19,'p'
                                                                    ),62,'.'
                                                                ),61,'.'
                                                            ),52,'.'
                                                        ),51,'.'
                                                    ),20,'k'
                                                ),36,'P'
                                            ),13,'.'
                                        ),4,'.'
                                    ),35,'.'
                                ),27,'Q'
                            ),59,'.'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        ReplaceString(
                                                                                            StartingPositionString,1,'.'
                                                                                        ),5,'.'
                                                                                    ),11,'n'
                                                                                ),12,'b'
                                                                            ),19,'p'
                                                                        ),62,'.'
                                                                    ),61,'.'
                                                                ),52,'.'
                                                            ),51,'.'
                                                        ),20,'.'
                                                    ),36,'P'
                                                ),13,'.'
                                            ),4,'.'
                                        ),35,'.'
                                    ),27,'Q'
                                ),59,'.'
                            ),21,'k'
                        ),
                        ReplaceString(
                            ReplaceString(
                                ReplaceString(
                                    ReplaceString(
                                        ReplaceString(
                                            ReplaceString(
                                                ReplaceString(
                                                    ReplaceString(
                                                        ReplaceString(
                                                            ReplaceString(
                                                                ReplaceString(
                                                                    ReplaceString(
                                                                        ReplaceString(
                                                                            ReplaceString(
                                                                                ReplaceString(
                                                                                    ReplaceString(
                                                                                        ReplaceString(
                                                                                            ReplaceString(
                                                                                                StartingPositionString,1,'.'
                                                                                            ),5,'.'
                                                                                        ),11,'n'
                                                                                    ),12,'b'
                                                                                ),19,'p'
                                                                            ),62,'.'
                                                                        ),61,'.'
                                                                    ),52,'.'
                                                                ),51,'.'
                                                            ),20,'.'
                                                        ),36,'P'
                                                    ),13,'.'
                                                ),4,'.'
                                            ),35,'.'
                                        ),27,'.'
                                    ),59,'.'
                                ),21,'k'
                            ),29,'Q'
                        ),
                    ],
                }
            ]
        },
        {
            header: `Greco's Mate`,
            body: `
                Greco's mate is very much like the back rank mate, but on the side of the board instead.
            `,
            buttons: [
                {
                    buttonText: `Greco's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [0,5],
                            'k': [7],
                            'p': [8,9,14,15,18,35],
                            'n': [10,51],
                            'q': [17],
                            'b': [26],
                            'N': [28,40],
                            'B': [41],
                            'Q': [45],
                            'P': [48,49,50,53,54,55],
                            'R': [56,61],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,5],
                            'k': [7],
                            'p': [8,9,14,15,18,35],
                            'n': [10,51],
                            'q': [17],
                            'b': [26],
                            'N': [22,40],
                            'B': [41],
                            'Q': [45],
                            'P': [48,49,50,53,54,55],
                            'R': [56,61],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,5],
                            'k': [7],
                            'p': [8,9,14,22,18,35],
                            'n': [10,51],
                            'q': [17],
                            'b': [26],
                            'N': [40],
                            'B': [41],
                            'Q': [45],
                            'P': [48,49,50,53,54,55],
                            'R': [56,61],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,5],
                            'k': [7],
                            'p': [8,9,14,22,18,35],
                            'n': [10,51],
                            'q': [17],
                            'b': [26],
                            'N': [40],
                            'B': [41],
                            'Q': [47],
                            'P': [48,49,50,53,54,55],
                            'R': [56,61],
                            'K': [62],
                        }),
                    ],
                },
            ],
        },
        {
            header: 'Epaulette Mate',
            body: `
                A Rook or a Queen provides the final check in this pleasing checkmate.
            `,
            buttons: [
                {
                    buttonText: 'Epaulette Mate in Action',
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [5,7],
                            'k': [6],
                            'p': [8,15,14,13,25,35],
                            'q': [24],
                            'n': [21],
                            'Q': [12],
                            'B': [41],
                            'R': [43,61],
                            'P': [48,50,53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5,7],
                            'k': [6],
                            'p': [8,15,14,13,25,35],
                            'q': [24],
                            'Q': [21],
                            'B': [41],
                            'R': [43,61],
                            'P': [48,50,53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5,7],
                            'k': [6],
                            'p': [8,15,21,13,25,35],
                            'q': [24],
                            'B': [41],
                            'R': [43,61],
                            'P': [48,50,53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5,7],
                            'k': [6],
                            'p': [8,15,21,13,25,35],
                            'q': [24],
                            'B': [41],
                            'R': [46,61],
                            'P': [48,50,53,54,55],
                            'K': [62],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Anastasia's Mate`,
            body: `
                Anastasia's checkmate is very similar to a back rank mate
                except that it can occur on any side of the board.
            `,
            buttons: [
                {
                    buttonText: `Anastasia's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [6],
                            'p': [8,17,10,13,14,15],
                            'b': [18],
                            'q': [32],
                            'N': [29],
                            'P': [37,46,48,49,50],
                            'Q': [51],
                            'K': [57],
                            'R': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [6],
                            'p': [8,17,10,13,14,15],
                            'b': [18],
                            'q': [32],
                            'N': [12],
                            'P': [37,46,48,49,50],
                            'Q': [51],
                            'K': [57],
                            'R': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [7],
                            'p': [8,17,10,13,14,15],
                            'b': [18],
                            'q': [32],
                            'N': [12],
                            'P': [37,46,48,49,50],
                            'Q': [51],
                            'K': [57],
                            'R': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [7],
                            'p': [8,17,10,13,14,],
                            'b': [18],
                            'q': [32],
                            'N': [12],
                            'P': [37,46,48,49,50],
                            'Q': [51],
                            'K': [57],
                            'R': [15],
                        }),
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [15],
                            'p': [8,17,10,13,14,],
                            'b': [18],
                            'q': [32],
                            'N': [12],
                            'P': [37,46,48,49,50],
                            'Q': [51],
                            'K': [57],
                        }),
                        CreateBoardStringFromObject({
                            'r': [3,5],
                            'k': [15],
                            'p': [8,17,10,13,14,],
                            'b': [18],
                            'q': [32],
                            'N': [12],
                            'P': [37,46,48,49,50],
                            'Q': [55],
                            'K': [57],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Boden's Mate`,
            body: `
                In 1853, an Englishman named Samuel Boden was the first to uncork this fascinatin finish.
            `,
            buttons: [
                {
                    buttonText: `Boden's Mate at a Glance`,
                    moves: [
                        CreateBoardStringFromObject({
                            'k': [2],
                            'r': [3],
                            'p': [8,9,18],
                            'n': [11],
                            'Q': [45],
                            'B': [55,61],
                        }),
                        CreateBoardStringFromObject({
                            'k': [2],
                            'r': [3],
                            'p': [8,9],
                            'n': [11],
                            'Q': [18],
                            'B': [55,61],
                        }),
                        CreateBoardStringFromObject({
                            'k': [2],
                            'r': [3],
                            'p': [8,18],
                            'n': [11],
                            'B': [55,61],
                        }),
                        CreateBoardStringFromObject({
                            'k': [2],
                            'r': [3],
                            'p': [8,18],
                            'n': [11],
                            'B': [55,16],
                        }),
                    ],
                },
                {
                    buttonText: `Boden's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'b': [1,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [8,9,20,13,14,15],
                            'q': [18],
                            'n': [11,21],
                            'N': [25,52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [43,55],
                            'Q': [45],
                            'R': [59,60],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'b': [1,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [9,20,13,14,15],
                            'q': [18],
                            'n': [11,21],
                            'N': [8,52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [43,55],
                            'Q': [45],
                            'R': [59,60],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'b': [8,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [9,20,13,14,15],
                            'q': [18],
                            'n': [11,21],
                            'N': [52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [43,55],
                            'Q': [45],
                            'R': [59,60],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'b': [8,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [9,20,13,14,15],
                            'n': [11,21],
                            'N': [52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [43,55],
                            'Q': [18],
                            'R': [59,60],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'b': [8,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [18,20,13,14,15],
                            'n': [11,21],
                            'N': [52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [43,55],
                            'R': [59,60],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'b': [8,31],
                            'k': [2],
                            'r': [3,7],
                            'p': [18,20,13,14,15],
                            'n': [11,21],
                            'N': [52],
                            'P': [32,49,50,53,54,(55-8)],
                            'B': [16,55],
                            'R': [59,60],
                            'K': [63],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Blackburne's Mate`,
            body: `
                Joseph Henry Blackburne, a 19th-century English master who was nicknamed the Black Death,
                discovered this nice checkmate with two Bishops.
            `,
            buttons: [
                {
                    buttonText: `Blackburne's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [13,22,31],
                            'N': [30],
                            'B': [43,49],
                            'Q': [59],
                            'P': [53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [13,22],
                            'N': [30],
                            'B': [43,49],
                            'Q': [31],
                            'P': [53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [13,31],
                            'N': [30],
                            'B': [43,49],
                            'P': [53,54,55],
                            'K': [62],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [13,31],
                            'N': [30],
                            'B': [15,49],
                            'P': [53,54,55],
                            'K': [62],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Lolli's Mate`,
            body: `
                Named after an 18th-century Italian chess enthusiast,
                Lolli's mate is a familiar theme to beginning chess players.
            `,
            buttons: [
                {
                    buttonText: `Lolli's Mate at a Glance`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15,14,13],
                            'P': [29],
                            'Q': [30],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15,14,13],
                            'P': [21],
                            'Q': [30],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15,22,13],
                            'P': [21],
                            'Q': [30],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15,22,13],
                            'P': [21],
                            'Q': [23],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'p': [15,22,13],
                            'P': [21],
                            'Q': [23],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'p': [15,22,13],
                            'P': [21],
                            'Q': [14],
                        }),
                    ],
                },
                {
                    buttonText: `Lolli's Mate in Action (1)`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [6,58],
                            'k': [7],
                            'q': [10],
                            'p': [13,22,15],
                            'P': [21,54,55],
                            'R': [45,61],
                            'Q': [23],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [6,58],
                            'k': [7],
                            'q': [10],
                            'p': [13,22,],
                            'P': [21,54,55],
                            'R': [45,61],
                            'Q': [15],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [6,58],
                            'k': [15],
                            'q': [10],
                            'p': [13,22,],
                            'P': [21,54,55],
                            'R': [45,61],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [6,58],
                            'k': [15],
                            'q': [10],
                            'p': [13,22,],
                            'P': [21,54,55],
                            'R': [47,61],
                            'K': [63],
                        }),
                    ],
                },
                {
                    buttonText: `Lolli's Mate in Action (2)`,
                    moves: [
                        CreateBoardStringFromObject({
                            'q': [5],
                            'r': [6],
                            'k': [7],
                            'p': [8,9,26,13,22,15],
                            'n': [18],
                            'P': [21,48,49,42,55,54],
                            'Q': [23],
                            'N': [45],
                            'R': [61],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'q': [5],
                            'r': [6],
                            'k': [7],
                            'p': [8,9,26,13,22,15],
                            'n': [18],
                            'P': [21,48,49,42,55,54],
                            'Q': [23],
                            'N': [30],
                            'R': [61],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'q': [23],
                            'r': [6],
                            'k': [7],
                            'p': [8,9,26,13,22,15],
                            'n': [18],
                            'P': [21,48,49,42,55,54],
                            'N': [30],
                            'R': [61],
                            'K': [63],
                        }),
                        CreateBoardStringFromObject({
                            'q': [23],
                            'r': [6],
                            'k': [7],
                            'p': [8,9,26,22,15],
                            'n': [18],
                            'P': [21,48,49,42,55,54],
                            'N': [13],
                            'R': [61],
                            'K': [63],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Pillsbury's Mate`,
            body: `
                This common checkmate honors Harry Nelson Pillsbury, a great American player of the late 19th-century.
            `,
            buttons: [
                {
                    buttonText: `Pillsbury's Mate at a Glance`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15,14],
                            'R': [62],
                            'B': [49]
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'p': [15],
                            'R': [14],
                            'B': [49]
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'p': [15],
                            'R': [14],
                            'B': [49]
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'p': [15],
                            'R': [62],
                            'B': [49]
                        }),
                        CreateBoardStringFromObject({
                            'r': [21],
                            'k': [7],
                            'p': [15],
                            'R': [62],
                            'B': [49]
                        }),
                        CreateBoardStringFromObject({
                            'k': [7],
                            'p': [15],
                            'R': [62],
                            'B': [21]
                        }),
                    ],
                },
                {
                    buttonText: `Pillsbury's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,14,15],
                            'n': [18,(19+24)],
                            'k': [6],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [62,56]
                        }),
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,15],
                            'n': [18,(19+24)],
                            'k': [6],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [14,56]
                        }),
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,15],
                            'n': [18,(19+24)],
                            'k': [7],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [14,56]
                        }),
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,15],
                            'n': [18,(19+24)],
                            'k': [7],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [6,56]
                        }),
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,15],
                            'n': [18,(19+24)],
                            'k': [6],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [56]
                        }),
                        CreateBoardStringFromObject({
                            'q': [4],
                            'r': [5,12],
                            'p': [16,9,10,19,13,15],
                            'n': [18,(19+24)],
                            'k': [6],
                            'P': [40,36,45,(45+8),47],
                            'B': [49],
                            'K': [55],
                            'R': [62]
                        }),
                    ],
                }
            ],
        },
        {
            header: `Domiano's Mate`,
            body: `
                Pedro Domiano discovered this checmate in 1512.
            `,
            buttons: [
                {
                    buttonText: `Domiano's Mate at a Glance`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [58],
                            'R': [63]
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [58],
                            'R': [7]
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [58],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [7],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [5],
                            'k': [6],
                            'q': [8],
                            'p': [14,19,(19+16-1),(19+16-1+7),],
                            'P': [22,42,49],
                            'K': [57],
                            'Q': [15],
                        }),
                    ],
                },
                {
                    buttonText: `Domiano's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,15,36],
                            'b': [43],
                            'q': [12],
                            'P': [31,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,63],
                            'N': [39],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,15,36],
                            'b': [43],
                            'q': [12],
                            'P': [31,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,63],
                            'N': [22],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,22,36],
                            'b': [43],
                            'q': [12],
                            'P': [31,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59,7],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [59],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                            'R': [7],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [58],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [7],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [63],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [6],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [15],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [5],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [15],
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,8],
                            'k': [5],
                            'p': [9,18,21,14,36],
                            'b': [43],
                            'q': [12],
                            'P': [22,37,46,48,49],
                            'K': [56],
                            'Q': [7],
                        }),
                    ],
                }
            ],
        },
        {
            header: `Legal's Mate`,
            body: `
                Legal's mate usually only occurs against beginners in the opening.
                Black has already broken several rules in this position.
                White is able to punish black's poor development with a spectacular sacrifice.
            `,
            buttons: [
                {
                    buttonText: `Legal's Mate in Action`,
                    moves: [
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(5+33)],
                            'q': [3],
                            'k': [4],
                            'p': [8,9,10,19,28,13,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,(58-24)],
                            'Q': [59],
                            'K': [60],
                            'N': [42,45]
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(5+33)],
                            'q': [3],
                            'k': [4],
                            'p': [8,9,10,19,13,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,(58-24)],
                            'Q': [59],
                            'K': [60],
                            'N': [42,(45-1-16)]
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(59)],
                            'q': [3],
                            'k': [4],
                            'p': [8,9,10,19,13,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,(58-24)],
                            'K': [60],
                            'N': [42,(45-1-16)]
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(59)],
                            'q': [3],
                            'k': [4],
                            'p': [8,9,10,19,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,13],
                            'K': [60],
                            'N': [42,(45-1-16)]
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(59)],
                            'q': [3],
                            'k': [12],
                            'p': [8,9,10,19,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,13],
                            'K': [60],
                            'N': [42,(45-1-16)]
                        }),
                        CreateBoardStringFromObject({
                            'r': [0,7],
                            'n': [1,6],
                            'b': [5,(59)],
                            'q': [3],
                            'k': [12],
                            'p': [8,9,10,19,22,15],
                            'P': [48,49,50,51,(52-16),53,54,55],
                            'R': [63, (63-7)],
                            'B': [58,13],
                            'K': [60],
                            'N': [(42+1-16),(45-1-16)]
                        }),
                    ],
                },
            ],
        },
    ],
}