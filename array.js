// Creating an Array
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "mango", "banana", "orange", "pineapple"];

// Index
const firstNumber = numbers[0];
const lastNumber = numbers[numbers.length - 1];

// Array Methods
const numbers2 = [1, 2, 3, 4, 5];
const sum = numbers2.reduce((total, number) => total + number, 0);
console.log(sum);

const numbers3 = [1, 2, 3, 4, 5];
const evenNumbers = numbers3.filter(number => number % 2 === 0);
console.log(evenNumbers);

const numbers4 = [1, 2, 3, 4, 5];
const numbers5 = [6, 7, 8, 9, 10];
const allNumbers = numbers4.concat(numbers5);
console.log(allNumbers);

const numbers6 = [1, 2, 3, 4, 5];
const allNumbers2 = [...numbers6, 6, 7, 8, 9, 10];
console.log(allNumbers2);

const numbers7 = [1, 2, 3, 4, 5];
const allNumbers3 = [6, 7, 8, 9, 10];
const allNumbers4 = [...numbers7, ...allNumbers3];
console.log(allNumbers4);

const numbers8 = [1, 2, 3, 4, 5];
const allNumbers5 = [6, 7, 8, 9, 10];
const allNumbers6 = [...numbers8, ...allNumbers5];
console.log(allNumbers6);

const numbers9 = [1, 2, 3, 4, 5];
const allNumbers7 = [6, 7, 8, 9, 10];
const allNumbers8 = [...numbers9, ...allNumbers7];
console.log(allNumbers8);

// Array Elements Can Be Objects
const numbers10 = [1, 2, 3, 4, 5];
const allNumbers9 = [6, 7, 8, 9, 10];
const allNumbers10 = [...numbers10, ...allNumbers9];
console.log(allNumbers10);

// Looping Array Elements
const numbers11 = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers11.length; i++) {
    console.log(numbers11[i]);
}
// Adding Array Elements
const numbers12 = [1, 2, 3, 4, 5];
numbers12.push(6);
console.log(numbers12);

// Removing Array Elements
const numbers13 = [1, 2, 3, 4, 5];
numbers13.pop();
console.log(numbers13); 

// Nested Arrays and Objects
const numbers14 = [1, 2, 3, 4, 5];
const nestedArray = [numbers14, 6, 7, 8, 9, 10];
console.log(nestedArray);




