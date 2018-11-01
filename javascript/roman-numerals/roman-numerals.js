function toRoman(number){
    let romans = {1: 'I', 5: 'V', 10: 'X', 50: 'L', 100: 'C', 500: 'D', 1000: 'M'}
    let str = number.toString(), res = '', len = str.length
    for (let i = 0; i < len; i++) {
        let d = +str[i], val = Math.pow(10, len - i - 1)
        if (i === 0 && val === 1000) res += 'M'.repeat(d) // tests allow MMMMMM... in spite of the kata description
        else if (d <= 3) res += romans[val].repeat(d)
        else if (d === 4) res += romans[val] + romans[val * 5]
        else if (d <= 8) res += romans[val * 5] + romans[val].repeat(d - 5)
        else if (d === 9) res += romans[val] + romans[val * 10]
    }
    return res
}

module.exports = toRoman;