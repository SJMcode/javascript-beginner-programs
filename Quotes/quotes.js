const quotes = [
    {
      quote: "Life is 10% what happens to us and 90% how we react to it.",
      author: "Charles R. Swindoll"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston S. Churchill"
    },
    {
      quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      author: "Christian D. Larson"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      author: "Eleanor Roosevelt"
    }
  ];
  
  const quoteText = document.querySelector("#text");
  const quoteAuthor = document.querySelector("#author");
  const newQuoteBtn = document.querySelector("#new-quote");
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  function displayQuote() {
    const quote = getRandomQuote();
    quoteText.textContent = quote.quote;
    quoteAuthor.textContent = quote.author;
  }
  
  displayQuote();
  
  newQuoteBtn.addEventListener("click", displayQuote);
  