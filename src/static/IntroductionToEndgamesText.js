import CreateBoardStringFromObject from '@/utils/CreateBoardStringFromObject';

export default {
    header: 'An Introduction to Endgames',
    body: `
        If both sides have played with reasonable care,
        the result at the end of the game is often what appears at first to be a very simple position.
        There are just one or two pieces on the board and perhaps just a handful of pawns. As you will see on this page,
        it is possible to gain victory with just a small advantage. 
    `,
    items: [
        {
            header: 'King and Pawn',
            body: `
                King and pawn endgames seem simple but can be quite complex.
                This section will focus on several key positions that you are likely to experience.
                Some involve offense, trying to Queen a single remaining pawn. Others involve defense,
                trying to prevent yout opponent from promoting a pawn to a Queen.
                Mastery of these simple position will greatly aid your game.
            `,
            buttons: [
                {
                    buttonText: 'THE MAGIC POSITION',
                    demo: [
                        {
                            staticBoard: true,
                            moves: [
                                CreateBoardStringFromObject({
                                    'k': [4],
                                    'P': [20],
                                    'K': [28],
                                }),
                            ],
                            text: `
                                The first position is worth remembering because, no matter whose move it is,
                                white will successfully be able to promote the pawn. As you can see,
                                the white King is in front of the pawn. That's the key! In this position,
                                if it is black's move, the black King must move to either d8 or f8. Either way,
                                the poor King must leave the square on which the white pawn will be promoted.
                                White will then be able to move the King forward
                                to gain control over the Queening square.
                            `,
                        },
                        {
                            staticBoard: false,
                            moves: [
                                CreateBoardStringFromObject({
                                    'k': [4],
                                    'P': [20],
                                    'K': [28],
                                }),
                                CreateBoardStringFromObject({
                                    'k': [3],
                                    'P': [20],
                                    'K': [28],
                                }),
                                CreateBoardStringFromObject({
                                    'k': [3],
                                    'P': [20],
                                    'K': [28],
                                }),
                            ],
                            text: `
                                In this position, after just one move, the situation has become completely clear.
                                White has complete control over the key e8-square
                                as well as the e6 and e7 squares through which the white pawn will now travel.
                                White will successfully promote the pawn into a Queen
                                and then proceed with a King and Queen to deliver the checkmate.
                            `,
                        },
                    ],
                }
            ],
        },
        {
            header: 'Rook and Pawn',
        },
        {
            header: 'Bishop and Pawn',
        },
        {
            header: 'Knight and Pawn',
        },
        {
            header: 'Queen and Pawn',
        },
    ],
}