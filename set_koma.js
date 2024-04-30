window.onload = function() {
    const board = document.getElementById('board');
    
    // 将棋盤のサイズを定義
    const boardSize = 9;

    // 初期配置の駒
    const initialPosition = [
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L'],
        [' ', 'R', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', 'B', ' ', ' ', ' ', ' ', ' ', 'R', ' '],
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L']
    ];

    // 駒の表示名とCSSクラスのマッピング
    const pieceClasses = {
        '王将': 'king',
        '飛車': 'rook',
        '角行': 'bishop',
        '金将': 'gold',
        '銀将': 'silver',
        '桂馬': 'knight',
        '香車': 'lance',
        '歩兵': 'pawn'
    };

    // 初期配置の駒を将棋盤に配置
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const piece = initialPosition[row][col];
            if (piece !== '_') {
                const cell = document.createElement('div');
                cell.classList.add('cell');
                if ((row + col) % 2 === 0) {
                    cell.classList.add('white');
                } else {
                    cell.classList.add('black');
                }
                const pieceElement = document.createElement('div');
                pieceElement.classList.add('piece', pieceClasses[piece]);
                pieceElement.textContent = piece;
                cell.appendChild(pieceElement);
                board.appendChild(cell);
            }
        }
    }
}
