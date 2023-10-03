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
