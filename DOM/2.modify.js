// DOM Manipulation
const title = document.querySelector("#main-heading");

// access css props in js
// INLINE STYLING
title.style.color = "dodgerblue";

const listItems = document.querySelectorAll(".list-items");
console.log(listItems);
listItems.forEach((item) => (item.style.fontSize = "4rem"));

//CREATE ELEMENTS
const ul = document.querySelector("ul");
const li = document.createElement("li");

ul.append(li);

// MODIFYING TEXT

const firstListELement = document.querySelector("li");
console.log(firstListELement.innerHTML);
console.log(firstListELement.textContent);
console.log(firstListELement.innerText);

li.innerText = "The Bahubali Beginning";

// MODIFYING ATTRIBUTES AND CLASSESS

// li.setAttribute("class", "list-items");
// li.removeAttribute("class");

console.log(title.getAttribute("id"));

li.classList.add("list-items");
console.log(li.classList.contains("list-items"));
li.classList.remove("list-items");
console.log(li.classList.contains("list-items"));
