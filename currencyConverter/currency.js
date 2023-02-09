const amountInput = document.getElementById("amount");
const fromCurrencySelect = document.getElementById("from-currency");
const toCurrencySelect = document.getElementById("to-currency");
const convertButton = document.getElementById("convert-button");
const result = document.getElementById("result");

convertButton.addEventListener("click", () => {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;

  if (amount === "" || fromCurrency === "" || toCurrency === "") {
    result.textContent = "Please enter a valid amount and select currencies.";
    return;
  }

  fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const exchangeRate = data.rates[toCurrency];
      const convertedAmount = (amount * exchangeRate).toFixed(2);
      result.textContent = `${amount} ${fromCurrency} is worth ${convertedAmount} ${toCurrency}.`;
    })
    .catch((error) => {
      result.textContent = "Something went wrong. Please try again later.";
    });
});
