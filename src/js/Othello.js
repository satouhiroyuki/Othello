var testString;
var othelloBoard;
var othelloBoardRows;

//盤面をまっさらに初期化する
function initBoard(boardSize){

    othelloBoard = new Array(boardSize);

    for(let y = 0; y < boardSize; y++) {
        othelloBoard[y] = new Array(boardSize).fill(0);
    }

    settingBoard(boardSize);

    return true;
}

//初期化した後にゲームができるように盤面にオセロを配置する
function settingBoard(boardSize){

    for(col=0;col< othelloBoard.length;col++){
        var board = othelloBoard[col];
        for(row=0;row<board.length;row++){
            board[row]=0;
        }
    }

    setBoard(3,3,1);
    setBoard(3,4,2);
    setBoard(4,3,2);
    setBoard(4,4,1);
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

function putOthello(col,row,player){

    return canPutOthello(col,row,player);
}

function canPutOthello(col,row,player){

    var board = othelloBoard[col];
    var opponent;
    var rowJug = false;

    //対戦相手を判定
    if(player==1)
        opponent=2;
    else if(player==2)
        opponent=1;

    //すでにオセロが置かれている場合、falseを返す
    if(board[row]==player || board[row]==opponent){
        return false;
    }
    
    //
    for(rowNo=row-1;0<=rowNo;rowNo--){
        var no = board[rowNo];

        if(no==0)
            break;
        else if(no==opponent && rowJug==false){
            rowJug = true;
        }
        else if(no==player && rowJug== false){
            break;
        }
        else if(no==player && rowJug==true){
            return true;
        }
    }

    rowJug=false;
    for(rowNo=row+1;rowNo<board.length;rowNo++){
        var no = board[rowNo];

        if(no==0)
            break;
        else if(no==opponent && rowJug==false){
            rowJug = true;
        }
        else if(no==player && rowJug== false){
            break;
        }
        else if(no==player && rowJug==true){
            return true;
        }
    }

    return false;
}


function reflushBoardItem(boardSize){
    settingBoard(boardSize);

    for(col=0;col< othelloBoard.length;col++){
        var board = othelloBoard[col];
        for(row=0;row<board.length;row++){
            if(board[row] == 1)
                document.getElementById("btn"+col+row).innerHTML="○";
            else if(board[row] == 2)
                document.getElementById("btn"+col+row).innerHTML="●";
            else
                document.getElementById("btn"+col+row).innerHTML="　";
        }
    }
}

//Jasmineのtestにはexportが必要になるらしい
exports.initBoard = initBoard;
exports.getBoard = getBoard;
exports.setBoard = setBoard;
exports.changePlayer = changePlayer;
exports.settingBoard = settingBoard;
exports.putOthello = putOthello;
exports.canPutOthello = canPutOthello;

//event
function onbuttonClick(col,row){
    var playerNo = document.getElementById("Player").innerHTML;

    var boardString = setBoard(col,row,playerNo);
    document.getElementById("btn"+col+row).innerHTML=boardString;

    var nextPlayer = changePlayer(playerNo);
    document.getElementById("Player").innerHTML=nextPlayer;
}

function onLoad(){
    reflushBoardItem();
}

