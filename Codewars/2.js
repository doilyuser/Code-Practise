// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

// i increments the value (initially 0)
// d decrements the value
// s squares the value
// o outputs the value into the return array
// Invalid characters should be ignored.

export default function parse(data) {
  return data
}

// The case 'ssoisddo' should have resualted in [ 0,-1 ] not [ 8,64 ]
// The case 'odioodoo' should have resualted in [ 0,0,0,-1,-1 ] not [ 8,64 ]
// The case 'dddsdooo' should have resualted in [ 8,8,8 ] not [ 8,64 ]
// The case 'ddsdsioo' should have resualted in [ 10,10 ] not [ 8,64 ]
// The case 'ooodsodo' should have resualted in [ 0,0,0,1,0 ] not [ 8,64 ]
// The case 'iooososo' should have resualted in [ 1,1,1,1,1 ] not [ 8,64 ]
// The case 'ioosdsoo' should have resualted in [ 1,1,0,0 ] not [ 8,64 ]
// The case 'didddsoo' should have resualted in [ 9,9 ] not [ 8,64 ]

// TESTS:

console.log('[ 0,-1 ]: ' + parse('ssoisddo'))
