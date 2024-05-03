import { komaText } from "./komakazu.js";

function catchkoma(row1,col1,row2,col2,flag,initialPosition,hold1p,hold2p,holdpiece1p,holdpiece2p){
    //王がとられたとき
    if(`${initialPosition[row2][col2].name}`==='k'||Player2HP-initialPosition[row2][col2].damage<=0){
        alert("1Pの勝ちです");
        let nextgame = confirm("もう一度プレイしますか？");
        if(nextgame){
            location.reload();
        }

    }else if(`${initialPosition[row2][col2].name}`==='K'||Player1HP-initialPosition[row2][col2].damage<=0){
        alert("2Pの勝ちです");
        let result = confirm("もう一度プレイしますか？");
        if(result){
            location.reload();
        }
    }

    if(flag){
        Player2HP-=initialPosition[row2][col2].damage;
        if(`${initialPosition[row2][col2].name}`[0]==='E'){
            holdpiece1p[`${initialPosition[row2][col2].name}`[1]]++;
            initialPosition[row2][col2].name=`${initialPosition[row2][col2].name}`[1];
            initialPosition[row2][col2].promoted=false;
        }else{
            holdpiece1p[`${initialPosition[row2][col2].name}`]++;
        }
        initialPosition[row2][col2].name=initialPosition[row2][col2].name.toUpperCase();
        hold1p.push(initialPosition[row2][col2]);
        
    }else{
        Player1HP-=initialPosition[row2][col2].damage;
        if(`${initialPosition[row2][col2].name}`[0]==='E'){
            holdpiece2p[`${initialPosition[row2][col2].name}`[1]]++;
            initialPosition[row2][col2].name=`${initialPosition[row2][col2].name}`[1];
            initialPosition[row2][col2].promoted=false;
        }else{
            holdpiece2p[`${initialPosition[row2][col2].name}`]++;
        }
        initialPosition[row2][col2].name=initialPosition[row2][col2].name.toLowerCase();
        hold2p.push(initialPosition[row2][col2]);
    }
    
    console.log(Player1HP);
    console.log(Player2HP);
    komaText(holdpiece1p,holdpiece2p);
    dynamicTextElement.innerText=`1P ${holdpiece1p['r']} ${holdpiece1p['b']} ${holdpiece1p['g']} ${holdpiece1p['s']} ${holdpiece1p['n']} ${holdpiece1p['l']} ${holdpiece1p['p']} `;
    dynamicTextElement2.innerText=`2P ${holdpiece2p['R']} ${holdpiece2p['B']} ${holdpiece2p['G']} ${holdpiece2p['S']} ${holdpiece2p['N']} ${holdpiece2p['L']} ${holdpiece2p['P']}`;
    dynamicTextElement3.innerText=`HP:${Player1HP}`;
    dynamicTextElement4.innerText=`HP:${Player2HP}`
}
export{catchkoma};