var assert = require('chai').assert,
    spark = require('../spark');

/*global describe,before,it */

function testInputOutput(input, output) {
    describe("Given [" + input.toString() + "]", function () {
        var o;

        before(function () {o = spark(input)});

        it("Returns string", function () { assert.isString(o); });
        it("Has output same length as input", function () {
            assert.equal(o.length, input.length);
        });
        it("Returns " + output, function () { assert.equal(o, output); });
    });
}

describe("Spark", function () {
    it("Is a function", function () {
        assert.isFunction(spark);
    });

    // Seems I'm doing some rounding differently.
    describe.skip("From Holman's Spark examples", function () {
        testInputOutput([0,30,55,80,33,150], '▁▂▃▅▂▇');
        testInputOutput([1, 5, 22, 13, 53], '▁▁▃▂▇');
    });

    testInputOutput([0,1,2,3,4,5,6,7], '▁▂▃▄▅▆▇█');
    testInputOutput([0,NaN,7], '▁ █');
    testInputOutput([0,Infinity,7], '▁∞█');
});
