let num = 1001;

//Returns 'undefined'.
console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.
console.log(String(num).length);
console.log("\n");

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).
let num2 = 123.45;
num2 = String(num2);
console.log(num2.indexOf("."));
atIndex = num2.indexOf(".");
console.log("----------------------------------");
console.log(num2.length);
console.log("----------------------------------");
let num3 = num2.slice(0, atIndex);
console.log(num3);
let num4 = num2.slice(atIndex+1);
console.log(num4);
let num5 = num3 + num4;
console.log(num5);
console.log(num5.length);

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
console.log("----------------------------------");
if (num2.includes(".")){
console.log(String(num2).length-1);
} else {
console.log(String(num2).length);
}
