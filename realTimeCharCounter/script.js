const inputTextArea = document.getElementById("input-textarea"); 
const wordCount = document.getElementById("word-count"); 
const charcCount =document.getElementById("charac-count"); 
const wpmCount = document.getElementById("wpm-count");  

let startTime;

inputTextArea.addEventListener("input",()=>{
  charcCount.textContent = inputTextArea.value.length;
  console.log(charcCount);
  let text = inputTextArea.value.trim();
  const words = text.split(/\s+/).filter((item)=>item).length;

wordCount.textContent = words;

let currentTime = new Date().getTime();
let timeElapsed = (currentTime - startTime)/1000;
let wpm = (words / timeElapsed)* 60;
wpmCount.textContent = wpm.toFixed(2);


})

inputTextArea.addEventListener("focus", function(){
  startTime = new Date().getTime();
})