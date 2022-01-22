import React from "react";
import Home from "./core/Home";
import { Route, Routes } from "react-router-dom";
import Signup from "../src/user/Signup";
import Signin from "../src/user/Signin";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
