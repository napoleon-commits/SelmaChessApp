import EmptyChessBoardString from '@/static/EmptyChessBoardString';
import ReplaceString from '@/utils/ReplaceString';

export default (object) => {
    const keys = Object.keys(object);
    let boardString = EmptyChessBoardString;
    for(let i = 0; i < keys.length; i+=1){
        for(let j = 0; j < object[keys[i]].length; j+=1){
            boardString = ReplaceString(boardString, object[keys[i]][j], keys[i]);
        }
    }
    return boardString;
};