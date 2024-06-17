//Author : JOSHI DIVYANG BHARATBHAI
// All about JavaScript Strings
console.log("This is Tutorial of Strings")

let a = "Divyang" //Declaring a String

console.log(a) //print string 
console.log(typeof a) //print stringtype

// how to access each character of String
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7]) //here it gives no error, bcz js try to give minimum no. of errors so that here it gives undefined.

//length of the string
let len = a.length
console.log(len)

//Concept of Template literals in JavaScript

// Template literals use backtics instead of quotes to define a string

let name = `Divyang`

// with template literals it is possible to use both single as well as double quotes inside a string.

// example usage : 
let sentence = `The name of Divyang's product is "TechNexus"`
console.log(sentence)

// Another one example
let real_name = "Divyang"
let friend = "Rohan"
console.log("His name is "+real_name+"but his friend name is "+friend)

// we can insert variable directly in template literal , This is called string interpolation 
console.log(`His name is ${real_name} and his friend name is ${friend}`)


// console.log("His name is ${real_name} and his friend name is ${friend}") --> here it not print variable value bcz of template literal is missing .


// Concept of Escape Sequence Character
// Escape sequence characters are used to insert special characters in a string.

// Example :
let str = "Hello\nWorld"
console.log(str)

// here \n is escape sequence character which is used to insert new line in string.
// \t is used to insert tab space in string.
// \b is used to insert backspace in string.
// \r is used to insert carriage return in string.

let back="here\th"
console.log(back)

// Now what if we write let name = 'Roh'an' --> here javascript does not understand where to complete string.
// so we used escape sequence character
let name3 = 'Rohan\'s home'
console.log(name3)


// String properties and Methods

let mname="Divyang"
console.log(mname.length)

let name4="Divyang"
console.log(name4.toUpperCase())

let name5="Divynag"
console.log(name5.toLowerCase())

let name6="Divynag"
console.log(name6.slice(2,4))

let name7="Divyang"
console.log(name7.substring(2,6))

let name8="Divyang"
console.log(name7.substring(5))

let name9="Divyang"
console.log(name9.replace("Divyang","Rohan"))

let nname="Divyang"
let cname="Rohan"
let result=(nname+cname)
console.log(result)  //for concatination of String

let wname="     Divyang"
console.log(wname)  //here it prints white space but what if we want to such type of white space in the string then use trim method or function for it
console.log(wname.trim())

// Strings are immutable . Inorder to access the character at an index we use indexing for it

let cname1 = "Divyang"
console.log(cname1.charAt(0)) //Gives character at given index

let iname = "Divyang"
console.log(iname.indexOf("ang")) //Answer is : 4