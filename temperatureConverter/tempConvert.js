const form = document.getElementById("converter-form");
const temperatureInput = document.getElementById("temperature-input");
const fromUnit = document.getElementById("from-unit");
const toUnit = document.getElementById("to-unit");
const result = document.getElementById("converter-result");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const temperature = parseFloat(temperatureInput.value);
  let convertedTemperature;

  if (fromUnit.value === "celsius" && toUnit.value === "fahrenheit") {
    convertedTemperature = (temperature * 9) / 5 + 32;
  } else if (fromUnit.value === "fahrenheit" && toUnit.value === "celsius") {
    convertedTemperature = ((temperature - 32) * 5) / 9;
  }

  result.textContent = `${temperature} ${fromUnit.value} is equal to ${convertedTemperature.toFixed(
    2
  )} ${toUnit.value}.`;
});
