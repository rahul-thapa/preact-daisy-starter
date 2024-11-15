import { render } from "preact";
import "./index.css";
import App from "./app";
import { BrowserRouter as Router } from "react-router-dom";

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
