// string length
const name = "Chowa";
const nameLength = name.length;
console.log(nameLength);

// string concat
const firstName = "Chowa";
const lastName = "Arfin";
const fullName = firstName + " " + lastName;
console.log(fullName);

// string slice
const sentence = "I am a web developer";
const part = sentence.slice(0, 10);
console.log(part);

// string replace
const sentence2 = "I am a web developer";
const newSentence = sentence2.replace("developer", "programmer");
console.log(newSentence);

// string to uppercase and lowercase
const name2 = "Chowa";
const upperCaseName = name2.toUpperCase();
const lowerCaseName = name2.toLowerCase();
console.log(upperCaseName);
console.log(lowerCaseName);

// string split
const sentence3 = "I am a web developer";
const words = sentence3.split(" ");
console.log(words);

// string substring
const sentence4 = "I am a web developer";
const part2 = sentence4.substring(0, 10);
console.log(part2);

// string trim
const name3 = " Chowa ";
const trimmedName = name3.trim();
console.log(trimmedName);

// string valueOf
const name4 = "Chowa";
const nameValue = name4.valueOf();
console.log(nameValue);

// string charAt
const name5 = "Chowa";
const char = name5.charAt(0);
console.log(char);

// string codePointAt
const name6 = "Chowa";
const codePoint = name6.codePointAt(0);
console.log(codePoint);

// string charCodeAt
const name7 = "Chowa";
const charCode = name7.charCodeAt(0);
console.log(charCode);

// string concat
const firstName2 = "Chowa";
const lastName2 = "Arfin";
const fullName2 = firstName2.concat(" ", lastName2);
console.log(fullName2);

// string includes
const sentence5 = "I am a web developer";
const result = sentence5.includes("developer");
console.log(result);

// string repeat
const name8 = "Chowa";
const repeatedName = name8.repeat(3);
console.log(repeatedName);

// string search
const sentence6 = "I am a web developer";
const index = sentence6.search("developer");
console.log(index);

// string startsWith
const sentence7 = "I am a web developer";
const result2 = sentence7.startsWith("I am");
console.log(result2);

// string endsWith
const sentence8 = "I am a web developer";
const result3 = sentence8.endsWith("developer");
console.log(result3);

// string localeCompare
const name9 = "Chowa";
const name10 = "chowa";
const result4 = name9.localeCompare(name10);
console.log(result4);

// string match
const sentence9 = "I am a web developer";
const result5 = sentence9.match(/developer/);
console.log(result5);

// string replaceAll
const sentence10 = "I am a web developer";
const newSentence2 = sentence10.replaceAll("developer", "programmer");
console.log(newSentence2);

// string key
const sentence11 = "I am a web developer";
const keys = [...sentence11];
console.log(keys);

// string values
const sentence12 = "I am a web developer";
const values = [...sentence12];
console.log(values);

// string entries
const sentence13 = "I am a web developer";
const entries = [...sentence13];
console.log(entries);

// string from
const sentence14 = "I am a web developer";
const array = Array.from(sentence14);
console.log(array);

// string of
const sentence15 = "I am a web developer";
const string = String(sentence15);
console.log(string);

// string to locale string
const sentence16 = "I am a web developer";
const localeString = sentence16.toLocaleString();
console.log(localeString);

// string to string
const sentence17 = "I am a web developer";
const string2 = String(sentence17);
console.log(string2);

// string to primitive
const sentence18 = "I am a web developer";
const primitive = sentence18.valueOf();
console.log(primitive);
