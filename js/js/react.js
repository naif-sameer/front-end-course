// var name = "ali";

// let age;

// const appConfig = Object.freeze({
//     name: "app name",
//     version: 1
// });

// const genders = Object.freeze({
//     '1': 'male',
//     '2': 'female'
// })

// console.log(genders['1'])

// var name = "ali";

// age = 400

// appConfig.name = "new app name"

// console.log(appConfig)

// function log() {
//   console.log("log");
//   console.log(age);
//   var name = "ali";
//   let age = 30;

//   return ''
// }

/**
 * Retrieves the first element that matches the specified selector.
 *
 * @param {string} element - The CSS selector of the element to retrieve.
 * @returns {Element|null} The first element that matches the selector, or null if no element is found.
 */
const el = (element) => document.querySelector(element);

/**
 * Retrieves a list of elements that match the specified selector.
 *
 * @param {string} elements - The CSS selector of the elements to retrieve.
 * @returns {NodeList} A list of elements that match the selector.
 */
const els = (elements) => document.querySelectorAll(elements);

const app = el("#app");

const renderHtml = (htmlString) => {
  app.innerHTML += htmlString;
};

const headerComponent = (headerItems) => {
  const elements = headerItems
    .map((item) => {
      if (!item.canViewItem) return "";

      return `
            <li class="nav-item">
               ${item.children || ""}
               <i class="bi bi-${item.icon}"></i>
               <a class="nav-link text-danger" href="${item.link}">${
        item.title
      }</a>
            </li>`;
    })
    .join("");

  return `
    <ul class="nav">
            ${elements}
    </ul>
    `;
};

renderHtml(
  headerComponent([
    {
      title: "Home",
      link: "#",
      icon: "house",
      children: "<div>children</div>",
      canViewItem: true,
    },
    { title: "About", link: "#", canViewItem: false },
  ])
);

renderHtml(
  headerComponent([
    { title: "Contact", link: "#", canViewItem: true },
    { title: "Contact", link: "#", canViewItem: true },
    { title: "Contact", link: "#", canViewItem: true },
  ])
);

// const header = `
// <!-- Nav tabs -->
// <ul class="nav nav-tabs" id="myTab" role="tablist">
//   <li class="nav-item" role="presentation">
//     <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Profile</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false">Messages</button>
//   </li>
//   <li class="nav-item" role="presentation">
//     <button class="nav-link" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false">Settings</button>
//   </li>
// </ul>

// <!-- Tab panes -->
// <div class="tab-content">
//   <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">...</div>
//   <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">...</div>
//   <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab" tabindex="0">...</div>
//   <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab" tabindex="0">...</div>
// </div>
// `
// renderHtml(header)

// const age = 20;

// if (age > 20) {
//   console.log("hi");
// } else if (age === '20') {
//   console.log("hello");
// } else {
//   console.log("bye");
// }

// console.log( 20 < 10 ? "hi" : "bye" )

// const products = [{ title: "title", price: 200 }];
// localStorage.setItem("products", JSON.stringify(products));

// console.log(JSON.parse('[{"title":"title","price":200}]'));

// console.log(localStorage.getItem("age"));

/***********  ***********/
const products = [{ title: "title", price: 200 }];

const setStorage = (key, value) => {
  localStorage.setItem(
    key,
    JSON.stringify({
      data: value,
    })
  );
};

const getStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data) return JSON.parse(data).data;

 return  null;
};

setStorage("products", products);
setStorage("isOnline", true);

console.log(getStorage("products"));

