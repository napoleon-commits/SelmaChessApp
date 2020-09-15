import $ from 'jquery';

const PIECES = {
  EMPTY: 0,
  wP: 1,
  wN: 2,
  wB: 3,
  wR: 4,
  wQ: 5,
  wK: 6,
  bP: 7,
  bN: 8,
  bB: 9,
  bR: 10,
  bQ: 11,
  bK: 12,
};

const BRD_SQ_NUM = 120;

const FILES = {
  FILE_A: 0,
  FILE_B: 1,
  FILE_C: 2,
  FILE_D: 3,
  FILE_E: 4,
  FILE_F: 5,
  FILE_G: 6,
  FILE_H: 7,
  FILE_NONE: 8,
};

const RANKS = {
  RANK_1: 0,
  RANK_2: 1,
  RANK_3: 2,
  RANK_4: 3,
  RANK_5: 4,
  RANK_6: 5,
  RANK_7: 6,
  RANK_8: 7,
  RANK_NONE: 8,
};

const COLOURS = { WHITE: 0, BLACK: 1, BOTH: 2 };

const CASTLEBIT = { WKCA: 1, WQCA: 2, BKCA: 4, BQCA: 8 };

const SQUARES = {
  A1: 21,
  B1: 22,
  C1: 23,
  D1: 24,
  E1: 25,
  F1: 26,
  G1: 27,
  H1: 28,
  A8: 91,
  B8: 92,
  C8: 93,
  D8: 94,
  E8: 95,
  F8: 96,
  G8: 97,
  H8: 98,
  NO_SQ: 99,
  OFFBOARD: 100,
};

const BOOL = { FALSE: 0, TRUE: 1 };

const MAXGAMEMOVES = 2048;
const MAXPOSITIONMOVES = 256;
const MAXDEPTH = 64;
const INFINITE = 30000;
const MATE = 29000;
const PVENTRIES = 10000;

const FilesBrd = new Array(BRD_SQ_NUM);
const RanksBrd = new Array(BRD_SQ_NUM);

const START_FEN = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

const PceChar = '.PNBRQKpnbrqk';
const SideChar = 'wb-';
const RankChar = '12345678';
const FileChar = 'abcdefgh';

export function FR2SQ(f, r) {
  return ((21 + (f)) + ((r) * 10));
}

const PieceVal = [0, 100, 325, 325, 550, 1000, 50000, 100, 325, 325, 550, 1000, 50000];
// eslint-disable-next-line
const PieceCol = [COLOURS.BOTH, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.WHITE, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK, COLOURS.BLACK];

// eslint-disable-next-line
const PiecePawn = [BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
// eslint-disable-next-line
const PieceKnight = [BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE];
// eslint-disable-next-line
const PieceKing = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE];
// eslint-disable-next-line
const PieceRookQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.TRUE, BOOL.FALSE];
// eslint-disable-next-line
const PieceBishopQueen = [BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.FALSE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE, BOOL.TRUE, BOOL.FALSE];

const KnDir = [-8, -19, -21, -12, 8, 19, 21, 12];
const RkDir = [-1, -10, 1, 10];
const BiDir = [-9, -11, 11, 9];
const KiDir = [-1, -10, 1, 10, -9, -11, 11, 9];

const DirNum = [0, 0, 8, 4, 4, 8, 8, 0, 8, 4, 4, 8, 8];
const PceDir = [0, 0, KnDir, BiDir, RkDir, KiDir, KiDir, 0, KnDir, BiDir, RkDir, KiDir, KiDir];
const LoopNonSlidePce = [PIECES.wN, PIECES.wK, 0, PIECES.bN, PIECES.bK, 0];
const LoopNonSlideIndex = [0, 3];
const LoopSlidePce = [PIECES.wB, PIECES.wR, PIECES.wQ, 0, PIECES.bB, PIECES.bR, PIECES.bQ, 0];
const LoopSlideIndex = [0, 4];

const PieceKeys = new Array(14 * 120);
let SideKey;
const CastleKeys = new Array(16);

const Sq120ToSq64 = new Array(BRD_SQ_NUM);
const Sq64ToSq120 = new Array(64);

export function RAND_32() {
  // eslint-disable-next-line
  return (Math.floor((Math.random() * 255) + 1) << 23) | (Math.floor((Math.random() * 255) + 1) << 16) | (Math.floor((Math.random() * 255) + 1) << 8) | Math.floor((Math.random() * 255) + 1);
}

const Mirror64 = [
  56, 57, 58, 59, 60, 61, 62, 63,
  48, 49, 50, 51, 52, 53, 54, 55,
  40, 41, 42, 43, 44, 45, 46, 47,
  32, 33, 34, 35, 36, 37, 38, 39,
  24, 25, 26, 27, 28, 29, 30, 31,
  16, 17, 18, 19, 20, 21, 22, 23,
  8, 9, 10, 11, 12, 13, 14, 15,
  0, 1, 2, 3, 4, 5, 6, 7,
];

function SQ64(sq120) {
  return Sq120ToSq64[(sq120)];
}

function SQ120(sq64) {
  return Sq64ToSq120[(sq64)];
}

function PCEINDEX(pce, pceNum) {
  // eslint-disable-next-line
  return (pce * 10 + pceNum);
}

function MIRROR64(sq) {
  return Mirror64[sq];
}

const Kings = [PIECES.wK, PIECES.bK];
const CastlePerm = [
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 13, 15, 15, 15, 12, 15, 15, 14, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 7, 15, 15, 15, 3, 15, 15, 11, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
  15, 15, 15, 15, 15, 15, 15, 15, 15, 15,
];

/*
0000 0000 0000 0000 0000 0111 1111 -> From 0x7F
0000 0000 0000 0011 1111 1000 0000 -> To >> 7, 0x7F
0000 0000 0011 1100 0000 0000 0000 -> Captured >> 14, 0xF
0000 0000 0100 0000 0000 0000 0000 -> EP 0x40000
0000 0000 1000 0000 0000 0000 0000 -> Pawn Start 0x80000
0000 1111 0000 0000 0000 0000 0000 -> Promoted Piece >> 20, 0xF
0001 0000 0000 0000 0000 0000 0000 -> Castle 0x1000000
*/

// eslint-disable-next-line
function FROMSQ(m) { return (m & 0x7F); }
// eslint-disable-next-line
function TOSQ(m) { return ((m >> 7) & 0x7F); }
// eslint-disable-next-line
function CAPTURED(m) { return ((m >> 14) & 0xF); }
// eslint-disable-next-line
function PROMOTED(m) { return ((m >> 20) & 0xF); }

const MFLAGEP = 0x40000;
const MFLAGPS = 0x80000;
const MFLAGCA = 0x1000000;

const MFLAGCAP = 0x7C000;
// var MFLAGPROM = 0xF00000;

const NOMOVE = 0;

function SQOFFBOARD(sq) {
  if (FilesBrd[sq] === SQUARES.OFFBOARD) return BOOL.TRUE;
  return BOOL.FALSE;
}

const GameBoard = {};

GameBoard.pieces = new Array(BRD_SQ_NUM);
GameBoard.side = COLOURS.WHITE;
GameBoard.fiftyMove = 0;
GameBoard.hisPly = 0;
GameBoard.history = [];
GameBoard.ply = 0;
GameBoard.enPas = 0;
GameBoard.castlePerm = 0;
GameBoard.material = new Array(2); // WHITE,BLACK material of pieces
GameBoard.pceNum = new Array(13); // indexed by Pce
GameBoard.pList = new Array(14 * 10);
GameBoard.posKey = 0;
GameBoard.moveList = new Array(MAXDEPTH * MAXPOSITIONMOVES);
GameBoard.moveScores = new Array(MAXDEPTH * MAXPOSITIONMOVES);
GameBoard.moveListStart = new Array(MAXDEPTH);
GameBoard.PvTable = [];
GameBoard.PvArray = new Array(MAXDEPTH);
GameBoard.searchHistory = new Array(14 * BRD_SQ_NUM);
GameBoard.searchKillers = new Array(3 * MAXDEPTH);

function HASH_PCE(pce, sq) {
  // eslint-disable-next-line
  GameBoard.posKey ^= PieceKeys[(pce * 120) + sq];
}

// eslint-disable-next-line
function HASH_CA() { GameBoard.posKey ^= CastleKeys[GameBoard.castlePerm]; }
// eslint-disable-next-line
function HASH_SIDE() { GameBoard.posKey ^= SideKey; }
// eslint-disable-next-line
function HASH_EP() { GameBoard.posKey ^= PieceKeys[GameBoard.enPas]; }

