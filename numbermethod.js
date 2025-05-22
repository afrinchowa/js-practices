// tostring method=	Returns a number as a string
const num = 5;
const string = num.toString();
console.log(string);

// toFixed method=	Returns a number written with a number of decimals
const num2 = 5.123456;
const fixedNum = num2.toFixed(2);
console.log(fixedNum);

// toPrecision method=Returns a number written with a specified length
const num3 = 5.123456;
const precisionNum = num3.toPrecision(2);
console.log(precisionNum);

// valueOf method =Returns a number as a number
const num4 = 5.123456;
const value = num4.valueOf();
console.log(value);

// toLocaleString method
const num5 = 5.123456;
const localeString = num5.toLocaleString();
console.log(localeString);

// toExponential() method  =Returns a number written in exponential notation
const num6 = 5.123456;
const exponentialNum = num6.toExponential(2);
console.log(exponentialNum);