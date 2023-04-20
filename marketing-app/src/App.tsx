import React, { useContext } from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
/* Components */
import { ThemeContext } from 'Theme/Theme';
import DataManager from 'Components/DataManager/DataManager';


function App() {
  const themeContext = useContext(ThemeContext);

  return (
    <div className="App">
      <DataManager>
        <Routes>
          <Route index element={<div>Index</div>} />
          <Route path="about" element={<div>About</div>} />
          <Route path="*" element={<div>Invalid URL</div>} />
        </Routes>
      </DataManager>
    </div>
  );
}

export default App;
