let currentNumber = '';

let previousNumber = '';

let operation = null;



function appendNumber(number) {

  if (currentNumber === '0') currentNumber = '';

  currentNumber += number;

  updateDisplay();

}



function chooseOperation(op) {

  if (currentNumber === '') return;

  if (previousNumber !== '') calculate();

  operation = op;

  previousNumber = currentNumber;

  currentNumber = '';

}



function calculate() {

  let computation;

  const prev = parseFloat(previousNumber);

  const current = parseFloat(currentNumber);

  if (isNaN(prev) || isNaN(current)) return;



  switch (operation) {

    case '+':

      computation = prev + current;

      break;

    case '-':

      computation = prev - current;

      break;

    case '*':

      computation = prev * current;

      break;

    case '/':

      computation = prev / current;

      break;

    default:

      return;

  }



  currentNumber = computation;

  operation = null;

  previousNumber = '';

  updateDisplay();

}



function clearDisplay() {

  currentNumber = '';

  previousNumber = '';

  operation = null;

  updateDisplay();

}



function updateDisplay() {

  document.getElementById('display').innerText = currentNumber || '0';

}