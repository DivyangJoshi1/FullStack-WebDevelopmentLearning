// Author : JOSHI DIVYANG BHARATBHAI
// Concept : JavaScript try catch & Error Handling

let a = prompt("Enter first number")

let b = prompt("Enter second number")
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allowed")
}

let sum = parseInt(a) + parseInt(b)

function main(){ 
    let x = 1;
    try {
        console.log("The sum is ", sum * x)
        return true
        
    } catch (error) {
        console.log("Error aa gaya bhai")
        return false
    } 
    finally{
        console.log("files are being closed and db connection is being closed")
    }
  
}

let c = main()

// why finally will use ? we can do it with console statement also ?
// so when we use return stateme in try catch block then after return statement no code will execute then what if we want to execute it so we use finally block for it.