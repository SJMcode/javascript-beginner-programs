const firstNumberInput = document.querySelector('#first-number');
const secondNumberInput = document.querySelector('#second-number');
const calculateButton = document.querySelector('#calculate-button');
const result = document.querySelector('#result');

calculateButton.addEventListener('click', function () {
  const firstNumber = firstNumberInput.value;
  const secondNumber = secondNumberInput.value;

  result.textContent = `The result is: ${firstNumber * secondNumber}`;
});
