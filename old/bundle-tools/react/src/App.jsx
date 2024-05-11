import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const TeamList = ({ listCount }) => {
  const arr = ["one", "two", 3, 4, 5, 6, 7];

  return arr.slice(0, listCount).map((item) => {
    return <div key={item}>{item}</div>;
  });
};

function App() {
  const [count, setCount] = useState();
  let test = 39393939;

  const updateTest = () => {
    test++;

    console.log(test);
  };

  return (
    <>
      <div>
        <TeamList listCount={4} />
        {test}

        <button onClick={updateTest}>update test</button>

        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + our team</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
