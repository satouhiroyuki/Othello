(function(){
    var testJs = require('../src/js/Othello');

    //testCode
    describe('this test is Othello.js',function(){
        it('testCase', function(){
            expect(testJs.initBoard).toBeDefined();
            expect(testJs.initBoard()).toBe(true);
        });
        it('testCase', function(){
            expect(testJs.getBoard).toBeDefined();
            expect(testJs.getBoard(0,0)).toBe(0);
        });
    });

    //testCode
    describe('this test is set Player1',function(){
        it('testCase', function(){
            expect(testJs.initBoard).toBeDefined();
            expect(testJs.setBoard).toBeDefined();

            expect(testJs.setBoard(3,3,1));
            expect(testJs.getBoard(3,3)).toBe(1);
        });
    });

    //testCode
    describe('this test is set Player2',function(){
        it('testCase', function(){
            expect(testJs.initBoard).toBeDefined();
            expect(testJs.setBoard).toBeDefined();

            expect(testJs.setBoard(3,3,2));
            expect(testJs.getBoard(3,3)).toBe(2);
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