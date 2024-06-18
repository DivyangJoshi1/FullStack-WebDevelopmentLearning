//Author : JOSHI DIVYANG BHARATBHAI
//Inserting and Removing Elements using JavaScript

let div=document.createElement("div")
div.innerHTML="Hey<b>Divyang</b>"
div.setAttribute("class","created")
document.querySelector(".container").append(div)

 // Yes, using document.querySelector(".container").append(div1) will add the div1 element to the end of the .container element. The append method inserts the specified content as the last child of the target element.

//  node.append(e) -> append at the end of the node
//  node.prepend(e) -> append at the beginning of the node
//  node.before(e) -> append before the node
//  node.after(e) -> append after the node
// node.replacewith(e) -> replaces node with the given node.

// insert Adjacent HTML/Text/Element
// This method is used to insert HTML . The first parameter is a code word,specifying where to insert.Must be one of the following
// (1)"beforebegin" -> insert HTML immediatly before element
// (2)"afterbegin" -> insert HTML immediatly inside element, before its first child
// (3)"beforeend" -> insert HTML immediatly inside element, after its last child
// (4)"afterend" -> insert HTML immediatly after element

// the second parameter is an HTML String.

let cont=document.querySelector(".container")
cont.insertAdjacentHTML("afterbegin","Hey ,<b>Divyang bro</b>")

// node removal 
// To remove a Node, there is a method node.remove()

let id = document.getElementById("xbox")
id.remove()

// ClassName and ClassList
// If we assign something to elem.className , it replaces the whole string of classes
// often , we want to add/remove.toggle a single class
// (1) elem.classlist.add/remove("class") -Adds/removes a class
// (2) elem.classlist.toggle("class") -Adds the class if it doesn't exist , otherwise removes it
// (3) elem.classlist.contains("class") -Checks if the class exists , return true/false