const GameController = {};
GameController.EngineSide = COLOURS.BOTH;
GameController.PlayerSide = COLOURS.BOTH;
GameController.GameOver = BOOL.FALSE;

const UserMove = {};
UserMove.from = SQUARES.NO_SQ;
UserMove.to = SQUARES.NO_SQ;

function PrSq(sq) {
  return (FileChar[FilesBrd[sq]] + RankChar[RanksBrd[sq]]);
}

function PrMove(move) {
  let MvStr;

  const ff = FilesBrd[FROMSQ(move)];
  const rf = RanksBrd[FROMSQ(move)];
  const ft = FilesBrd[TOSQ(move)];
  const rt = RanksBrd[TOSQ(move)];

  MvStr = FileChar[ff] + RankChar[rf] + FileChar[ft] + RankChar[rt];

  const promoted = PROMOTED(move);

  if (promoted !== PIECES.EMPTY) {
    let pchar = 'q';
    if (PieceKnight[promoted] === BOOL.TRUE) {
      pchar = 'n';
    } else if (
      PieceRookQueen[promoted] === BOOL.TRUE
      && PieceBishopQueen[promoted] === BOOL.FALSE
    ) {
      pchar = 'r';
    } else if (
      PieceRookQueen[promoted] === BOOL.FALSE
      && PieceBishopQueen[promoted] === BOOL.TRUE
    ) {
      pchar = 'b';
    }
    MvStr += pchar;
  }
  return MvStr;
}

function AddPiece(sq, pce) {
  const col = PieceCol[pce];

  HASH_PCE(pce, sq);

  GameBoard.pieces[sq] = pce;
  GameBoard.material[col] += PieceVal[pce];
  GameBoard.pList[PCEINDEX(pce, GameBoard.pceNum[pce])] = sq;
  GameBoard.pceNum[pce] += 1;
}

function MovePiece(from, to) {
  let index = 0;
  const pce = GameBoard.pieces[from];

  HASH_PCE(pce, from);
  GameBoard.pieces[from] = PIECES.EMPTY;

  HASH_PCE(pce, to);
  GameBoard.pieces[to] = pce;

  // eslint-disable-next-line
  for (index = 0; index < GameBoard.pceNum[pce]; ++index) {
    if (GameBoard.pList[PCEINDEX(pce, index)] === from) {
      GameBoard.pList[PCEINDEX(pce, index)] = to;
      break;
    }
  }
}

function ClearPiece(sq) {
  const pce = GameBoard.pieces[sq];
  const col = PieceCol[pce];
  let index;
  let tPceNum = -1;

  HASH_PCE(pce, sq);

  GameBoard.pieces[sq] = PIECES.EMPTY;
  GameBoard.material[col] -= PieceVal[pce];

  // eslint-disable-next-line
  for (index = 0; index < GameBoard.pceNum[pce]; ++index) {
    if (GameBoard.pList[PCEINDEX(pce, index)] === sq) {
      tPceNum = index;
      break;
    }
  }

  GameBoard.pceNum[pce] -= 1;
  GameBoard.pList[PCEINDEX(pce, tPceNum)] = GameBoard.pList[PCEINDEX(pce, GameBoard.pceNum[pce])];
}

function TakeMove() {
  GameBoard.hisPly -= 1;
  GameBoard.ply -= 1;

  const move = GameBoard.history[GameBoard.hisPly].move;
  const from = FROMSQ(move);
  const to = TOSQ(move);

  if (GameBoard.enPas !== SQUARES.NO_SQ) HASH_EP();
  HASH_CA();

  GameBoard.castlePerm = GameBoard.history[GameBoard.hisPly].castlePerm;
  GameBoard.fiftyMove = GameBoard.history[GameBoard.hisPly].fiftyMove;
  GameBoard.enPas = GameBoard.history[GameBoard.hisPly].enPas;

  if (GameBoard.enPas !== SQUARES.NO_SQ) HASH_EP();
  HASH_CA();

  // eslint-disable-next-line
  GameBoard.side ^= 1;
  HASH_SIDE();

  // eslint-disable-next-line
  if ((MFLAGEP & move) !== 0) {
    if (GameBoard.side === COLOURS.WHITE) {
      AddPiece(to - 10, PIECES.bP);
    } else {
      AddPiece(to + 10, PIECES.wP);
    }
  // eslint-disable-next-line
  }
  // eslint-disable-next-line
  else if ((MFLAGCA & move) !== 0) {
    switch (to) {
      case SQUARES.C1: MovePiece(SQUARES.D1, SQUARES.A1); break;
      case SQUARES.C8: MovePiece(SQUARES.D8, SQUARES.A8); break;
      case SQUARES.G1: MovePiece(SQUARES.F1, SQUARES.H1); break;
      case SQUARES.G8: MovePiece(SQUARES.F8, SQUARES.H8); break;
      default: break;
    }
  }

  MovePiece(to, from);

  const captured = CAPTURED(move);
  if (captured !== PIECES.EMPTY) {
    AddPiece(to, captured);
  }

  if (PROMOTED(move) !== PIECES.EMPTY) {
    ClearPiece(from);
    AddPiece(from, (PieceCol[PROMOTED(move)] === COLOURS.WHITE ? PIECES.wP : PIECES.bP));
  }
}

function SqAttacked(sq, side) {
  let pce;
  let tSq;
  let index;

  if (side === COLOURS.WHITE) {
    if (GameBoard.pieces[sq - 11] === PIECES.wP || GameBoard.pieces[sq - 9] === PIECES.wP) {
      return BOOL.TRUE;
    }
  } else if (GameBoard.pieces[sq + 11] === PIECES.bP || GameBoard.pieces[sq + 9] === PIECES.bP) {
    return BOOL.TRUE;
  }

  for (index = 0; index < 8; index += 1) {
    pce = GameBoard.pieces[sq + KnDir[index]];
    if (pce !== SQUARES.OFFBOARD && PieceCol[pce] === side && PieceKnight[pce] === BOOL.TRUE) {
      return BOOL.TRUE;
    }
  }

  // eslint-disable-next-line
  for (index = 0; index < 4; ++index) {
    const dir = RkDir[index];
    tSq = sq + dir;
    pce = GameBoard.pieces[tSq];
    while (pce !== SQUARES.OFFBOARD) {
      if (pce !== PIECES.EMPTY) {
        if (PieceRookQueen[pce] === BOOL.TRUE && PieceCol[pce] === side) {
          return BOOL.TRUE;
        }
        break;
      }
      tSq += dir;
      pce = GameBoard.pieces[tSq];
    }
  }

  // eslint-disable-next-line
  for (index = 0; index < 4; ++index) {
    const dir = BiDir[index];
    tSq = sq + dir;
    pce = GameBoard.pieces[tSq];
    while (pce !== SQUARES.OFFBOARD) {
      if (pce !== PIECES.EMPTY) {
        if (PieceBishopQueen[pce] === BOOL.TRUE && PieceCol[pce] === side) {
          return BOOL.TRUE;
        }
        break;
      }
      tSq += dir;
      pce = GameBoard.pieces[tSq];
    }
  }

  for (index = 0; index < 8; index += 1) {
    pce = GameBoard.pieces[sq + KiDir[index]];
    if (pce !== SQUARES.OFFBOARD && PieceCol[pce] === side && PieceKing[pce] === BOOL.TRUE) {
      return BOOL.TRUE;
    }
  }

  return BOOL.FALSE;
}

