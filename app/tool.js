/**
 * Created by wanglei on 2017/1/2.
 */

var tool = {
    getRandomPostion: getRandomPostion,
    copyBoard: copyBoard,
    getRandom2OR4: getRandom2OR4,
    intialBoard: intialBoard
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
    if(!judgeHasPostion(array)){
        return null;
    }
    var postion = [];
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            if(array[i][j]==null){
                postion.push([i,j]);
            }
        }
    }
    var length = postion.length;
    var random = Math.floor(Math.random()*length);
    return postion[random];
}

/**
 * 判断是否存在空位置
 * @param array
 */
function judgeHasPostion(array) {
    for (let i = 0; i < 4; ++i) {
        for (let j = 0; j < 4; ++j) {
            if(array[i][j]==null){
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
    let value = [2,4];
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




export default tool;
