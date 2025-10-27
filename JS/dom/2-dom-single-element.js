console.log(typeof document);

// console.log(document.getElementById("task-title"));

const taskTitle = document.getElementById("task-title");

console.log(taskTitle);


// change

taskTitle.style.backgroundColor = "blue";
taskTitle.style.color = "#fff";
taskTitle.style.padding = "20px";

//change content

taskTitle.innerText = "Hello";
taskTitle.innerHTML = "<span>Hello guys</span>"

console.log(document.querySelector("#task-title"));
console.log(document.querySelector(".collection-item"));