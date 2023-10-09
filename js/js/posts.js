import { el, getStorage, setStorage, fileToBase64 } from "./helpers.js";

const app = el("#app");
const loadDataBtn = el("#load-post-data");
const reloadDataBtn = el("#reload-post-data");
const posts = getStorage("posts", []);
let isDataLoaded = false;

console.log(posts);

const fetchPostsData = () => {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((posts) => setStorage("posts", posts));
};

if (!posts.length) fetchPostsData();

const bootstrapBgClasses = [
  "bg-primary",
  "bg-secondary",
  "bg-success",
  "bg-danger",
  "bg-warning",
  "bg-info",
  "bg-light",
];

const userComponent = (post) => {
  const randomClassIndex = Math.floor(
    Math.random() * bootstrapBgClasses.length
  );

  const randomBgClass = bootstrapBgClasses[randomClassIndex];

  console.log(randomClassIndex, randomBgClass);

  app.innerHTML += `
  <div class="col-12 col-sm-6 col-md-4 border p-4 ${randomBgClass}">
    <h3>${post.title}</h3>
    <p>${post.body}</p>
  </div>
`;
};

const renderData = () => {
  if (isDataLoaded) return;

  posts.forEach((post) => userComponent(post));

  isDataLoaded = true;
};

loadDataBtn.addEventListener("click", renderData);

reloadDataBtn.addEventListener("click", () => {
  app.innerHTML = "";
  posts.forEach((post) => userComponent(post));
});