/* eslint no-bitwise: ["error", { "allow": ["|=","^","^=","&"] }] */

import { COLOURS, FR2SQ, GameBoard, CASTLEBIT, FILES, BOOL, PieceKing, KiDir, SQUARES, PieceCol, PieceBishopQueen, PIECES, BiDir, PieceRookQueen, PieceKnight, KnDir, RkDir, RANKS, SQ120, BRD_SQ_NUM, PieceVal, CastleKeys, SideKey, PieceKeys } from './def'

function PCEINDEX (pce, pceNum) {
  return ((pce * 10) + pceNum)
}

function GeneratePosKey () {
  let sq = 0
  let finalKey = 0
  let piece = PIECES.EMPTY

  for (sq = 0; sq < BRD_SQ_NUM; sq += 1) {
    piece = GameBoard.pieces[sq]
    if (piece !== PIECES.EMPTY && piece !== SQUARES.OFFBOARD) {
      finalKey ^= PieceKeys[(piece * 120) + sq]
    }
  }

  if (GameBoard.side === COLOURS.WHITE) {
    finalKey ^= SideKey[0]
  }

  if (GameBoard.enPas !== SQUARES.NO_SQ) {
    finalKey ^= PieceKeys[GameBoard.enPas]
  }

  finalKey ^= CastleKeys[GameBoard.castlePerm]

  return finalKey
}

function UpdateListsMaterial () {
  let piece
  let sq
  let index
  let colour

  for (index = 0; index < 14 * 120; index += 1) {
    GameBoard.pList[index] = PIECES.EMPTY
  }

  for (index = 0; index < 2; index += 1) {
    GameBoard.material[index] = 0
  }

  for (index = 0; index < 13; index += 1) {
    GameBoard.pceNum[index] = 0
  }

  for (index = 0; index < 64; index += 1) {
    sq = SQ120(index)
    piece = GameBoard.pieces[sq]
    if (piece !== PIECES.EMPTY) {
      colour = PieceCol[piece]

      GameBoard.material[colour] += PieceVal[piece]

      GameBoard.pList[PCEINDEX(piece, GameBoard.pceNum[piece])] = sq
      GameBoard.pceNum[piece] += 1
    }
  }
}

function ResetBoard () {
  let index = 0

  for (index = 0; index < BRD_SQ_NUM; index += 1) {
    GameBoard.pieces[index] = SQUARES.OFFBOARD
  }

  for (index = 0; index < 64; index += 1) {
    GameBoard.pieces[SQ120(index)] = PIECES.EMPTY
  }

  GameBoard.side = COLOURS.BOTH
  GameBoard.enPas = SQUARES.NO_SQ
  GameBoard.fiftyMove = 0
  GameBoard.ply = 0
  GameBoard.hisPly = 0
  GameBoard.castlePerm = 0
  GameBoard.posKey = 0
  GameBoard.moveListStart[GameBoard.ply] = 0
}

