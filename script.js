const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const wrapper = document.getElementById("wrapper");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  const li = document.createElement("li");
  const a = document.createElement("a");
  const button = document.createElement("button");

  ul.appendChild(li).classList.add("normal");
  a.appendChild(document.createTextNode(input.value));
  li.appendChild(a);
  a.setAttribute("href", "#");
  a.classList.add("clickable");
  button.appendChild(document.createTextNode("Delete"));
  button.classList.add("remove");
  li.appendChild(button);

  input.value = "";
}

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress(e) {
  if (inputLength() > 0 && e.keyCode === 13) {
    createListElement();
  }
}

function strikethrough(e) {
  const ItemClicked = e.target;
  if (e.target && e.target.nodeName === "A") {
    ItemClicked.classList.toggle("done");
  }
}

function deleteItem(e) {
  const DeleteClicked = e.target;
  const itemToRemove = DeleteClicked.parentNode;
  if (e.target && e.target.nodeName === "BUTTON") {
    ul.removeChild(itemToRemove);
  }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", strikethrough);

wrapper.addEventListener("click", deleteItem);
