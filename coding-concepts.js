// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: it will add a value to the end of the Array. When you execute it again it will have "indigo" at the end of the array.
// b) Verify and explain: It assigned a value at the end of the array. The output was "5"

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: Itll give you the lenght of the string
// b) Verify and explain: Output was 10 because thats how many characters are in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: It will give me the character at position 4
// b) Verify and explain: Output was "o" because that was the fourth character

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: It will give me the second string in the array
// b) Verify and explain: It gave me "ruby" because arrays start the count at 0

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer: The output will have all the characters uppercase
// b) Verify and explain: It came back as an error because toUpperCase isnt a function

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: 4, the length of the array
// b) Verify and explain:It returned back number and im not really sure why
