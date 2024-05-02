// komaStatus.js

// Komaクラスの定義
class Koma {
    constructor(name,catched=false, promoted = false) {
        this.name=name;
        this.catched=catched;
        this.promoted = promoted;
    }

    // インスタンスの状態を表示するメソッド
    displayStatus() {
        console.log(`${this.name}: catched=${this.catched} promoted=${this.promoted}`);
    }
}

// 各駒のクラスを定義し、Komaクラスを継承する
class Bishop extends Koma {}
class Gold extends Koma {}
class King extends Koma {}
class Knight extends Koma {}
class Lance extends Koma {}
class Pawn extends Koma {}
class Rook extends Koma {}
class Silver extends Koma {}
class Space extends Koma {}
// オブジェクトとしてエクスポートするクラスをマップにする
const komaStatus = {
    Bishop: Bishop,
    Gold: Gold,
    King: King,
    Knight: Knight,
    Lance: Lance,
    Pawn: Pawn,
    Rook: Rook,
    Silver: Silver,
    Space : Space
};

// エクスポート
export default komaStatus;