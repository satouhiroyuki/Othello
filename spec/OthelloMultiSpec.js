(function(){
    var testJs = require('../src/js/Othello');

    //testCode
    describe('this test is Othello.js',function(){
        it('testCase', function(){
            expect(testJs.testStringValue).toBeDefined();
            expect(testJs.testStringValue()).toBe("0.0.1");
        });
    });
})();