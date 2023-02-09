const generateButton = document.getElementById("generate-button");
const animePic = document.getElementById("anime-pic");

const pics = [
  "https://cdn.wallpapersafari.com/69/82/giJQwO.jpg",
  "https://mcdn.wallpapersafari.com/medium/53/38/djb5hu.jpg",
  "https://mcdn.wallpapersafari.com/medium/14/58/koPNsR.jpg",
  "https://mcdn.wallpapersafari.com/medium/74/5/AmBrh9.jpg",
  "https://mcdn.wallpapersafari.com/medium/11/96/4thm0B.jpg",
  "https://mcdn.wallpapersafari.com/medium/81/89/oS9Beg.jpg",
  "https://mcdn.wallpapersafari.com/medium/68/64/bQAIkD.jpg",
  // add more as needed
];

generateButton.addEventListener("click", function() {
  const randomIndex = Math.floor(Math.random() * pics.length);
  console.log(randomIndex);
  const randomPic = pics[randomIndex];
  animePic.src = randomPic;
});