function MakeMove(move) {
  const from = FROMSQ(move);
  const to = TOSQ(move);
  const side = GameBoard.side;

  GameBoard.history[GameBoard.hisPly].posKey = GameBoard.posKey;

  // eslint-disable-next-line
  if ((move & MFLAGEP) !== 0) {
    if (side === COLOURS.WHITE) {
      ClearPiece(to - 10);
    } else {
      ClearPiece(to + 10);
    }
  // eslint-disable-next-line
  }
  // eslint-disable-next-line
  else if ((move & MFLAGCA) !== 0) {
    switch (to) {
      case SQUARES.C1:
        MovePiece(SQUARES.A1, SQUARES.D1);
        break;
      case SQUARES.C8:
        MovePiece(SQUARES.A8, SQUARES.D8);
        break;
      case SQUARES.G1:
        MovePiece(SQUARES.H1, SQUARES.F1);
        break;
      case SQUARES.G8:
        MovePiece(SQUARES.H8, SQUARES.F8);
        break;
      default: break;
    }
  }

  if (GameBoard.enPas !== SQUARES.NO_SQ) HASH_EP();
  HASH_CA();

  GameBoard.history[GameBoard.hisPly].move = move;
  GameBoard.history[GameBoard.hisPly].fiftyMove = GameBoard.fiftyMove;
  GameBoard.history[GameBoard.hisPly].enPas = GameBoard.enPas;
  GameBoard.history[GameBoard.hisPly].castlePerm = GameBoard.castlePerm;

  // eslint-disable-next-line
  GameBoard.castlePerm &= CastlePerm[from];
  // eslint-disable-next-line
  GameBoard.castlePerm &= CastlePerm[to];
  GameBoard.enPas = SQUARES.NO_SQ;

  HASH_CA();

  const captured = CAPTURED(move);
  GameBoard.fiftyMove += 1;

  if (captured !== PIECES.EMPTY) {
    ClearPiece(to);
    GameBoard.fiftyMove = 0;
  }

  GameBoard.hisPly += 1;
  GameBoard.ply += 1;

  if (PiecePawn[GameBoard.pieces[from]] === BOOL.TRUE) {
    GameBoard.fiftyMove = 0;
    // eslint-disable-next-line
    if ((move & MFLAGPS) !== 0) {
      if (side === COLOURS.WHITE) {
        GameBoard.enPas = from + 10;
      } else {
        GameBoard.enPas = from - 10;
      }
      HASH_EP();
    }
  }

  MovePiece(from, to);

  const prPce = PROMOTED(move);
  if (prPce !== PIECES.EMPTY) {
    ClearPiece(to);
    AddPiece(to, prPce);
  }

  // eslint-disable-next-line
  GameBoard.side ^= 1;
  HASH_SIDE();

  if (SqAttacked(GameBoard.pList[PCEINDEX(Kings[side], 0)], GameBoard.side)) {
    TakeMove();
    return BOOL.FALSE;
  }

  return BOOL.TRUE;
}

function MOVE(from, to, captured, promoted, flag) {
  // eslint-disable-next-line
  return (from | (to << 7) | (captured << 14) | (promoted << 20) | flag);
}

function AddQuietMove(move) {
  GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1]] = move;
  GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]] = 0;

  if (move === GameBoard.searchKillers[GameBoard.ply]) {
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]] = 900000;
  } else if (move === GameBoard.searchKillers[GameBoard.ply + MAXDEPTH]) {
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]] = 800000;
  } else {
    // eslint-disable-next-line
    GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1]] = GameBoard.searchHistory[GameBoard.pieces[FROMSQ(move)] * BRD_SQ_NUM + TOSQ(move)];
  }

  GameBoard.moveListStart[GameBoard.ply + 1] += 1;
}

function AddCaptureMove(move) {
  GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1]] = move;
  // eslint-disable-next-line
  GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1] += 1] = MvvLvaScores[CAPTURED(move) * 14 + GameBoard.pieces[FROMSQ(move)]] + 1000000;
}

function AddEnPassantMove(move) {
  GameBoard.moveList[GameBoard.moveListStart[GameBoard.ply + 1]] = move;
  GameBoard.moveScores[GameBoard.moveListStart[GameBoard.ply + 1] += 1] = 105 + 1000000;
}

function AddBlackPawnCaptureMove(from, to, cap) {
  if (RanksBrd[from] === RANKS.RANK_2) {
    AddCaptureMove(MOVE(from, to, cap, PIECES.bQ, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.bR, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.bB, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.bN, 0));
  } else {
    AddCaptureMove(MOVE(from, to, cap, PIECES.EMPTY, 0));
  }
}

function AddBlackPawnQuietMove(from, to) {
  if (RanksBrd[from] === RANKS.RANK_2) {
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bQ, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bR, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bB, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.bN, 0));
  } else {
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
  }
}

function AddWhitePawnCaptureMove(from, to, cap) {
  if (RanksBrd[from] === RANKS.RANK_7) {
    AddCaptureMove(MOVE(from, to, cap, PIECES.wQ, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.wR, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.wB, 0));
    AddCaptureMove(MOVE(from, to, cap, PIECES.wN, 0));
  } else {
    AddCaptureMove(MOVE(from, to, cap, PIECES.EMPTY, 0));
  }
}

function AddWhitePawnQuietMove(from, to) {
  if (RanksBrd[from] === RANKS.RANK_7) {
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wQ, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wR, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wB, 0));
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.wN, 0));
  } else {
    AddQuietMove(MOVE(from, to, PIECES.EMPTY, PIECES.EMPTY, 0));
  }
}

function GenerateMoves() {
  GameBoard.moveListStart[GameBoard.ply + 1] = GameBoard.moveListStart[GameBoard.ply];

  let pceType;
  let pceNum;
  let sq;
  let pceIndex;
  let pce;
  let tSq;
  let dir;

  if (GameBoard.side === COLOURS.WHITE) {
    pceType = PIECES.wP;

    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];
      if (GameBoard.pieces[sq + 10] === PIECES.EMPTY) {
        AddWhitePawnQuietMove(sq, sq + 10);
        if (RanksBrd[sq] === RANKS.RANK_2 && GameBoard.pieces[sq + 20] === PIECES.EMPTY) {
          AddQuietMove(MOVE(sq, sq + 20, PIECES.EMPTY, PIECES.EMPTY, MFLAGPS));
        }
      }

      if (
        SQOFFBOARD(sq + 9) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq + 9]] === COLOURS.BLACK
      ) {
        AddWhitePawnCaptureMove(sq, sq + 9, GameBoard.pieces[sq + 9]);
      }

      if (
        SQOFFBOARD(sq + 11) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq + 11]] === COLOURS.BLACK
      ) {
        AddWhitePawnCaptureMove(sq, sq + 11, GameBoard.pieces[sq + 11]);
      }

      if (GameBoard.enPas !== SQUARES.NO_SQ) {
        if (sq + 9 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq + 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }

        if (sq + 11 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq + 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }
      }
    }

    // eslint-disable-next-line
    if (GameBoard.castlePerm & CASTLEBIT.WKCA) {
      if (
        GameBoard.pieces[SQUARES.F1] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.G1] === PIECES.EMPTY
      ) {
        if (
          SqAttacked(SQUARES.F1, COLOURS.BLACK) === BOOL.FALSE
          && SqAttacked(SQUARES.E1, COLOURS.BLACK) === BOOL.FALSE
        ) {
          AddQuietMove(MOVE(SQUARES.E1, SQUARES.G1, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
        }
      }
    }

    // eslint-disable-next-line
    if (GameBoard.castlePerm & CASTLEBIT.WQCA) {
      if (
        GameBoard.pieces[SQUARES.D1] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.C1] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.B1] === PIECES.EMPTY
      ) {
        if (
          SqAttacked(SQUARES.D1, COLOURS.BLACK) === BOOL.FALSE
          && SqAttacked(SQUARES.E1, COLOURS.BLACK) === BOOL.FALSE
        ) {
          AddQuietMove(MOVE(SQUARES.E1, SQUARES.C1, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
        }
      }
    }
  } else {
    pceType = PIECES.bP;

    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];
      if (GameBoard.pieces[sq - 10] === PIECES.EMPTY) {
        AddBlackPawnQuietMove(sq, sq - 10);
        if (RanksBrd[sq] === RANKS.RANK_7 && GameBoard.pieces[sq - 20] === PIECES.EMPTY) {
          AddQuietMove(MOVE(sq, sq - 20, PIECES.EMPTY, PIECES.EMPTY, MFLAGPS));
        }
      }

      if (
        SQOFFBOARD(sq - 9) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq - 9]] === COLOURS.WHITE
      ) {
        AddBlackPawnCaptureMove(sq, sq - 9, GameBoard.pieces[sq - 9]);
      }

      if (
        SQOFFBOARD(sq - 11) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq - 11]] === COLOURS.WHITE
      ) {
        AddBlackPawnCaptureMove(sq, sq - 11, GameBoard.pieces[sq - 11]);
      }

      if (GameBoard.enPas !== SQUARES.NO_SQ) {
        if (sq - 9 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq - 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }

        if (sq - 11 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq - 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }
      }
    }
    // eslint-disable-next-line
    if (GameBoard.castlePerm & CASTLEBIT.BKCA) {
      if (
        GameBoard.pieces[SQUARES.F8] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.G8] === PIECES.EMPTY
      ) {
        if (
          SqAttacked(SQUARES.F8, COLOURS.WHITE) === BOOL.FALSE
          && SqAttacked(SQUARES.E8, COLOURS.WHITE) === BOOL.FALSE
        ) {
          AddQuietMove(MOVE(SQUARES.E8, SQUARES.G8, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
        }
      }
    }

    // eslint-disable-next-line
    if (GameBoard.castlePerm & CASTLEBIT.BQCA) {
      if (
        GameBoard.pieces[SQUARES.D8] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.C8] === PIECES.EMPTY
        && GameBoard.pieces[SQUARES.B8] === PIECES.EMPTY
      ) {
        if (
          SqAttacked(SQUARES.D8, COLOURS.WHITE) === BOOL.FALSE
          && SqAttacked(SQUARES.E8, COLOURS.WHITE) === BOOL.FALSE
        ) {
          AddQuietMove(MOVE(SQUARES.E8, SQUARES.C8, PIECES.EMPTY, PIECES.EMPTY, MFLAGCA));
        }
      }
    }
  }

  pceIndex = LoopNonSlideIndex[GameBoard.side];
  pce = LoopNonSlidePce[pceIndex += 1];

  while (pce !== 0) {
    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pce, pceNum)];

      for (let index = 0; index < DirNum[pce]; index += 1) {
        dir = PceDir[pce][index];
        tSq = sq + dir;

        if (SQOFFBOARD(tSq) === BOOL.TRUE) {
          // eslint-disable-next-line
          continue;
        }

        if (GameBoard.pieces[tSq] !== PIECES.EMPTY) {
          if (PieceCol[GameBoard.pieces[tSq]] !== GameBoard.side) {
            AddCaptureMove(MOVE(sq, tSq, GameBoard.pieces[tSq], PIECES.EMPTY, 0));
          }
        } else {
          AddQuietMove(MOVE(sq, tSq, PIECES.EMPTY, PIECES.EMPTY, 0));
        }
      }
    }
    // eslint-disable-next-line
    pce = LoopNonSlidePce[pceIndex += 1];
  }

  pceIndex = LoopSlideIndex[GameBoard.side];
  pce = LoopSlidePce[pceIndex += 1];

  while (pce !== 0) {
    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pce, pceNum)];

      for (let index = 0; index < DirNum[pce]; index += 1) {
        dir = PceDir[pce][index];
        tSq = sq + dir;

        while (SQOFFBOARD(tSq) === BOOL.FALSE) {
          if (GameBoard.pieces[tSq] !== PIECES.EMPTY) {
            if (PieceCol[GameBoard.pieces[tSq]] !== GameBoard.side) {
              AddCaptureMove(MOVE(sq, tSq, GameBoard.pieces[tSq], PIECES.EMPTY, 0));
            }
            break;
          }
          AddQuietMove(MOVE(sq, tSq, PIECES.EMPTY, PIECES.EMPTY, 0));
          tSq += dir;
        }
      }
    }
    pce = LoopSlidePce[pceIndex += 1];
  }
}

