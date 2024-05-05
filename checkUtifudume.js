function checkUtifudume(row,col,initialPosition,piece){
    if(row>0&&(piece.name==='p'||piece.name==='P')){
        console.log(`${initialPosition[row-1][col].name}`);
        if(initialPosition[row-1][col].name==='k'||initialPosition[row-1][col].name==='K'){
            return false;
        }
    }
    if(row<8&&(piece.name==='p'||piece.name==='P')){
        console.log(`${initialPosition[row-1][col].name}`);
        if(initialPosition[row+1][col].name==='k'||initialPosition[row+1][col].name==='K'){
            return false;
        }
    }
    return true;
}
export{checkUtifudume};