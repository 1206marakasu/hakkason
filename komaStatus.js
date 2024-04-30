const komaStatus = {
    Bishop: {
        row: -1,
        col: -1,
        promoted: false // 昇格しているかどうかのフラグ
    },
    Gold: {
        row: -1,
        col: -1,
        promoted: false
    },
    King: {
        row: -1,
        col: -1,
        inCheck: false // 王手を受けているかどうかのフラグ
    },
    Knight: {
        row: -1,
        col: -1,
        promoted: false
    },
    Lance: {
        row: -1,
        col: -1,
        promoted: false
    },
    Pawn: {
        row: -1,
        col: -1,
        promoted: false
    },
    Rook: {
        row: -1,
        col: -1,
        promoted: false
    },
    Silver: {
        row: -1,
        col: -1,
        promoted: false
    }
};

// komaStatusオブジェクトをエクスポート
export default komaStatus;