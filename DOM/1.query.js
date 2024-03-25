// DOM Manipulation

// GetElementById()
const title = document.getElementById("main-heading");
setTimeout(() => (title.innerHTML = "All Time Favorite"), 5000);

// GetELementByClass()
const movies1 = document.getElementsByClassName("list-items");
console.log(movies1);

// GetElementByTagName()
const movies2 = document.getElementsByTagName("li");
console.log(movies2);

// querySelector()
const firstMovie = document.querySelector("li");
console.log(firstMovie);

// querySelectorAll()
const AllMovies = document.querySelectorAll("li");
console.log(AllMovies);
