const p = new Promise((resolve, reject) => {
  // Kick off some async work....
  setTimeout(() => {
    // resolve(100);
    reject(new Error("error message!!!"));
  }, 1000);
});

p
.then((result) =>
    console.log(`Result : ${result}`))
.catch((resolve) =>
    console.log(`error caught : ${resolve}`));
    


