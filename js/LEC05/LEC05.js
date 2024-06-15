//Author : JOSHI DIVYANG BHARATBHAI
// All about JavaScript Functions 

// Why we need Function ? 
// We need functions in JavaScript to group reusable blocks of code, making our programs more organized, modular, and easier to manage and debug. Functions allow us to execute the same code multiple times with different inputs.

console.log("Hey , Welcome!")
console.log("Hey , Divyang ! you  are a good person")
console.log("Hey , Divyang ! your t-shirt is nice")

// Here what if we want to say this same but  to a different person. we have to change everywhere.so here role of function came.

// for creating function we use function keyword.

function print(name){
    console.log("Hey , " + name + " ! you  are a good person")
}
print("Divyang")
print("Rohan")

function sum(a,b){
    console.log("Sum is : "+(a+b))
}
sum(2,3)
sum(4,5)

function multi(c,d){
    return c*d
}
result= console.log("Multiplication is : "+multi(2,3))
result1= console.log("Multiplication is : "+multi(9,3))

// What is Arrow function ?
// An arrow function in JavaScript is a shorter syntax for writing functions, introduced in ES6. It uses the => symbol and has a more concise syntax.

// In short:
// Arrow functions are a compact way to write functions using () => {} instead of the traditional function () {}. They also do not have their own 'this' context.

const function1 = (x) =>{
    console.log("I am an arrow function : "+x)
}

function1(34)
function1(84)

const funct2 = (a,b) =>{
    return a+b
}
re1=console.log("Sum is : "+funct2(7,7))