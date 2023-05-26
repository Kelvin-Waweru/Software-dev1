let expression = '';

function appendValue(value) {
  expression += value;
  document.getElementById('result').value = expression;
}

function clearResult() {
  expression = '';
  document.getElementById('result').value = '';
}

function clearLastValue() {
  expression = expression.slice(0, -1);
  document.getElementById('result').value = expression;
}

function calculate() {
  try {
    const result = eval(expression);
    document.getElementById('result').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('result').value = 'Error';
  }
}
