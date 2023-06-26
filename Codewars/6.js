// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

// My solution:

export function encode(string) {
  return string
    .replace(/a/gi, 1)
    .replace(/e/gi, 2)
    .replace(/i/gi, 3)
    .replace(/o/gi, 4)
    .replace(/u/gi, 5)
}

export function decode(string) {
  return string
    .replace('1', 'a')
    .replace('2', 'e')
    .replace('3', 'i')
    .replace('4', 'o')
    .replace('5', 'u')
}

// Tests:

// console.log(encode('hello'), ' = h2ll4')
// console.log(encode('HELLO'), ' = H2LL4')
// console.log(encode('How are you today?'), ' = H4w 1r2 y45 t4d1y?')
// console.log(encode('This is an encoding test.'), ' = Th3s 3s 1n 2nc4d3ng t2st.')
// console.log(decode('h2ll4'), ' = hello')

// Other solution online:

// function encode(string){
//   return string.replace(/[aeiou]/g, function (x) { return '_aeiou'.indexOf(x) });
// }

// function decode(string){
//   return string.replace(/[1-5]/g, function (x) { return '_aeiou'.charAt(x) });
// }
