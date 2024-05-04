import { komaText } from "./komakazu.js";

const damageSound =document.getElementById('damage-sound');

function catchkoma(row1,col1,row2,col2,flag,initialPosition,hold1p,hold2p,holdpiece1p,holdpiece2p,komaDamage,pieceType){
    //HPが0になったとき
    if(Player2HP-komaDamage[`${initialPosition[row2][col2].name}`]<=0 && pieceType[`${initialPosition[row2][col2].name}`]==='B'){
        alert("1Pの勝ちです");
        let nextgame = confirm("もう一度プレイしますか？");
        if(nextgame){
            location.reload();
        }

    }else if(Player1HP-komaDamage[`${initialPosition[row2][col2].name}`]<=0 && pieceType[`${initialPosition[row2][col2].name}`]==='A'){
        alert("2Pの勝ちです");
        let result = confirm("もう一度プレイしますか？");
        if(result){
            location.reload();
        }
    }

    if(flag){
        Player2HP-=komaDamage[`${initialPosition[row2][col2].name}`];
        if(Player2HP<=0){
            Player2HP=0;
        }
        damageSound.currentTime = 0; 
        damageSound.play();
        document.getElementById('Player2HP').style.width = 100 - Player2HP + '%';
        document.getElementById('Player2HP').innerText = 'HP' + Player2HP + '/100';

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
        Player1HP-=komaDamage[`${initialPosition[row2][col2].name}`];
        if(Player1HP<=0){
            Player1HP=0;
        }
        damageSound.currentTime = 0; 
        damageSound.play();
        document.getElementById('Player1HP').style.width = 100 - Player1HP + '%';
        document.getElementById('Player1HP').innerText = 'HP' + Player1HP + '/100';
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
    dynamicTextElement4.innerText=`HP:${Player2HP}`;
}
export{catchkoma};