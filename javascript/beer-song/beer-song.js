"use strict";

var Beer = {};

Beer.verse = function(bottles) {
    var countString = function(count) {
        if (count === 0)
            return "no more bottles";
        if (count === 1)
            return "1 bottle"
        return count.toString() + " bottles";
    };

    var bottleString = function (count) {
        if (count === 1)
            return "it";
        return "one";
    };

    var firstStrophe = function(bottles) {
        var str = countString(bottles) + " of beer on the wall, " + countString(bottles) + " of beer.";
        str = str.slice(0,1).toUpperCase() + str.slice(1);
        return str;
    }

    var secondStrophe = function(bottles) {
        if (bottles === 0)
            return "Go to the store and buy some more, 99 bottles of beer on the wall.\n";

        return "Take " + bottleString(bottles) + " down and pass it around, " + countString(bottles - 1) + " of beer on the wall.\n";
    }

    return firstStrophe(bottles) + "\n" + secondStrophe(bottles);
};

Beer.sing = function(begin, end) {
    var result = "";
    end = end || 0;
    for(; begin>=end ; begin--) {
        result = result + Beer.verse(begin) + (begin === end ? "" : "\n");
    }
    return result;
};


module.exports = Beer;