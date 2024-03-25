console.log(`------------DIFFERENT WAYS TO CREATE OBJECTS-------------
1. Object Literal
2. Factory function
3. Constructor Function `);

// object literal
const circle1 = {
  radius: 5,
  area: function () {
    console.log(this.radius * this.radius);
    console.log(this);
  },
};

circle1.area();

// factory function
function createCircle(r) {
  return {
    radius: r,
    area: function () {
      console.log(this.radius);
      console.log(this);
    },
  };
}

const circle2 = createCircle(3);
circle2.area();

// constructor function
function Circle(r) {
  this.radius = r, 
  this.area = function() {
      console.log(this.radius);
      console.log(this);
    };
}
const circle3 = new Circle(8);
console.log(circle3.area());
