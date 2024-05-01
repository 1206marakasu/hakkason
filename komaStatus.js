// komaStatus.js

// Komaクラスの定義
class Koma {
    constructor(name, row = -1, col = -1, promoted = false) {
        this.name = name;
        this.row = row;
        this.col = col;
        this.promoted = promoted;
    }

    // インスタンスの状態を表示するメソッド
    displayStatus() {
        console.log(`${this.name}: row=${this.row}, col=${this.col}, promoted=${this.promoted}`);
    }
}

// 各駒のクラスを定義し、Komaクラスを継承する
class Bishop extends Koma {}
class Gold extends Koma {}
class King extends Koma {
    constructor(row = -1, col = -1, inCheck = false) {
        super('King', row, col);
        this.inCheck = inCheck;
    }
}
class Knight extends Koma {}
class Lance extends Koma {}
class Pawn extends Koma {}
class Rook extends Koma {}
class Silver extends Koma {}

// オブジェクトとしてエクスポートするクラスをマップにする
const komaStatus = {
    Bishop: Bishop,
    Gold: Gold,
    King: King,
    Knight: Knight,
    Lance: Lance,
    Pawn: Pawn,
    Rook: Rook,
    Silver: Silver
};

// エクスポート
export default komaStatus;
