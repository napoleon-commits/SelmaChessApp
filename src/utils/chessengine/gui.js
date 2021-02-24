/* eslint no-bitwise: ["error", { "allow": ["^","&"] }] */

import { SearchController, SearchPosition } from './search';
import { MakeMove, TakeMove } from './makemove';
import { BOOL, GameController, MAXDEPTH, COLOURS, GameBoard, Kings, PCEINDEX, PIECES, SQUARES, TOSQ, MFLAGCA, MFLAGEP, PROMOTED, CAPTURED, } from './def';
import { GenerateMoves } from './movegen';
import { SqAttacked } from './board';

function ThreeFoldRep() {
  let i = 0;
  let r = 0;

  for (i = 0; i < GameBoard.hisPly; i += 1) {
    if (GameBoard.history[i].posKey === GameBoard.posKey) {
      r += 1;
    }
  }
  return r;
}

export function DrawMaterial() {
  if (GameBoard.pceNum[PIECES.wP] !== 0 || GameBoard.pceNum[PIECES.bP] !== 0) return BOOL.FALSE;
  if (GameBoard.pceNum[PIECES.wQ] !== 0 || GameBoard.pceNum[PIECES.bQ] !== 0 ||
          GameBoard.pceNum[PIECES.wR] !== 0 || GameBoard.pceNum[PIECES.bR] !== 0) return BOOL.FALSE;
  if (GameBoard.pceNum[PIECES.wB] > 1 || GameBoard.pceNum[PIECES.bB] > 1) { return BOOL.FALSE; }
  if (GameBoard.pceNum[PIECES.wN] > 1 || GameBoard.pceNum[PIECES.bN] > 1) { return BOOL.FALSE; }

  if (GameBoard.pceNum[PIECES.wN] !== 0 && GameBoard.pceNum[PIECES.wB] !== 0) { return BOOL.FALSE; }
  if (GameBoard.pceNum[PIECES.bN] !== 0 && GameBoard.pceNum[PIECES.bB] !== 0) { return BOOL.FALSE; }

  return BOOL.TRUE;
}

function CheckResult() {
  if (GameBoard.fiftyMove >= 100) {
    //  $("#GameStatus").text("GAME DRAWN {fifty move rule}");
    return BOOL.TRUE;
  }

  if (ThreeFoldRep() >= 2) {
    // $("#GameStatus").text("GAME DRAWN {3-fold repetition}");
    return BOOL.TRUE;
  }

  if (DrawMaterial() === BOOL.TRUE) {
    // $("#GameStatus").text("GAME DRAWN {insufficient material to mate}");
    return BOOL.TRUE;
  }

  GenerateMoves();

  let MoveNum = 0;
  let found = 0;

  for (
    MoveNum = GameBoard.moveListStart[GameBoard.ply];
    MoveNum < GameBoard.moveListStart[GameBoard.ply + 1];
    MoveNum += 1
  ) {
    if (MakeMove(GameBoard.moveList[MoveNum]) === BOOL.FALSE) {
      // eslint-disable-next-line
      continue;
    }
    found += 1;
    TakeMove();
    break;
  }

  if (found !== 0) return BOOL.FALSE;

  const InCheck = SqAttacked(
    GameBoard.pList[PCEINDEX(Kings[GameBoard.side], 0)],
    GameBoard.side ^ 1,
  );

  if (InCheck === BOOL.TRUE) {
    if (GameBoard.side === COLOURS.WHITE) {
      //   $("#GameStatus").text("GAME OVER {black mates}");
      return BOOL.TRUE;
    }
    //   $("#GameStatus").text("GAME OVER {white mates}");
    return BOOL.TRUE;
  } else {
    return BOOL.TRUE;
  }
  // $("#GameStatus").text("GAME DRAWN {stalemate}");return BOOL.TRUE;


  // return BOOL.FALSE;
}

function CheckAndSet() {
  if (CheckResult() === BOOL.TRUE) {
    GameController.GameOver = BOOL.TRUE;
  } else {
    GameController.GameOver = BOOL.FALSE;
    // $("#GameStatus").text('');
  }
}

function MoveGUIPiece(move) {
  // var from = FROMSQ(move);
  const to = TOSQ(move);

  if (move & MFLAGEP) {
    //
  } else if (CAPTURED(move)) {
    // 
  }

  if (move & MFLAGCA) {
    switch (to) {
      case SQUARES.G1: break;
      case SQUARES.C1: break;
      case SQUARES.G8: break;
      case SQUARES.C8: break;
      default:
    }
  } else if (PROMOTED(move)) {
    //
  }
}

function StartSearch() {
  SearchController.depth = MAXDEPTH;
  SearchController.time = 1;
  SearchPosition();

  MakeMove(SearchController.best);
  MoveGUIPiece(SearchController.best);
  CheckAndSet();
}

export function PreSearch() {
  if (GameController.GameOver === BOOL.FALSE) {
    SearchController.thinking = BOOL.TRUE;
    StartSearch();
  }
}
