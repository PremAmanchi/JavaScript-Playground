// ------------------Using CallBack------------------
console.log("Before");

let search_id = 100;
getUser(search_id, (user) => {
    // log the student;
    console.log("Student : ", user);
    
    // get the courses of the student;
    getCourses(user, (courses) => {
        console.log(courses);
    });
});


console.log("After");


// ------- get user function -------
function getUser(id, callback) {
  setTimeout(() => {
    console.log("in between!!");
    console.log("reading a user from database!!!");
    callback({ id: id, studentName: "Prem Kumar" });
  }, 4000);
}

// ------- get courses function -------
function getCourses(username, callback) {
    setTimeout(() => {
        console.log(`getting the courses for student ${username.studentName} from the DB.... `);
        callback(["AI", "SML", "DM"]);
    }, 2000);
  
}
