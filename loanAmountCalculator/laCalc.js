const calculateBtn = document.querySelector("#calculateBtn");
const loanAmount = document.querySelector("#loanAmount");
const interestRate = document.querySelector("#interestRate");
const loanTerm = document.querySelector("#loanTerm");
const result = document.querySelector("#result");

calculateBtn.addEventListener("click", function() {
  const amount = loanAmount.value;
  const rate = interestRate.value / 100 / 12;
  const term = loanTerm.value * 12;
  const monthlyPayment = (amount * rate) / (1 - (Math.pow(1 / (1 + rate), term)));
  result.innerHTML = monthlyPayment.toFixed(2) + " $";
});
