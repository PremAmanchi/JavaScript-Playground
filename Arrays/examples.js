// get numbers from range values
const numbers = arrayFromRange(-5, 5);
console.log(numbers);
function arrayFromRange(min, max) {
  arr = [];
  for (let val = min; val <= max; val++) arr.push(val);
  return arr;
}

// includes method function => create your own
console.log(numbers);
function includes(numbers, val) {
  for (let curr of numbers) if (curr == val) return true;
  return false;
}

console.log(includes(numbers, 6));
console.log(includes(numbers, 5));

//  exclude numbers funciton =>
console.log("total array : ", numbers);
exclude = [1, 3, 4];
console.log("exclude values : ", exclude);
const excludes_result = excludes(numbers, exclude);

function excludes(numbers, excluded) {
  const filter = numbers.filter((n) => !(n in excluded));
  return filter;
}

console.log("after exclude result : ", excludes_result);

// move numbers based on off set
console.log("before shift : ", numbers);

const output = move(numbers, 1, -6);

console.log("after shift : ", output);

function move(numbers, index, offset) {
  // base case
  if (index + offset < 0 || index + offset > numbers.length) return -1;
  // logic
  let val = numbers.splice(index, 1)[0];
  numbers.splice(index + offset, 0, val);
  return numbers;
}

// count occurance
const vals = [1, 2, 3, 1, 2, 1, 1, 1, 1];
console.log("numbers : ", vals);
const target = 1;
const count = vals.reduce((a, c) => (c === target ? ++a : a), 0);

console.log(count);
const max = vals.reduce((a, c) => (a < c ? c : a));
console.log(max);

// movies
const movies = [
  { title: "a", year: 2019, rating: 4.5 },
  { title: "b", year: 2019, rating: 5.0 },
  { title: "c", year: 2019, rating: 3.0 },
  { title: "d", year: 2022, rating: 3.0 },
];

// get all the movies in 2018 with rating > 4
// sort them by their rating
// descending order
// pick their title

const selected = movies
  .filter((movie) => movie.year == 2019 && movie.rating > 3)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((movie) => movie.title);

console.log(selected);
