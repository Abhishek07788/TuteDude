import React from "react";
import { Routes, Route } from "react-router-dom";
import Screen1 from "../page/Screen1";
import Screen2 from "../page/Screen2";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Screen1 />} />
      <Route path="screen2" element={<Screen2 />} />
    </Routes>
  );
};

export default AllRoutes;
