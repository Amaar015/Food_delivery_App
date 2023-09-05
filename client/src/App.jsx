import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Component/Home";
import About from "./Pages/About";
import Service from "./Component/Service";
import "./App.css";
import "./Mobile.css";
import Menu from "./Component/Menu";
import Register from "./Component/Register";
function App() {
  return (
    <>
      <BrowserRouter>
        <Route path="/"
          element={<Register />} />
        <Routes>
          <Route path='/home' element={
            <Home />
          } />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/menu" element={<Menu />} />

        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
