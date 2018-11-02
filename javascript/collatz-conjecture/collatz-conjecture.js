function steps(num) {
    var counts = 0;
    if (num <= 0) throw 'Only positive numbers are allowed';
    if (num === 1) return counts;
    while (num !== 1) {
        if (num % 2 === 0) {
            num = num / 2

        }
        else  {
            num = (3 * num) + 1;

        }
        counts +=1;
    }
    return counts;
}

module.exports = {steps};