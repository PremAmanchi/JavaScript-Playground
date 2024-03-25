function Person(name) {
  let personName = name;
  this.walk = function () {
    console.log("I am waling.....");
  };

  // declare getters and setters;
  Object.defineProperty(this, "name", {
    get: function () {
      return personName;
    },
    set: function (name) {
      personName = name;
    },
  });

}

const person = new Person("Prem");
person.walk();
person.name = "kumar";
console.log(person.name);
