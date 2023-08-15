import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import "./App.css"
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/detail" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
