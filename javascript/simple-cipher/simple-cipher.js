var letters = 'abcdefghijklmnopqrstuvwxyz';

function Cipher(key) {
    if (key === '') {
        //error if argument provided is empty string
        throw ('Bad key');
    }
    if (key && (key.toUpperCase() === key ||
        /^\d+$/.test(key))) {
        //error for all upper case or all digit key
        throw ('Bad key');
    }
    this.key = key || generateRandomKey();
}

Cipher.prototype.encode = function(text) {
    var characters = text.split('');
    var encodedArr = [ ];
    var self = this;
    characters.forEach(function(character,index) {
        var newIndex = letters.indexOf(character) +
            letters.indexOf(self.key[index]);
        if (newIndex >= letters.length) {
            newIndex -= letters.length;
        }
        encodedArr.push(letters[newIndex]);
    });
    return encodedArr.join('');
};

Cipher.prototype.decode = function(cipher) {
    var characters = cipher.split('');
    var decodedArr = [ ];
    var self = this;
    characters.forEach(function(character,index) {
        var newIndex = letters.indexOf(character) -
            letters.indexOf(self.key[index]);
        if (newIndex < 0) {
            newIndex += letters.length;
        }
        decodedArr.push(letters[newIndex]);
    });
    return decodedArr.join('');
};

function generateRandomKey() {
    var i,
        randomKey = '';
    for (i = 0; i < 100; i++) {
        randIndex = Math.floor(Math.random() * letters.length);
        randomKey += letters[randIndex];
    }
    return randomKey;
}

module.exports = Cipher;