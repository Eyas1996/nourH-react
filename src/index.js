import React from "react";
// import ReactDOM from "react-dom";
// You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
import ReactDOM from "react-dom/client";

import "./style.css";

import App from "./components/App";

// Render Method takes to parapemter (what, where)
// ReactDOM.render(<App />, document.getElementById("root"));
// ReactDOM.render is no longer supported in React 18. Use createRoot instead

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
