function isValidMove(initialPosition,piece, fromRow, fromCol, toRow, toCol) {
    // クリックされた駒の種類に応じて、移動先のマスが妥当かどうかを判定する
    switch (piece.name) {
        case 'K': // 王
        case 'k':
            // 王の場合、1マスだけ移動可能
            return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1;
        case 'R': // 飛車
        case 'r':
        case 'Er': //龍王
        case 'ER':
            // 飛車の場合、直線上に動ける
            let aboutR = 1;
            if(fromRow > toRow){
                for(let i = toRow + 1; i < fromRow; i++){
                    if(initialPosition[i][fromCol].name !== ' '){
                        aboutR = 0;
                    }
                }
            }
            else if(fromRow < toRow){
                for(let i = fromRow + 1; i < toRow; i++){
                    if(initialPosition[i][fromCol].name !== ' '){
                        aboutR = 0;
                    }
                }
            }
            if(fromCol > toCol){
                for(let i = toCol + 1; i < fromCol; i++){
                    if(initialPosition[fromRow][i].name !== ' '){
                        aboutR = 0;
                    }
                }
            }
            else if(fromCol < toCol){
                for(let i = fromCol + 1; i < toCol; i++){
                    if(initialPosition[fromRow][i].name !== ' '){
                        aboutR = 0;
                    }
                }
            }
            if(aboutR === 1){
                if(piece.name === 'ER' || piece.name === 'Er'){
                    return (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) ||
                    (fromRow === toRow || fromCol === toCol);
                }
                return fromRow === toRow || fromCol === toCol;
            }
            else{
                return false;
            }
        case 'B': // 角行
        case 'b':
        case 'EB': //龍馬
        case 'Eb':
            // 角行の場合、斜めに動ける
            let aboutB = 1;
            if(fromRow > toRow){
                if(fromCol > toCol){
                    for(let i = 1; i < fromRow - toRow; i++){
                        if(initialPosition[fromRow - i][fromCol - i].name !== ' '){
                            aboutB = 0;
                        }
                    }
                }
                else if(fromCol < toCol){
                    for(let i = 1; i < fromRow - toRow; i++){
                        if(initialPosition[fromRow - i][fromCol + i].name !== ' '){
                            aboutB = 0;
                        }
                    }
                }
            }
            else if(fromRow < toRow){
                if(fromCol > toCol){
                    for(let i = 1; i < toRow - fromRow; i++){
                        if(initialPosition[fromRow + i][fromCol - i].name !== ' '){
                            aboutB = 0;
                        }
                    }
                }
                else if(fromCol < toCol){
                    for(let i = 1; i < toRow - fromRow; i++){
                        if(initialPosition[fromRow + i][fromCol + i].name !== ' '){
                            aboutB = 0;
                        }
                    }
                }
            }
            if(aboutB === 1){
                if(piece.name === 'EB' || piece.name === 'Eb'){
                    return (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) ||
                    Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol);
                }
                return Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol);
            }
            else{
                return false;
            }
        case 'G': // 金将
        case 'EP':
        case 'EL':
        case 'EN':
        case 'ES':
            return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1 &&
            !(toRow - fromRow === 1 && toCol !== fromCol);
        case 'g': // 金将
        case 'Ep':
        case 'El':
        case 'En':
        case 'Es':
            return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1 &&
            !(toRow - fromRow === -1 && toCol !== fromCol);
        case 'S': // 銀将
            return Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol) == 1 ||
             (fromRow-toRow) == 1 && fromCol === toCol;
        case 's':
            return Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol) == 1 ||
             (fromRow-toRow) == -1 && fromCol === toCol;
        case 'N': // 桂馬
            return (fromRow-toRow) == 2 && Math.abs(fromCol-toCol) == 1 ;
        case 'n':
            return (fromRow-toRow) == -2 && Math.abs(fromCol-toCol) == 1 ;
        case 'L': // 香車
            let aboutL = 1;
            for(let i = toRow + 1; i < fromRow; i++){
                if(initialPosition[i][fromCol].name !== ' '){
                    aboutL = 0;
                }
            }
            if(aboutL === 1){
                return fromCol === toCol && fromRow > toRow;
            }
            else{
                return false;
            }
        case 'l':
            let aboutl = 1;
            for(let i = fromRow + 1; i < toRow; i++){
                if(initialPosition[i][fromCol].name !== ' '){
                    aboutl = 0;
                }
            }
            if(aboutl === 1){
                return fromCol === toCol && fromRow < toRow;
            }
            else{
                return false;
            }
        case 'P':
            return (fromRow-toRow) == 1 && fromCol === toCol;
        case 'p':
            return (fromRow-toRow)== -1 && fromCol === toCol;
        default:
            return false; // その他の駒は無効な移動
    }
}
export { isValidMove };