const simpleArithmatic = require("./simple_arithmatics")
const arithmatic = require("./arithmatic")

console.log("simpleArithmatic:",  simpleArithmatic)
console.log("Arithmatic: ", arithmatic) // they will show as Anonymous function as they do not have name, only property.
const a = 4;
const b = 5;
console.log("4 * 5:", arithmatic.multiply(a, b)) // These are called Arguments => 4, 5
console.log("4 + 5:", simpleArithmatic.addition(a, b))