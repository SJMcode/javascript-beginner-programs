const generateButton = document.getElementById("generate-button");
const emojiDisplay = document.getElementById("emoji-display");

const emojis = [
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คฃ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐คช",
  "๐คจ",
  "๐ง",
  "๐ค",
  "๐",
  "๐คฉ",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "๐",
  "โน๏ธ",
  "๐ฃ",
  "๐",
  "๐ซ",
  "๐ฉ",
  "๐ข",
  "๐ฅ",
  "๐ฐ",
  "๐ฅบ",
  "๐",
  "๐ช",
  "๐ด",
  "๐คข",
  "๐คฎ",
  "๐ท",
  "๐คง",
  "๐ฅต",
  "๐ฅถ",
  "๐",
  "๐ฟ",
  "๐น",
  "๐บ",
  "๐ค",
  "๐ป",
  "๐ฉ",
  // Add more emojis here if you want
];

generateButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  const randomEmoji = emojis[randomIndex];
  emojiDisplay.innerText = randomEmoji;
});


/***
 * Here's a breakdown of the code:

const generateButton = document.getElementById("generate-button");: This line uses the document.getElementById method to grab a reference to the generate-button element from the HTML. This is the button that the user will click to generate a new random emoji.

const emojiDisplay = document.getElementById("emoji-display");: This line uses the document.getElementById method to grab a reference to the emoji-display element from the HTML. This is the element where the selected emoji will be displayed.

const emojis = [...];: This line defines an array of emojis. The array can be extended with more emojis as needed.

generateButton.addEventListener("click", function() {...});: This line attaches a click event listener to the generateButton element. When the button is clicked, the anonymous function inside the addEventListener call will be executed.

Inside the anonymous function, the code calculates a random index into the emojis array using Math.floor(Math.random() * emojis.length).

The selected emoji is then obtained from the array using emojis[randomIndex].

The selected emoji is finally displayed in the emojiDisplay element using emojiDisplay.innerText = randomEmoji;.
 * 
 * 
 * 
 */