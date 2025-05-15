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
    }
]

const names = products.map(product => product.name);
const prices = products.map(product => product.price);
const colors = products.map(product => product.color);


products.forEach(product => console.log(product.name));
// filter
const expensiveProducts = products.filter(product => product.price > 50000);
const cheapProducts = products.filter(product => product.price < 50000)

// find
const expensiveProduct = products.find(product => product.price > 50000);
const cheapProduct = products.find(product => product.price < 50000)
