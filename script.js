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
        if (e.target.id != "equal") {
            display.innerText += e.target.innerText;
            calcLine += e.target.innerText;
            console.log(calcLine);
        }
    });
});

equal.addEventListener('click', () => {

    let numbers = calcLine.split(/[*]|[+]|[-]|[\/]/);
    let operators = calcLine.split(/[^-|+|\/|\*]/).filter(e => e);

    // console.log(numbers);
    // console.log(operators);

    let calcArray = numbers.map(
        (element, index) => [element, operators[index]]
    ).flat();
    calcArray.pop();

    // console.log(calcArray);

    let result = parseInt(operate(opToFunction[`${calcArray[1]}`], parseInt(calcArray[0]), parseInt(calcArray[2])));
    if (calcArray.length > 3) {
        for (let i = 3; i < calcArray.length; i += 2) {
            result = operate(opToFunction[`${calcArray[i]}`], result, parseInt(calcArray[i + 1]));
        }
    };

    console.log(result);
    display.innerText = result.toString();
    calcLine = result;

});

