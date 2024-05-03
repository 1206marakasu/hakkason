
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
let rknightText =document.getElementById("rknight");
let rlanceText =document.getElementById("rlance");
let rpawnText = document.getElementById("rpawn");

function komaText(holdpiece1p,holdpiece2p){
rookText.textContent =`${holdpiece2p['R']}`;
bishopText.textContent = `${holdpiece2p['B']}`;
goldText.textContent =`${holdpiece2p['G']}`;
silverText.textContent = `${holdpiece2p['S']}`;
knightText.textContent = `${holdpiece2p['N']}`;
lanceText.textContent = `${holdpiece2p['L']}`;
pawnText.textContent= `${holdpiece2p['P']}`;
rrookText.textContent =`${holdpiece1p['r']}`;
rbishopText.textContent = `${holdpiece1p['b']}`;
rgoldText.textContent =`${holdpiece1p['g']}`;
rsilverText.textContent = `${holdpiece1p['s']}`;
rknightText.textContent = `${holdpiece1p['n']}`;
rlanceText.textContent = `${holdpiece1p['l']}`;
rpawnText.textContent= `${holdpiece1p['p']}`;
};

export{komaText};