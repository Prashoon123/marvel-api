import "./App.css";
import React from "react";
import { Header } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Characters, Events, Home, Series, Comics } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/events" element={<Events />} />
          <Route path="/series" element={<Series />} />
          <Route path="/comics" element={<Comics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
