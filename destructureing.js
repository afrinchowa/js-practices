//array destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second] = numbers;
console.log(first, second);

// object destructuring
const person = { name: "Munir", age: 20 };
const { name, age } = person;
console.log(name, age);

// boxify
const numbers2 = [1, 2, 3, 4, 5];
const [first2, ...rest] = numbers;
console.log(first, rest);


const employee ={
    ide: "vs code",
    language: ["javascript", "python", "c++"],
    framework: "react",
    tools: "git"	,
    specification:{
        height:66,
        weight:55,
        address: "Dhaka",
        phone: "01700000000",
        watch:{
            color: "black",	
            price: 3000,
            company: "Casio",
            model: "Gshock"

        }
    }
}

const { ide, language, framework, tools} = employee;
console.log(ide, language, framework, tools);
const {brand, model} = employee.specification.watch;
console.log(brand, model);
