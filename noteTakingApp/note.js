const form = document.getElementById("note-form");
const textarea = document.getElementById("note-text");
const noteList = document.getElementById("note-list");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const note = textarea.value;
  textarea.value = "";
  const li = document.createElement("li");
  li.textContent = note;
  noteList.appendChild(li);
});

noteList.addEventListener("click", (event) => {
  if (event.target.tagName === "LI") {
    event.target.remove();
  }
});
