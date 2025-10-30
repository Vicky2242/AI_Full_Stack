const ul = document.querySelector(".collection");

// create element

const li = document.createElement("li");


li.id = "test";

li.className = "collection-item";

li.innerText = "Hello";

const link = document.createElement("a");

link.className = "delete-item secondary-content test"

link.innerHTML = `<i class="fa fa-remove"></i>`;

li.appendChild(link);

ul.appendChild(li);

console.log(li);
// console.log(link);