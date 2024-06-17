console.log("Hello world")

// now if i want to know no of child inside container.then how we do that
// write document.body in the console of the webpage

// console.log(document) //we can not access body in the terminal bcz it's a part of BOM.

// document.body.chilNodes
// Answer:NodeList(9) [text, div.coontainer, text, script, text, comment, text, script, text]

// document.body.childNodes[1]
// Answer:<div class=​"coontainer">​…​</div>​

// document.body.childNodes[1].childNodes
//Answer: NodeList(11) [text, div.box, text, div.box, text, div.box, text, div.box, text, div.box, text] --> here what does mean by text so it represnt space(new line) . if we write <div class="box">Box1</div><div class="box">Box2</div> in same line then it doesn't shows text nodes.

// document.body.firstChild
// Answer:#text  --> it shows first child of body and same for last child also
// ex : document.body.lastchild -->Answer : #text

// let cont=firstChild
// undefined
// cont
// <div class=​"coontainer">​<div class=​"box">​Box1​</div>​<div class=​"box">​Box2​</div>​<div class=​"box">​Box3​</div>​<div class=​"box">​Box4​</div>​<div class=​"box">​Box5​</div>​</div>​
// now we can access container through cont variable
// cont.firstChild  --> #text
// now what if we want to ignore textnode and direct want to see box child then use firstelementchild

// ex : cont.firstElementChild
/* Answer: <div class="box">Box1</div> */

// to set backgroundcolor of box1 to aqua:
// cont.firstElementChild.style.backgroundColor="aqua"

// now what if we want to find parent of some element.
// ex: cont.firstElementChild.parentElement
// <div class="coontainer">

// let cont=document.body.firstElementChild.children[1]
// Answer:<div class="box">Box2</div>

// let cont=document.body.firstElementChild.children[1].nextElementSibling
// Answer:<div class="box">Box3</div>
// and answer for previous element sibiling is box1

// for more details go through pdf notes
