//import komaStatus from './komaStatus.js';

window.onload = function() {
    const board = document.getElementById('board');
    const boardSize = 9;
    let initialPosition = [
        ['l', 'n', 's', 'g', 'k', 'g', 's', 'n', 'l'],
        [' ', 'r', ' ', ' ', ' ', ' ', ' ', 'b', ' '],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        [' ', 'B', ' ', ' ', ' ', ' ', ' ', 'R', ' '],
        ['L', 'N', 'S', 'G', 'K', 'G', 'S', 'N', 'L']
    ];
    //initialPositionの要素と写真の紐づけ
    const pieceImages = {
        'K': 'king.png',
        'R': 'rook.png',
        'B': 'bishop.png',
        'G': 'gold.png',
        'S': 'silver.png',
        'N': 'knight.png',
        'L': 'lance.png',
        'P': 'pawn.png',
        'k':'rking.png',
        'r':'rrook.png',
        'b':'rbishop.png',
        'g':'rgold.png',
        's':'rsilver.png',
        'n':'rknight.png',
        'l':'rlance.png',
        'p':'rpawn.png',
        ' ': 'space.png',
    };
    //initialPotisionの要素を1P 2Pで振り分ける
    let pieceType = {
        'K': 'A',
        'R': 'A',
        'B': 'A',
        'G': 'A',
        'S': 'A',
        'N': 'A',
        'L': 'A',
        'P': 'A',
        'k': 'B',
        'r': 'B',
        'b': 'B',
        'g': 'B',
        's': 'B',
        'n': 'B',
        'l': 'B',
        'p': 'B',
    }
    //クリックされたセルの行と列　回数
    let clickRow1 = -1;
    let clickCol1 = -1;
    let clickRow2 = -1;
    let clickCol2 = -1;
    let clickCount = 0;

    function isValidMove(piece, fromRow, fromCol, toRow, toCol) {
        // クリックされた駒の種類に応じて、移動先のマスが妥当かどうかを判定する
        switch (piece) {
            case 'K': // 王
            case 'k':
                // 王の場合、1マスだけ移動可能
                return Math.abs(toRow - fromRow) <= 1 && Math.abs(toCol - fromCol) <= 1;
            case 'R': // 飛車
            case 'r':
                // 飛車の場合、直線上に動ける
                return fromRow === toRow || fromCol === toCol;
            case 'B': // 角行
            case 'b':
                // 角行の場合、斜めに動ける
                return Math.abs(toRow - fromRow) === Math.abs(toCol - fromCol);
            case 'G': // 金将
            case 'S': // 銀将
            case 'g':
            case 's':
                return true;
            case 'N': // 桂馬
            case 'n':
                return Math.abs(fromRow-toRow) ==2 && Math.abs(fromCol-toCol) == 1 ;
            case 'L': // 香車
            case 'l':
                return fromCol === toCol;
            case 'P':
            case 'p':
                return Math.abs(fromRow-toRow)==1 && fromCol === toCol;
            default:
                return false; // その他の駒は無効な移動
        }
    }
    
    function addImageToCellAtPosition(row, col, piece) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('white');
        cell.dataset.row = row;
        cell.dataset.col = col;
        //クリックされたセルの座標を受け取る
        cell.addEventListener('click', () => {
            if (clickCount === 0) {
                clickRow1 = row;
                clickCol1 = col;
                
            } else if (clickCount === 1) {
                clickRow2 = row;
                clickCol2 = col;
                if (!isValidMove(initialPosition[clickRow1][clickCol1], clickRow1, clickCol1, clickRow2, clickCol2)) {
                    alert("そこには動かせません！");
                    clickCount = 0; // クリック数をリセット
                    return; // 無効な移動なら何もせずに処理を終了
                }
            }
            clickCount = (clickCount + 1) % 2;
            //initialPositionのタイプが一致したらポップアップ表示
            if(clickCount===0&&`${pieceType[initialPosition[clickRow1][clickCol1]]}`===`${pieceType[initialPosition[clickRow2][clickCol2]]}`){
                alert("そこには動かせません！");
                clickCount=0;
            }//入力１と２でinitialPositionの要素を入れ替え
            else if(clickCount===0){
                console.log(`First click: row ${clickRow1}, col ${clickCol1}`);
                console.log(`Second click: row ${clickRow2}, col ${clickCol2}`);
                const copy=initialPosition[clickRow1][clickCol1];
                initialPosition[clickRow1][clickCol1]=initialPosition[clickRow2][clickCol2];
                initialPosition[clickRow2][clickCol2]=copy;
                //現在の盤面の状態をinisialPotisionに合わせる
                updateBoard();

            }
        });
        //セルに写真を張り付ける
        const img = document.createElement('img');
        img.src = `${pieceImages[piece]}`;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        cell.appendChild(img);

        board.appendChild(cell);
    }

    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const piece = initialPosition[row][col];
            //addImageToCellAtPosition(row, col, piece);
        }
    }
    function updateBoard() {
        // 盤面の全セルをクリアして再描画
        board.innerHTML = '';
        for (let row = 0; row < boardSize; row++) {
            for (let col = 0; col < boardSize; col++) {
                const piece = initialPosition[row][col];
                addImageToCellAtPosition(row, col, piece);
            }
        }
    }

    // 初期配置の駒を将棋盤に配置
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            const piece = initialPosition[row][col];
            addImageToCellAtPosition(row, col, piece);
        }
    }
};
