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

    // 駒の値に対応する画像パス
    const pieceImages = {
        'k': 'king.png',
        'r': 'rook.png',
        'b': 'bishop.png',
        'g': 'gold.png',
        's': 'silver.png',
        'n': 'knight.png',
        'l': 'lance.png',
        'p': 'pawn.png',
        'K': 'king_promoted.png',
        'R': 'rook_promoted.png',
        'B': 'bishop_promoted.png',
        'G': 'gold_promoted.png',
        'S': 'silver_promoted.png',
        'N': 'knight_promoted.png',
        'L': 'lance_promoted.png',
        'P': 'pawn_promoted.png',
    };

    // 特定の座標で指定されたセルに画像を配置する関数
    function addImageToCellAtPosition(row, col, piece) {
        // 座標で指定されたセルを特定する
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

        if (cell) {
            // セルが見つかった場合は画像を配置する
            const img = document.createElement('img');
            img.src = `/koma/${pieceImages[piece]}`;
            img.alt = '駒';
            
            // 画像をセルのサイズに合わせて縮小する
            img.style.maxWidth = "100%";
            img.style.maxHeight = "100%";

            // 既にセルに何かしらの要素がある場合は削除してから画像を追加する
            while (cell.firstChild) {
                cell.removeChild(cell.firstChild);
            }

            cell.appendChild(img);
        } else {
            console.error('指定された座標のセルが見つかりません。');
        }
    }

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
                // セルの座標を設定
                cell.dataset.row = row;
                cell.dataset.col = col;
                board.appendChild(cell);

                // 特定の座標に画像を配置
                addImageToCellAtPosition(row, col, piece);
            }
        }
    }
}
