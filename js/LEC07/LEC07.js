//Author : JOSHI DIVYANG BHARATBHAI
// All about JavaScript Arrays

// Arrays are variables which can hold more than one value

// Example:

const fruits = ["Divyang","Rohan","Meet"]
const array=[1,"Divyang","SDE"]
const array1=[1,2.1,true]
console.log(fruits) 
console.log(array)
console.log(array1)
console.log(typeof(fruits))
console.log(typeof(array))
console.log(typeof(array1))  //here typeof and array is object.

// we can store multiple data type format in single array.
// we can store string, number, boolean, object, function, etc.

// Accessing values of array
let numbers=[1,2,3,4,5,6,7]
console.log(numbers[0]) // output: 1
console.log(numbers[1]) // output: 2 

// finding the length of the array 
console.log(numbers.length) // output: 7

// Changing of values in the array
// so here we can conclude that array is mutable

let numbers1=[1,2,3]
numbers1[0]=10
console.log(numbers1) // output: [10,2,3]

// Array Methods
// There are some important array methods in javascript . Some of them are as follows.

// (1) toString --> Converts an array to a String of comma seperated values

let n = [1,7,9]
console.log(n.toString())

let n1=["String","Divyanng"]
console.log(n1.toString())

let n2="String"
console.log(n2.toString()) //here it gives String in answer , not in coma seperated character.

// (2) join() --> joins all the array elements using a seperator

let n3=[3,2,1]
console.log(n3.join("-"))

// (3) pop --> removes last element from the array

let n4=[1,2,3,4,5]
console.log(n4.pop())
console.log(n4)

// (4) push()  --> Adds a new element at the end of the array

let n6=[1,2,3,4,5,6]
n6.push(10)
console.log(n6)

// (5) shift() --> Removes first element and returns it

let n7=[1,2,3,4,5,6]
console.log(n7.shift())
console.log(n7)

// (6) unshift --> Adds new element to the beginning returns new array length
let n8=[1,2,3,4,5,6]
n8.unshift(10)
console.log(n8)

// (7) delete --> Array element can be deleted using the delete operator

let d = [7,8,9,19]
delete d[1]
console.log(d)
d[1] = 99   
console.log(d)

// (8) concat --> used to join arrays to the given array

let cnum1=[1,2,3,4]
let cnum2=[5,6,7,8]
let cnum3=[9,10,11,12]
let cnum=cnum1.concat(cnum2,cnum3)
console.log(cnum)
console.log(cnum1) //no change in original array

// (9) sort --> sort() method is used to sort an array alphabetically

let sn=[8,3,2,9]
sn.sort()
console.log(sn)

let sname=["Divyang","Alex","Rohan"]
sname.sort()
console.log(sname)

// (10) splice() --> splice can be used to add new items to an array.
// Syntax: array.splice(start, deleteCount, item1, item2, ...)
// Explanation of Syntax of splice : 

// start:The index at which to start changing the array.
// deleteCount:An integer indicating the number of elements to remove from the array.If omitted, all elements from the start index to the end of the array will be removed.If deleteCount is 0 or negative, no elements will be removed. In this case, you must specify at least one new element to add.


const snumb=[1,2,3,4,5]
snumb.splice(2,2,10,20)
console.log(snumb)

// (11)reverse: Reverse the elements in the source array

let rnum=[1,2,3,4,5]
rnum.reverse()
console.log(rnum)


