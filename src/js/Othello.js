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

    var daiVal = canPutOthelloDiagonal(col,row,player);
    var rowVal = canPutOthelloRow(col,row,player);
    var colVal = canPutOthelloCol(col,row,player);
    return daiVal || rowVal || colVal;
}

function canPutOthelloDiagonal(col,row,player){
    //対角線のマスは最大8マス：行と列の引き算分だけ対角線のマスが減る
    var len = othelloBoard[col].length - Math.abs(col-row) - 1;
    var board = new Array(len);
    var opponent;
    var colJug = false;

    if(col < row){
        for(i=0;i<len;i++){
            board[i] = othelloBoard[i][i+1]; 
        }
    }
    else if(col==row){
        for(i=0;i<len;i++){
            board[i] = othelloBoard[i][i]; 
        }
    }
    else{
        for(i=0;i<len;i++){
            board[i] = othelloBoard[i+1][i];
        }
    }

    //対戦相手を判定
    if(player==1)
        opponent=2;
    else if(player==2)
        opponent=1;

    //すでにオセロが置かれている場合、falseを返す
    if(board[col]==player || board[col]==opponent){
        return false;
    }
    
    //左方向を確認する
    for(colNo=col-1;0<=colNo;colNo--){
        var no = board[colNo];

        if(no==0)
            break;
        else if(no==opponent && colJug==false){
            colJug = true;
        }
        else if(no==player && colJug== false){
            break;
        }
        else if(no==player && colJug==true){
            return true;
        }
    }

    colJug=false;
    //右方向を確認する
    for(colNo=col+1;colNo<board.length;colNo++){
        var no = board[colNo];

        if(no==0)
            break;
        else if(no==opponent && colJug==false){
            colJug = true;
        }
        else if(no==player && colJug== false){
            break;
        }
        else if(no==player && colJug==true){
            return true;
        }
    }

    return false;
}

function canPutOthelloRow(col,row,player){

    var board = new Array(othelloBoard[col].length);
    var opponent;
    var colJug = false;

    for(i=0;i<othelloBoard[col].length;i++){
        board[i] = othelloBoard[i][row]; 
    }
    //対戦相手を判定
    if(player==1)
        opponent=2;
    else if(player==2)
        opponent=1;

    //すでにオセロが置かれている場合、falseを返す
    if(board[col]==player || board[col]==opponent){
        return false;
    }
    
    //左方向を確認する
    for(colNo=col-1;0<=colNo;colNo--){
        var no = board[colNo];

        if(no==0)
            break;
        else if(no==opponent && colJug==false){
            colJug = true;
        }
        else if(no==player && colJug== false){
            break;
        }
        else if(no==player && colJug==true){
            return true;
        }
    }

    colJug=false;
    //右方向を確認する
    for(colNo=col+1;colNo<board.length;colNo++){
        var no = board[colNo];

        if(no==0)
            break;
        else if(no==opponent && colJug==false){
            colJug = true;
        }
        else if(no==player && colJug== false){
            break;
        }
        else if(no==player && colJug==true){
            return true;
        }
    }

    return false;
}

function canPutOthelloCol(col,row,player){

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
    
    //左方向を確認する
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
    //右方向を確認する
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