function ParseMove(from, to) {
  GenerateMoves();

  let Move = NOMOVE;
  let PromPce = PIECES.EMPTY;
  let found = BOOL.FALSE;

  for (let index = GameBoard.moveListStart[GameBoard.ply];
    // eslint-disable-next-line
    index < GameBoard.moveListStart[GameBoard.ply + 1]; ++index) {
    Move = GameBoard.moveList[index];
    if (FROMSQ(Move) === from && TOSQ(Move) === to) {
      PromPce = PROMOTED(Move);
      if (PromPce !== PIECES.EMPTY) {
        if (
          (PromPce === PIECES.wQ && GameBoard.side === COLOURS.WHITE)
          || (PromPce === PIECES.bQ && GameBoard.side === COLOURS.BLACK)
        ) {
          found = BOOL.TRUE;
          break;
        }
        // eslint-disable-next-line
        continue;
      }
      found = BOOL.TRUE;
      break;
    }
  }

  if (found !== BOOL.FALSE) {
    if (MakeMove(Move) === BOOL.FALSE) {
      return NOMOVE;
    }
    TakeMove();
    return Move;
  }

  return NOMOVE;
}


function GeneratePosKey() {
  let sq = 0;
  let finalKey = 0;
  let piece = PIECES.EMPTY;

  // eslint-disable-next-line
  for (sq = 0; sq < BRD_SQ_NUM; ++sq) {
    piece = GameBoard.pieces[sq];
    if (piece !== PIECES.EMPTY && piece !== SQUARES.OFFBOARD) {
      // eslint-disable-next-line
      finalKey ^= PieceKeys[(piece * 120) + sq];
    }
  }

  if (GameBoard.side === COLOURS.WHITE) {
    // eslint-disable-next-line
    finalKey ^= SideKey;
  }

  if (GameBoard.enPas !== SQUARES.NO_SQ) {
    // eslint-disable-next-line
    finalKey ^= PieceKeys[GameBoard.enPas];
  }

  // eslint-disable-next-line
  finalKey ^= CastleKeys[GameBoard.castlePerm];

  return finalKey;
}

function UpdateListsMaterial() {
  let piece = null;
  let sq = null;
  let index = null;
  let colour = null;

  // eslint-disable-next-line
  for (index = 0; index < 14 * 120; ++index) {
    GameBoard.pList[index] = PIECES.EMPTY;
  }

  // eslint-disable-next-line
  for (index = 0; index < 2; ++index) {
    GameBoard.material[index] = 0;
  }

  // eslint-disable-next-line
  for (index = 0; index < 13; ++index) {
    GameBoard.pceNum[index] = 0;
  }

  // eslint-disable-next-line
  for (index = 0; index < 64; ++index) {
    sq = SQ120(index);
    piece = GameBoard.pieces[sq];
    if (piece !== PIECES.EMPTY) {
      colour = PieceCol[piece];

      GameBoard.material[colour] += PieceVal[piece];

      GameBoard.pList[PCEINDEX(piece, GameBoard.pceNum[piece])] = sq;
      GameBoard.pceNum[piece] += 1;
    }
  }
}

function ResetBoard() {
  let index = 0;

  // eslint-disable-next-line
  for (index = 0; index < BRD_SQ_NUM; ++index) {
    GameBoard.pieces[index] = SQUARES.OFFBOARD;
  }

  // eslint-disable-next-line
  for (index = 0; index < 64; ++index) {
    GameBoard.pieces[SQ120(index)] = PIECES.EMPTY;
  }

  GameBoard.side = COLOURS.BOTH;
  GameBoard.enPas = SQUARES.NO_SQ;
  GameBoard.fiftyMove = 0;
  GameBoard.ply = 0;
  GameBoard.hisPly = 0;
  GameBoard.castlePerm = 0;
  GameBoard.posKey = 0;
  GameBoard.moveListStart[GameBoard.ply] = 0;
}

// rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1

function ParseFen(fen) {
  ResetBoard();

  let rank = RANKS.RANK_8;
  let file = FILES.FILE_A;
  let piece = 0;
  let count = 0;
  let i = 0;
  let sq120 = 0;
  let fenCnt = 0; // fen[fenCnt]

  while ((rank >= RANKS.RANK_1) && fenCnt < fen.length) {
    count = 1;
    switch (fen[fenCnt]) {
      case 'p': piece = PIECES.bP; break;
      case 'r': piece = PIECES.bR; break;
      case 'n': piece = PIECES.bN; break;
      case 'b': piece = PIECES.bB; break;
      case 'k': piece = PIECES.bK; break;
      case 'q': piece = PIECES.bQ; break;
      case 'P': piece = PIECES.wP; break;
      case 'R': piece = PIECES.wR; break;
      case 'N': piece = PIECES.wN; break;
      case 'B': piece = PIECES.wB; break;
      case 'K': piece = PIECES.wK; break;
      case 'Q': piece = PIECES.wQ; break;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
        piece = PIECES.EMPTY;
        count = fen[fenCnt].charCodeAt() - '0'.charCodeAt();
        break;

      case '/':
      case ' ':
        rank -= 1;
        file = FILES.FILE_A;
        fenCnt += 1;
        // eslint-disable-next-line
        continue;
      default:
        return;
    }

    for (i = 0; i < count; i += 1) {
      sq120 = FR2SQ(file, rank);
      GameBoard.pieces[sq120] = piece;
      file += 1;
    }
    fenCnt += 1;
  } // while loop end

  // rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1
  GameBoard.side = (fen[fenCnt] === 'w') ? COLOURS.WHITE : COLOURS.BLACK;
  fenCnt += 2;

  for (i = 0; i < 4; i += 1) {
    if (fen[fenCnt] === ' ') {
      break;
    }
    switch (fen[fenCnt]) {
      // eslint-disable-next-line
      case 'K': GameBoard.castlePerm |= CASTLEBIT.WKCA; break;
      // eslint-disable-next-line
      case 'Q': GameBoard.castlePerm |= CASTLEBIT.WQCA; break;
      // eslint-disable-next-line
      case 'k': GameBoard.castlePerm |= CASTLEBIT.BKCA; break;
      // eslint-disable-next-line
      case 'q': GameBoard.castlePerm |= CASTLEBIT.BQCA; break;
      default: break;
    }
    fenCnt += 1;
  }
  fenCnt += 1;

  if (fen[fenCnt] !== '-') {
    file = fen[fenCnt].charCodeAt() - 'a'.charCodeAt();
    rank = fen[fenCnt + 1].charCodeAt() - '1'.charCodeAt();
    // eslint-disable-next-line
    console.log(`fen[fenCnt]:${fen[fenCnt]} File:${file} Rank:${rank}`);
    GameBoard.enPas = FR2SQ(file, rank);
  }

  GameBoard.posKey = GeneratePosKey();
  UpdateListsMaterial();
}

