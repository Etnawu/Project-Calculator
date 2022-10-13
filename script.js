let firstNum = "";
let secondNum = "";
let operator ="";

//operators
const add = function(x, y) {
    return x + y
};

const subtract = function(x, y) {
    return x - y
};

const multiply = function(x, y) {
    return x * y
};

const divide = function(x, y) {
    return x / y
};

//operate function
const operate = function(num1, num2, operators){
    switch(operators){
        case "+": 
            return add(num1, num2)

        case "-":
            return subtract(num1, num2)

        case "x":
            return multiply(num1, num2)

        case "÷":
            if (num2 === 0) return null
            return divide(num1, num2)

        default:
        return null
    }
};

//clicky
const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operator]");
const equalButton = document.querySelector("[data-equal]");
const backspaceButton = document.querySelector("[data-backspace]");
const clearButton = document.querySelector("[data-clear]");

const topDisplay = document.querySelector("[data-screenUp]");
const bottomDisplay = document.querySelector("[data-screenDown]");


//number buttons
numberButtons.forEach((button) => {
    button.addEventListener("click", () => appendNumber(button.textContent))
});

function appendNumber(number) {
    if (number === "." && bottomDisplay.textContent.includes('.')) return
    secondNum += number;
    bottomDisplay.textContent = secondNum;
};

//backspace button
backspaceButton.addEventListener(
    "click", () => backspace()
);

function backspace() {
    bottomDisplay.textContent = bottomDisplay.textContent.toString().slice(0, -1)
};

//clear button
clearButton.addEventListener(
    "click", () => clear()
);

function clear() {
    firstNum = "";
    secondNum = "";
    operator ="";
    bottomDisplay.textContent = firstNum
    topDisplay.textContent = secondNum
}

//operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => appendOp(button.textContent))
});

function appendOp(op){
    operator = op;
    firstNum = secondNum;
    topDisplay.textContent = firstNum + " " + operator;
    secondNum = "";
    bottomDisplay.textContent = secondNum;
}

//equal button
equalButton.addEventListener(
    "click", () => calculate()
)

function calculate(){
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    topDisplay.textContent = "";
    secondNum = operate(firstNum, secondNum, operator);
    bottomDisplay.textContent = secondNum;
}
