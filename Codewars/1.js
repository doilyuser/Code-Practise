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
  // check for exactly four octets
  const arr = str.split('.')
  if (arr.length != 4) return false

  // check for spaces, letters & line breaks
  const regex = / |[a-zA-Z]|\n/
  if (str.match(regex)) return false

  for (let i = 0; i < arr.length; i++) {
    // check number is between 0 & 255
    if ((arr[i] < 0) | (arr[i] > 255)) return false
    // check number has no leading zeros
    if (Number(arr[i]).toString() !== arr[i]) return false
  }

  return true
}

// SOLUTION BY: ryanzyy
// function isValidIP(str) {
//   return /^(([1-9]?\d|1\d\d|2[0-4]\d|25[0-5])(\.(?!$)|$)){4}$/.test(str);
// }

// SOLUTION BY: smrg
// const isValidIP = require('net').isIPv4;

// TESTS:

// console.log('true: ' + isValidIP('0.0.0.0'))
// console.log('true: ' + isValidIP('1.2.3.4'))
// console.log('true: ' + isValidIP('12.255.56.1'))
// console.log('true: ' + isValidIP('137.255.156.100'))
// console.log('false: ' + isValidIP(''))
// console.log('false: ' + isValidIP('abc.def.ghi.jkl'))
// console.log('false: ' + isValidIP('123.456.789.0'))
// console.log('false: ' + isValidIP('12.34.56'))
// console.log('false: ' + isValidIP('01.02.03.04'))
// console.log('false: ' + isValidIP('256.1.2.3'))
// console.log('false: ' + isValidIP('1.2.3.4.5'))
// console.log('false: ' + isValidIP('123,45,67,89'))
// console.log('false: ' + isValidIP('1e0.1e1.1e2.2e2'))
// console.log('false: ' + isValidIP(' 1.2.3.4'))
// console.log('false: ' + isValidIP('1.2.3.4 '))
// console.log('false: ' + isValidIP('12.34.56.-7'))
// console.log('false: ' + isValidIP('1.2.3.4\n'))
// console.log('false: ' + isValidIP('\n1.2.3.4'))
