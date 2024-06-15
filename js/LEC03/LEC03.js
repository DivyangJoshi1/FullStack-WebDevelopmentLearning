//Author : JOSHI DIVYANG BHARATBHAI
// All about JavaScript Conditionals And Operators 
// Conditional statements are used to perform different actions based on different conditions.

console.log("Hello I am Conditional Tutorial")

let a = 85;


/* Syntax of if statement : 

if(){
}
else{
} 
*/

if(a>18){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
    // I have a doubt about why, even if we do not put a semicolon at the end of a statement, it still doesn't show an error. The reason is that in JavaScript, the semicolon is optional. However, it is good practice to include it.
}

// Normal Operators you already know but here one operator you need to know is Exponentiation

let agee=17
let grace = 2;
if(agee+grace>18){
    console.log("You can drive");
}
else{
    console.log("You can't drive");
}

console.log(agee+grace)
console.log(agee ** 2)  //Exponentiation Operator

// Another one is Modulus Operator. it gives remainder.

console.log(agee % 2) // here 17/2 where remainder is 1. so answer is 1

/* List of All arithmetic Operator : 
+ --> Addition
- --> Subtraction
* --> Multiplication
** -->Exponentiation 
/ --> Division
% --> Modulus
++ --> Increment Operator
-- --> Decrement Operator 
*/

/* List of All Assignment Operator : 
= --> x = y
+= --> x = x + y
-= --> x = x - y
*= --> x = x * y
/= --> x = x / y
%= --> x = x % y
**= --> x = x ** y
*/
console.log(agee+=3)

/* Comparision Operator :
== --> Equal to
!= --> Not Equal to
=== --> Equal value and equal type
!== --> Not Equal value or not equal type
> --> Greater than
< --> Less than
>= --> Greater than or Equal to
<= --> Less than or Equal to
? --> Ternary Operator
*/

let ageee=18;
if(ageee===18){
    console.log("You are eligible to vote");
}
else{
    console.log("You are not eligible to vote");
}

/* What is === Operator
It checks if two things are exactly the same, both in value and type. For example, 5 === 5 is true, but 5 === "5" is false because one is a number and the other is a string.*/

/* Logical Operator : 
&& --> Logical And(both condition should be true)
|| --> Logical Or(Any One Condition should be true)
! --> Logical Not(In JavaScript, the logical NOT operator (!) inverts the boolean value of an expression, turning true to false and false to true.)
*/

let age1=23
let gen = "girl"
if(age1>=18 && gen=="girl"){
    console.log("You are eligible for work from home");
}
else{
    console.log("You are not eligible for work from home.")
}

/*Comments in JavaScript :
Sometimes we want our programs to contain a text which is not executed by the JS Engine.
Such a text is called comment in JavaScript. 
Two types of comments : Single line comment and Multi line comment

Single line comment :
// This is a single line comment

Multi line comment :
/* 
This is a multi line comment
*/

// Conditioal Stetements types in js:
// if statement 
// if..else statement
// if...else if...else statement

// Now we already see first two types of conditionals. Now what about if...else if..else ?

let age2 = 56;
if(age2>0){
    console.log("A Valid Age");
}
else if(age2>10  && age2 < 15){
    console.log("You are a kid");
}
else if(age2>18){
    console.log("You are not a kid");
}
else{
    console.log("Invalid Age");
}

// JavaScript Ternary Operator :
// The ternary operator is a shorthand way of writing an if-else statement.
// Syntax :
// condition ? expression1 : expression2

let age3 = 25;
let result = age3 > 18 ? "You are eligible" : "You are not eligible";
