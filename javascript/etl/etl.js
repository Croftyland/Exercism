function transform(obj){
    var result = {};
    for (var key in obj){
        var letters = obj[key];
        for (var i=0, item; item = letters[i]; i++){
            result[item.toLowerCase()] =  parseInt(key);
        }
    }
    return result;
}

module.exports = transform;