
let rookText =document.getElementById("rook");
let bishopText =document.getElementById("bishop");
let goldText = document.getElementById("gold");
let silverText =document.getElementById("silver");
let knightText =document.getElementById("knight");
let lanceText =document.getElementById("lance");
let pawnText = document.getElementById("pawn");
let rrookText =document.getElementById("rrook");
let rbishopText =document.getElementById("rbishop");
let rgoldText =document.getElementById("rgold");
let rsilverText =document.getElementById("rsilver");
let rknightText =document.getElementById("knight");
let rlanceText =document.getElementById("rlance");
let rpawnText = document.getElementById("rpawn");

function komaText(holdpiece1p,holdpiece2p){
rookText.textContent =`${holdpiece1p['r']}`;
bishopText.textContent = `${holdpiece1p['b']}`;
goldText.textContent =`${holdpiece1p['g']}`;
silverText.textContent = `${holdpiece1p['s']}`;
knightText.textContent = `${holdpiece1p['n']}`;
lanceText.textContent = `${holdpiece1p['l']}`;
pawnText.textContent= `${holdpiece1p['p']}`;
rrookText.textContent =`${holdpiece2p['R']}`;
rbishopText.textContent = `${holdpiece2p['B']}`;
rgoldText.textContent =`${holdpiece2p['G']}`;
rsilverText.textContent = `${holdpiece2p['S']}`;
rknightText.textContent = `${holdpiece2p['N']}`;
rlanceText.textContent = `${holdpiece2p['L']}`;
rpawnText.textContent= `${holdpiece2p['P']}`;
};

export{komaText};