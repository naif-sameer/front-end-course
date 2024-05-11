import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  // headers: {
  //     "auth": "token code here"
  // }
});

// axios.interceptors.request.use((config) => {
//   // console.log('before request send')

//   config.headers.Accept = "application/json";

//   return config;
// });

axios.interceptors.response.use(
  (res) => {
    // console.log('after request send')

    console.log(res);

    return res;
  },
  (error) => {
    if (error.response.status === 404) {
      console.log("error");
      alert(404);
    }
  }
);

// per-page
// perPage
// limit
// _limit

axios.get("photos?_limit=10").then((res) => {
  console.log(res.data);
});

axios.get("posts").then((res) => console.log(res.data));



// get => select one or all 
// post => add data
// put => update data
// patch => update one or more data
// delete => delete data