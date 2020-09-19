export default (str) => {
  const board = [];
  for (let i = 0; i < 8; i += 1) {
    const rank = [];
    for (let j = 0; j < 8; j += 1) {
      rank.push(str[(i * 8) + j]);
    }
    board.push(rank);
  }
  return board;
};
