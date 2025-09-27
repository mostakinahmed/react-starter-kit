import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Form.jsx";
import Count from "./Count.jsx";

createRoot(document.getElementById("root")).render(<App />);
createRoot(document.getElementById("count")).render(<Count />);
createRoot(document.getElementById("form")).render(<Form />);
