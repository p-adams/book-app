import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import ApolloWrapper from "./apollo-wrapper";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
