import reactdom from "react-dom";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";

reactdom.render(<BrowserRouter><App /></BrowserRouter>, document.querySelector("#root"));