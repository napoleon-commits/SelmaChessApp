export const reverseBoard = (board) => {
  const s0 = [];
  for (let i = 0; i < 8; i += 1) {
    const t0 = [];
    for (let j = 0; j < 8; j += 1) {
      t0.push(board[7 - i][7 - j]);
    }
    s0.push(t0);
  }
  return s0;
};

export const hasBoardChanged = (oldBoard, newBoard) => {
  let changed = false;
  for (let i = 0; i < oldBoard.length; i += 1) {
    for (let j = 0; j < oldBoard[i].length; j += 1) {
      if (oldBoard[i][j] !== newBoard[i][j]) {
        changed = true;
      }
    }
  }
  return changed;
};
