// JSON
const student ={
    name: "Munir",
    age: 20,
    class: 10,
    movies:["movie1", "movie2", "movie3"]	
}
const studentJSON = JSON.stringify(student);
console.log(studentJSON);
const studentObject = JSON.parse(studentJSON);
console.log(studentObject);

// fetch 
const url = "https://jsonplaceholder.typicode.com/posts";
fetch(url)
.then(response => response.json())
.then(data => console.log(data));
// keys, values
const keys =Object.keys(student);
const values =Object.values(student);
console.log(keys);
console.log(values);
// for
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(number => console.log(number));
numbers.map(number => console.log(number));

const products =[
    {
        name:'laptop',
        price:40000,
        color:'black'
    },
    {
        name:'mobile',
        price:40000,
        color:'black'
    },
    {
        name:'watch',
        price:40000,
        color:'black'
    },
    {
        name:'tablet',
        price:40000,
        color:'black'
    },
    {
        name:'camera',
        price:40000,
        color:'black'
    }
];
const newProduct ={
    name:'laptop2',
    price:50000,
    color:'White'};
// copy products array and then add newProduct
const newProducts = [...products, newProduct];
console.log(newProducts);

// create a new array without one specific product
const remainingProducts = products.filter(product => product.name !== "laptop");
console.log(remainingProducts);