(function(){
    var testJs = require('../src/test');

    //testCode
    describe('this test is test.js',function(){
        it('testCase', function(){
            expect(testJs.testFunction).toBeDefined();
            expect(testJs.testFunction()).toBe("Hello Jasmine-node");
        });
    });
})();