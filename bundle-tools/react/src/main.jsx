import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";

const About = () => <h3> about</h3>;
const Home = () => <h3> home 2</h3>;
const NoMatch = () => <h3>No Match</h3>;
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <div>
        <Outlet />

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link
                to="/about"

              >
                About
              </Link>
            </li>
            <li>
              <Link to="/nothing-here">Nothing Here</Link>
            </li>
            <li>
              <a href="https://google.com">google</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<App />} />
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </div>
    </BrowserRouter>
  </React.StrictMode>
);