const MvvLvaValue = [0, 100, 200, 300, 400, 500, 600, 100, 200, 300, 400, 500, 600];
const MvvLvaScores = new Array(14 * 14);

function InitMvvLva() {
  let Attacker;
  let Victim;

  // eslint-disable-next-line
  for (Attacker = PIECES.wP; Attacker <= PIECES.bK; ++Attacker) {
    // eslint-disable-next-line
    for (Victim = PIECES.wP; Victim <= PIECES.bK; ++Victim) {
      // eslint-disable-next-line
      MvvLvaScores[Victim * 14 + Attacker] = MvvLvaValue[Victim] + 6 - (MvvLvaValue[Attacker] / 100);
    }
  }
}

function MoveExists(move) {
  GenerateMoves();

  let index;
  let moveFound = NOMOVE;
  // eslint-disable-next-line
  for (index = GameBoard.moveListStart[GameBoard.ply]; index < GameBoard.moveListStart[GameBoard.ply + 1]; ++index) {
    moveFound = GameBoard.moveList[index];
    if (MakeMove(moveFound) === BOOL.FALSE) {
      // eslint-disable-next-line
      continue;
    }
    TakeMove();
    if (move === moveFound) {
      return BOOL.TRUE;
    }
  }
  return BOOL.FALSE;
}

function GenerateCaptures() {
  GameBoard.moveListStart[GameBoard.ply + 1] = GameBoard.moveListStart[GameBoard.ply];

  let pceType;
  let pceNum;
  let sq;
  let pceIndex;
  let pce;
  let tSq;
  let dir;

  if (GameBoard.side === COLOURS.WHITE) {
    pceType = PIECES.wP;

    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

      if (
        SQOFFBOARD(sq + 9) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq + 9]] === COLOURS.BLACK
      ) {
        AddWhitePawnCaptureMove(sq, sq + 9, GameBoard.pieces[sq + 9]);
      }

      if (
        SQOFFBOARD(sq + 11) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq + 11]] === COLOURS.BLACK
      ) {
        AddWhitePawnCaptureMove(sq, sq + 11, GameBoard.pieces[sq + 11]);
      }

      if (GameBoard.enPas !== SQUARES.NO_SQ) {
        if (sq + 9 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq + 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }

        if (sq + 11 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq + 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }
      }
    }
  } else {
    pceType = PIECES.bP;

    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pceType]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pceType, pceNum)];

      if (
        SQOFFBOARD(sq - 9) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq - 9]] === COLOURS.WHITE
      ) {
        AddBlackPawnCaptureMove(sq, sq - 9, GameBoard.pieces[sq - 9]);
      }

      if (
        SQOFFBOARD(sq - 11) === BOOL.FALSE
        && PieceCol[GameBoard.pieces[sq - 11]] === COLOURS.WHITE
      ) {
        AddBlackPawnCaptureMove(sq, sq - 11, GameBoard.pieces[sq - 11]);
      }

      if (GameBoard.enPas !== SQUARES.NO_SQ) {
        if (sq - 9 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq - 9, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }

        if (sq - 11 === GameBoard.enPas) {
          AddEnPassantMove(MOVE(sq, sq - 11, PIECES.EMPTY, PIECES.EMPTY, MFLAGEP));
        }
      }
    }
  }

  pceIndex = LoopNonSlideIndex[GameBoard.side];
  pce = LoopNonSlidePce[pceIndex += 1];

  while (pce !== 0) {
    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pce, pceNum)];

      for (let index = 0; index < DirNum[pce]; index += 1) {
        dir = PceDir[pce][index];
        tSq = sq + dir;

        if (SQOFFBOARD(tSq) === BOOL.TRUE) {
          // eslint-disable-next-line
          continue;
        }

        if (GameBoard.pieces[tSq] !== PIECES.EMPTY) {
          if (PieceCol[GameBoard.pieces[tSq]] !== GameBoard.side) {
            AddCaptureMove(MOVE(sq, tSq, GameBoard.pieces[tSq], PIECES.EMPTY, 0));
          }
        }
      }
    }
    pce = LoopNonSlidePce[pceIndex += 1];
  }

  pceIndex = LoopSlideIndex[GameBoard.side];
  pce = LoopSlidePce[pceIndex += 1];

  while (pce !== 0) {
    // eslint-disable-next-line
    for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
      sq = GameBoard.pList[PCEINDEX(pce, pceNum)];

      for (let index = 0; index < DirNum[pce]; index += 1) {
        dir = PceDir[pce][index];
        tSq = sq + dir;

        while (SQOFFBOARD(tSq) === BOOL.FALSE) {
          if (GameBoard.pieces[tSq] !== PIECES.EMPTY) {
            if (PieceCol[GameBoard.pieces[tSq]] !== GameBoard.side) {
              AddCaptureMove(MOVE(sq, tSq, GameBoard.pieces[tSq], PIECES.EMPTY, 0));
            }
            break;
          }
          tSq += dir;
        }
      }
    }
    pce = LoopSlidePce[pceIndex += 1];
  }
}

const PawnTable = [
  0, 0, 0, 0, 0, 0, 0, 0,
  10, 10, 0, -10, -10, 0, 10, 10,
  5, 0, 0, 5, 5, 0, 0, 5,
  0, 0, 10, 20, 20, 10, 0, 0,
  5, 5, 5, 10, 10, 5, 5, 5,
  10, 10, 10, 20, 20, 10, 10, 10,
  20, 20, 20, 30, 30, 20, 20, 20,
  0, 0, 0, 0, 0, 0, 0, 0,
];


const KnightTable = [
  0, -10, 0, 0, 0, 0, -10, 0,
  0, 0, 0, 5, 5, 0, 0, 0,
  0, 0, 10, 10, 10, 10, 0, 0,
  0, 0, 10, 20, 20, 10, 5, 0,
  5, 10, 15, 20, 20, 15, 10, 5,
  5, 10, 10, 20, 20, 10, 10, 5,
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const BishopTable = [
  0, 0, -10, 0, 0, -10, 0, 0,
  0, 0, 0, 10, 10, 0, 0, 0,
  0, 0, 10, 15, 15, 10, 0, 0,
  0, 10, 15, 20, 20, 15, 10, 0,
  0, 10, 15, 20, 20, 15, 10, 0,
  0, 0, 10, 15, 15, 10, 0, 0,
  0, 0, 0, 10, 10, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
];

const RookTable = [
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 5, 10, 10, 5, 0, 0,
  0, 0, 5, 10, 10, 5, 0, 0,
  25, 25, 25, 25, 25, 25, 25, 25,
  0, 0, 5, 10, 10, 5, 0, 0,
];

const BishopPair = 40;


function EvalPosition() {
  let score = GameBoard.material[COLOURS.WHITE] - GameBoard.material[COLOURS.BLACK];

  let pce;
  let sq;
  let pceNum;

  pce = PIECES.wP;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score += PawnTable[SQ64(sq)];
  }

  pce = PIECES.bP;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score -= PawnTable[MIRROR64(SQ64(sq))];
  }

  pce = PIECES.wN;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score += KnightTable[SQ64(sq)];
  }

  pce = PIECES.bN;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score -= KnightTable[MIRROR64(SQ64(sq))];
  }

  pce = PIECES.wB;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score += BishopTable[SQ64(sq)];
  }

  pce = PIECES.bB;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score -= BishopTable[MIRROR64(SQ64(sq))];
  }

  pce = PIECES.wR;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score += RookTable[SQ64(sq)];
  }

  pce = PIECES.bR;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score -= RookTable[MIRROR64(SQ64(sq))];
  }

  pce = PIECES.wQ;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score += RookTable[SQ64(sq)];
  }

  pce = PIECES.bQ;
  // eslint-disable-next-line
  for (pceNum = 0; pceNum < GameBoard.pceNum[pce]; ++pceNum) {
    sq = GameBoard.pList[PCEINDEX(pce, pceNum)];
    score -= RookTable[MIRROR64(SQ64(sq))];
  }

  if (GameBoard.pceNum[PIECES.wB] >= 2) {
    score += BishopPair;
  }

  if (GameBoard.pceNum[PIECES.bB] >= 2) {
    score -= BishopPair;
  }

  if (GameBoard.side === COLOURS.WHITE) {
    return score;
  }
  return -score;
}

