// DOM MANIPULATION

// TRAVERSAL

// TRAVERSE UP - PARENT
const li = document.querySelector("li");
console.log(li.parentElement.parentElement);
console.log(li.parentNode);

// TRAVERSE DOWN - CHILD
// NODES
console.log("----------------NODES----------------");
const ul = document.querySelector("ul");
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.fontSize = "5rem";
console.log("---------------Siblings---------------");
console.log(ul.nextSibling);
console.log(ul.previousSibling);

// ELEMENTS
console.log("--------------ELEMENTS----------------");
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

console.log("---------------Siblings---------------");
console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
