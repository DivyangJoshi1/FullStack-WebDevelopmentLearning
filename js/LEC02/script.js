// It prints "Hey , This is Tutorial of Variables." in console.
console.log("Hey , This is Tutorial of Variables.")

// What is Variable in Js ?
// A variable is a container that stores a value. This is very similar to the container used to store rice , and oats(Treat this is an alology!)
// The value of a javascript variable can be changes during the execution of a program.
// In JavaScript, you do not need to declare the data type of a variable. For example,
// var x = 10; // Here x is a variable and 10 is its value.
// var y = "Hello"; // Here y is a variable and "Hello" is its value
//  y is known as identifier.
// In JavaScript, a variable is declared using the let, const, or var keywords.


// It adds the numbers 5 and 6 and prints the result (11) to the console.
var a = 5; 
var b = 6;
var c = "Divyang";  //String datatype
console.log(a+b)

// prints the result (20) to the console.
console.log(a+b+9)

// prints the result (number number string) to the console.
console.log(typeof a,typeof b, typeof c)

// Rules for choosing Variable names in Js:
// -- Letters , digits , underscores & $sign allowed
// -- Must bigin with a "$ ,  _  , or a letter"
// -- JavaScript reserved words cannot be used as a variable name
// -- Variable names are case sensitive like Divyang and divyang are different variable

var _a = 4;
var $b = 5;

// in most of the cases we do not use var. we always use let keywords for declaring variable in js.
let x = 10;



// Var vs Let in JavaScript
// var is globally scoped while let & const are block scoped
// var can be updated & re-declared within its scope whereas let can be updated but not re-declared

// const cannot be updated or re-declared within its scope
const a1= 6;
// a1=a1 +1; it's not allowed bcz a1 is const.

// var can be accessed before declaration while let & const cannot be accessed before declaration
// var variables are initialized with undefined whereas let and const variables are not initialized
// const must be initialized during declaration unlike let and var



// There is two types of data type in javascript : Primitive and Object
// Object is may be we can say as user defined datatype. it can be also callled as non primitive datatype
//whereas Primitive data type are a set of basic data types in javascript .
//There are 7 primitive datatype in Js:
// null number string symbol boolean BigInt Undefined 
// null is not same as undefined. null is a value which is intentionally set to nothing whereas undefined is declared but there is no value inside it.

let xy = "Divyang";
let yz = 22;
let zx = 3.55;
const p = true;
let q = undefined;
let r = null; // type of null is object.

console.log(xy,yz,zx,p,q,r)

console.log(typeof xy,typeof yz,typeof zx,typeof p,typeof q,typeof r)

// how to initialize object variable

let o = {
    name:"Divyang",
    age:22
}

console.log(o) // when we want to write multiple things for same entity then we use object variable.
o.salary ="100 crore"
console.log(o)
o.salary ="500 crore"
console.log(o)

// Quiz : write a javascript program to store name , phone number and marks of a student using objects.
// solution : 

let Student = {
    name:"Divyang",
    phoneNumber:1234567890,
    marks:90
}
console.log(Student)