function ProbePvTable() {
  const index = GameBoard.posKey % PVENTRIES;

  if (GameBoard.PvTable[index].posKey === GameBoard.posKey) {
    return GameBoard.PvTable[index].move;
  }

  return NOMOVE;
}

function GetPvLine(depth) {
  let move = ProbePvTable();
  let count = 0;

  while (move !== NOMOVE && count < depth) {
    if (MoveExists(move) === BOOL.TRUE) {
      MakeMove(move);
      GameBoard.PvArray[count += 1] = move;
    } else {
      break;
    }
    move = ProbePvTable();
  }

  while (GameBoard.ply > 0) {
    TakeMove();
  }

  return count;
}

function StorePvMove(move) {
  const index = GameBoard.posKey % PVENTRIES;
  GameBoard.PvTable[index].posKey = GameBoard.posKey;
  GameBoard.PvTable[index].move = move;
}

const SearchController = {};

SearchController.nodes = 0;
SearchController.fh = 0;
SearchController.fhf = 0;
SearchController.depth = MAXDEPTH;
SearchController.time = 1000;
SearchController.start = $.now();
SearchController.stop = BOOL.FALSE;
SearchController.best = NOMOVE;
SearchController.thinking = BOOL.FALSE;

function PickNextMove(MoveNum) {
  let index = 0;
  let bestScore = -1;
  let bestNum = MoveNum;

  // eslint-disable-next-line
  for (index = MoveNum; index < GameBoard.moveListStart[GameBoard.ply + 1]; ++index) {
    if (GameBoard.moveScores[index] > bestScore) {
      bestScore = GameBoard.moveScores[index];
      bestNum = index;
    }
  }

  if (bestNum !== MoveNum) {
    let temp = 0;
    temp = GameBoard.moveScores[MoveNum];
    GameBoard.moveScores[MoveNum] = GameBoard.moveScores[bestNum];
    GameBoard.moveScores[bestNum] = temp;

    temp = GameBoard.moveList[MoveNum];
    GameBoard.moveList[MoveNum] = GameBoard.moveList[bestNum];
    GameBoard.moveList[bestNum] = temp;
  }
}

function ClearPvTable() {
  for (let index = 0; index < PVENTRIES; index += 1) {
    GameBoard.PvTable[index].move = NOMOVE;
    GameBoard.PvTable[index].posKey = 0;
  }
}

function CheckUp() {
  if (($.now() - SearchController.start) > SearchController.time) {
    SearchController.stop = BOOL.TRUE;
  }
}

function IsRepetition() {
  let index = 0;

  // eslint-disable-next-line
  for (index = GameBoard.hisPly - GameBoard.fiftyMove; index < GameBoard.hisPly - 1; ++index) {
    if (GameBoard.posKey === GameBoard.history[index].posKey) {
      return BOOL.TRUE;
    }
  }

  return BOOL.FALSE;
}

function Quiescence(alpha, beta) {
  // eslint-disable-next-line
  if ((SearchController.nodes & 2047) === 0) {
    CheckUp();
  }

  SearchController.nodes += 1;

  if ((IsRepetition() || GameBoard.fiftyMove >= 100) && GameBoard.ply !== 0) {
    return 0;
  }

  if (GameBoard.ply > MAXDEPTH - 1) {
    return EvalPosition();
  }

  let Score = EvalPosition();

  if (Score >= beta) {
    return beta;
  }

  if (Score > alpha) {
    // eslint-disable-next-line
    alpha = Score;
  }

  GenerateCaptures();

  let MoveNum = 0;
  let Legal = 0;
  const OldAlpha = alpha;
  let BestMove = NOMOVE;
  let Move = NOMOVE;

  // eslint-disable-next-line
  for (MoveNum = GameBoard.moveListStart[GameBoard.ply]; MoveNum < GameBoard.moveListStart[GameBoard.ply + 1]; ++MoveNum) {
    PickNextMove(MoveNum);

    Move = GameBoard.moveList[MoveNum];

    if (MakeMove(Move) === BOOL.FALSE) {
      // eslint-disable-next-line
      continue;
    }
    Legal += 1;
    Score = -Quiescence(-beta, -alpha);

    TakeMove();

    if (SearchController.stop === BOOL.TRUE) {
      return 0;
    }

    if (Score > alpha) {
      if (Score >= beta) {
        if (Legal === 1) {
          SearchController.fhf += 1;
        }
        SearchController.fh += 1;
        return beta;
      }
      // eslint-disable-next-line
      alpha = Score;
      BestMove = Move;
    }
  }

  if (alpha !== OldAlpha) {
    StorePvMove(BestMove);
  }

  return alpha;
}

function AlphaBeta(alpha, beta, depth) {
  if (depth <= 0) {
    return Quiescence(alpha, beta);
  }

  // eslint-disable-next-line
  if ((SearchController.nodes & 2047) === 0) {
    CheckUp();
  }

  SearchController.nodes += 1;

  if ((IsRepetition() || GameBoard.fiftyMove >= 100) && GameBoard.ply !== 0) {
    return 0;
  }

  if (GameBoard.ply > MAXDEPTH - 1) {
    return EvalPosition();
  }

  // eslint-disable-next-line
  const InCheck = SqAttacked(GameBoard.pList[PCEINDEX(Kings[GameBoard.side], 0)], GameBoard.side ^ 1);
  if (InCheck === BOOL.TRUE) {
    // eslint-disable-next-line
    depth += 1;
  }

  let Score = -INFINITE;

  GenerateMoves();

  let MoveNum = 0;
  let Legal = 0;
  const OldAlpha = alpha;
  let BestMove = NOMOVE;
  let Move = NOMOVE;

  const PvMove = ProbePvTable();
  if (PvMove !== NOMOVE) {
    // eslint-disable-next-line
    for (MoveNum = GameBoard.moveListStart[GameBoard.ply]; MoveNum < GameBoard.moveListStart[GameBoard.ply + 1]; ++MoveNum) {
      if (GameBoard.moveList[MoveNum] === PvMove) {
        GameBoard.moveScores[MoveNum] = 2000000;
        break;
      }
    }
  }

  // eslint-disable-next-line
  for (MoveNum = GameBoard.moveListStart[GameBoard.ply]; MoveNum < GameBoard.moveListStart[GameBoard.ply + 1]; ++MoveNum) {
    PickNextMove(MoveNum);

    Move = GameBoard.moveList[MoveNum];

    if (MakeMove(Move) === BOOL.FALSE) {
      // eslint-disable-next-line
      continue;
    }
    Legal += 1;
    Score = -AlphaBeta(-beta, -alpha, depth - 1);

    TakeMove();

    if (SearchController.stop === BOOL.TRUE) {
      return 0;
    }

    if (Score > alpha) {
      if (Score >= beta) {
        if (Legal === 1) {
          SearchController.fhf += 1;
        }
        SearchController.fh += 1;
        // eslint-disable-next-line
        if ((Move & MFLAGCAP) === 0) {
          // eslint-disable-next-line
          GameBoard.searchKillers[MAXDEPTH + GameBoard.ply] = GameBoard.searchKillers[GameBoard.ply];
          GameBoard.searchKillers[GameBoard.ply] = Move;
        }
        return beta;
      }
      // eslint-disable-next-line
      if ((Move & MFLAGCAP) === 0) {
        // eslint-disable-next-line
        GameBoard.searchHistory[GameBoard.pieces[FROMSQ(Move)] * BRD_SQ_NUM + TOSQ(Move)] += depth * depth;
      }
      // eslint-disable-next-line
      alpha = Score;
      BestMove = Move;
    }
  }

  if (Legal === 0) {
    if (InCheck === BOOL.TRUE) {
      return -MATE + GameBoard.ply;
    }
    return 0;
  }

  if (alpha !== OldAlpha) {
    StorePvMove(BestMove);
  }

  return alpha;
}

