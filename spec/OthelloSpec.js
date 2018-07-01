(function(){
    var testJs = require('../src/js/Othello');

    //testCode
    describe('this test is Othello.js',function(){
        it('testCase', function(){
            expect(testJs.testFunction).toBeDefined();
            expect(testJs.testFunction()).toBe("Hello Othello");
        });
        it('testCase', function(){
            expect(testJs.testStringValue).toBeDefined();
            expect(testJs.testStringValue()).toBe("0.0.1");
        });
        it('testCase', function(){
            expect(testJs.testVersion).toBeDefined();
            expect(testJs.testVersion()).toBe("0.0.1");
        });
        it('testCase', function(){
            expect(testJs.testStringValue).toBeDefined();
            expect(testJs.testStringValue()).toBe("0.0.1");
        });
    });
    //testCode
    describe('this test is Othello.js',function(){
        it('testCase', function(){
            expect(testJs.testStringValue).toBeDefined();
            expect(testJs.testStringValue()).toBe("0.0.1");
        });
    });
})();