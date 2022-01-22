import React from "react";
import Home from "./core/Home";
import { Route, Routes } from "react-router-dom";

const MainRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
