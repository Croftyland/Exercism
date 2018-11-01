function toRna(array){
    myStr = array
        .replace('A', 'U')
        .replace('C', 'G')
        .replace('G', 'C')
        .replace('T', 'A')
    return myStr;
}