(function(){
    var testJs = require('../src/js/Othello');

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
    describe('this test is set Player2',function(){
        it('testCase', function(){
            expect(testJs.changePlayer).toBeDefined();

            expect(testJs.changePlayer(2)).toBe(1);
            expect(testJs.changePlayer(1)).toBe(2);
        });
    });
})();