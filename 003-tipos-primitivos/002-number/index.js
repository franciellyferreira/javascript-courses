console.log(123);  // number
console.log(123 + 1);  // number 124
console.log("123");  // string

// Cuidado que pode gerar bugs

console.log("123" + 1);  // string 1231
console.log("123" - 1);  // string 122

// Forma correta de usar

console.log(Number("123") + 1);  // string to number 124
console.log(typeof Number("123"));  // qual o tipo?
console.log(typeof 123);  // qual o tipo?