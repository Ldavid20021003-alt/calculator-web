// Egyszerű számológép függvények

function appendNumber(number) {

  document.getElementById('result').value += number;

}



function appendOperator(operator) {

  document.getElementById('result').value += operator;

}



function calculate() {

  try {

    document.getElementById('result').value = eval(document.getElementById('result').value);

  } catch (e) {

    alert('Hiba a számításban!');

  }

}



function clearResult() {

  document.getElementById('result').value = '';

}



// Pénzváltó függvény

function convertCurrency() {

  const amount = document.getElementById('amount').value;

  const currency = document.getElementById('currency').value;



  // Példa árfolyamok

  const rates = {

    USD: 1,

    EUR: 0.9,

    HUF: 320

  };



  const result = amount * rates[currency];

  document.getElementById('result').innerText = `${result} ${currency}`;

}





 




