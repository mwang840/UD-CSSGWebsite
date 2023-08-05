import React from "react";
import cssg from "./components/assets/cs+sg.jpg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/NavBar";
import { About } from "./components/pages/About";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <img src={cssg} alt="Cs+Sg" width="300px" height="150px" />
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
