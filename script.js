console.log("Hello world");

const addFunction = (a, b) => a + b;
const subFunction = (a, b) => a - b;
const multFunction = (a, b) => a * b;
const divFunction = (a, b) => a / b;

const opToFunction = {
    "+": addFunction,
    "-": subFunction,
    "*": multFunction,
    "/": divFunction,
};

let operate = (operator, a, b) => operator(a, b);

const buttons = document.querySelectorAll("button");
const display = document.querySelector('#display');
const equal = document.querySelector('#equal');
let calcLine = '';


buttons.forEach(button => {
    button.addEventListener('click', e => {
        display.innerText += e.target.innerText;
        calcLine += e.target.innerText;
        console.log(calcLine);
    });
});

equal.addEventListener('click', () => {
    let calcArray = calcLine.split("");
    calcArray.pop();
    // console.log(operate(addFunction, parseInt(calcArray[0]), parseInt(calcArray[2])))
    let result = operate(opToFunction[`${calcArray[1]}`], parseInt(calcArray[0]), parseInt(calcArray[2]));
    console.log(result);
    display.innerText = Number(result);

});

