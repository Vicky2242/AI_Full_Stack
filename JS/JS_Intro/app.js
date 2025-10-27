// alert('123');

// console.log('hello');
// console.error('return a error');
// console.warn('return a warn msg');
// console.info('return a information');

// let text;
// text = 'abc'
// console.log(text);

// var greeting;
// greeting = 'welcome';
// console.log(greeting);

// var firstname = 'vignesh';
// var firstName = 'waran';
// var FirstName = 'vigneshwaran';
// var $firstname = 'vicky';
// console.log($firstname);

//Primitive

//string

// const name="vicky";
// console.log("My name is:" +name);
// console.log("Data type is:" +(typeof name));

//Number

// const age = 25;
// console.log("My age is:" +age);
// console.log("Data type is:" +(typeof age));

//Boolean

// const isApproved = true;
// console.log("Is Approved: " +isApproved);
// console.log("Data type is:" +(typeof isApproved));

//Null

// const color = null;
// console.log("Box Value is: " + box);
// console.log("Data type is:" +(typeof color));


// let selectedColor;  

// default value is undefined
// console.log("Selected color is: " + selectedColor);
// console.log("Data type is: " + (typeof selectedColor));


// Reference type

//Array

// const myArray = ["vicky", "23", "null", "true"];

// console.log(myArray);
// console.log("Data type is: " +(typeof myArray));

//object

// const person ={
//     name:'vicky',
//     age:'23',
//     isAprroved: true    
// };

// console.log(person);
// console.log("Data type is: " +(typeof person));

//Type Conversion

//Number to string

let val;

// val = String(777);
// val = String(8+8);
// console.log(val);
// console.log(typeof val);

//bool to string

// val = String(true);

//Arr to string

// val=String([1,2,3,4]);

//string to number

// val = Number('5');
// val = Number("5" + "5");
// val = Number("5 + 5");

//Bool to number

// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100.30');
// val = parseFloat('100.30');

// console.log(val);
// console.log(typeof val);

//numbers

const num1 = 20;
const num2 = 30;

val = num1+num2;
val = num1-num2;
val = num1*num2;
val = num1/num2;


//math objects

val=Math.PI;
val=Math.round(3.1);
val=Math.ceil(3.1);
val=Math.floor(3.9);
val=Math.sqrt(49);
val=Math.abs(-4);
val = Math.min(2,33,4,1,55,6,3,-2);
val = Math.max(2,33,4,1,55,6,3,-2);
val = Math.random();
val = Math.round(Math.random() * 20);


const firstName = "vignesh";
const lastName = "waran";

val = firstName+lastName;
val = firstName + " " + lastName;


val = "vignesh";
val += "waran";

val=firstName.length;

val = firstName.concat(lastName);
val = firstName.concat(" ",lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Indexing
val = firstName[0];
val = firstName[1];
val = firstName[2];

// CharAt
val = firstName.charAt(0);

// Slice
const fruit = "Orange";
val = fruit.slice(1, 4);

// Split
const str = "Hello there, my name is vignesh";

val = str;
val = str.split(" ");
val = str.split("");
val = str.split(",");

// Replace
val = str.replace("vignesh", "vicky");

// Includes
val = str.includes("Hello");
val = str.includes("foo");

console.log(val);
console.log(typeof val);



