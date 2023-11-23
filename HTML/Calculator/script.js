let currentInput = '';
    let currentOperator = '';
    let resultDisplayed = false;

    function appendNumber(number) {
      if (resultDisplayed) {
        clearDisplay();
      }
      currentInput += number;
      updateDisplay();
    }

    function operate(operator) {
      if (resultDisplayed) {
        resultDisplayed = false;
      }
      currentOperator = operator;
      currentInput += operator;
      updateDisplay();
    }

    function calculateResult() {
      if (resultDisplayed) {
        return;
      }
      currentInput = eval(currentInput);
      resultDisplayed = true;
      updateDisplay();
    }

    function clearDisplay() {
      currentInput = '';
      currentOperator = '';
      resultDisplayed = false;
      updateDisplay();
    }

    function updateDisplay() {
      document.getElementById('display').value = currentInput;
    }