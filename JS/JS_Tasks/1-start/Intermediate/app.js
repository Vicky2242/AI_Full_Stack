console.log('testing')

// Prompt the user for their birth year
const birthYear = prompt("Enter your birth year:");

// Get the current year
const currentYear = new Date().getFullYear();

// Calculate age
const age = currentYear - birthYear;

// Display the result
alert(`You are ${age} years old.`);