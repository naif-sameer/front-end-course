// function  parent(callback) {

//     // console.log('parent', typeof callback)
//     // callback();

//     return typeof callback
// }

// function child() {
//     console.log('child');

//     // return 'child function return'
// }

// // console.log(child())

// console.log('outside', parent( ))

var auth_condition = true;

function addNewUser() {
  // name email
  var name = "ali";
  var email = "a@a.com";

  console.log("new user added", name, email);
}

function auth(callbackFunction) {
  if (typeof callbackFunction !== "function") {
    console.log("params is not a function");
  }

  if (auth_condition) {
    callbackFunction();
  } else {
    console.log("user not authorized");
  }
}

function editUser() {
  console.log("user edited");
}

function deleteUser() {
  console.log("user deleted");
}

// auth(addNewUser)
// auth(editUser)
// auth(() => {
//   console.log("hello user");
// });
