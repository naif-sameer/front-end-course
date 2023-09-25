// console.log("hello world! from index.js", 1, 2, 3);

// console.log(prompt('enter your password'))
// console.log(confirm('are you above 16'))

/*********** variables ***********/

var name = "mohammad"; // string
var age = 20; // number
var skills = ["html", "css"]; // array
var cardInfo = {
  // object
  name: "TCard",
  color: "red",
  made: "china",
};

var isMobileDev = true; // boolean

var myInfo;

// console.log(name, age, skills, cardInfo, myInfo);

/*********** string ***********/

var full_name = "ahmed Ali";

// // const email = "asd1234@gmail.com";

// console.log(
//   // email.replace(pattern, "***@")
// )

// full_name.search('Ahmed')
// full_name.search(/Ahmed/)
// full_name.search(/Ahmed/i)

// console.log(
//   full_name.includes('Ahmed'),
//   full_name.indexOf('Ahmed'),
//   full_name.padEnd('Ahmed'),
//   full_name.padStart('Ahmed'),
//   full_name.repeat(10),
//   full_name.toLowerCase(),
//   full_name.endsWith('Ahmed'),
//   full_name.startsWith('Ahmed','Khalid'),
//   full_name.toUpperCase()
//   full_name.replace('Ahmed','Khalid'),
//   full_name.slice('Ahmed','Khalid'),
//   full_name.split('Ahmed','Khalid'),
// )

/*********** array ***********/
var skills = ["html", "css"]; // array

// skills.pop()
// skills.shift()

skills.push("Js");
skills.unshift("Start", "dddd");

skills.join("");

var deg = [20, 40, 50, 35];

console.log(deg);

// for(var i = 0; i < deg.length; i++){

//   myFun(deg[i])
// }

function myFun(item) {
  console.log(item / 50);
}

deg.forEach(function (item) {
  console.log((item / 50) * 100 + "%");
});

var studentDeg = deg.map((item) => (item / 50) * 100 + "%");

var info = [1, 2, 3, 4].map((item) => item * 2);

console.log(info);

console.log(studentDeg);

// console.log(skills.join(", "), skills);

// skills.reverse();

// console.log(skills.includes("J"));

// skills.fill('dd', 3, 4)

// console.log(skills.splice(2, 0, "vuejs", "reactjs", "angluar"));

// console.log(skills);
// console.log(
//   skills.slice(2),

//   "array slice"
// );
// console.log(skills);

// console.log(
//   // skills.concat("js")
//   skills,
//   skills.length
// );

/*********** functions ***********/
// function sum() {
//   var num1 = prompt("number 1");
//   var num2 = prompt("number 2");

//   console.log(Number(num1) + Number(num2));
// }

// sum();

// ----
// function sum(num1, num2) {
//   return +num1 + +num2;
// }

// console.log(sum(2, '4'));

// var sum = function (num1, num2) {
//   return +num1 + +num2;
// }

// var sum = (n1, n2) => {
//   return n1 + n2;
// }

// var sum = (n1, n2) => n1 + n2;

// console.log(sum(2, 4));