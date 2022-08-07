console.log("Hello world");

let addFunction = (a, b) => a + b;
let subFunction = (a, b) => a - b;
let multFunction = (a, b) => a * b;
let divFunction = (a, b) => a / b;

let operate = (operator, a, b) => operator(a, b);

console.log(operate(addFunction, 2, 9));