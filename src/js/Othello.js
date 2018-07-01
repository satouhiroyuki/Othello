var testString;

function testFunction(){
    testString = "Hello Othello";
    return testString;
};

function testVersion(){
    testString = "0.0.1";
    return testString;
};
function testStringValue(){
    return testString;
};

//Jasmineのtestにはexportが必要になるらしい
exports.testFunction = testFunction;
exports.testVersion = testVersion;
exports.testStringValue = testStringValue;
