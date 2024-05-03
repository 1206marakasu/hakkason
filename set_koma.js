import komaStatus from "./komaStatus.js";
import { isValidMove } from "./isValidMove.js";
window.onload = function() {
    const board = document.getElementById('board');
    const boardSize = 9;
    let selectflag=false;
    let selectpiece='';
    //手持ちの駒を管理
    let hold1p = [];
    let hold2p = [];
    //駒のオブジェクトを作る
    let Pn=[                         
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P'),
        new komaStatus.Pawn('P')
    ]
    let pn=[
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p'),
        new komaStatus.Pawn('p')
    ];
    let le=[
        new komaStatus.Lance('l'),
        new komaStatus.Lance('l'),
    ]
    let Le=[
        new komaStatus.Lance('L'),
        new komaStatus.Lance('L'),
    ]
    let nt=[
        new komaStatus.Knight('n'),
        new komaStatus.Knight('n'),
    ]
    let Nt=[
        new komaStatus.Knight('N'),
        new komaStatus.Knight('N'),
    ]
    let sr=[
        new komaStatus.Silver('s'),
        new komaStatus.Silver('s'),
    ]
    let Sr=[
        new komaStatus.Silver('S'),
        new komaStatus.Silver('S'),
    ]
    let gd=[
        new komaStatus.Gold('g'),
        new komaStatus.Gold('g'),
    ]
    let Gd=[
        new komaStatus.Gold('G'),
        new komaStatus.Gold('G'),
    ]
    let kg=
        new komaStatus.King('k');
    
    let Kg=
        new komaStatus.King('K');
  
    let rk=
        new komaStatus.Rook('r');
   
    let Rk=
        new komaStatus.Rook('R');
    
    let bp=
        new komaStatus.Bishop('b');
    
    let Bp=
        new komaStatus.Bishop('B');
    
    let sp=
        new komaStatus.Space(' ');
        let initialPosition = [
            [le[0], nt[0], sr[0], gd[0], kg, gd[1], sr[1], nt[1],le[1]],
            [sp, rk, sp, sp, sp, sp, sp, bp, sp],
            [pn[0], pn[1], pn[2], pn[3], pn[4], pn[5], pn[6], pn[7], pn[8]],
            [sp, sp, sp, sp, sp, sp, sp, sp, sp],
            [sp, sp, sp, sp, sp, sp, sp, sp, sp],
            [sp, sp, sp, sp, sp, sp, sp, sp, sp],
            [Pn[0], Pn[1], Pn[2], Pn[3], Pn[4], Pn[5], Pn[6], Pn[7], Pn[8]],
            [sp, Bp, sp, sp, sp, sp, sp,Rk, sp],
            [Le[0],Nt[0], Sr[0], Gd[0], Kg, Gd[1], Sr[1], Nt[1], Le[1]]
        ];
    //initialPositionの要素と写真の紐づけ
    const pieceImages = {
        'K': '/komapng/king.png',
        'R': '/komapng/rook.png',
        'B': '/komapng/bishop.png',
        'G': '/komapng/gold.png',
        'S': '/komapng/silver.png',
        'N': '/komapng/knight.png',
        'L': '/komapng/lance.png',
        'P': '/komapng/pawn.png',
        'k':'/komapng/rking.png',
        'r':'/komapng/rrook.png',
        'b':'/komapng/rbishop.png',
        'g':'/komapng/rgold.png',
        's':'/komapng/rsilver.png',
        'n':'/komapng/rknight.png',
        'l':'/komapng/rlance.png',
        'p':'/komapng/rpawn.png',
        ' ': '/komapng/space.png',
        'NS': '/komapng/Nsilver.png',
        'NN': '/komapng/Nknight.png',
        'NL': '/komapng/Nlance.png',
        'NR': '/komapng/Nrook.png',
        'NB': '/komapng/Nbishop.png',
        'NP': '/komapng/Npawn.png',
        'Ns': '/komapng/Nrsilver.png',
        'Nn': '/komapng/Nrknight.png',
        'Nl': '/komapng/Nrlance.png',
        'Nr': '/komapng/Nrrook.png',
        'Nb': '/komapng/Nrbishop.png',
        'Np': '/komapng/Nrpawn.png',
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
        'NR': 'A',
        'NB': 'A',
        'NP': 'A',
        'NS': 'A',
        'NN': 'A',
        'NL': 'A',
        'k': 'B',
        'r': 'B',
        'b': 'B',
        'g': 'B',
        's': 'B',
        'n': 'B',
        'l': 'B',
        'p': 'B',
        'Nr': 'B',
        'Nb': 'B',
        'Np': 'B',
        'Ns': 'B',
        'Nn': 'B',
        'Nl': 'B',
    }
    //2Pと1Pの手持ちの駒の数
    let holdpiece2p ={
        'R': 0,
        'B': 0,
        'G': 0,
        'S': 0,
        'N': 0,
        'L': 0,
        'P': 0,
    }

    let holdpiece1p ={
        'r': 0,
        'b': 0,
        'g': 0,
        's': 0,
        'n': 0,
        'l': 0,
        'p': 0,
    }
    let  dynamicTextElement = document.getElementById('dynamicText');
    let  dynamicTextElement2 = document.getElementById('dynamicText2');
    dynamicTextElement.innerText='1P 0 0 0 0 0 0 0 0';
    dynamicTextElement2.innerText='2P 0 0 0 0 0 0 0 0';
    //クリックされたセルの行と列　回数
    let clickRow1 = -1;
    let clickCol1 = -1;
    let clickRow2 = -1;
    let clickCol2 = -1;
    let clickCount = 0;
    let placeflag=-1;
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
                if(selectflag){
                    if(initialPosition[row][col]===sp){
                        initialPosition[row][col]=selectpiece;
                        placeflag=true;
                        console.log(`${initialPosition[row][col].name}`);
                        if(isUpperCase(`${initialPosition[row][col].name}`)){
                            holdpiece1p[`${initialPosition[row][col].name.toLowerCase()}`]--;
                        }else{
                            holdpiece2p[`${initialPosition[row][col].name.toUpperCase()}`]--;
                        }
                        dynamicTextElement.innerText=`1P ${holdpiece1p['r']} ${holdpiece1p['b']} ${holdpiece1p['g']} ${holdpiece1p['s']} ${holdpiece1p['n']} ${holdpiece1p['l']} ${holdpiece1p['p']}`;
                        dynamicTextElement2.innerText=`2P ${holdpiece2p['R']} ${holdpiece2p['B']} ${holdpiece2p['G']} ${holdpiece2p['S']} ${holdpiece2p['N']} ${holdpiece2p['L']} ${holdpiece2p['P']}`;
                    }else{
                        alert("そこには置けません！");
                    }
                    
                }
            } else if (clickCount === 1) {
                clickRow2 = row;
                clickCol2 = col;
                if (!isValidMove(initialPosition,initialPosition[clickRow1][clickCol1], clickRow1, clickCol1, clickRow2, clickCol2)) {
                    alert("そこには動かせません！");
                    clickCount = 0; // クリック数をリセット
                    return; // 無効な移動なら何もせずに処理を終了
                }
            }
            clickCount = (clickCount + 1) % 2;
            if(!selectflag){
                 //initialPositionのタイプが一致したらポップアップ表示
                if(clickCount===0&&`${pieceType[initialPosition[clickRow1][clickCol1].name]}`===`${pieceType[initialPosition[clickRow2][clickCol2].name]}`){
                    alert("そこには動かせません！");
                    clickCount=0;
                //initialPositionのタイプがA,BまたはB,Aとなる場合は駒を取る
                }else if(clickCount===0&&(((`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='A')&&(`${pieceType[initialPosition[clickRow2][clickCol2].name]}`==='B'))||((`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='B')&&(`${pieceType[initialPosition[clickRow2][clickCol2].name]}`==='A')))){
                    if(`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='A'){
                        //1pが駒を取った時trueを送る
                        catchkoma(clickRow1,clickCol1,clickRow2,clickCol2,true);
                    }else{
                    //2pの場合はfalse
                    catchkoma(clickRow1,clickCol1,clickRow2,clickCol2,false);
                    }
                
                    initialPosition[clickRow2][clickCol2]=initialPosition[clickRow1][clickCol1];
                    initialPosition[clickRow1][clickCol1]=sp;
                }
                //入力１と２でinitialPositionの要素を入れ替え
                else if(clickCount===0){
                    console.log(`First click: row ${clickRow1}, col ${clickCol1}`);
                    console.log(`Second click: row ${clickRow2}, col ${clickCol2}`);
                    const copy=initialPosition[clickRow1][clickCol1];
                    initialPosition[clickRow1][clickCol1]=initialPosition[clickRow2][clickCol2];
                    initialPosition[clickRow2][clickCol2]=copy;
                } 
                //現在の盤面の状態をinisialPotisionに合わせる
                if(clickCount===0){
                    //alert(clickCol1 + " " + clickRow1 + " " + clickCol2 + " " + clickRow2 + " " + initialPosition[clickRow1][clickCol1] + " " + initialPosition[clickRow2][clickCol2]);
                    nari(initialPosition[clickRow2][clickCol2],clickRow1,clickRow2);
                }
            }else{
                clickCount=0;
                selectflag=false;
            }
            updateBoard();
            if(holdpiece1p['k']===1){
                alert("1Pの勝ちです");
            }
            if(holdpiece2p['K']===1){
                alert("2Pの勝ちです");
            }
        });
        //セルに写真を張り付ける
        const img = document.createElement('img');
        img.src = `${pieceImages[piece.name]}`;
        img.style.maxWidth = "100%";
        img.style.maxHeight = "100%";
        cell.appendChild(img);

        board.appendChild(cell);
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
    function catchkoma(row1,col1,row2,col2,flag){
        //王がとられたとき
        if(`${initialPosition[row2][col2].name}`==='k'){
            alert("1Pの勝ちです");
        }else if(`${initialPosition[row2][col2].name}`==='K'){
            alert("2Pの勝ちです");
        }
        if(flag){
            if(`${initialPosition[row2][col2].name}`[0]==='N'){
                holdpiece1p[`${initialPosition[row2][col2].name}`[1]]++;
                initialPosition[row2][col2].name=`${initialPosition[row2][col2].name}`[1];
                initialPosition[row2][col2].promoted=false;
            }else{
                holdpiece1p[`${initialPosition[row2][col2].name}`]++;
            }
            initialPosition[row2][col2].name=initialPosition[row2][col2].name.toUpperCase();
            hold1p.push(initialPosition[row2][col2]);
        }else{
            if(`${initialPosition[row2][col2].name}`[0]==='N'){
                holdpiece2p[`${initialPosition[row2][col2].name}`[1]]++;
                initialPosition[row2][col2].name=`${initialPosition[row2][col2].name}`[1];
                initialPosition[row2][col2].promoted=false;
            }else{
                holdpiece2p[`${initialPosition[row2][col2].name}`]++;
            }
            initialPosition[row2][col2].name=initialPosition[row2][col2].name.toLowerCase();
            hold2p.push(initialPosition[row2][col2]);
        }
        console.log(hold1p);
        console.log(hold2p);
        dynamicTextElement.innerText=`1P ${holdpiece1p['r']} ${holdpiece1p['b']} ${holdpiece1p['g']} ${holdpiece1p['s']} ${holdpiece1p['n']} ${holdpiece1p['l']} ${holdpiece1p['p']}`;
        dynamicTextElement2.innerText=`2P ${holdpiece2p['R']} ${holdpiece2p['B']} ${holdpiece2p['G']} ${holdpiece2p['S']} ${holdpiece2p['N']} ${holdpiece2p['L']} ${holdpiece2p['P']}`;
    }
    //駒が駒が成るときの処理
    function nari(koma, row1, row2) {
        if ((pieceType[koma.name] === 'A' && !koma.promoted)) {
            if(!(koma.name === 'G' || koma.name === 'K')){
                if (row2 < 3 || row1 < 3) {
                    if(row2  === 0 && (koma.name === 'P' || koma.name === 'L' || koma.name === 'N')){
                                koma.promoted = true;
                                koma.name = 'N' + koma.name;
                    }
                    else{
                        let result = confirm("成りますか？");
                        if(result){
                            koma.promoted = true;
                            koma.name = 'N' + koma.name;
                        }
                    }
                }
            }
        } else if (!koma.promoted && !(koma.name === 'g' || koma.name === 'k')) {
            if (row2 > 5 || row1 > 5) {
                if(row2 === 8 && (koma.name === 'p' || koma.name === 'l' || koma.name === 'n')){
                    koma.promoted = true;
                    koma.name = 'N' + koma.name;
                }
                else{
                let result = confirm("成りますか？");
                    if(result){
                        koma.promoted = true;
                        koma.name = 'N' + koma.name;
                    }
                }
            }
        }
    }
     // すべての.kpiece要素（画像要素）を取得
     const kpieces = document.querySelectorAll('.kpiece');
     // 各画像要素にクリックイベントを追加する
     kpieces.forEach(kpiece => {
         kpiece.addEventListener('click', () => {
             // クリックされた要素のdata-piece属性の値（駒の名前）を取得
             const pieceName = kpiece.dataset.piece;
             console.log('Clicked piece:', pieceName);
             // ここで取得したpieceNameを利用して必要な処理を実行する
             for(let i=0;i<hold1p.length;i++){
                 if(hold1p[i].name===pieceName){
                    selectflag=true;
                    selectpiece=hold1p[i];
                    if(placeflag){
                        hold1p=hold1p.filter((element, index) => index !== i);
                       
                    } 
                    
                 }
             }
             for(let i=0;i<hold2p.length;i++){
                 if(hold2p[i].name===pieceName){
                    selectflag=true;
                    selectpiece=hold2p[i];
                    if(placeflag){
                        hold2p=hold2p.filter((element, index) => index !== i);
                       
                    }
                     
                 }
             }
         });
     })
     function isUpperCase(str) {
        return str === str.toUpperCase();
    }
};
