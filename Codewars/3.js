// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

export default function rgb(r, g, b) {
  const round = (n) => Math.max(0, Math.min(255, n))

  const toHex = (n) => n.toString(16).toUpperCase().padStart(2, '0')

  return `${toHex(round(r))}${toHex(round(g))}${toHex(round(b))}`
}

// Tests:

// console.log(rgb(0, 0, 0) + ' = 000000')
// console.log(rgb(0, 0, -20) + ' = 000000')
// console.log(rgb(300, 255, 255) + ' = FFFFFF')
// console.log(rgb(173, 255, 47) + ' = ADFF2F')
// console.log(rgb(255, 255, 255) + ' = FFFFFF')
// console.log(rgb(255, 255, 300) + ' = FFFFFF')
// console.log(rgb(0, 0, 0) + ' = 000000')
// console.log(rgb(148, 0, 211) + ' = 9400D3')
// console.log(rgb(1, 0, 9) + ' = 010009')
// console.log(rgb(223, 242, 15) + ' = DFF20F')
// console.log(rgb(139, -1, 241) + ' = 8B00F1')
