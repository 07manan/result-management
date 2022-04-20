import React from "react";
import { Routes, Route } from "react-router-dom";
import Admin from "./pages/Admin";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </>
  );
};
export default App;
