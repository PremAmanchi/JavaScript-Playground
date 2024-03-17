// ------------------Using CallBack------------------
console.log("Before");

let search_id = 100;
// console.log(getUserWithoutCallback(search_id));
getUser(search_id, displayCourses);

console.log("After");

// synchronous 

// getUserWithoutCallback(id){
//     setTimeout(() => {
//         console.log("in between!!");
//         console.log("reading a user from database!!!"); 
//         return 10;
//     }, 1000);
//     return -10;
// }

// ------- get user function -------
function getUser(id, callback) {
  setTimeout(() => {
    console.log("in between!!");
    console.log("reading a user from database!!!");
    callback({ id: id, studentName: "Prem Kumar" });
  }, 1000);
}

function displayCourses(student){
        console.log("Student : ", student);
        // get the courses of the student;
        getCourses(student, displayCourses);
}

function displayCourses(courses) {
    console.log(courses);
}

// ------- get courses function -------
function getCourses(username, callback) {
  setTimeout(() => {
    console.log(
      `getting the courses for student ${username.studentName} from the DB.... `
    );
    callback(["AI", "SML", "DM"]);
  }, 2000);
}