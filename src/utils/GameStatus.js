import { ParseFen, } from '@/utils/chessengine/board';
import { DrawMaterial, PreSearch } from '@/utils/chessengine/gui';
import { BOOL, MoveStats, GameController } from '@/utils/chessengine/def';
import { InitFilesRanksBrd, InitHashKeys, InitSq120To64, InitBoardVars } from '@/utils/chessengine/main';
import { InitMvvLva } from '@/utils/chessengine/movegen';

const GameStatusEnum = {
    0: (winningColor) => `Checkmate, ${winningColor} wins!`,
    1: "Fifty-Move Draw",
    2: "Threefold Draw",
    3: "Draw by Stalemate",
    4: "Draw by Insufficient Material",
};

const checkForThreeFold = (allFens) => {
    let threeFoldBool = false;
    for(let i = 1; i < allFens.length; i+=1){ // O(n^2)
        const position = allFens[i].split(' ')[0];
        let positionCount = 0;
        for(let j = 1; j < allFens.length; j +=1) {
            if(allFens[j].split(' ')[0] === position) positionCount += 1;
        }
        if(positionCount === 3){
            threeFoldBool = true;
            i = allFens.length; // end for loop
        }
    }
    return threeFoldBool;
}

export default (
    lastToMove,
    turn,
    currentFen,
    allFens,
) => {
    InitFilesRanksBrd();
    InitHashKeys();
    InitSq120To64();
    InitBoardVars();
    InitMvvLva();
    ParseFen(currentFen);
    if (DrawMaterial() === BOOL.TRUE) {
        return GameStatusEnum[4];
    }
    GameController.PlayerSide = GameController.side ^ 1;
    PreSearch("1");
    if(!MoveStats.BestMove){
        return GameStatusEnum[3];
    }
    if(turn === undefined){
        return GameStatusEnum[0](lastToMove);
    }
    if(currentFen.split(' ')[currentFen.split(' ').length-2] === "100"){
        return GameStatusEnum[1];
    }
    if(checkForThreeFold(allFens)){
        return GameStatusEnum[2];
    }
    return undefined;
};