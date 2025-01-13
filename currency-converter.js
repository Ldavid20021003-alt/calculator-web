let amount = '';



function appendValue(value) {

  const display = document.getElementById('amount');

  amount += value;

  display.value = amount;

}



function clearDisplay() {

  const display = document.getElementById('amount');

  amount = '';

  display.value = '';

}



async function convertCurrency() {

  const fromCurrency = document.getElementById('from-currency').value;

  const toCurrency = document.getElementById('to-currency').value;

  const display = document.getElementById('amount');



  if (!amount) {

    alert('Adjon meg egy összeget!');

    return;

  }



  try {

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);

    const data = await response.json();

    const rate = data.rates[toCurrency];

    const convertedAmount = (parseFloat(amount) * rate).toFixed(2);

    display.value = convertedAmount;

    amount = convertedAmount;

  } catch (error) {

    alert('Nem sikerült lekérni az árfolyamokat.');

  }

}