import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import ApolloWrapper from "./apollo-wrapper";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container as HTMLDivElement);

root.render(
  <ApolloWrapper>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloWrapper>
);