export function SqAttacked (sq, side) {
  let pce
  let tSq
  let index
  let dir

  if (side === COLOURS.WHITE) {
    if (GameBoard.pieces[sq - 11] === PIECES.wP || GameBoard.pieces[sq - 9] === PIECES.wP) {
      return BOOL.TRUE
    }
  } else if (GameBoard.pieces[sq + 11] === PIECES.bP || GameBoard.pieces[sq + 9] === PIECES.bP) {
    return BOOL.TRUE
  }

  for (index = 0; index < 8; index += 1) {
    pce = GameBoard.pieces[sq + KnDir[index]]
    if (pce !== SQUARES.OFFBOARD && PieceCol[pce] === side && PieceKnight[pce] === BOOL.TRUE) {
      return BOOL.TRUE
    }
  }

  for (index = 0; index < 4; index += 1) {
    dir = RkDir[index]
    tSq = sq + dir
    pce = GameBoard.pieces[tSq]
    while (pce !== SQUARES.OFFBOARD) {
      if (pce !== PIECES.EMPTY) {
        if (PieceRookQueen[pce] === BOOL.TRUE && PieceCol[pce] === side) {
          return BOOL.TRUE
        }
        break
      }
      tSq += dir
      pce = GameBoard.pieces[tSq]
    }
  }

  for (index = 0; index < 4; index += 1) {
    dir = BiDir[index]
    tSq = sq + dir
    pce = GameBoard.pieces[tSq]
    while (pce !== SQUARES.OFFBOARD) {
      if (pce !== PIECES.EMPTY) {
        if (PieceBishopQueen[pce] === BOOL.TRUE && PieceCol[pce] === side) {
          return BOOL.TRUE
        }
        break
      }
      tSq += dir
      pce = GameBoard.pieces[tSq]
    }
  }

  for (index = 0; index < 8; index += 1) {
    pce = GameBoard.pieces[sq + KiDir[index]]
    if (pce !== SQUARES.OFFBOARD && PieceCol[pce] === side && PieceKing[pce] === BOOL.TRUE) {
      return BOOL.TRUE
    }
  }

  return BOOL.FALSE
}

// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

export function ParseFen (fen) {
  ResetBoard()

  let rank = RANKS.RANK_8
  let file = FILES.FILE_A
  let piece = 0
  let count = 0
  let i = 0
  let sq120 = 0
  let fenCnt = 0 // fen[fenCnt]

  while ((rank >= RANKS.RANK_1) && fenCnt < fen.length) {
    count = 1
    switch (fen[fenCnt]) {
      case 'p': piece = PIECES.bP; break
      case 'r': piece = PIECES.bR; break
      case 'n': piece = PIECES.bN; break
      case 'b': piece = PIECES.bB; break
      case 'k': piece = PIECES.bK; break
      case 'q': piece = PIECES.bQ; break
      case 'P': piece = PIECES.wP; break
      case 'R': piece = PIECES.wR; break
      case 'N': piece = PIECES.wN; break
      case 'B': piece = PIECES.wB; break
      case 'K': piece = PIECES.wK; break
      case 'Q': piece = PIECES.wQ; break

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
        piece = PIECES.EMPTY
        count = fen[fenCnt].charCodeAt() - '0'.charCodeAt()
        break

      case '/':
      case ' ':
        rank -= 1
        file = FILES.FILE_A
        fenCnt += 1
        // eslint-disable-next-line
continue;
      default:
        //   eslint-disable-next-line
console.log('FEN error');
        return
    }

    for (i = 0; i < count; i += 1) {
      sq120 = FR2SQ(file, rank)
      GameBoard.pieces[sq120] = piece
      file += 1
    }
    fenCnt += 1
  } // while loop end

  // rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
  GameBoard.side = (fen[fenCnt] === 'w') ? COLOURS.WHITE : COLOURS.BLACK
  fenCnt += 2

  for (i = 0; i < 4; i += 1) {
    if (fen[fenCnt] === ' ') {
      break
    }
    switch (fen[fenCnt]) {
      case 'K': GameBoard.castlePerm |= CASTLEBIT.WKCA; break
      case 'Q': GameBoard.castlePerm |= CASTLEBIT.WQCA; break
      case 'k': GameBoard.castlePerm |= CASTLEBIT.BKCA; break
      case 'q': GameBoard.castlePerm |= CASTLEBIT.BQCA; break
      default: break
    }
    fenCnt += 1
  }
  fenCnt += 1

  if (fen[fenCnt] !== '-') {
    file = fen[fenCnt].charCodeAt() - 'a'.charCodeAt()
    rank = fen[fenCnt + 1].charCodeAt() - '1'.charCodeAt()
    GameBoard.enPas = FR2SQ(file, rank)
  }

  GameBoard.posKey = GeneratePosKey()
  UpdateListsMaterial()
}
