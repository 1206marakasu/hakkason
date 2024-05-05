import komaStatus from "./komaStatus.js";
import { isValidMove } from "./isValidMove.js";
import { catchkoma } from "./catchkoma.js";
import { nari } from "./nari.js";
import { komaText } from "./komakazu.js";
import { checkNifu } from "./checkNifu.js";
import { checkUtifudume } from "./checkUtifudume.js";
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
    ];
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
    const komaDamage = {
        'K': 100,
        'R': 20,
        'B': 20,
        'G': 10,
        'S': 10,
        'N': 6,
        'L': 6,
        'P': 3,
        'k': 100,
        'r': 20,
        'b': 20,
        'g': 10,
        's': 10,
        'n': 6,
        'l': 6,
        'p': 3,
        'ER': 30,
        'EB': 30,
        'ES': 10,
        'EN': 10,
        'EL': 10,
        'EP': 6,
        'Er': 30,
        'Eb': 30,
        'Es': 10,
        'En': 10,
        'El': 10,
        'Ep': 6,
    };
    //initialPositionの要素と写真の紐づけ
    const pieceImages = {
        'K': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/king.png?raw=true',
        'R': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/rook.png?raw=true',
        'B': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/bishop.png?raw=true',
        'G': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/gold.png?raw=true',
        'S': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/silver.png?raw=true',
        'N': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/knight.png?raw=true',
        'L': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/lance.png?raw=true',
        'P': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/pawn.png?raw=true',
        'k':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rking.png?raw=true',
        'r':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rrook.png?raw=true',
        'b':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rbishop.png?raw=true',
        'g':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rgold.png?raw=true',
        's':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rsilver.png?raw=true',
        'n':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rknight.png?raw=true',
        'l':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rlance.png?raw=true',
        'p':'https://github.com/1206marakasu/hakkason/blob/main/komapng/rpawn.png?raw=true',
        ' ': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/space.png?raw=true',
        'ES': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nsilver.png?raw=true',
        'EN': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nknight.png?raw=true',
        'EL': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nlance.png?raw=true',
        'ER': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrook.png?raw=true',
        'EB': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nbishop.png?raw=true',
        'EP': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Npawn.png?raw=true',
        'Es': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrsilver.png?raw=true',
        'En': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrknight.png?raw=true',
        'El': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrlance.png?raw=true',
        'Er': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrrook.png?raw=true',
        'Eb': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrbishop.png?raw=true',
        'Ep': 'https://github.com/1206marakasu/hakkason/blob/main/komapng/Nrpawn.png?raw=true',
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
        'ER': 'A',
        'EB': 'A',
        'EP': 'A',
        'ES': 'A',
        'EN': 'A',
        'EL': 'A',
        'k': 'B',
        'r': 'B',
        'b': 'B',
        'g': 'B',
        's': 'B',
        'n': 'B',
        'l': 'B',
        'p': 'B',
        'Er': 'B',
        'Eb': 'B',
        'Ep': 'B',
        'Es': 'B',
        'En': 'B',
        'El': 'B',
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
    //プレイヤーのHP
    let Player1HP = 100;
    document.getElementById('Player1HP').style.width = 100 - Player1HP + '%';
    document.getElementById('Player1HP').innerText = 'HP' + Player1HP + '/100';
    let Player2HP = 100;
    document.getElementById('Player2HP').style.width = 100 - Player2HP + '%';
    document.getElementById('Player2HP').innerText = 'HP' + Player2HP + '/100';
    window.Player1HP=Player1HP;
    window.Player2HP=Player2HP;
    //クリック音
    const clickSound = document.getElementById('click-sound');
    let  dynamicTextElement = document.getElementById('dynamicText');
    let  dynamicTextElement2 = document.getElementById('dynamicText2');
    let  dynamicTextElement3 = document.getElementById('dynamicText3');
    let  dynamicTextElement4 = document.getElementById('dynamicText4');
    window.dynamicTextElement=dynamicTextElement;
    window.dynamicTextElement2=dynamicTextElement2;
    window.dynamicTextElement3=dynamicTextElement3;
    window.dynamicTextElement4=dynamicTextElement4;
   
    dynamicTextElement.innerText=`1P 0 0 0 0 0 0 0 0 `;
    dynamicTextElement2.innerText=`2P 0 0 0 0 0 0 0 0`;
    dynamicTextElement3.innerText=`HP:${Player1HP}`;
    dynamicTextElement4.innerText=`HP:${Player2HP}`;
    //クリックされたセルの行と列　回数
    let clickRow1 = -1;
    let clickCol1 = -1;
    let clickRow2 = -1;
    let clickCol2 = -1;
    let clickCount = 0;
    let placeflag=false;
    let retry = 0;
    let selectrow = 10;
    let selectcol = 10;
    
    function addImageToCellAtPosition(row, col, piece) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add('white');
        if(row === selectrow && col === selectcol&&clickCount===1){
            console.log(row);
            console.log(col);
            console.log(selectrow);
            console.log(selectcol);
            console.log(clickCount);
            cell.classList.add('selected');
          
        }
        cell.dataset.row = row;
        cell.dataset.col = col;
        //クリックされたセルの座標を受け取る
        cell.addEventListener('click', () => {
            if (clickCount === 0) {
                clickRow1 = row;
                clickCol1 = col;
                selectrow = row;
                selectcol = col;
                if(selectflag){
                    if(initialPosition[row][col]===sp){
                        if(checkNifu(col,initialPosition,selectpiece)&&checkUtifudume(row,col,initialPosition,selectpiece)){
                            initialPosition[row][col]=selectpiece;
                            placeflag=true;
                            console.log(`${initialPosition[row][col].name}`);
                            if(isUpperCase(`${initialPosition[row][col].name}`)){
                                holdpiece1p[`${initialPosition[row][col].name.toLowerCase()}`]--;
                                hold1p.pop();
                            }else{
                                holdpiece2p[`${initialPosition[row][col].name.toUpperCase()}`]--;
                                hold2p.pop();
                            }
                            komaText(holdpiece1p,holdpiece2p);
                            dynamicTextElement.innerText=`1P ${holdpiece1p['r']} ${holdpiece1p['b']} ${holdpiece1p['g']} ${holdpiece1p['s']} ${holdpiece1p['n']} ${holdpiece1p['l']} ${holdpiece1p['p']} `;
                            dynamicTextElement2.innerText=`2P ${holdpiece2p['R']} ${holdpiece2p['B']} ${holdpiece2p['G']} ${holdpiece2p['S']} ${holdpiece2p['N']} ${holdpiece2p['L']} ${holdpiece2p['P']}`;
                            //クリック音
                            clickSound.currentTime = 0; 
                            clickSound.play();
                        }else if(!checkNifu(col,initialPosition,selectpiece)){
                            alert("二歩です！");
                        }else{
                            alert("王の前に歩を置くことはできません");
                        }
                       
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
                    retry = 1;
                //initialPositionのタイプがA,BまたはB,Aとなる場合は駒を取る
                }else if(clickCount===0&&(((`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='A')&&(`${pieceType[initialPosition[clickRow2][clickCol2].name]}`==='B'))||((`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='B')&&(`${pieceType[initialPosition[clickRow2][clickCol2].name]}`==='A')))){
                    if(`${pieceType[initialPosition[clickRow1][clickCol1].name]}`==='A'){
                        //1pが駒を取った時trueを送る
                        catchkoma(clickRow1,clickCol1,clickRow2,clickCol2,true,initialPosition,hold1p,hold2p,holdpiece1p,holdpiece2p,komaDamage,pieceType);
                    }else{
                    //2pの場合はfalse
                    catchkoma(clickRow1,clickCol1,clickRow2,clickCol2,false,initialPosition,hold1p,hold2p,holdpiece1p,holdpiece2p,komaDamage,pieceType);
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
                
                if(clickCount===0 && retry === 0){
                    //alert(clickCol1 + " " + clickRow1 + " " + clickCol2 + " " + clickRow2 + " " + initialPosition[clickRow1][clickCol1] + " " + initialPosition[clickRow2][clickCol2]);
                    nari(initialPosition[clickRow2][clickCol2],clickRow1,clickRow2,pieceType);
                    clickSound.currentTime = 0; 
                    clickSound.play();
                }
                retry = 0;
            }else{
                clickCount=0;
                selectflag=false;
            }
            //現在の盤面の状態をinisialPotisionに合わせる
            updateBoard();
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
                        placeflag=false;
                       
                    } 
                    
                 }
             }
             for(let i=0;i<hold2p.length;i++){
                 if(hold2p[i].name===pieceName){
                    selectflag=true;
                    selectpiece=hold2p[i];
                    if(placeflag){
                        placeflag=false;
                       
                    }
                     
                 }
             }
         });
     })
     function isUpperCase(str) {
        return str === str.toUpperCase();
    }
};
