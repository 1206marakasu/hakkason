function handleCellClick(event) {
    const clickedCell = event.target;
    const row = parseInt(clickedCell.dataset.row, 10);
    const col = parseInt(clickedCell.dataset.col, 10);

    // クリックされたセルの位置情報をコンソールに出力
    //console.log(`Clicked cell at row ${row}, col ${col}`);
}

// board要素を取得して、クリックイベントリスナーを設定
const board = document.getElementById('board');
board.addEventListener('click', handleCellClick);