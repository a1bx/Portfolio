// App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./components/Intro";
import MainContent from "./components/MainContent";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;