//import komaStatus from './komaStatus.js';
window.onload = function() {
    const board = document.getElementById('board');
    // 将棋盤のサイズを定義
    const boardSize = 9;

    // 初期配置の駒
    const initialPosition = [
        ['l', 'n', 's', 'g', 'k', 'g', 's', 'n', 'l'],
        ['_', 'r', '_', '_', '_', '_', '_', 'b', '_'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
        ['_', '_', '_', '_', '_', '_', '_', '_', '_'],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['_', 'B', '_', '_', '_', '_', '_', 'R', '_'],
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L']
    ];

    // 駒の表示名とCSSクラスのマッピング
    const pieceClasses = {
        'K': 'king',
        'R': 'rook',
        'B': 'bishop',
        'G': 'gold',
        'S': 'silver',
        'N': 'knight',
        'L': 'lance',
        'P': 'pawn'
    };

    // 初期配置の駒を将棋盤に配置
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const piece = initialPosition[row][col];
            if (piece !== ' ') {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if ((row + col) % 2 === 0) {
                    cell.classList.add('white');
                } else {
                    cell.classList.add('black');
                }
                cell.addEventListener('click', () => {
                    // クリックされたセルの行(row)と列(col)を取得
                    const clickedRow = row;
                    const clickedCol = col;
                    console.log(`Clicked cell at row ${clickedRow}, col ${clickedCol}`);
                    console.log(initialPosition[`${clickedRow}`][`${clickedCol}`]);
                    // クリックされたセルの情報を利用して処理を行う
                    // 例: movePiece(clickedRow, clickedCol);
                });
                const pieceElement = document.createElement('div');
                pieceElement.classList.add('piece', pieceClasses[piece]);
                pieceElement.textContent = piece;
                cell.appendChild(pieceElement);
                board.appendChild(cell);
            }
        }
    }
}
