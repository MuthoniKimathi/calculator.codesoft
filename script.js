let displayValue = "";

function appendToDisplay(value) {
  displayValue += value;
  document.getElementById('display').innerText = displayValue;
}

function clearDisplay() {
  displayValue = "";
  document.getElementById('display').innerText = '0';
}

function deleteLast() {
  displayValue = displayValue.slice(0, -1);
  document.getElementById('display').innerText = displayValue || '0';
}

function calculate() {
  try {
    displayValue = eval(displayValue);
    document.getElementById('display').innerText = displayValue;
  } catch (error) {
    document.getElementById('display').innerText = 'Error';
  }
}

