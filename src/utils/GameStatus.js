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