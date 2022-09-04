const ColorAry =
  [`black`,
    `brown`,
    `red`,
    `orange`,
    `yellow`,
    `green`,
    `blue`,
    `violet`,
    `grey`,
    `white`,] as const // need "as const" for type Color
// not needed for this exercise, but this will disallow passing e.g. 'pink' to constructor
export type Color = typeof ColorAry[number]
export function decodedResistorValue([band1, band2, band3]: Color[]) : string {
    let num = ((ColorAry.indexOf(band1) * 10) + ColorAry.indexOf(band2)) * (10 ** ColorAry.indexOf(band3))
    let ohms = "ohms"
    if (num >= 1000) {
      ohms = "kiloohms"
      num = num / 1000
    }
    return `${num} ${ohms}`
}