function catchkoma(row1,col1,row2,col2,flag,initialPosition,hold1p,hold2p,holdpiece1p,holdpiece2p){
    //王がとられたとき
    if(`${initialPosition[row2][col2].name}`==='k'){
        alert("1Pの勝ちです");
        let nextgame = confirm("もう一度プレイしますか？");
        if(nextgame){
            location.reload();
        }

    }else if(`${initialPosition[row2][col2].name}`==='K'){
        alert("2Pの勝ちです");
        let result = confirm("もう一度プレイしますか？");
        if(result){
            location.reload();
        }
    }

    if(flag){
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
    console.log(hold1p);
    console.log(hold2p);
    dynamicTextElement.innerText=`1P ${holdpiece1p['r']} ${holdpiece1p['b']} ${holdpiece1p['g']} ${holdpiece1p['s']} ${holdpiece1p['n']} ${holdpiece1p['l']} ${holdpiece1p['p']}`;
    dynamicTextElement2.innerText=`2P ${holdpiece2p['R']} ${holdpiece2p['B']} ${holdpiece2p['G']} ${holdpiece2p['S']} ${holdpiece2p['N']} ${holdpiece2p['L']} ${holdpiece2p['P']}`;
}
export{catchkoma};