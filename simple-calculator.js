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
