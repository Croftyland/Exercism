"use strict";

var DnaTranscriber = function() {
    this.trans = {
        G: 'C',
        C: 'G',
        T: 'A',
        A: 'U',
    };
};

DnaTranscriber.prototype.toRna = function (strand) {
    return strand.split('').map( x => {
        if (!this.trans[x]) {
            throw new Error("Invalid input");
        }
        return this.trans[x];
    }).join('');
};

module.exports = DnaTranscriber;