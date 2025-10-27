// HTMLCOLLECTION not an element

const items = document.getElementsByClassName("collection-item");

console.log(items);

// items.undefined.backgroundColor = "red";

items[0].style.color = "blue";
items[1].style.color = "red";
items[2].style.color = "green";
items[3].style.color = "violet";
items[4].style.color = "orange";

// console.log(items.length);

//For loop

// for(let i=0; i<items.length; i++){
//     items[i].style.color = "green";
// }

// console.log(items);

const arr = [1,2,3,4,5];

// console.log(arr);

// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(val, index, array){
//     console.log(`${val} - ${index}`);
//     console.log(array);
// });

let lists = Array.from(items);

console.log(lists);

lists.forEach(function(element){
    element.style.color = "blue";
})