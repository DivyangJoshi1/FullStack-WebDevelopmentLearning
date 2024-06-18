//Author : JOSHI DIVYANG BHARATBHAI

let button = document.getElementById("btn")

button.addEventListener("dblclick",()=>{
    // first argument is which event we want to listen
    // second will be function if we listen for the function
    // here it is double click but it will be hower or double click or anything event etc.

    // alert("I was clicked")

    document.querySelector(".box").innerHTML="<b>Yayy you were clicked</b> Enjoy your click!"
    // change content when doubleclicked.
    
    // if you want to know which type of events are there then visit mdn of browser events.

    // List of all mouse events : 
    // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent

})

button.addEventListener("contextmenu",()=>{
    alert("Do not hack us by right click please")
})

//  there are mouse events same as keyboard events like keydown or keyup

// another is element event : submit , focus etc
// window event : scroll , resize etc
// document event : DOMContent loaded

// keydown event.
document.addEventListener("keydown",(e)=>{
    console.log(e)
    // now open console and check after pressing any key
    console.log(e.key,e.keyCode) //here cross line on keycode means it depricated now
})

// check other events in mdn reference inside browser events