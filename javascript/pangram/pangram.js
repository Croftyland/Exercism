(function () {
    module.exports = function (str) {
        var alpha = "abcdefghijklmnopqrstuvwxyz";

        this.isPangram = function () {
            str = str.toLowerCase();
            for (var i = 0; i < alpha.length; i++) {
                if (!str.includes(alpha[i])) {
                    return false;
                }
            }
            return true;
        }
    };
})();