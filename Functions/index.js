// Function declaraiton
function printName() {
  console.log("print name...");
}

// Function Expression
const printer = function () {
  console.log("print....");
};

printer();

// argumetns
function sum( ) {
    let total = 0;
  for (let val of arguments) console.log(val);
}

// console.log(sum(1,2,4,56,7,8,8))
sum(1, 2, 4, 5, 67);


// using REST OPERATOR
function discoutPrice(discount, ...prices) {
    return prices.reduce((a, c) => a += c) * (1 - discount);
}

console.log(discoutPrice(0.2, 100, 500, 200, 200));


// defualt values 
function interest(principal, rate = 3.5, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, undefined, 4));