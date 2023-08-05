import React from "react";
import cssg from "@/components/assets/cs+sg.jpg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About } from "@/components/pages/About";
import { Navbar } from "@/components/common/Navbar";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <img src={cssg} alt="Cs+Sg" width="300px" height="150px" />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
