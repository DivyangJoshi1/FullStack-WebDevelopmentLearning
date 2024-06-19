//Author : JOSHI DIVYANG BHARATBHAI

console.log("Divyang is hacker")
console.log("Rohan is hecker")

setTimeout(()=>{
    console.log("I am inside settimeout")
},0);



console.log("The end")

// here what we think like first console will execute then second console will execute , then function setTiumeout will execute and then last console will execute but it's not looke like that.if js find any Asynchronous function the it put it later for execution.so here first three console will execute then setTimeout will execute.we can see it on console with use of inspect.

// now concept of callback : 

const callback=(arg)=>{
    console.log(arg)
}
const laodscript = (src,callback)=>{
    let sc = document.createElement("script")
    sc.src=src;
    sc.onload=callback("Divyang")
    document.head.append(sc)
}

laodscript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)

// now if there is callback inside call back then it will be callback then it's difficult to manage and this formation will also called as pyramid of Doom. for resolving it we use promises. see pdf notes for detailed explanation