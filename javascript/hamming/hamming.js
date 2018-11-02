var Hamming = {
    compute: function (a, b) {
        var diff = 0;
        if (a === '' && b === '') {
            return diff
        }
        if (a.length === b.length) {
            for (var i = 0; i < a.length; i++) {
                if (a[i] !== b[i])
                    diff++;
            }
            return diff;
        }
        if  (a.length <= b.length || a.length >= b.length)
            throw new Error('left and right strands must be of equal length')

    }
}


module.exports = Hamming;

