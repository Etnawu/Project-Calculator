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

        case "*":
            return multiply(num1, num2)

        case "/":
            return divide(num1, num2)
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
    bottomDisplay.textContent += number
};
//operator buttons


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
    bottomDisplay.textContent = ""
    topDisplay.textContent = ""
}