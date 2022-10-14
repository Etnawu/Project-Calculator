let firstNum = "";
let secondNum = "";
let operator ="";
let displayValue = "";

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
            if (num2 <= 0) return "Error";
            else return divide(num1, num2)

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
    displayValue += number;
    bottomDisplay.textContent = displayValue;
};

//backspace button
backspaceButton.addEventListener(
    "click", () => backspace()
);

function backspace() {
    if (displayValue ==="") return
    else
    displayValue = displayValue.toString().slice(0, -1)
    bottomDisplay.textContent = displayValue
};

//clear button
clearButton.addEventListener(
    "click", () => clear()
);

function clear() {
    firstNum = "";
    secondNum = "";
    displayValue = "";
    operator = "";
    bottomDisplay.textContent = firstNum
    topDisplay.textContent = secondNum
};

//operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener("click", () => appendOp(button.textContent))
});

function appendOp(op){
    if (operator !="")return
    else
    operator = op;
    firstNum = displayValue;
    topDisplay.textContent = firstNum + " " + operator;
    displayValue = "";
    bottomDisplay.textContent = displayValue;
}

//equal button
equalButton.addEventListener(
    "click", () => calculate()
)

function calculate(){
    if (firstNum === '' && secondNum ==='') return
    else
    displayValue = Number(displayValue);
    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    secondNum = displayValue;
    displayValue = operate(firstNum, secondNum, operator);
    bottomDisplay.textContent = displayValue;
    firstNum = "";
    secondNum = "";
    operator = "";
    topDisplay.textContent = secondNum;
}
//firstNum; secondNum; thirdNum