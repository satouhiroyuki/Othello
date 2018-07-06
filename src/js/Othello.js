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

    //ボードからオセロを取り除く
    for(col=0;col< othelloBoard.length;col++){
        var board = othelloBoard[col];
        for(row=0;row<board.length;row++){
            board[row]=0;
        }
    }

    //最初のオセロを配列に設定する
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
    othelloBoard[col][row] = player;
}

function getOthelloBoard(){
    return othelloBoard;
}

function canPutOthello(col,row,player){

    var daiVal = canPutOthelloDiagonal(col,row,player);
    var rowVal = canPutOthelloRow(col,row,player);
    var colVal = canPutOthelloCol(col,row,player);
    var daiVal2 = canPutOthelloDiagonal2(col,row,player);
    return daiVal || daiVal2 || rowVal || colVal;


}

function canPutOthelloDiagonal2(col,row,player){
    //y軸を対象に射影して、判定ロジックをDiagonalと同じくする
    var othelloBoardDia = new Array(othelloBoard[col].length);

    for(num=0;num<othelloBoard[col].length;num++){
        var j=0;
        var tempBoard = new Array(othelloBoard[num].length);
        for(i=othelloBoard[col].length-1;0<i;i--){
            tempBoard[j] = othelloBoard[num][i];
            j++;
        }
        othelloBoardDia[num] = tempBoard;
    } 
    rowDia = othelloBoardDia[col].length - row -1;

    //対角線のマスは最大8マス：行と列の引き算分だけ対角線のマスが減る
    var len = othelloBoardDia[col].length - Math.abs(col-rowDia) - 1;
    var board = new Array(len);
    var opponent;
    var colJug = false;

    if(col < rowDia){
        for(i=0;i<len;i++){
            board[i] = othelloBoardDia[i][i+1]; 
        }
    }
    else if(col==rowDia){
        for(i=0;i<len;i++){
            board[i] = othelloBoardDia[i][i]; 
        }
    }
    else{
        for(i=0;i<len;i++){
            board[i] = othelloBoardDia[i+1][i];
        }
    }
    //対戦相手を判定
    opponent = getOpponent(player);

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
    opponent = getOpponent(player);

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
    opponent = getOpponent(player);

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
    opponent = getOpponent(player);

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

function setOthelloLineRow(row,line){
    for(col=0;col<line.length;col++){
        othelloBoard[col][row] = line[col];
    }
}

function turnOthello(){


    var line = new Array(othelloBoard.length);
    for(row=0;row<othelloBoard.length;row++){
        for(col=0;col<othelloBoard.length;col++){
            var board = othelloBoard[col];
            line[col] = board[row];
        }
        setOthelloLineRow(row,turnOthelloLine(line));
    }

    for(col=0;col<othelloBoard.length;col++){
        var board = othelloBoard[col];
        othelloBoard[col] = turnOthelloLine(board);
    }

}

function turnOthelloLine(board){
    var line = new Array(board.length).fill(0);
    var turnNo = 0;
    var turnFlag = false;
    var turn = false;

    for(row=0;row<board.length;row++){
        if(turn==false && board[row]!=0){
            if(turnFlag == true && turnNo != board[row]){
                line[row] = getOpponent(board[row]);
            }
            else if(turnFlag == true && turnNo == board[row]){
                line[row] = board[row];
                turn = true;
            }
            else if(turnFlag == false && turnNo != board[row]){
                turnFlag = true;
                turnNo = board[row];
                line[row] = board[row];
            }
            else{
                line[row] = board[row];
            }
        }
        else{
            line[row] = board[row];
        }
    }

    if(turn){
        return line;
    }
    else{
        return board;
    }
}

function reflushBoardItem(){
    settingBoard(8);
    drowOthello();
}

function getOpponent(player){
    var opponent;

    //対戦相手を判定
    if(player==1)
        opponent=2;
    else if(player==2)
        opponent=1;

    return opponent;
}

function getOthelloPiece(player){
    var piece;

    //対戦相手を判定
    if(player==1)
        piece="○";
    else if(player==2)
        piece="●";
    else
        piece="　";
    
    return piece;
}

//Jasmineのtestにはexportが必要になるらしい
exports.initBoard = initBoard;
exports.getBoard = getBoard;
exports.setBoard = setBoard;
exports.settingBoard = settingBoard;
exports.canPutOthello = canPutOthello;
exports.getOpponent = getOpponent;
exports.turnOthello = turnOthello;
exports.turnOthelloLine = turnOthelloLine;
exports.setOthelloLineRow = setOthelloLineRow;
exports.getOthelloBoard = getOthelloBoard;

function drowOthello(){
    for(col=0;col< othelloBoard.length;col++){
        var board = othelloBoard[col];
        for(row=0;row<board.length;row++){
            document.getElementById("btn"+col+row).innerHTML=getOthelloPiece(board[row]);
        }
    }
}

function drowOpponent(player){
    document.getElementById("Player").innerHTML = getOpponent(player);
}

//event
function onbuttonClick(col,row){
    var playerNo = document.getElementById("Player").innerHTML;

    //オセロが置けるか確認する
    if(canPutOthello(col,row,playerNo)){

        //オセロを置く
        setBoard(col,row,playerNo);
        turnOthello();

        drowOthello();
        drowOpponent(playerNo);
    }
}

function onLoad(){
    reflushBoardItem();
}

