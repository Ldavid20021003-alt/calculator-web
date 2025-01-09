// Aktív kalkulátor váltása

function showCalculator(type) {

  document.querySelectorAll('.calculator').forEach(el => el.classList.add('hidden'));

  document.getElementById(`${type}-calculator`).classList.remove('hidden');

}



// Egyszerű számológép (meglévő funkciók)

let currentNumber = '';

let previousNumber = '';

let operation = null;



function appendNumber(number) {

  currentNumber += number;

  updateDisplay('simple');

}



function chooseOperation(op) {

  if (currentNumber === '') return;

  operation = op;

  previousNumber = currentNumber;

  currentNumber = '';

}



function calculate() {

  let result;

  const prev = parseFloat(previousNumber);

  const current = parseFloat(currentNumber);



  if (operation === '+') result = prev + current;

  else if (operation === '-') result = prev - current;

  else if (operation === '*') result = prev * current;

  else if (operation === '/') result = prev / current;



  currentNumber = result;

  operation = null;

  updateDisplay('simple');

}



function updateDisplay(type) {

  document.getElementById(`display-${type}`).innerText = currentNumber || '0';

}



function clearDisplay() {

  currentNumber = '';

  previousNumber = '';

  operation = null;

  updateDisplay('simple');

}



// Tudományos számítások

function scientificOperation(op) {

  const num = parseFloat(currentNumber);

  if (op === 'sin') currentNumber = Math.sin(num);

  else if (op === 'cos') currentNumber = Math.cos(num);

  else if (op === 'tan') currentNumber = Math.tan(num);

  else if (op === 'log') currentNumber = Math.log10(num);

  else if (op === 'ln') currentNumber = Math.log(num);

  else if (op === 'sqrt') currentNumber = Math.sqrt(num);

  updateDisplay('scientific');

}



// Pénzváltó

const exchangeRates = { USD: 1, EUR: 0.9, HUF: 350 };



function convertCurrency() {

  const amount = parseFloat(document.getElementById('amount').value);

  const from = document.getElementById('currency-from').value;

  const to = document.getElementById('currency-to').value;



  const result = (amount / exchangeRates[from]) * exchangeRates[to];

  document.getElementById('currency-result').innerText = `Eredmény: ${result.toFixed(2)} ${to}`;

}
  
  
