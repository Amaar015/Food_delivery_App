import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Component/About";
import Service from "./Component/Service";
import "./App.css";
import "./Mobile.css";
import Menu from "./Component/Menu";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
