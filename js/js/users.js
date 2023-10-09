import { el, getStorage, setStorage, fileToBase64 } from "./helpers.js";

const app = el("#app");
const loadDataBtn = el("#load-users-data");
const reloadDataBtn = el("#reload-users-data");
const users = getStorage("users", []);
let isDataLoaded = false;

console.log(users);

const fetchUsersData = () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((users) => setStorage("users", users));
};

if (!users.length) fetchUsersData();

const bootstrapBgClasses = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
];

const userComponent = (user) => {
  const randomClassIndex = Math.floor(
    Math.random() * bootstrapBgClasses.length
  );

  const randomBgClass = bootstrapBgClasses[randomClassIndex];

  console.log(randomClassIndex, randomBgClass);

  app.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 border p-4 ${randomBgClass}">
    <h3>${user.name}</h3>
    <p>${user.email}</p>
    <p class="mb-0">${user.phone}</p>
  </div>
`;
};

const renderData = () => {
  //   app.innerHTML = "";

  if (isDataLoaded) return;

  users.forEach((user) => userComponent(user));

  isDataLoaded = true;
};

loadDataBtn.addEventListener("click", renderData);

reloadDataBtn.addEventListener("click", () => {
  app.innerHTML = "";
  users.forEach((user) => userComponent(user));
});

// const div = document.createElement("div");

// div.textContent = "Hello World";
// div.setAttribute('class', 'dkljlfkjdlfldlkjf')

// document.body.appendChild(div);


// document.body.innerHTML += '<div class="dkljflkdjl">hello world!</div>';

