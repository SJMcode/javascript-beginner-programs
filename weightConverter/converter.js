const convertBtn = document.querySelector("#convertBtn");
const kgInput = document.querySelector("#kgInput");
const unit = document.querySelector("#unit");
const result = document.querySelector("#result");

convertBtn.addEventListener("click", function() {
  const weight = kgInput.value;
  const selectedUnit = unit.value;
  if (selectedUnit === "kg") {
    result.innerHTML = weight * 2.20462 + " pounds";
  } else {
    result.innerHTML = weight / 2.20462 + " kilograms";
  }
});
