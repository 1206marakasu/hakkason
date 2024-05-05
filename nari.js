//駒が駒が成るときの処理
function nari(koma, row1, row2,pieceType) {
    if ((pieceType[koma.name] === 'A' && !koma.promoted)) {
        if(!(koma.name === 'G' || koma.name === 'K')){
            if (row2 < 3 || row1 < 3) {
                if((row2  === 0 && (koma.name === 'P' || koma.name === 'L' || koma.name === 'N') || (row2 === 1 && koma.name === 'N'))){
                    koma.promoted = true;
                    koma.name = 'E' + koma.name;
                }
                else{
                    let result = confirm("成りますか？");
                    if(result){
                        koma.damage+=5;
                        koma.promoted = true;
                        koma.name = 'E' + koma.name;
                    }
                }
            }
        }
    } else if (!koma.promoted && !(koma.name === 'g' || koma.name === 'k')) {
        if (row2 > 5 || row1 > 5) {
            if((row2 === 8 && (koma.name === 'p' || koma.name === 'l' || koma.name === 'n')) || (row2 === 7 && koma.name === 'n')){
                koma.promoted = true;
                koma.name = 'E' + koma.name;
            }
            else{
            let result = confirm("成りますか？");
                if(result){
                    koma.damage+=5;
                    koma.promoted = true;
                    koma.name = 'E' + koma.name;
                }
            }
        }
    }
}
export{nari};