var assert = require('assert');
var cats = require('../cats.js');

describe("An area of my application", function() {
    it("should know that 2 and 2 is 4", function(){
       assert.equal(4, 2+2);
    });
});

describe("cats", function() {
    it("should be able to make a cat", function() {
        var c = new cats.Cat();
        assert.equal(typeof(c), 'object');
    });

    it("should assign a default name", function() {
        var c = new cats.Cat();
        assert.equal(c.name, 'Fluffy');
    });
});
