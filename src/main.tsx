import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App/App";
import ApolloWrapper from "./apollo-wrapper";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");

const root = createRoot(container as HTMLDivElement);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloWrapper>
        <App />
      </ApolloWrapper>
    </BrowserRouter>
  </React.StrictMode>
);
