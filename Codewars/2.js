// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

export default function parse(data) {
  const res = []
  let val = 0
  for (const ele of data) {
    switch (ele) {
      case 'i':
        val++
        break
      case 'd':
        val--
        break
      case 's':
        val *= val
        break
      case 'o':
        res.push(val)
    }
  }
  return res
}

// TESTS:

// console.log('[ 0,-1 ]: ' + parse('ssoisddo'))
// console.log('[ 0,0,0,-1,-1 ]: ' + parse('odioodoo'))
// console.log('[ 8,8,8 ]: ' + parse('dddsdooo'))
// console.log('[ 10,10 ]: ' + parse('ddsdsioo'))
// console.log('[ 0,0,0,1,0 ]: ' + parse('ooodsodo'))
// console.log('[ 1,1,1,1,1 ]: ' + parse('iooososo'))
// console.log('[ 1,1,0,0 ]: ' + parse('ioosdsoo'))
// console.log('[ 9,9 ]: ' + parse('didddsoo'))
