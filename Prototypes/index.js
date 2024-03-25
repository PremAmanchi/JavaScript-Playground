console.log("Hello...");
console.log(this);

function human(name) {
  return {
    name,
    printName() {
      console.log(this);
    },
  };
}

const person = human("Prem Kumar");
console.log(person.name);
person.printName();
// console.log(Object.getPrototypeOf(person));

console.log(Object.getOwnPropertyDescriptor(person, "name"));
// output
// {value: ƒ, writable: true, enumerable: true, configurable: true}

// WE CAN CONFIGURE THE ABOVE PROPERTY'S
Object.defineProperty(person, "name", {
    writable: false,
    enumerable: false,
});
console.log(person);

// ADD MEMBERS TO PROTOTYPES
function Car(name) {
    return {
        name
    };
}

const car = new Car("Lexus");
Car.prototype.nickname = function(){
    console.log("nick name");
}
car.nickname();
