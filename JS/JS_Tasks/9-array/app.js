const numbers = [4, 54, 63, 98, 12, 34, 23, 45, 67, 89, 22];

console.log(numbers);

let val;

val = numbers.length;

val = Array.isArray(numbers);


val = numbers[0];
// val = numbers [1];

numbers[3] = 250;
val = numbers.indexOf(98);
val = numbers.length-1;


//mutating array

numbers.push(350);

numbers.unshift(120);

numbers.pop();

numbers.shift();

console.log(numbers);

const veg = ['tomato', 'spinach', 'peas', 'leaves'];

val = veg.splice(1,2);

console.log(val);

