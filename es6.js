// template string
const name = "Munir";
const age = 20;
const sentence = `My name is ${name} and I am ${age} years old.`;
console.log(sentence)

// arrow function
const add = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
// single line arrow function
const add2 = (num1, num2) => num1 + num2;

// spread operator
const numbers = [1, 2, 3, 4, 5];
const newNumbers = [...numbers, 6];
console.log(newNumbers);

// 