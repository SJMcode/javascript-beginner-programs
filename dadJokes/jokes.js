const jokes = [
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why was the math book sad? Because it had too many problems.",
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "Why did the cookie go to the doctor? Because it felt crumbly.",
    "Did you hear about the restaurant on the moon? Great food, no atmosphere.",
    "What do you call an alligator in a vest? An investigator.",
    "What do you call a lazy kangaroo? A pouch potato.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "Why don't oysters share their pearls? Because they're shellfish.",
    "What do you get when you cross a snowman and a vampire? Frostbite.",
    "Why do seagulls fly over the sea? Because if they flew over the bay, they'd be bagels!",
    "What do you call a bear with no teeth? A gummy bear.",
    "Why did the computer go to the doctor? Because it had a virus!",
    "What do you call an elephant that doesn't matter? An irrelephant.",
    
  ];
  
  const button = document.getElementById("get-joke");
  const jokeDisplay = document.getElementById("joke");
  
  button.addEventListener("click", function() {
    const randomIndex = Math.floor(Math.random() * jokes.length);
    jokeDisplay.textContent = jokes[randomIndex];
  });
  