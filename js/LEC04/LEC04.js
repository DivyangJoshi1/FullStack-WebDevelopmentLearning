//Author : JOSHI DIVYANG BHARATBHAI
// All about JavaScript Loops 

console.log("I am tutorial of JavaScript Loops")

let a = 1
console.log(a)
console.log(a+1)
console.log(a+2)
console.log(a+3)

// it's not suitable here to write like this. May be editor will be hang if code is very large. so here solution is loop.

// Why we need Loops ?
// We need loops in programming to repeat a block of code multiple times, which helps automate repetitive tasks and efficiently handle multiple items or actions without writing redundant code.
// There are several types of loops in JavaScript, including:
// 1. for loop  --> loop a block of code no of times
// 2. while loop --> loop a block based on specific condition
// 3. do-while loop --> while loop variant which runs atleast once
// 4. for-of loop (ES6+) The for-of loop and for-in loop was introduced in ES6.(ES6+ refers to ECMAScript 6 and later versions. ECMAScript is the standard for JavaScript, and ES6, also known as ECMAScript 2015)  --> --> loops through the values of an object
// 5. for-in loop (ES6+) --> loops through the keys of an object

// for loop
let b = 1
for (let i = 0; i< 20 ; i++) {
    console.log(b+i);
}

// for-in loop
/* Syntax of for-in loop looks like this

for(key in Object){
    // code to be execute
}

for-in loop also work with arrays.
*/

let obj = {
    name:"Divyang",
    Role:"Programmer",
    Company:"Google"
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element); //print both key and value
}



// for-of loop
/* Syntax of for-of loop :

for(variable of iterable){
    //code
}
*/

for (const c of "Divyang") {
    console.log(c);
}

// while loop
let c = 0;
while(c<6){
    console.log(c);
    c++;
} 

//do-while loop

let d = 10
do {
    console.log(d)
    d++
} while (d<6);
