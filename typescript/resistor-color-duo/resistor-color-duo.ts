const color: { [key: string]: number}= {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
}

export function decodedValue([a, b,] : string[]): number {
 return color[a] * 10 + color[b];
}
