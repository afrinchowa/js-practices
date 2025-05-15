// How to declare a variable using let and const 
const fatherName ="Munir";
let season = "rainy";
season = "Winter";

// conditional statement
if (season === "rainy") {
    console.log("take an umbrella");
}
else{
    console.log("take an umbrella");
}

// multiple conditions
if (season === "rainy" || season === "winter") {
    console.log("take an umbrella");
}
else{
    console.log("take an umbrella");
}

// array
const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "mango", "banana", "orange", "pineapple"];
// index
const firstNumber = numbers[0];
const lastNumber = numbers[numbers.length - 1];

// object
const person = {
    name: "Munir",
    age: 22,
    city: "Dhaka"
}
// access property by name 
const name2 = person.name;
// access property by direct property
const name3 = person["name"];

// access via property name string
const name4 = person["name"];
// property
const name = person.name;
const age = person.age;
const city = person.city;

// function
function add(num1, num2) {
    const result = num1 + num2;
    return result;
}
// function call
const sum = add(3, 5);
// arrow function
const add = (num1, num2) => num1 + num2;
//  or
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}

// length,push
const numbers2 = [1, 2, 3, 4, 5];
numbers.push(6);
numbers.length;
// pop
numbers.pop();
// for loop
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

// while loop
let i = 0;
while (i < numbers.length) {
    const number = numbers[i];
    console.log(number);
    i++;
}

// forEach loop
numbers.forEach(function (number) {
    console.log(number);
});




