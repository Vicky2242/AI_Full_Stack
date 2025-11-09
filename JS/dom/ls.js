
// Set, Get, Remove, Clear

localStorage.setItem("tasks", "Hello");

console.log(localStorage.getItem("tasks"));

localStorage.removeItem("tasks");

console.log(localStorage.getItem("tasks"));

//JSON

const arr  = [2,3,4];

console.log(arr);

// 
const arrToString = JSON.stringify(arr);

console.log(arrToString);

const stringToArr = JSON.parse(arrToString);

console.log(stringToArr);

