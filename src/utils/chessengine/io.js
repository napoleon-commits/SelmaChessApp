import { PIECES, PROMOTED, BOOL, FileChar, RankChar, TOSQ, FilesBrd, RanksBrd, FROMSQ, PieceKnight, PieceRookQueen, PieceBishopQueen } from './def'

export function PrSq (sq) {
  return (FileChar[FilesBrd[sq]] + RankChar[RanksBrd[sq]])
}

export function PrMove (move) {
  let MvStr

  const ff = FilesBrd[FROMSQ(move)]
  const rf = RanksBrd[FROMSQ(move)]
  const ft = FilesBrd[TOSQ(move)]
  const rt = RanksBrd[TOSQ(move)]

  MvStr = FileChar[ff] + RankChar[rf] + FileChar[ft] + RankChar[rt]

  const promoted = PROMOTED(move)
  if (promoted !== PIECES.EMPTY) {
    let pchar = 'q'
    if (PieceKnight[promoted] === BOOL.TRUE) {
      pchar = 'n'
    } else if (
      PieceRookQueen[promoted] === BOOL.TRUE &&
        PieceBishopQueen[promoted] === BOOL.FALSE
    ) {
      pchar = 'r'
    } else if (
      PieceRookQueen[promoted] === BOOL.FALSE &&
        PieceBishopQueen[promoted] === BOOL.TRUE
    ) {
      pchar = 'b'
    }
    MvStr += pchar
  }
  return MvStr
}
