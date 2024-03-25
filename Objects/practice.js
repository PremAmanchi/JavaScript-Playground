function Life(problems, lessonsLearned) {
  let score = 0;
  return {
    problems,
    Personality: lessonsLearned,
    get problems() {
      return "this is problem :: " + problems;
    },
    work() {
      console.log("work harder....", score++);
    },
    sleep: function () {
      console.log("go to sleep.....");
    },
    eat: () => console.log("eat healthy...."),
  };
}

const prem = Life("you", "zero");
prem.work();
prem.work();
prem.work();
prem.work();
prem.sleep();
console.log(prem.problems);
prem.eat();

const Dream = function (goal) {
  this.work = () => console.log(goal++);
};
const mydream = new Dream(1);
mydream.work();
mydream.work();
mydream.work();
