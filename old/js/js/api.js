import { el, getStorage, setStorage, fileToBase64 } from "./helpers.js";

// import './helpers.js'

// let order = (call_production) => {
//   setTimeout(() => {
//     call_production();
//   }, 1000);
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("step 1");
//     setTimeout(() => {
//       console.log("step 2");
//       setTimeout(() => {
//         console.log("step 3");
//         setTimeout(() => {
//           console.log("step 4");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// };

// order(production);

// const last = () => {
//   setTimeout(() => {
//     console.log("last 2000");
//   }, 2000);
// };

// const first = () => {
//   const prodcuts = [200];

//   setTimeout(() => {
//     prodcuts.push("pizza");
//     console.log("first timeout 1000");

//     prodcuts.forEach((item) => {
//       document.body.innerHTML = item;
//       console.log(item, "item in loop");
//     });

//     second();
//   }, 1000);

//   //   for (let index = 0; index < 1; index++) {
//   //     console.log("first loop");
//   //   }
// };

// const second = () => {
//   setTimeout(() => {
//     console.log("second timeout 3000");

//     last();
//   }, 3000);
// };

// first();

// const loginUser = (username) => {
//   return new Promise((resolveThisCode, rejectThisData) => {
//     if (username === "ali")
//       resolveThisCode({
//         name: "ali ali",
//         message: "success",
//         username,
//       });
//     else rejectThisData("fail");
//   });
// };

// loginUser("ali")
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err, "error");
//   });

const first = (intValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("first", intValue);
      resolve(intValue);
    }, 300);
  });
};

const second = (intValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("second", intValue);

      resolve(10 + intValue);
      //   reject("second reject");
      console.log("code .");
    }, 200);
  });
};

const third = (intValue) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("third", intValue);
      resolve(intValue + 100);
    }, 100);
  });
};

// first(1)
//   .then((data) => {
//     console.log('first is ', data)
//    return second(data)
//   })
//   .then((data) => {
//     console.log('second is ', data)
//    return third(data)
//   })
// //   .then(second)
// //   .then(third)
//   .then((data) => {
//     console.log('third is',data);
//   });

// first(1)
//   .then(second)
//   .catch((d) => {
//     console.log(d);
//     return 0;
//   })
//   .then(third)

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "get",
// })
//     .then((response) => {
//       const json  = response.json()

//     //   console.log(json)
//     //   json.then((data) => console.log(data))

//       return json;
//     })
//     .then((data) => console.log(data))
// //   .then((res) => res.json())
// //   .then((json) => console.log(json));

// const data = {
//     count: 0,
//     inc(sum = 1) {
//         this.count += sum;
//         console.log(this)

//         return this
//     }
// }

// console.log(data.count)
// data.inc(100)

// console.log(data.count)

// fetch("https://jsonplaceholder.typicode.com/posts/1", {
//   method: "get",
// })
//   .then((res) => res.json())
//   .then((data) => {
//     document.body.innerHTML = `
//         <div>
//             <h1>${data.title}</h1>
//             <p>${data.body}</p>
//         </div>
//     `
//   });

//   const readFiles =  (files) => {
//     return new Promise((resolve, reject) => {
//         // read files
//         resolve(files)
//     }
//     )
//   }

// readFiles([]).then((data) => {

// })

const file = el("#file");
const fileBtn = el("#file-btn");
const image = el("#img");

const fileFromLocal = getStorage("image");

const log = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("log");
      resolve("done");
    }, 1000);
  });
};

if (fileFromLocal) {
  image.src = fileFromLocal;
}

fileBtn.onclick = () => {
  file.click();
};

file.addEventListener("change", async (e) => {
  const file = e.target.files[0];

  if (file.type.includes("image") || file.type.includes("jpg")) {
    console.log("file is supported");

    // openFile(file);
    // console.log(fileToBase64(file));

    // fileToBase64(file)
    //   .then((data) => {
    //     image.src = data;

    //     return data;
    //   })
    //   .then((data) => {
    //     console.log(data);

    //     return data;
    //   })
    //   .then((data) => {
    //     setStorage("image", data);
    //   });

    const data = await fileToBase64(file).catch((e) => {
      console.log(e);
    });

    await log();
    image.src = data;
    setStorage("image", data);
    console.log(e.target.files);

    // log().then((data) => {
    //   image.src = data;
    //   setStorage("image", data);
    //   console.log(e.target.files);
    // });

    // console.log(data);
  }
});


// var openFile = function (file) {
//   var reader = new FileReader();
//   reader.readAsDataURL(file);

//   reader.onload = function () {
//     console.log("result", reader.result);

//     setStorage("image", reader.result);

//     image.src = reader.result;
//   };
// };


// fileBtn.getAttribute("")

// fileBtn.setAttribute('test2', 'test 2 value')

// console.log(fileBtn.getAttribute('data-load-after'))