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
const reset = document.querySelector("#reset");
const operators = document.querySelectorAll('.operator');
let calcLine = '';


buttons.forEach(button => {
    button.addEventListener('click', e => {
        for (let key in opToFunction) {
            if (calcLine.slice(-1) === key || calcLine === '') {
                if (e.target.className == 'operator') {
                    console.log(calcLine);
                    console.log("Invalid");
                    calcLine = calcLine.slice(0, -1);
                    display.innerText = display.innerText.slice(0, -1);
                    console.log(calcLine)
                    break;
                }
            }
            if (e.target.id != "equal") {
                display.innerText += e.target.innerText;
                calcLine += e.target.innerText;
                console.log(calcLine);
                break;
            }
        }
    });
});

equal.addEventListener('click', () => {

    let isCalcPossible = true;

    // We check if the calc is possible with if statements

    for (let key in opToFunction) {
        if (calcLine.slice(-1) == key) {
            console.log("You can't do that");
            isCalcPossible = false;
            break;
        }
    };

    if (calcLine == '') {
        console.log("You can't do that");
        isCalcPossible = false;
    }

    if (isCalcPossible == true) {
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
        calcLine = result.toString();

    };

});

reset.addEventListener('click', () => {
    calcLine = '';
    display.innerText = '';
});

