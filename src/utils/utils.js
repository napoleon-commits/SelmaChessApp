export const reverseBoard = (board) => {
    const s0 = [];
    for(let i = 0; i < 8; i+=1){
        s0.push(board[i].reverse());
    }
    s0.reverse();
    return s0;
}