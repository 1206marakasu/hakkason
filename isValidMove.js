function isValidMove(piece, fromRow, fromCol, toRow, toCol) {
    // クリックされた駒の種類に応じて、移動先のマスが妥当かどうかを判定する
    switch (piece.name) {
        case 'K': // 王
        case 'k':
            // 王の場合、1マスだけ移動可能
            return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1;
        case 'R': // 飛車
        case 'r':
            // 飛車の場合、直線上に動ける
            return fromRow === toRow || fromCol === toCol;
        case 'Nr': //龍王
        case 'NR':
            return (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) ||
       (fromRow === toRow || fromCol === toCol);
        case 'B': // 角行
        case 'b':
            // 角行の場合、斜めに動ける
            return Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol);
        case 'NB': //龍馬
        case 'Nb':
            return (Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1) ||
            (Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol));
        case 'G': // 金将
        case 'NP':
        case 'NL':
        case 'NN':
        case 'NS':
            return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1 &&
            !(toRow - fromRow === 1 && toCol !== fromCol);
        case 'g': // 金将
        case 'Np':
        case 'Nl':
        case 'Nn':
        case 'Ns':
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
            return fromCol === toCol && fromRow > toRow;
        case 'l':
            return fromCol === toCol && fromRow < toRow;
        case 'P':
            return (fromRow-toRow) == 1 && fromCol === toCol;
        case 'p':
            return (fromRow-toRow)== -1 && fromCol === toCol;
        default:
            return false; // その他の駒は無効な移動
    }
}
export { isValidMove };