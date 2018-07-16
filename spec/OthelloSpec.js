(function(){
    var testJs = require('../Othello');

    //testCode
    describe('this test is Othello.js',function(){
        it('testCase', function(){
            expect(testJs.initBoard(8)).toBeDefined();
            expect(testJs.initBoard(8)).toBe(true);
        });
        it('testCase', function(){
            expect(testJs.getBoard).toBeDefined();
            expect(testJs.getBoard(0,0)).toBe(0);
        });
    });

    //testCode
    describe('this test is set Player1',function(){
        it('testCase', function(){
            expect(testJs.initBoard(8)).toBeDefined();
            expect(testJs.setBoard).toBeDefined();
        });
        it('last argument set value', function(){
            expect(testJs.setBoard(7,7,1));
            expect(testJs.getBoard(7,7)).toBe(1);
        });
    });

    //testCode
    describe('this test is set Player2',function(){
        it('testCase', function(){
            expect(testJs.initBoard(8)).toBeDefined();
            expect(testJs.setBoard).toBeDefined();
        });
        it('last argument set value', function(){
            expect(testJs.setBoard(7,7,2));
            expect(testJs.getBoard(7,7)).toBe(2);
        });
    });

    //testCode
    describe('this test is get Opponent',function(){
        it('testCase', function(){
            expect(testJs.getOpponent).toBeDefined();

            expect(testJs.getOpponent(2)).toBe(1);
            expect(testJs.getOpponent(1)).toBe(2);
        });
    });

    //testCode
    describe('this test is settingBoard',function(){
        it('testCase', function(){
            expect(testJs.initBoard(8)).toBeDefined();
            expect(testJs.settingBoard).toBeDefined();

            expect(testJs.settingBoard(8));
            expect(testJs.getBoard(3,3)).toBe(1);
            expect(testJs.getBoard(3,4)).toBe(2);
            expect(testJs.getBoard(4,4)).toBe(1);
            expect(testJs.getBoard(4,3)).toBe(2);
        });
    });

    //testCode
    describe('this test is settingBoard',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.setBoard(7,7,2);

            expect(testJs.settingBoard(8));
            expect(testJs.getBoard(7,7)).toBe(0);
        });
    });

    //testCode
    describe('this test is putOthello',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);

            expect(testJs.canPutOthello(7,7,1)).toBe(false);
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            expect(testJs.canPutOthello(2,2,1)).toBe(false);
            expect(testJs.canPutOthello(2,3,1)).toBe(false);
            expect(testJs.canPutOthello(2,4,1)).toBe(true);
            expect(testJs.canPutOthello(2,5,1)).toBe(false);
            expect(testJs.canPutOthello(2,6,1)).toBe(false);

            expect(testJs.canPutOthello(3,2,1)).toBe(false);
            expect(testJs.canPutOthello(3,3,1)).toBe(false);
            expect(testJs.canPutOthello(3,4,1)).toBe(false);
            expect(testJs.canPutOthello(3,5,1)).toBe(true);
            expect(testJs.canPutOthello(3,6,1)).toBe(false);

            expect(testJs.canPutOthello(4,2,1)).toBe(true);
            expect(testJs.canPutOthello(4,3,1)).toBe(false);
            expect(testJs.canPutOthello(4,4,1)).toBe(false);
            expect(testJs.canPutOthello(4,5,1)).toBe(false);
            expect(testJs.canPutOthello(4,6,1)).toBe(false);

            expect(testJs.canPutOthello(5,2,1)).toBe(false);
            expect(testJs.canPutOthello(5,3,1)).toBe(true);
            expect(testJs.canPutOthello(5,4,1)).toBe(false);
            expect(testJs.canPutOthello(5,5,1)).toBe(false);
            expect(testJs.canPutOthello(5,6,1)).toBe(false);
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(4,4,2);
            testJs.setBoard(5,4,2);

            expect(testJs.canPutOthello(2,2,1)).toBe(false);
            expect(testJs.canPutOthello(2,3,1)).toBe(false);
            expect(testJs.canPutOthello(2,4,1)).toBe(false);
            expect(testJs.canPutOthello(2,5,1)).toBe(false);
            expect(testJs.canPutOthello(2,6,1)).toBe(false);

            expect(testJs.canPutOthello(3,2,1)).toBe(false);
            expect(testJs.canPutOthello(3,3,1)).toBe(false);
            expect(testJs.canPutOthello(3,4,1)).toBe(false);
            expect(testJs.canPutOthello(3,5,1)).toBe(true);
            expect(testJs.canPutOthello(3,6,1)).toBe(false);

            expect(testJs.canPutOthello(4,2,1)).toBe(false);
            expect(testJs.canPutOthello(4,3,1)).toBe(false);
            expect(testJs.canPutOthello(4,4,1)).toBe(false);
            expect(testJs.canPutOthello(4,5,1)).toBe(false);
            expect(testJs.canPutOthello(4,6,1)).toBe(false);

            expect(testJs.canPutOthello(5,2,1)).toBe(false);
            expect(testJs.canPutOthello(5,3,1)).toBe(true);
            expect(testJs.canPutOthello(5,4,1)).toBe(false);
            expect(testJs.canPutOthello(5,5,1)).toBe(true);
            expect(testJs.canPutOthello(5,6,1)).toBe(false);
        });
    });
    
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal2', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(2,3,2);
            testJs.setBoard(3,3,2);

            expect(testJs.canPutOthello(2,2,1)).toBe(true);
            expect(testJs.canPutOthello(2,3,1)).toBe(false);
            expect(testJs.canPutOthello(2,4,1)).toBe(true);
            expect(testJs.canPutOthello(2,5,1)).toBe(false);
            expect(testJs.canPutOthello(2,6,1)).toBe(false);

            expect(testJs.canPutOthello(3,2,1)).toBe(false);
            expect(testJs.canPutOthello(3,3,1)).toBe(false);
            expect(testJs.canPutOthello(3,4,1)).toBe(false);
            expect(testJs.canPutOthello(3,5,1)).toBe(false);
            expect(testJs.canPutOthello(3,6,1)).toBe(false);

            expect(testJs.canPutOthello(4,2,1)).toBe(true);
            expect(testJs.canPutOthello(4,3,1)).toBe(false);
            expect(testJs.canPutOthello(4,4,1)).toBe(false);
            expect(testJs.canPutOthello(4,5,1)).toBe(false);
            expect(testJs.canPutOthello(4,6,1)).toBe(false);

            expect(testJs.canPutOthello(5,2,1)).toBe(false);
            expect(testJs.canPutOthello(5,3,1)).toBe(false);
            expect(testJs.canPutOthello(5,4,1)).toBe(false);
            expect(testJs.canPutOthello(5,5,1)).toBe(false);
            expect(testJs.canPutOthello(5,6,1)).toBe(false);
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal2', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(2,4,1);
            testJs.setBoard(3,4,1);

            expect(testJs.canPutOthello(2,2,2)).toBe(false);
            expect(testJs.canPutOthello(2,3,2)).toBe(true);
            expect(testJs.canPutOthello(2,4,2)).toBe(false);
            expect(testJs.canPutOthello(2,5,2)).toBe(true);
            expect(testJs.canPutOthello(2,6,2)).toBe(false);

            expect(testJs.canPutOthello(3,2,2)).toBe(false);
            expect(testJs.canPutOthello(3,3,2)).toBe(false);
            expect(testJs.canPutOthello(3,4,2)).toBe(false);
            expect(testJs.canPutOthello(3,5,2)).toBe(false);
            expect(testJs.canPutOthello(3,6,2)).toBe(false);

            expect(testJs.canPutOthello(4,2,2)).toBe(false);
            expect(testJs.canPutOthello(4,3,2)).toBe(false);
            expect(testJs.canPutOthello(4,4,2)).toBe(false);
            expect(testJs.canPutOthello(4,5,2)).toBe(true);
            expect(testJs.canPutOthello(4,6,2)).toBe(false);

            expect(testJs.canPutOthello(5,2,2)).toBe(false);
            expect(testJs.canPutOthello(5,3,2)).toBe(false);
            expect(testJs.canPutOthello(5,4,2)).toBe(false);
            expect(testJs.canPutOthello(5,5,2)).toBe(false);
            expect(testJs.canPutOthello(5,6,2)).toBe(false);
        });
    });
    //testCode
    describe('this test is turnOthello',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);

            testJs.setBoard(3,5,1);

            expect(testJs.turnOthello());
            expect(testJs.getBoard(3,4,1)).toBe(1);

        });
    });
    //testCode
    describe('this test is getPlayersOthello',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);

            testJs.setBoard(3,5,1);

            expect(testJs.getPlayersOthello(1)).toBe(3);
            expect(testJs.getPlayersOthello(2)).toBe(2);
        });
    });
    //testCode
    describe('this test is turnOthelloLine',function(){
        it('testCase', function(){
            line = [0,1,2,2,2,2,2,1];
            exp = [0,1,1,1,1,1,1,1];
            
            result = testJs.turnOthelloLine(col,line);

            for(i=0;i<result.length;i++){
                expect(result[i]).toEqual(exp[i]);
            }
        });
    });
    //testCode
    describe('this test is turnOthelloLine',function(){
        it('testCase', function(){
            testJs.initBoard(8);
            testJs.setBoard(0,2,0);
            testJs.setBoard(1,2,1);
            testJs.setBoard(2,2,2);
            testJs.setBoard(3,2,2);
            testJs.setBoard(4,2,2);
            testJs.setBoard(5,2,2);
            testJs.setBoard(6,2,2);
            testJs.setBoard(7,2,1);

            exp = [0,1,1,1,1,1,1,1];
            
            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                expect(othellowBoard[i][2]).toEqual(exp[i]);
            }
        });
    });
    //testCode
    describe('this test is setOthelloLineRow',function(){
        it('testCase', function(){
            testJs.initBoard(8);

            var line = [0,1,2,2,2,2,2,1];
            var exp = [0,1,2,2,2,2,2,1];
            var row = 2;
            
            result = testJs.setOthelloLineRow(row,line);

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                expect(othellowBoard[i][row]).toEqual(exp[i]);
            }
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(4,4,2);
            testJs.setBoard(5,4,2);
            testJs.setBoard(5,5,1);

            exp4 = [0,0,0,2,1,2,0,0];
            exp5 = [0,0,0,0,0,1,0,0];

            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                expect(othellowBoard[i][4]).toEqual(exp4[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                console.log();
                expect(othellowBoard[i][5]).toEqual(exp5[i]);
            }
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(5,4,1);
            testJs.setBoard(6,5,2);

            exp4 = [0,0,0,2,1,2,0,0];
            exp5 = [0,0,0,0,0,0,2,0];

            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                //console.log(i + " 4 " + ":"+ othellowBoard[i][4] + ":" +exp4[i]);
                expect(othellowBoard[i][4]).toEqual(exp4[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                //console.log(i + " 5" + ":"+ othellowBoard[i][5] + ":" +exp5[i]);
                expect(othellowBoard[i][5]).toEqual(exp5[i]);
            }
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal2', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(4,3,1);
            testJs.setBoard(5,2,2);

            exp2 = [0,0,0,0,0,2,0,0];
            exp3 = [0,0,0,1,2,0,0,0];

            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                expect(othellowBoard[i][2]).toEqual(exp2[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                console.log();
                expect(othellowBoard[i][3]).toEqual(exp3[i]);
            }
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(5,4,1);
            testJs.setBoard(6,5,2);

            exp4 = [0,0,0,2,1,2,0,0];
            exp5 = [0,0,0,0,0,0,2,0];

            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                //console.log(i + " 4 " + ":"+ othellowBoard[i][4] + ":" +exp4[i]);
                expect(othellowBoard[i][4]).toEqual(exp4[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard()
                //console.log(i + " 5" + ":"+ othellowBoard[i][5] + ":" +exp5[i]);
                expect(othellowBoard[i][5]).toEqual(exp5[i]);
            }
        });
    });
    //testCode
    describe('this test is canPutOthello',function(){
        it('testCase:Diagonal', function(){
            testJs.initBoard(8);
            testJs.settingBoard(8);
            testJs.setBoard(4,3,1);
            testJs.setBoard(5,3,1);
            testJs.setBoard(3,2,2);

            exp0 = [0,0,0,0,0,0,0,0];
            exp1 = [0,0,0,0,0,0,0,0];
            exp2 = [0,0,0,0,0,0,0,0];
            exp3 = [0,0,2,2,2,0,0,0];
            exp4 = [0,0,0,1,1,0,0,0];
            exp5 = [0,0,0,1,0,0,0,0];
            exp6 = [0,0,0,0,0,0,0,0];
            exp7 = [0,0,0,0,0,0,0,0];

            testJs.turnOthello();

            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard();
                expect(othellowBoard[3][i]).toEqual(exp3[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard();
                expect(othellowBoard[4][i]).toEqual(exp4[i]);
            }
            for(i=0;i<line.length;i++){
                var othellowBoard = testJs.getOthelloBoard();
                expect(othellowBoard[5][i]).toEqual(exp5[i]);
            }
        });
    });
})();