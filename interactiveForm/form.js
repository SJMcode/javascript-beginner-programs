const form = document.getElementById("interactive-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const age = document.getElementById("age");
const location = document.getElementById("location");
const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const ageError = document.getElementById("age-error");
const locationError = document.getElementById("location-error");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  // Reset error messages
  nameError.textContent = "";
  emailError.textContent = "";
  ageError.textContent = "";
  locationError.textContent = "";

  // Validate name
  if (!name.value) {
    nameError.textContent = "Name is required";
  }

  // Validate email
  if (!email.value) {
    emailError.textContent = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    emailError.textContent = "Email is invalid";
  }

  // Validate age
  if (!age.value) {
    ageError.textContent = "Age is required";
  } else if (age.value < 18) {
    ageError.textContent = "You must be at least 18 years old";
  }

  // Validate location
  if (!location.value) {
   
  }