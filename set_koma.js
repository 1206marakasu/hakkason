import komaStatus from './komaStatus.js';
window.onload = function() {
    
    const board = document.getElementById('board');
    // 将棋盤のサイズを定義
    const boardSize = 9;
    // 初期配置の駒
    const initialPosition = [
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L'],
        [' ', 'R', ' ', ' ', ' ', ' ', ' ', 'B', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', 'B', ' ', ' ', ' ', ' ', ' ', 'R', ' '],
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L']
    ];
    // 駒の表示名とCSSクラスのマッピング
    const pieceImages = {
        'K': 'king.png',
        'R': 'rook.png',
        'B': 'bishop.png',
        'G': 'gold.png',
        'S': 'silver.png',
        'N': 'knight.png',
        'L': 'lance.png',
        'P': 'pawn.png',
        ' ': 'space.png',
    };

    function addImageToCellAtPosition(row, col, piece) {
        // 座標で指定されたセルを特定する
        const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);

        if (cell) {
            // セルが見つかった場合は画像を配置する
            const img = document.createElement('img');
            img.src = `${pieceImages[piece]}`;
            //img.alt = '駒';
            
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
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.classList.add('white');
            let clickRow=0,clickCol=0;
            cell.addEventListener('click', () => {                    
                // クリックされたセルの行(row)と列(col)を取得
                clickRow = row;
                clickCol = col;               
            });
             // セルの座標を設定
             cell.dataset.row = row;
             cell.dataset.col = col;
             board.appendChild(cell);

            board.appendChild(cell);
            addImageToCellAtPosition(row, col, piece);
        }
    }
}
