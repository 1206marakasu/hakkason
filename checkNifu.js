function checkNifu(col,initialPosition,piece){
    if(piece.name==='P'){
        for(let i=0;i<9;i++){
            if(initialPosition[i][col].name==='P'){
                return false;
            }
        }
    }
    if(piece.name==='p'){
        for(let i=0;i<9;i++){
            if(initialPosition[i][col].name==='p'){
                return false;
            }
        }
    }
    return true;
}
export{checkNifu}