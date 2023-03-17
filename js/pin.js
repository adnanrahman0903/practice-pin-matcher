function createPin() {
    const getNumbers = Math.round(Math.random() * 10000);
    return getNumbers;
}

function setPin() {
    const pin = createPin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return setPin();
    }
}

document.getElementById('btn-generate').addEventListener('click', function () {
    const pin = setPin();
    console.log(pin);
    const inputField = document.getElementById('input-field');
    inputField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const numbers = event.target.innerText;
    const calculatorField = document.getElementById('calculator-field');
    const calculatorFieldValue = calculatorField.value;

    if (isNaN(numbers)) {
        if (numbers === 'C') {
            calculatorField.value = '';
        }
        else if (numbers === '<') {
            const digits = calculatorFieldValue.split('');
            digits.pop();
            const remainedDigits = digits.join('');
            calculatorField.value = remainedDigits;
        }
    }
    else {
        const newFieldNumber = calculatorFieldValue + numbers;
        calculatorField.value = newFieldNumber;
    }
})

document.getElementById('btn-submit').addEventListener('click', function () {
    const inputField = document.getElementById('input-field');
    const getValue = inputField.value;

    const calculatorField = document.getElementById('calculator-field');
    const getField = calculatorField.value;

    const successMessage = document.getElementById('success');
    const wrongMessage = document.getElementById('wrong');

    if (getValue === getField) {
        successMessage.style.display = 'block';
        wrongMessage.style.display = 'none';
    }
    else {
        wrongMessage.style.display = 'block';
        successMessage.style.display = 'none';
    }
})