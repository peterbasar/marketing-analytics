import React, { useContext } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import './App.css';
import { ThemeContext } from 'Theme/Theme';


function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="App">
      <Routes>
        <Route index element={<div>Index</div>} />
        <Route path="about" element={<div>About</div>} />
        <Route path="*" element={<div>Invalid URL</div>} />
      </Routes>
    </div>
  );
}

export default App;
