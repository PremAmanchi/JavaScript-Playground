function Car1(brand, model) {
  this.brand = brand;
  this.model = model;
  this.drive = function () {
    console.log("drive......");
  };
}

// internal declaration of above object using function...
// const Car2 = Function(
//   "brand",
//   "model",
//   `
//     this.brand = brand;
//     this.model = model;
//     this.drive = function () {
//         console.log("drive......");
//     }
//     `
// );

const car1 = new Car1("Audi", "A4");
const car2 = new Car1("BMW", "Q");

car2.drive();

// different ways to call same function...
// const car3 = Car1.apply({}, "FORD", "Ecosport");
// car3.drive();

// const car4 = Car1.apply({}, ["FORD", "Ecosport"]);
// car4.dirve();

console.log(
  "----------------------ADDING MEMBERS( propertys or methods )  to object IS DYNAMIC"
);
car2.location = { x: 1 };
car2.nickname = function () {
  console.log("nick name....`");
};
console.log(car2.location);
car2.nickname();

console.log("----------------------ENUMERATE PROPERTYS IN A OBJECT");
// FOR IN
for (let key in car2) {
  console.log(key);
}

// OBJECTS...
const keys = Object.keys(car2);
console.log(keys);

// CHECK IF IT EXISTS
if ("brand" in car2) console.log("brand exists in car2 propertiestrue");