function ClearForSearch() {
  let index = 0;

  // eslint-disable-next-line
  for (index = 0; index < 14 * BRD_SQ_NUM; ++index) {
    GameBoard.searchHistory[index] = 0;
  }

  // eslint-disable-next-line
  for (index = 0; index < 3 * MAXDEPTH; ++index) {
    GameBoard.searchKillers[index] = 0;
  }

  ClearPvTable();
  GameBoard.ply = 0;
  SearchController.nodes = 0;
  SearchController.fh = 0;
  SearchController.fhf = 0;
  SearchController.start = $.now();
  SearchController.stop = BOOL.FALSE;
}

function UpdateDOMStats(domScore, domDepth) {
  let scoreText = `Score: ${(domScore / 100).toFixed(2)}`;
  if (Math.abs(domScore) > MATE - MAXDEPTH) {
    scoreText = `Score: Mate In ${MATE - (Math.abs(domScore)) - 1} moves`;
  }

  $('#OrderingOut').text(`Ordering: ${((SearchController.fhf / SearchController.fh) * 100).toFixed(2)}%`);
  $('#DepthOut').text(`Depth: ${domDepth}`);
  $('#ScoreOut').text(scoreText);
  $('#NodesOut').text(`Nodes: ${SearchController.nodes}`);
  $('#TimeOut').text(`Time: ${(($.now() - SearchController.start) / 1000).toFixed(1)}s`);
  $('#BestOut').text(`BestMove: ${PrMove(SearchController.best)}`);
}

function SearchPosition() {
  let bestMove = NOMOVE;
  let bestScore = -INFINITE;
  let Score = -INFINITE;
  let currentDepth = 0;
  let line;
  let PvNum;
  let c;
  ClearForSearch();

  // eslint-disable-next-line
  for (currentDepth = 1; currentDepth <= SearchController.depth; ++currentDepth) {
    Score = AlphaBeta(-INFINITE, INFINITE, currentDepth);

    if (SearchController.stop === BOOL.TRUE) {
      break;
    }

    bestScore = Score;
    bestMove = ProbePvTable();
    line = `D:${currentDepth} Best:${PrMove(bestMove)} Score:${bestScore
    } nodes:${SearchController.nodes}`;

    PvNum = GetPvLine(currentDepth);
    line += ' Pv:';
    // eslint-disable-next-line
    for (c = 0; c < PvNum; ++c) {
      line += ` ${PrMove(GameBoard.PvArray[c])}`;
    }
    if (currentDepth !== 1) {
      line += (` Ordering:${((SearchController.fhf / SearchController.fh) * 100).toFixed(2)}%`);
    }
    // eslint-disable-next-line
    console.log(line);
  }

  SearchController.best = bestMove;
  SearchController.thinking = BOOL.FALSE;
  UpdateDOMStats(bestScore, currentDepth);
}

function DrawMaterial() {
  if (GameBoard.pceNum[PIECES.wP] !== 0 || GameBoard.pceNum[PIECES.bP] !== 0) return BOOL.FALSE;
  if (
    GameBoard.pceNum[PIECES.wQ] !== 0
    || GameBoard.pceNum[PIECES.bQ] !== 0
    || GameBoard.pceNum[PIECES.wR] !== 0
    || GameBoard.pceNum[PIECES.bR] !== 0
  ) return BOOL.FALSE;
  if (GameBoard.pceNum[PIECES.wB] > 1 || GameBoard.pceNum[PIECES.bB] > 1) { return BOOL.FALSE; }
  if (GameBoard.pceNum[PIECES.wN] > 1 || GameBoard.pceNum[PIECES.bN] > 1) { return BOOL.FALSE; }

  if (GameBoard.pceNum[PIECES.wN] !== 0 && GameBoard.pceNum[PIECES.wB] !== 0) { return BOOL.FALSE; }
  if (GameBoard.pceNum[PIECES.bN] !== 0 && GameBoard.pceNum[PIECES.bB] !== 0) { return BOOL.FALSE; }

  return BOOL.TRUE;
}

function ThreeFoldRep() {
  let i = 0;
  let r = 0;

  // eslint-disable-next-line
  for (i = 0; i < GameBoard.hisPly; ++i) {
    if (GameBoard.history[i].posKey === GameBoard.posKey) {
      r += 1;
    }
  }
  return r;
}

function CheckResult() {
  if (GameBoard.fiftyMove >= 100) {
    $('#GameStatus').text('GAME DRAWN {fifty move rule}');
    return BOOL.TRUE;
  }

  if (ThreeFoldRep() >= 2) {
    $('#GameStatus').text('GAME DRAWN {3-fold repetition}');
    return BOOL.TRUE;
  }

  if (DrawMaterial() === BOOL.TRUE) {
    $('#GameStatus').text('GAME DRAWN {insufficient material to mate}');
    return BOOL.TRUE;
  }

  GenerateMoves();

  let MoveNum = 0;
  let found = 0;

  // eslint-disable-next-line
  for (MoveNum = GameBoard.moveListStart[GameBoard.ply]; MoveNum < GameBoard.moveListStart[GameBoard.ply + 1]; ++MoveNum) {
    if (MakeMove(GameBoard.moveList[MoveNum]) === BOOL.FALSE) {
      // eslint-disable-next-line
      continue;
    }
    found += 1;
    TakeMove();
    break;
  }

  if (found !== 0) return BOOL.FALSE;

  // eslint-disable-next-line
  const InCheck = SqAttacked(GameBoard.pList[PCEINDEX(Kings[GameBoard.side], 0)], GameBoard.side ^ 1);

  if (InCheck === BOOL.TRUE) {
    if (GameBoard.side === COLOURS.WHITE) {
      // eslint-disable-next-line
      alert('GAME OVER {black mates}');
      return BOOL.TRUE;
    }
    // eslint-disable-next-line
    alert('GAME OVER {white mates}');
    return BOOL.TRUE;
  }
  // eslint-disable-next-line
  alert('GAME DRAWN {stalemate}'); return BOOL.TRUE;
}

function CheckAndSet() {
  if (CheckResult() === BOOL.TRUE) {
    GameController.GameOver = BOOL.TRUE;
  } else {
    GameController.GameOver = BOOL.FALSE;
    $('#GameStatus').text('');
  }
}

function AddGUIPiece(sq, pce) {
  const file = FilesBrd[sq];
  const rank = RanksBrd[sq];
  const rankName = `rank${rank + 1}`;
  const fileName = `file${file + 1}`;
  const pieceFileName = `images/${SideChar[PieceCol[pce]]}${PceChar[pce].toUpperCase()}.png`;
  const imageString = `<image src="${pieceFileName}" class="Piece ${rankName} ${fileName}"/>`;
  $('#Board').append(imageString);
}

function ClearAllPieces() {
  $('.Piece').remove();
}

function SetInitialBoardPieces() {
  let sq;
  let sq120;
  let pce;

  ClearAllPieces();

  // eslint-disable-next-line
  for (sq = 0; sq < 64; ++sq) {
    sq120 = SQ120(sq);
    pce = GameBoard.pieces[sq120];
    if (pce >= PIECES.wP && pce <= PIECES.bK) {
      AddGUIPiece(sq120, pce);
    }
  }
}

function NewGame(fenStr) {
  ParseFen(fenStr);
  // PrintBoard();
  SetInitialBoardPieces();
  CheckAndSet();
}

$('#SetFen').click(() => {
  const fenStr = $('#fenIn').val();
  NewGame(fenStr);
});

export const takeBack = () => {
  if (GameBoard.hisPly > 0) {
    TakeMove();
    GameBoard.ply = 0;
    SetInitialBoardPieces();
  }
};

export const newGame = () => {
  NewGame(START_FEN);
};

function PieceIsOnSq(sq, top, left) {
  if (
    (RanksBrd[sq] === 7 - Math.round(top / 60))
    && FilesBrd[sq] === Math.round(left / 60)
  ) {
    return BOOL.TRUE;
  }

  return BOOL.FALSE;
}

function DeSelectSq(sq) {
  $('.Square').each(() => {
    if (PieceIsOnSq(sq, $(this).position().top, $(this).position().left) === BOOL.TRUE) {
      $(this).removeClass('SqSelected');
    }
  });
}

