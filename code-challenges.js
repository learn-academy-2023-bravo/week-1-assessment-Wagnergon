// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
// make a function named boilingPoint
// make a some if else statements
// make one if statement that returns below boiling point
// make one else if statement that returns above boiling point
// make one else if statemnet that returns boiling point
// make one else statement as a catch all
// execute the function 

const boilingPoint=(temp) => {
    if (temp< 212){
        return "is below boiling point"
    } else if ( temp> 212){
        return "is above boiling point"
    } else if ( temp === 212){
        return "is at boiling point"
    } else {return 'error'}
}

const temperature1 = 42
// Expected output: "42 is below boiling point"

const temperature2 = 350
// Expected output: "350 is above boiling point"

const temperature3 = 212
// Expected output: "212 is at boiling point"

console.log(boilingPoint(42))
// output: "is below boiling point"

console.log(boilingPoint(350))
// output: "is above boiling point"

console.log(boilingPoint(212))
// output: "is at boiling point"
// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code:
// merge the two arrays using the concat accessor
// take the new output and rename that combined array
// take that new array and use .length property 

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

var comboWorld = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(comboWorld.length)

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.


// Pseudo code: 
// make a new constant named reversedCohort
// use the .split(') .reverse() .join('') on the currentCohort

const currentCohort = "Bravo 2023"
const reversedCohort = currentCohort.split('').reverse().join('');
console.log(reversedCohort)
// Expected output: "3202 ovarB"

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
// use lastIndexOf on myNumbers
// use givenValue of 42
// use last of index on MyNumbers
// Use given value of 10


const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7
console.log(myNumbers.lastIndexOf(givenValue1))

const givenValue2 = 10
// Expected output: 8
console.log(myNumbers.lastIndexOf(givenValue2))

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:
// Use the .sort() mutator to both variebles
// Reverse the .sort(property) to make them in order from greatest to least




const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]
sanDiegoSummerTemperatures.sort((a, b) => b - a)

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
sanDiegoWinterTemperatures.sort((a, b) => b - a)

console.log(sanDiegoSummerTemperatures)
console.log(sanDiegoWinterTemperatures)
