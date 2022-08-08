console.log("Hello world");

let addFunction = (a, b) => a + b;
let subFunction = (a, b) => a - b;
let multFunction = (a, b) => a * b;
let divFunction = (a, b) => a / b;

let operate = (operator, a, b) => operator(a, b);

buttons = document.querySelectorAll("button");
display = document.querySelector('#display');

buttons.forEach(button => {
    button.addEventListener('click', e => {
        display.innerText += e.target.innerText;
    });
});