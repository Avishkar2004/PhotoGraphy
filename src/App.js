import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";
import AnimRoutes from "./components/AnimRoutes";

const App = () => {

  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
};

export default App;