function SetSqSelected(sq) {
  $('.Square').each(() => {
    if (PieceIsOnSq(sq, $(this).position().top, $(this).position().left) === BOOL.TRUE) {
      $(this).addClass('SqSelected');
    }
  });
}

function ClickedSquare(file, rank) {
  // eslint-disable-next-line
  console.log(`ClickedSquare() at ${file},${rank}`);

  const sq = FR2SQ(file - 1, rank - 1);

  // eslint-disable-next-line
  console.log(`Clicked sq:${PrSq(sq)}`);

  SetSqSelected(sq);

  return sq;
}

function RemoveGUIPiece(sq) {
  $('.Piece').each(() => {
    if (PieceIsOnSq(sq, $(this).position().top, $(this).position().left) === BOOL.TRUE) {
      $(this).remove();
    }
  });
}

function MoveGUIPiece(move) {
  const from = FROMSQ(move);
  const to = TOSQ(move);

  // eslint-disable-next-line
  if (move & MFLAGEP) {
    let epRemove;
    if (GameBoard.side === COLOURS.BLACK) {
      epRemove = to - 10;
    } else {
      epRemove = to + 10;
    }
    RemoveGUIPiece(epRemove);
  } else if (CAPTURED(move)) {
    RemoveGUIPiece(to);
  }

  const file = FilesBrd[to];
  const rank = RanksBrd[to];
  const rankName = `rank${rank + 1}`;
  const fileName = `file${file + 1}`;

  $('.Piece').each(() => {
    if (PieceIsOnSq(from, $(this).position().top, $(this).position().left) === BOOL.TRUE) {
      $(this).removeClass();
      $(this).addClass(`Piece ${rankName} ${fileName}`);
    }
  });

  // eslint-disable-next-line
  if (move & MFLAGCA) {
    switch (to) {
      case SQUARES.G1: RemoveGUIPiece(SQUARES.H1); AddGUIPiece(SQUARES.F1, PIECES.wR); break;
      case SQUARES.C1: RemoveGUIPiece(SQUARES.A1); AddGUIPiece(SQUARES.D1, PIECES.wR); break;
      case SQUARES.G8: RemoveGUIPiece(SQUARES.H8); AddGUIPiece(SQUARES.F8, PIECES.bR); break;
      case SQUARES.C8: RemoveGUIPiece(SQUARES.A8); AddGUIPiece(SQUARES.D8, PIECES.bR); break;
      default:
    }
  } else if (PROMOTED(move)) {
    RemoveGUIPiece(to);
    AddGUIPiece(to, PROMOTED(move));
  }
}

function MakeUserMove() {
  if (UserMove.from !== SQUARES.NO_SQ && UserMove.to !== SQUARES.NO_SQ) {
    // eslint-disable-next-line
    console.log(`User Move:${PrSq(UserMove.from)}${PrSq(UserMove.to)}`);

    const parsed = ParseMove(UserMove.from, UserMove.to);

    if (parsed !== NOMOVE) {
      MakeMove(parsed);
      // PrintBoard();
      MoveGUIPiece(parsed);
      CheckAndSet();
      // PreSearch();
    }

    DeSelectSq(UserMove.from);
    DeSelectSq(UserMove.to);

    UserMove.from = SQUARES.NO_SQ;
    UserMove.to = SQUARES.NO_SQ;
  }
}

export const clickedPieceJSX = (file, rank) => {
  if (UserMove.from === SQUARES.NO_SQ) {
    UserMove.from = FR2SQ(file - 1, rank - 1);
  } else {
    UserMove.to = FR2SQ(file - 1, rank - 1);
  }

  MakeUserMove();
};

export const clickedSquareJSX = (file, rank) => {
  if (UserMove.from !== SQUARES.NO_SQ) {
    UserMove.to = ClickedSquare(
      file,
      rank,
    );
    MakeUserMove();
  }
};

export const getJSXBoard = () => {
  const JSXBoard = [];
  for (let rank = RANKS.RANK_8; rank >= RANKS.RANK_1; rank -= 1) {
    const row = [];
    for (let file = FILES.FILE_A; file <= FILES.FILE_H; file += 1) {
      const sq = FR2SQ(file, rank);
      const piece = GameBoard.pieces[sq];
      row.push(PceChar[piece]);
    }
    JSXBoard.push(row);
  }
  return (JSXBoard);
};

function StartSearch() {
  SearchController.depth = MAXDEPTH;
  // var t = $.now();
  const tt = $('#ThinkTimeChoice').val();

  // eslint-disable-next-line
  SearchController.time = parseInt(tt) * 1000;
  SearchPosition();

  MakeMove(SearchController.best);
  MoveGUIPiece(SearchController.best);
  CheckAndSet();
}

function PreSearch() {
  if (GameController.GameOver === BOOL.FALSE) {
    SearchController.thinking = BOOL.TRUE;
    setTimeout(() => { StartSearch(); }, 200);
  }
}

$('#SearchButton').click(() => {
  // eslint-disable-next-line
  GameController.PlayerSide = GameController.side ^ 1;
  PreSearch();
});

function InitBoardSquares() {
  let light = 0;
  let rankName;
  let fileName;
  let divString;
  let lastLight = 0;
  let rankIter = 0;
  let fileIter = 0;
  let lightString;

  for (rankIter = RANKS.RANK_8; rankIter >= RANKS.RANK_1; rankIter -= 1) {
    // eslint-disable-next-line
    light = lastLight ^ 1;
    // eslint-disable-next-line
    lastLight ^= 1;
    rankName = `rank${rankIter + 1}`;
    for (fileIter = FILES.FILE_A; fileIter <= FILES.FILE_H; fileIter += 1) {
      fileName = `file${fileIter + 1}`;

      if (light === 0) lightString = 'Light';
      else lightString = 'Dark';
      divString = `<div class="Square ${rankName} ${fileName} ${lightString}"/>`;
      // eslint-disable-next-line
      light ^= 1;
      $('#Board').append(divString);
    }
  }
}

function InitBoardVars() {
  let index = 0;
  // eslint-disable-next-line
  for (index = 0; index < MAXGAMEMOVES; ++index) {
    GameBoard.history.push({
      move: NOMOVE,
      castlePerm: 0,
      enPas: 0,
      fiftyMove: 0,
      posKey: 0,
    });
  }

  // eslint-disable-next-line
  for (index = 0; index < PVENTRIES; ++index) {
    GameBoard.PvTable.push({
      move: NOMOVE,
      posKey: 0,
    });
  }
}

function InitSq120To64() {
  let index = 0;
  let file = FILES.FILE_A;
  let rank = RANKS.RANK_1;
  let sq = SQUARES.A1;
  let sq64 = 0;

  // eslint-disable-next-line
  for (index = 0; index < BRD_SQ_NUM; ++index) {
    Sq120ToSq64[index] = 65;
  }

  // eslint-disable-next-line
  for (index = 0; index < 64; ++index) {
    Sq64ToSq120[index] = 120;
  }

  // eslint-disable-next-line
  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
    // eslint-disable-next-line
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      sq = FR2SQ(file, rank);
      Sq64ToSq120[sq64] = sq;
      Sq120ToSq64[sq] = sq64;
      sq64 += 1;
    }
  }
}

function InitHashKeys() {
  let index = 0;

  // eslint-disable-next-line
  for (index = 0; index < 14 * 120; ++index) {
    PieceKeys[index] = RAND_32();
  }

  SideKey = RAND_32();

  // eslint-disable-next-line
  for (index = 0; index < 16; ++index) {
    CastleKeys[index] = RAND_32();
  }
}

function InitFilesRanksBrd() {
  let index = 0;
  let file = FILES.FILE_A;
  let rank = RANKS.RANK_1;
  let sq = SQUARES.A1;

  // eslint-disable-next-line
  for (index = 0; index < BRD_SQ_NUM; ++index) {
    FilesBrd[index] = SQUARES.OFFBOARD;
    RanksBrd[index] = SQUARES.OFFBOARD;
  }

  // eslint-disable-next-line
  for (rank = RANKS.RANK_1; rank <= RANKS.RANK_8; ++rank) {
    // eslint-disable-next-line
    for (file = FILES.FILE_A; file <= FILES.FILE_H; ++file) {
      sq = FR2SQ(file, rank);
      FilesBrd[sq] = file;
      RanksBrd[sq] = rank;
    }
  }
}

function init() {
  InitFilesRanksBrd();
  InitHashKeys();
  InitSq120To64();
  InitBoardVars();
  InitMvvLva();
  InitBoardSquares();
}

$(() => {
  init();
  NewGame(START_FEN);
});
