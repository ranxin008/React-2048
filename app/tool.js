/**
 * Created by wanglei on 2017/1/2.
 */

var tool = {
    getRandomPostion: getRandomPostion,
    copyBoard: copyBoard,
    getRandom2OR4: getRandom2OR4,
    intialBoard: intialBoard,
    moveBoard: moveBoard
};

/**
 * 复制传入的board
 * @param array
 */
function copyBoard(array) {
    var ret_arr = [];
    for (let i = 0; i < 4; i++) {
        var arr = [];
        for (let j = 0; j < 4; j++) {
            arr.push(array[i][j]);
        }
        ret_arr.push(arr);
    }
    return ret_arr;
}


/**
 * 获得随机未赋值的坐标点
 * @param array
 */
function getRandomPostion(array) {
    array = copyBoard(array);
    if (!judgeHasPostion(array)) {
        return null;
    }
    var postion = [];
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            if (array[i][j] == null) {
                postion.push([i, j]);
            }
        }
    }
    var length = postion.length;
    var random = Math.floor(Math.random() * length);
    return postion[random];
}

/**
 * 判断是否存在空位置
 * @param array
 */
function judgeHasPostion(array) {
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            if (array[i][j] == null) {
                return true;
            }
        }
    }
    return false;
}


/**
 * 随机获得2或者4
 */
function getRandom2OR4() {
    let value = [2, 4];
    let postion = Math.round(Math.random());
    return value[postion];
}

/**
 * 初始化棋盘
 */
function intialBoard() {
    var board = [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null]
    ];
    var postion = getRandomPostion(board);
    board[postion[0]][postion[1]] = getRandom2OR4();
    postion = getRandomPostion(board);
    board[postion[0]][postion[1]] = getRandom2OR4();
    return board;
}

/**
 *
 * @param board
 * @param directions 37: left,  38: up, 39: right,  40: down
 */
function moveBoard(board, direction) {
    var newBoard = copyBoard(board);
    if (direction == 38) {
        //up
        for (let j = 0; j < 4; j++) {
            for (let i = 1; i < 4; i++) {
                if (newBoard[i][j] != null) {
                    let k = i - 1;
                    while (k >= 0 && newBoard[k][j] == null) {
                        k--;
                    }
                    k++;
                    if (k != i) {
                        newBoard[k][j] = newBoard[i][j];
                        newBoard[i][j] = null;
                    }
                }
            }
        }
    }
    if (direction == 40) {
        //down
        for (let j = 0; j < 4; j++) {
            for (let i = 2; i >= 0; i--) {
                if (newBoard[i][j] != null) {
                    let k = j + 1;
                    while (k < 4 && newBoard[k][j] == null) {
                        k++;
                    }
                    k--;
                    if (k != i) {
                        newBoard[k][j] = newBoard[i][j];
                        newBoard[i][j] = null;
                    }
                }
            }
        }
    }

    if (direction == 37) {
        //left
        for (let i = 0; i < 4; i++) {
            for (let j = 1; j < 4; j++) {
                if (newBoard[i][j] != null) {
                    let k = j - 1;
                    while (k >= 0 && newBoard[i][k] == null) {
                        k--;
                    }
                    k++;
                    if (k != j) {
                        newBoard[i][k] = newBoard[i][j];
                        newBoard[i][j] = null;
                    }
                }
            }
        }
    }

    if (direction == 39) {
        //right
        for (let i = 0; i < 4; i++) {
            for (let j = 2; j >= 0; j--) {
                let k = j + 1;
                while (k < 4 && newBoard[i][k] == null) {
                    k++;
                }
                k--;
                if (k != j) {
                    newBoard[i][k] = newBoard[i][j];
                    newBoard[i][j] = null;
                }
            }
        }
    }
    return newBoard;
}


export default tool;
