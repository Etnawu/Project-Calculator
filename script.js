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
}

//operate function
const operate = function(num1, num2, operators ){
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
}