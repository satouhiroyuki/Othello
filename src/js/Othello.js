var testString;
var othelloBoard;
var othelloBoardRows;

//盤面をまっさらに初期化する
function initBoard(boardSize){

    othelloBoard = new Array(boardSize);

    for(let y = 0; y < boardSize; y++) {
        othelloBoard[y] = new Array(boardSize).fill(0);
    }

    return true;
}

//初期化した後にゲームができるように盤面にオセロを配置する
function settingBoard(){

}

//盤面のオセロの状況を確認する
//0:NONE 1:Player1 2:Player2
function getBoard(col,row){
    var board = othelloBoard[col];
    return board[row];
}

function setBoard(col,row,player){
    var board = othelloBoard[col];
    board[row] = player;

    if(player == 1){
        var boardString = "○";
    }
    else if(player == 2){
        var boardString = "●";
    }

    return boardString;
}

function changePlayer(player){
    var nextPlayer = player;

    if(player == 1){
        nextPlayer = 2;
    }
    else if(player == 2){
        nextPlayer = 1;
    }

    return nextPlayer;
}

//補助ファンクション：置ける場所の把握のために記述
function setBoardItem(){
    for(col=0;col< othelloBoard.length;col++){
        var board = othelloBoard[col];
        for(row=0;row<board.length;row++){
            document.getElementById("td"+col+row).innerHTML=board[row];
        }
    }
}

//Jasmineのtestにはexportが必要になるらしい
exports.initBoard = initBoard;
exports.getBoard = getBoard;
exports.setBoard = setBoard;
exports.changePlayer = changePlayer;

//event
function onbuttonClick(col,row){
    var playerNo = document.getElementById("Player").innerHTML;

    var boardString = setBoard(col,row,playerNo);
    document.getElementById("btn"+col+row).innerHTML=boardString;

    var nextPlayer = changePlayer(playerNo);
    document.getElementById("Player").innerHTML=nextPlayer;

    setBoardItem();
}

