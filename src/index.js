import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios";
import { Provider } from "react-redux";
import { Analytics } from "@vercel/analytics/react";

import { store } from "./store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import "./style/index.scss";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://localhost:7148/api/";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Analytics />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
