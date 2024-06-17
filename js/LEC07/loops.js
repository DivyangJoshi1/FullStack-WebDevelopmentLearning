let a = [1,93,5,6,88]

//iterating through classical for loop
for(let i=0;i<=a.length;i++){
    console.log(a[i])
}

// for-each loop
a.forEach((value,index,arr) => {
    console.log(value,index,arr)
});

// for-in loop

let object={
    a:1,
    b:2,
    c:3
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element)
        console.log(key)
    }
}

for (const iterator of a) {
    console.log(iterator)
}

// now concept of map() : if we have one existing array and we want to create a new array through it then one method is create a for loop. iterate througn each element and add it to a new array. but we can do it by map() in a single syntax

// simple method
let arr9=[1,3,5,7,11]
let newarr=[]
for(let i=0;i<a.length;i++){
    newarr.push(arr9[i])
}
console.log(newarr)

//map method

let newarr1 = arr9.map((e,index,array)=>{
    return e*index;
})
console.log(newarr1)

// filter() methods

const greaterthanseven=(e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newarr.filter(greaterthanseven))

// reduce method
let arr10=[1,2,3,4,5,6]
const sum=(a,b)=>{
    return a+b
}
console.log(arr10.reduce(sum))

// ArrayFrom --> used to create an array from any other object

const ac = Array.from("Divyang")
console.log(ac)
