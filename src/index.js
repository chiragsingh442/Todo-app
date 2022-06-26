import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import FilterButton from "./components/FilterButton";

const DATA = JSON.parse(localStorage.getItem("todos")) || [
  { id: "todo-0", name: "Eat", completed: false },
  { id: "todo-1", name: "Exercise", completed: false },
  { id: "todo-2", name: "Bath", completed: false },
];

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App tasks={DATA} FILTER_NAMES={FILTER_NAMES} FILTER_MAP={FILTER_MAP} />
  </React.StrictMode>
);

ReactDOM.render(<App tasks={DATA} />, document.getElementById("root"));

reportWebVitals();
