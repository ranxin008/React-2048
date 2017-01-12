/**
 * Created by wanglei on 2017/1/2.
 */

var tool = {
    getRandomPostion: getRandomPostion,
    copyBoard: copyBoard,
    getRandom2OR4: getRandom2OR4,
    intialBoard: intialBoard,
    moveBoard: moveBoard,
    mergeBoard: mergeBoard,
    isLose: isLose,
    isWin: isWin
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
 * 移动棋盘
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
                    let k = i + 1;
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

/**
 * 合并棋盘
 * @param board
 * @param directions 37: left,  38: up, 39: right,  40: down
 */
function mergeBoard(board, direction) {
    var score = 0;
    var newBoard = copyBoard(board);
    if (direction == 38) {
        //up
        for (let j = 0; j < 4; j++) {
            for (let i = 0; i < 3; i++) {
                if (newBoard[i][j] && newBoard[i + 1][j] && newBoard[i][j] == newBoard[i + 1][j]) {
                    newBoard[i][j] *= 2;
                    newBoard[i + 1][j] = null;
                    score += newBoard[i][j];
                }
            }
        }
    }
    if (direction == 40) {
        //down
        for (let j = 0; j < 4; j++) {
            for (let i = 3; i > 0; i--) {
                if (newBoard[i][j] && newBoard[i - 1][j] && newBoard[i][j] == newBoard[i - 1][j]) {
                    newBoard[i][j] *= 2;
                    newBoard[i - 1][j] = null;
                    score += newBoard[i][j];
                }
            }
        }
    }
    if (direction == 37) {
        //left
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 3; j++) {
                if (newBoard[i][j] && newBoard[i][j + 1] && newBoard[i][j] == newBoard[i][j + 1]) {
                    newBoard[i][j] *= 2;
                    newBoard[i][j + 1] = null;
                    score += newBoard[i][j];
                }
            }
        }
    }
    if (direction == 39) {
        //right
        for (let i = 0; i < 4; i++) {
            for (let j = 3; j > 0; j--) {
                if (newBoard[i][j] && newBoard[i][j - 1] && newBoard[i][j] == newBoard[i][j - 1]) {
                    newBoard[i][j] *= 2;
                    newBoard[i][j - 1] = null;
                    score += newBoard[i][j];
                }
            }
        }
    }
    return {
        board: newBoard,
        score: score
    }
}

/**
 * 判断当前是否已经成功
 * @param arrays
 * @returns {boolean}
 */
function isWin(arrays) {
    arrays.forEach(function (array, rindex) {
        array.forEach(function (value, cindex) {
            if (value == 2048) {
                return true;
            }
        });
    });
    return false;
}


/**
 * 判断两个棋盘是否相同
 * @param arrays1
 * @param arrays2
 */
function isSameBoard(arrays1, arrays2) {
    console.log(JSON.stringify(arrays1));
    console.log(JSON.stringify(arrays2));
    for (var i = 0; i < arrays1.length; i++) {
        for (var j = 0; j < arrays2.length; j++) {
            if (arrays1[i][j] != arrays2[i][j]) {
                return false;
            }
        }
    }
    return true;
}

/**
 * 判断当前游戏是否已经失败
 * @param array
 */
function isLose(array) {
    if (judgeHasPostion(array)) {
        return false;
    }
    var result = true;
    console.log('result1: '+result);
    [37, 38, 39, 40].forEach(function (value) {
        var newBoard = mergeBoard(array, value).board;
        if (!isSameBoard(newBoard, array)) {
            console.log('coming...');
            console.log('newBoard：'+newBoard);
            console.log('oldBoard:' +array);
            result = false;
        }
    });
    console.log('result2: '+result);
    return result;
}


export default tool;
