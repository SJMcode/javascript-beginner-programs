const wordInput = document.querySelector("#word-input");
const searchBtn = document.querySelector("#search-btn");
const resultDiv = document.querySelector("#result");

searchBtn.addEventListener("click", function () {
  const word = wordInput.value;
  console.log(word);
  fetch(`https://www.dictionaryapi.com/api/v3/references/thesaurus/json/${word}?key=a0512136-c165-4c2f-85bf-e033e3175114`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
      resultDiv.innerHTML = "";
      if (data.length > 0) {
        for (let definition of data) {
          const definitionElem = document.createElement("p");
          definitionElem.innerHTML = `<strong>${definition.word}</strong>: ${definition.shortdef}`;
          resultDiv.appendChild(definitionElem);
        }
      } else {
        const errorElem = document.createElement("p");
        errorElem.innerHTML = `No definition found for "${word}"`;
        resultDiv.appendChild(errorElem);
      }
    })
    .catch((error) => {
      resultDiv.innerHTML = `An error occurred: ${error}`;
    });
});
