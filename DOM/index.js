// DOM MANIPULATION

const div = document.querySelector("div");
div.addEventListener("click", (e) => {
  const target = e.target;
  console.log(`${target.innerText} is clicked!!`);
  target.style.border = "10px solid gold";
  target.style.backgroundColor = "dodgerblue";
});

const ul = document.querySelector("ul");
const li = document.createElement("li");
li.setAttribute("class", "list-items");
li.innerText = "TENNIS";
ul.append(li);

// const badminton = document.querySelectorAll(".list-items")[0];
// badminton.addEventListener("click", (e) => {
//   console.log(`badminton is clicked!!`);
//   const target = e.target;
//   target.style.border = "10px solid gold";
// });
// const cricket = document.querySelectorAll(".list-items")[1];
// cricket.addEventListener("click", (e) => {
//   console.log(`cricket is clicked!!`);
//   const target = e.target;
//   target.style.border = "10px solid gold";
// });
// const basketBall = document.querySelectorAll(".list-items")[2];
// basketBall.addEventListener("click", (e) => {
//   console.log(`basketBall is clicked!!`);
//   const target = e.target;
//   target.style.border = "10px solid gold";
// });
// const football = document.querySelectorAll(".list-items")[3];
// football.addEventListener("click", (e) => {
//   console.log(`football is clicked!!`);
//   const target = e.target;
//   target.style.border = "10px solid gold";
// });
// const rugby = document.querySelectorAll(".list-items")[4];
// rugby.addEventListener("click", (e) => {
//   console.log(`rugby is clicked!!`);
//   const target = e.target;
//   target.style.border = "10px solid gold";
// });
