const inputEmail = el("#input-email");
const inputPassword = el("#input-password");
const formBtn = el("#form-btn");

const form = el("#form");
const formMessage = el("#form-message");

// setStorage("users", [
//   { email: "a@a.com", password: "123" },
//   { email: "b@b.com", password: "456" },
//   { email: "c@c.com", password: "789" },
//   { email: "d@d.com", password: "101112" },
//   { email: "e@e.com", password: "131415" },
// ]);
const users = getStorage("users");

// const userDeg = [50, 60 , 80, 50]
// const isPassed = userDeg.every((item) => item >= 50)

// console.log('user is '  + (isPassed ? 'passed' : 'failed'));

const checkUserEmail = (email) => {
  return users.some((item) => item.email === email.toLowerCase());
};

const userAuth = (email, password) => {
  const user = users.find((item) => {
    return item.email === email.toLowerCase() && item.password === password;
  });

  if (user) {
    console.log("you are auth");
    formMessage.innerHTML = `
         <div class="alert alert-success" role="alert">
         you are auth
            </div>
        `;
  } else {
    formMessage.innerHTML = `
         <div class="alert alert-warning" role="alert">
               wrong pass or email
            </div>
        `;
    console.log("wrong pass or email");
  }
};

// inputEmail.addEventListener('input', (event) => {
//     console.log(event.target.value);
// })

inputEmail.addEventListener("blur", (event) => {
  if (!event.target.value) event.target.focus();
});

inputEmail.addEventListener("input", (event) => {
  const isUserEmail = checkUserEmail(event.target.value);
  const emailMessage = el("#email");

  // add
  // remove
  // contains
  // toggle

  //   emailMessage.classList.remove("text-white", "bg-danger", "bg-success");

  emailMessage.classList.remove("d-none");

  if (isUserEmail) {
    emailMessage.textContent = "Email is valid";
    emailMessage.classList.add("text-white", "bg-success");
  } else {
    emailMessage.classList.add("text-white", "bg-danger");
    emailMessage.textContent = "Email is invalid";
  }

  setTimeout(() => {
    if (!event.target.value) {
      emailMessage.classList.add("d-none");
      emailMessage.classList.remove("text-white", "bg-danger", "bg-success");
    }
  }, 1000);

  //   setTimeout(() => {
  //     el("#email").textContent = typeof event.target.value;
  //     console.log(event.target.value);
  //   }, 1000);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // location.replace('index.html?email=' + inputEmail.value + '&password=' + inputPassword.value)

  userAuth(inputEmail.value, inputPassword.value);

  console.log("submit", inputEmail.value, inputPassword.value);
});

// el('#btn').click()
// el('input').focus()

let num = "20003000 dollars";

// num = Number(num)
// console.log(num)

// num = parseFloat(num)

// console.log(num)

// num = window.parseInt(num)
// console.log(
//   num
// )

num = 2000.599348098409;

// console.log(num.toFixed(2))
// console.log(Math.floor(num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(Math.max(1,2,3,4))
// console.log(Math.min(1,2,3,4))
// console.log(Math.random() * 1000) ;

function log(...param) {
  // console.log('log', arguments)
  console.log(...param);
}

// log(389403804938048, 30, 30, 40,40,40,40)

// console.log(Math.min(...[20,30,50]))

// function api(options) {
//   if(!options.method) options.method = 'get'
//   if(!options.isLoading ) options.isLoading = false

//   // api code
//   console.log(options.url, options)
// }

function api({ url, method = "get", isLoading = false }) {
  // api code
  console.log(url, method, isLoading);
}

// function api(options) {
//   const { url, method = 'get', isLoading= false } = options;

//   // api code
//   console.log(url, method, isLoading);
// }

// api({
//   // method: 'post',
//   url: "https://ßgoogle.com",
//   // isLoading: true,
// });

// const info = { name: "ali", age: 40, skills: [1,2,3] };

// const info2 = {name: 'ahmed'}

// let { age, name  } = info;

// let {name : info2Name } = info2
// // const info2Name = info2.name
// console.log(info2Name)

// console.log(age, info);

// const skills = [1,2,3, 839408,4893084,34890348]

// // const skill1 = skills[0]
// // const skill2 = skills[1]
// // const skill3 = skills[2]
// const [skill1, skill2, skill3] = skills

// console.log(location)

// location.reload() // don't use

el("#replace-btn").addEventListener("click", () => {
  // location.replace('index.html')
  // history.back()
  // history.forward()
  // history.go(2)
  // history.go(-2)
  // window.open('https://google.com')
});

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "get",
})
  .then((res) => {
    return res.json();
  })
  .then((data) => console.log(data));
