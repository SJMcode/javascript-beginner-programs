const textArea = document.getElementById("text-area");
const totalCharactersCount = document.getElementById("total-characters-count");
const remainingCharactersCount = document.getElementById("remaining-characters-count");
const totalWordsCount = document.getElementById("total-words-count");
const wpmCount = document.getElementById("wpm-count");
const maxCharacters = 500;
let startTime;

textArea.addEventListener("input", function() {
  // Calculate total characters
  totalCharactersCount.innerText = textArea.value.length;

  // Calculate remaining characters
  let remaining = maxCharacters - textArea.value.length;
  remainingCharactersCount.innerText = remaining;

  // Disable typing when remaining characters reach 0
  if (remaining === 0) {
    textArea.disabled = true;
  } else {
    textArea.disabled = false;
  }

  // Calculate total words
  let words = textArea.value.trim().split(/\s+/).length;
  totalWordsCount.innerText = words;

  // Calculate WPM
  let currentTime = new Date().getTime();
  let timeElapsed = (currentTime - startTime) / 1000;
  let wpm = (words / timeElapsed) * 60;
  wpmCount.innerText = wpm.toFixed(2);
});

textArea.addEventListener("focus", function() {
  startTime = new Date().getTime();
});
