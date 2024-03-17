// console.log("Before");

getStudent(1)
    .then(student => getCourses(student))
    .then(courses => displayCourses(courses))
    .catch((error) => console.log(error));

// console.log("After");

function getStudent(id) {
    return new Promise((resolve, reject) => {
        console.log("getting user....");
        setTimeout(() => {
            resolve({
              id: id,
              studentName: "Prem Kumar Amanchi",
            });
        }, 1000);
  });
}

function getCourses(stduent) {
    return new Promise((resolve, reject) => {
        console.log(
          `getting courses for the student :  ${stduent.studentName}`
        );
        setTimeout(() => {
            resolve(["course1", "course2", "course3"]);
        }, 1000);
    })
}

function displayCourses(courses) {
    console.log(courses);
}



