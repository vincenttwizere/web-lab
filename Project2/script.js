// Add event listeners when the document loads
document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for operator buttons
    document.getElementById('add').addEventListener('click', () => calculate('+'));
    document.getElementById('subtract').addEventListener('click', () => calculate('-'));
    document.getElementById('multiply').addEventListener('click', () => calculate('*'));
    document.getElementById('divide').addEventListener('click', () => calculate('/'));
    document.getElementById('clear').addEventListener('click', clearCalculator);
});

function calculate(operator) {
    // Get input values
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    // Validate input
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = 'Please enter valid numbers';
        resultDiv.style.color = 'red';
        return;
    }

    let result;
    // Perform calculation based on operator
    switch(operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.innerHTML = 'Cannot divide by zero';
                resultDiv.style.color = 'red';
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultDiv.innerHTML = 'Invalid operator';
            resultDiv.style.color = 'red';
            return;
    }

    // Display result with up to 6 significant digits (avoid long floats)
    const formattedResult = Number.isInteger(result) ? String(result) : parseFloat(result.toPrecision(6));
    resultDiv.innerHTML = `Result: ${formattedResult}`;
    resultDiv.style.color = '#0f172a';

    // Add to history
    addHistory(`${num1} ${operator} ${num2} = ${formattedResult}`);
}

function clearCalculator() {
    // Clear input fields and reset result
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result: ';
    document.getElementById('result').style.color = '#333';
    // clear history as well when clear plus-shift is used? keep simple: do not clear history here
}

// History utilities
function addHistory(text){
    const list = document.getElementById('historyList');
    if (!list) return;
    const li = document.createElement('li');
    li.textContent = text;
    li.className = 'history-item';
    list.prepend(li);
    // keep history length reasonable
    while(list.children.length > 10) list.removeChild(list.lastChild);
}