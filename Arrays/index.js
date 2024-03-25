console.log("-------------------ARRAY[PRIMITIVES]-----------------------");
const numbers = [1, 2, 3, 4, 5];

// add end
numbers.push(6, 7, 8);
console.log(numbers);

// add beginnning
numbers.unshift(0);
console.log(numbers);

// add middle
numbers.splice(2, 0, 6, "a", "b");
console.log(numbers);

// find elements
console.log(numbers.indexOf("1")); //element does not exist;
console.log(numbers.indexOf(6)); // element exists

console.log(numbers.lastIndexOf(6));

// element exists?
console.log(numbers.indexOf(1) != -1);
console.log(numbers.includes(1));

// indexOf/includes for element after certain point,
console.log(numbers.includes(1, 4));

console.log("-------------------ARRAY[OBJECTS]-----------------------");

// finding primitives vs objects
const Persons = [
  { id: 1, name: "Prem Kumar" },
  { id: 2, name: "Prem Kumar" },
];

// both are points out to differnt objects => does not work;
console.log(Persons.includes({ id: 1, name: "Prem Kumar" }));

//so use find method;
target = { id: 1, name: "Prem Kumar" };
console.log(
  Persons.find(
    (person) => person.name === target.name && person.id === target.id
  )
);

console.log("-------------------REMOVE-----------------------");

// remove numbers
const nums = [1, 2, 3, 4, 5, 6];
console.log(nums);

// End
console.log(nums.pop());
console.log(nums);

// Beginning
console.log(nums.shift());
console.log(nums);

// Middle
console.log(nums.splice(3, 1));
console.log(nums);

console.log("-------------------REMOVE ALL-----------------------");

let marks = [100, 91, 99, 98];
console.log(marks);

// solution 1
marks = [];

// solution 2
marks.length = 0;

// solution 3
marks.splice(0, marks.length);

// solution 4
while (marks.length > 0) marks.pop();

console.log(marks);

console.log(
  "-------------------COMBINE and SLICE ARARYS-----------------------"
);
const first = [1, 2, 3];
const second = [4, 5, 6];

// concat
const combined = first.concat(second);

// slice
const slice = combined.slice(2, 4);
const clone = combined.slice();
const clone2 = [...combined];

console.log(combined);
console.log(slice);
console.log(clone);

console.log(`
    CAUTION!!!!

    primitives will be copied by value, 
    so no issues,
    objects are copied by reference.. change in one, reflects in another`);

// spread operator
console.log(`Preferred to use SPREAD operator for combining or cloning!!`);
const combined_spread = [...first, ...second];
console.log(combined_spread);

console.log(
  "--------------------ITERATING, JOIN, SORT ARRAY---------------------------------"
);

console.log(nums);

console.log("using for of");
for (let num of nums) console.log(num);

console.log("using for each");
nums.forEach((num, index) => console.log(num, index));

const joined = nums.join(",");
console.log(joined);
// use case : create url slug

const title = "create log new id";
console.log("url title : ", title);
const slug = title.split(" ").join("-");
console.log("url slug  : ", slug);

console.log("-------------------SORT------------------");

let arr = [1, 5, 7, 8, 2, 56, 89];
console.log(arr);
// js sorts on ascii values
console.log(arr.sort());
// to sort on numbers use fat arrow notations
//  a < b => -1
//  a > b => 1
//  a === b => 0

console.log(arr.sort((a, b) => a - b));

// similarly for strings we need to convert to lowercase or uppercase for efficent comparisons
const reports = [
  { name: "Prem Kumar", marks: 100 },
  { name: "akash Reddy", marks: 100 },
];

// with out converting => we get the wrong output
reports.sort((a, b) => {
  const A = a.name;
  const B = b.name;
  return A > B ? 1 : -1;
});

reports.forEach((report) => console.log(report.name));

// with converting => we get the right order
reports.sort((a, b) => {
  const A = a.name.toUpperCase();
  const B = b.name.toUpperCase();
  return A > B ? 1 : -1;
});

reports.forEach((report) => console.log(report.name));

// test every
let values = [1, 2, 3, 4];
const allPositive = values.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

values = [1, -2, 3, 4];
const somePositive = values.some(function (value) {
  return value >= 0;
});
console.log(somePositive);

// fiter array
const prices = [100, 200, 400, 500];
const filter = prices.filter((p) => p > 300);
console.log(filter);

// map method
const listNames = ["prem", "akash", "abhinay", "aditya"];
const items = listNames.map((n) => "\n\t<li>" + n + "</li>");
const html = "<ul>" + items.join("") + "\n</ul>";
console.log(html);

console.log("// filter and map are chainable");
const profits = [100, -12, -200, 232, 3425];
console.log(profits);
const finalProfits = profits.filter((n) => n >= 0).map((n) => n * 2);
console.log(finalProfits);

// REDUCE METHODS
const total = profits.reduce(
  (acccumulator, currentValue) => (acccumulator += currentValue),
  0
);
console.log(profits);
console.log(total);

// by default accumulator value if not given will be taken as first value
//  and start from the secong value

const similarTotal = profits
    .reduce((a, c) => a += c);
console.log(similarTotal);

