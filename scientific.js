//Alapszámológép//
let display = document.getElementById("display");

function appendNumber(number) {
     display.value += number;
} 
     
function appendOperator(operator) {
     display.value += operator;
 } 
 
 function calculate() {
     try {
         display.value = eval(display.value);
    }    catch (error) {
         alert("Hiba a számításban!");
         display.value = "";
    } 
} 

function clearDisplay() {
     display.value = ""; 
}

// Kijelző kezelés

function appendValue(value) {

    const display = document.getElementById("display");
  
    display.value += value;
  
  }
  
  
  
  function appendOperator(operator) {
  
    const display = document.getElementById("display");
  
    display.value += operator;
  
  }
  
  
  
  function clearDisplay() {
  
    const display = document.getElementById("display");
  
    display.value = "";
  
  }
  
  
  
  function calculate() {
  
    const display = document.getElementById("display");
  
    try {
  
      display.value = eval(display.value); // Alap műveletek számítása
  
    } catch (error) {
  
      display.value = "Hiba";
  
    }
  
  }
  
  
  
  // Tudományos számítások
  
  function calculateScientific(operation) {
  
    const display = document.getElementById("display");
  
    let value = parseFloat(display.value);
  
  
  
    if (isNaN(value)) {
  
      display.value = "Hiba";
  
      return;
  
    }
  
  
  
    switch (operation) {
  
      case "sin":
  
        display.value = Math.sin(value);
  
        break;
  
      case "cos":
  
        display.value = Math.cos(value);
  
        break;
  
      case "tan":
  
        display.value = Math.tan(value);
  
        break;
  
      case "sqrt":
  
        display.value = Math.sqrt(value);
  
        break;
  
      case "log":
  
        display.value = Math.log10(value);
  
        break;
  
      case "exp":
  
        display.value = Math.exp(value);
  
        break;
  
      case "pow":
  
        const base = value;
  
        const exponent = prompt("Adja meg a kitevőt:");
  
        display.value = Math.pow(base, parseFloat(exponent));
  
        break;
  
      default:
  
        display.value = "Hiba";
  
    }
  
  }