// Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.

// Valid inputs examples:

// Examples of valid inputs:
//    1.2.3.4
//    123.45.67.89

// Invalid input examples:
//    1.2.3
//    1.2.3.4.5
//    123.456.78.90
//    123.045.067.089

// Notes:
// Leading zeros (e.g. 01.02.03.04) are considered invalid
// Inputs are guaranteed to be a single string

export default function isValidIP(str) {
  return false
}

console.log('true: ' + isValidIP('0.0.0.0'))
console.log('true: ' + isValidIP('12.255.56.1'))
console.log('true: ' + isValidIP('137.255.156.100'))
console.log('false: ' + isValidIP(''))
console.log('false: ' + isValidIP('abc.def.ghi.jkl'))
console.log('false: ' + isValidIP('123.456.789.0'))
console.log('false: ' + isValidIP('12.34.56'))
console.log('false: ' + isValidIP('01.02.03.04'))
console.log('false: ' + isValidIP('256.1.2.3'))
console.log('false: ' + isValidIP('1.2.3.4.5'))

// assert.strictEqual(isValidIP('123,45,67,89'   ), false);
// assert.strictEqual(isValidIP('1e0.1e1.1e2.2e2'), false);
// assert.strictEqual(isValidIP(' 1.2.3.4'       ), false);
// assert.strictEqual(isValidIP('1.2.3.4 '       ), false);
// assert.strictEqual(isValidIP('12.34.56.-7'    ), false);
// assert.strictEqual(isValidIP('1.2.3.4\n'      ), false);
// assert.strictEqual(isValidIP('\n1.2.3.4'      ), false);
