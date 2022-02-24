import React from "react";
import MainRouter from "./MainRouter";
import { BrowserRouter } from "react-router-dom";

import "./css/uifont.css";
import "./css/props.css";
import "./css/App.css";

const App = () => {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
};

export default App;
