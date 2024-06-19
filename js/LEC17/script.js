async function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(45);
        }, 1000);
    });
}

// let a = await sleep();
// let b = await sleep(); 

//  here it shows error bcz we did not invoked it. we have to create main function then invoked it but what if we want to immediatly invoked it the IIFE Came.


(async function main(){
    let a = await sleep();
    console.log(a)
    let b = await sleep();
    console.log(b)
})

// Now concept of destructuring 
console.log(a1);


(async function main(){ 
    // let a = await sleep()
    // console.log(a)
    // let b = await sleep()
    // console.log(b);

    // let [x, y, rest] = [1, 5, 7, 8, 9, 10]
    // console.log(x, y, rest)

    let obj = {
        a: 1, 
        b: 2,
        c: 3
    }

    let {a, b} = obj
    console.log(a, b)

    let arr = [1, 4, 6]
    console.log(sum(arr[0], arr[1], arr[2]))
    console.log(sum(...arr))

    
})()

var a1 = 6;


const sum = async (a, b, c)=>{
    return a+b+c
}

// refer pdf 