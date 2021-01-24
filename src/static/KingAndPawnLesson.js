export default {
    demo: [
        {
            fens: [
                '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1'
            ],
            text: `
                The first position is worth remembering because, no matter whose move it is,
                white will successfully be able to promote the pawn. As you can see,
                the white King is in front of the pawn. That's the key! In this position, if it is black's move,
                the black King must move to either d8 or to f8. Either way,
                the poor King must leave the square on which the white pawn will be promoted.
                White will then be able to move the King forward to gain control over the Queening square.
            `,
        },
        {
            fens: [
                '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
                '3k4/8/4K3/4P3/8/8/8/8 w - - 0 1',
                '3k4/5K2/8/4P3/8/8/8/8 w - - 0 1',
            ],
            text: `
                In this position, after just one move, the situation has become completely clear.
                White has complete control over the key e8-square
                as well as the e6 and e7 squares through which the white pawn will now travel.
                White will successfully promote the pawn into a Queen
                and then proceed with and King and Queen to deliver the checkmate
                as shown on the 'Elementary Checkmates' page.
            `,
        },
        {
            fens: [
                '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
            ],
            text: `
                That was easy, bt what if white has to move first from the Magic position. It's still a win for white.
                From this position, white begins by sliding the King to d6 or f6, making way to push the pawn forward.
                Whichever direction the white King selects, black will move in the same direction,
                attempting to prevent the white King from moving forward
                and capturing easy control over the e8-Queening square.
            `,
        },
        {
            fens: [
                '4k3/8/4K3/4P3/8/8/8/8 w - - 0 1',
                '4k3/8/3K4/4P3/8/8/8/8 w - - 0 1',
                '3k4/8/3K4/4P3/8/8/8/8 w - - 0 1',
                '3k4/8/3KP3/8/8/8/8/8 w - - 0 1',
            ],
            text: `
                Having made room for the advance of the pawn, white pushes it forwad.
                Black has no choice but to defend the Queening square by occupying it.
            `,
        },
        {
            fens: [
                '3k4/8/3KP3/8/8/8/8/8 w - - 0 1',
                '4k3/8/3KP3/8/8/8/8/8 w - - 0 1',
                '4k3/4P3/3K4/8/8/8/8/8 w - - 0 1',
            ],
            text: `
                Now, white again pushes the e6-pawn to e7.
                Note the key principle the pawn advances WITHOUT giving chek to the black King.
                The King has only on leagal move, Ke8-f7.
            `,
        },
        {
            fens: [
                '4k3/4P3/3K4/8/8/8/8/8 w - - 0 1',
                '8/4Pk2/3K4/8/8/8/8/8 w - - 0 1',
            ],
            text: `
                White has a choice, but only one correct move.
                Queening the pawn would be a significant error because the black Kf7 would simply capture it!
                The key move is to patiently move the white King to d7 where it controls the Queening square
                and prepares the successful advance of the pawn to e8.
            `,
        }
    ],
};