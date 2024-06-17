//Author : JOSHI DIVYANG BHARATBHAI
//Date : 24-07-2022

console.log("Divyang")

// now as we saw previously , what if we want to put background color aqua to the box 3 through id or class using dom

// ByClassName
/*
let boxes=document.getElementsByClassName("box")
console.log(boxes)
boxes[2].style.backgroundColor="aqua"
*/

// By Id
/*
let boxes1=document.getElementById("aqua")
boxes1.style.backgroundColor="green"
*/

// By query Selector
// we can also do same thing by query selector

// let as=document.querySelector(".box") 
// here .box means first box of .box class
// qs.style.backgroundColor="#675491"

// querySelectorAll Concept:
let as2=document.querySelectorAll(".box") //here it retruns collection of box. in previous example , it returns element.Now we want to set background color to all elements of class box.So we need to use for loop for gone through each element

as2.forEach(e=>{
    e.style.backgroundColor="#921357"
})

// we can also target by tagname
// ex : getElementsByTagName("div")
// it gives all parent and child element whose tag is div

let e=document.getElementsByTagName("div")
// e[5].matches("#aqua") --> return true
// e[3].closest(".container") -->return container tag
// eleA contains(eleB) --> return true if eleA contains eleB
