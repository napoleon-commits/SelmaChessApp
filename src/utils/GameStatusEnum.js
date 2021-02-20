export default {
    0: (winningColor) => `Checkmate, ${winningColor} wins!`,
    1: "Fifty-Move Draw",
    2: "Threefold Draw",
    3: "Draw by Stalemate",
    4: "Draw by Insufficient Material",
    5: "Draw by Mutual Agreement",
    6: (resigningColor) => `Game Over. ${resigningColor} resigns.`,
};
