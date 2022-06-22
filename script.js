const form = document.querySelector("form");
const list = document.querySelector("#list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  list.innerHTML += `<li> ${item.value} </li>`;
  item.value = "";
});

list.addEventListener("click", (e) => {
  list.removeChild(e.target);
});
