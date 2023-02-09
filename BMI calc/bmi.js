const form = document.getElementById("bmi-form");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");
const bmiResult = document.getElementById("bmi-result");
const bmiCategory = document.getElementById("bmi-category");
const bmiMessage = document.getElementById("bmi-message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const weight = weightInput.value;
  const height = heightInput.value;
  const bmi = weight / (height / 100) ** 2;
  bmiResult.textContent = `Your BMI is ${bmi.toFixed(2)}`;

  if (bmi <= 18.5) {
    bmiCategory.textContent = "Underweight";
    bmiMessage.classList.add("underweight");
    bmiMessage.textContent = "You should eat more to gain weight.";
  } else if (bmi > 18.5 && bmi <= 24.9) {
    bmiCategory.textContent = "Normal";
    bmiMessage.classList.add("normal");
    bmiMessage.textContent = "You have a healthy weight.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory.textContent = "Overweight";
    bmiMessage.classList.add("overweight");
    bmiMessage.textContent = "You should exercise more and eat healthier.";
  } else {
    bmiCategory.textContent = "Obese";
    bmiMessage.classList.add("obese");
    bmiMessage.textContent = "You should see a doctor and make significant lifestyle changes.";
  }
    
});
