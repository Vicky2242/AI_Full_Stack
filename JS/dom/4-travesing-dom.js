let val;

const list = document.querySelector(".collection");
const lastListItem = document.querySelector("li:last-child");
const firstListItem = document.querySelector("li:first-child");

val=list;
val = list.childNodes;
val = list.childNodes[0].nodeName;
val = list.childNodes[1].nodeName;
val = list.childNodes[2].nodeName;

val = list.children;
val = list.children[0].children[0].children[0];

val = list.firstChild;
val = list.firstElementChild.innerHTML;

val = list.lastElementChild;

val = list.childElementCount;

val=list.parentElement.parentElement.parentElement.parentElement;

val = lastListItem;

val = lastListItem.previousElementSibling.previousElementSibling.previousElementSibling;

val=firstListItem.nextElementSibling;

console.log(val);