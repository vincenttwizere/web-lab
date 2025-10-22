function calculate(operator) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const resultDiv = document.getElementById('result');

    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.innerHTML = 'Please enter valid numbers';
        resultDiv.style.color = 'red';
        return;
    }

    let result;
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
    }

    resultDiv.innerHTML = `Result: ${result}`;
    resultDiv.style.color = '#333';
}

function clearCalculator() {
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('result').innerHTML = 'Result: ';
    document.getElementById('result').style.color = '#333';
}