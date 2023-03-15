import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import MoviePage from "../pages/Movie";

const AppRoutes = () => {
  
  return (
    <>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/movie/:id" element={<MoviePage/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;
