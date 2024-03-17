// ------------------ASYNC CODE------------------
console.log("Before");

console.log(getUser(100));

console.log("After");

function getUser() {
  setTimeout(() => {
    console.log("in between!!");
      console.log("reading a user from database!!!");
    return 1000;
  }, 4000);

  return -1000;
}

// async code -> sync code
// 1. Callbacks
// 2. Promises
// 3. Async/await

