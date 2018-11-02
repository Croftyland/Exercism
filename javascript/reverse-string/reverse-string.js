function ReverseString(array) {
    var arr = "";
    for (var i = array.length - 1; i >=0; i--){
        arr += array[i]
    }

    return arr;
}





module.exports = ReverseString;