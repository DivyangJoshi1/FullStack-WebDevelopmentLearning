// Problem Statement : 
/* Create a faulty calculator using JavaScript

This faulty calculator does following : 
1.It takes two numbers as input from the user
2.It performs wrong operations as follows :
+ ---> - 
* ---> + 
- ---> / 
/ ---> **

It performs wrong operation 10% of the times
*/

function faultyc(a, b) {
    let random = Math.random();
    if (random < 0.1) {
        // 10% chance to perform wrong operations
        console.log("Performing faulty operations");
        return {
            add: a - b,
            multiply: a + b,
            subtract: a / b,
            divide: a ** b
        };
    } else {
        // 90% chance to perform correct operations
        console.log("Performing correct operations");
        return {
            add: a + b,
            multiply: a * b,
            subtract: a - b,
            divide: a / b
        };
    }
}

// User input for two numbers
let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");

// Perform operations
let results = faultyc(num1, num2);
console.log(`Addition result: ${results.add}`);
console.log(`Multiplication result: ${results.multiply}`);
console.log(`Subtraction result: ${results.subtract}`);
console.log(`Division result: ${results.divide}`);
