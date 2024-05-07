let currentInput = '';
let operator = '';
let result = '';

function number(num) {
    currentInput += num;
    updateDisplay();
}

function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}

function operation(op) {
    operator = op;
    if (result === '') {
        result = currentInput;
        currentInput = '';
    } else {
        calculate();
    }
}

function calculate() {
    let num1 = parseFloat(result);
    let num2 = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = (num1 + num2).toString();
            break;
        case '-':
            result = (num1 - num2).toString();
            break;
        case '*':
            result = (num1 * num2).toString();
            break;
        case '/':
            result = (num1 / num2).toString();
            break;
    }
    currentInput = '';
    operator = '';
    updateDisplay();
}

function clearResult() {
    currentInput = '';
    operator = '';
    result = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('result').value = currentInput === '' ? result : currentInput;
}
