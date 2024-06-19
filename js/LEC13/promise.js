//Author : JOSHI DIVYANG BHARATBHAI

console.log('This is Promises');

// Introduction to promises : 
// The solution to the callback hell is promises.A promise is a "promise of code execution".The code either executes or fails in both the cases. The subscriber will be notified. The syntax of promise looks like this:
// let promise = new Promise(fucntion(resolve,reject){
// });

// resolve and reject are the callbacks provided by javascript itself. they are called like this : 

// resolve(value) -> if the job is finished successfully
// resolve(error) -> if the job fails

// the promise object returned by the new promise constructor has these properties

// (1) state : initially pending , then changes to either "fullfilled" when resolve is called or "rejected" when reject is called

// (2) result : initially undefined , then changes to value if resolved or error when rejected.

// Consumers : then and catch
// The consuming code can either the final result of a promise through then and catch.The most fundamental is then

// promise.then(function(result){
// */ handle */},
// function(error{*/ handle error*/});
// )

// if we are only intersted in successfull completions , we can provide only one function argument to then():

// let promise = new promise(resolve=>{
    // setTimeout(e)=>resolve("done"),1000
    // });
// promise.then(alert);

// if we are only intersted in errors , we can null as first argument : then(null,f) or we can use .catch(alert)

// promise.finally(e=>{}) is used to perform gemeral cleanups

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("Harry")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you 2")
    }
    else {
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("Harry 2")
        }, 1000);
    }
})

 
let p3 = Promise.race([prom1, prom2])
p3.then((a)=>{
    console.log(a)
}).catch(err=>{
    console.log(err)
})

// now concept of promise chaining and promise API : see pdf for more explanation

