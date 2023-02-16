let inputTextArea = document.getElementById("input-textarea");
let characCount = document.getElementById("charac-count");
let wordCount = document.getElementById("word-count");
const wpmCount = document.getElementById("wpm-count");
let startTime;

inputTextArea.addEventListener("input", () => {
  characCount.textContent = inputTextArea.value.length;
  let txt = inputTextArea.value.trim();
  const words = txt.split(/\s+/).filter((item) => item).length;
  wordCount.textContent = words;
// Calculate WPM
let currentTime = new Date().getTime();
let timeElapsed = (currentTime - startTime) / 1000;
let wpm = (words / timeElapsed) * 60;
wpmCount.innerText = wpm.toFixed(2);

});


inputTextArea.addEventListener("focus", function() {
  startTime = new Date().getTime();
});
