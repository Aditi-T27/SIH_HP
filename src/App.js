import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hp from './Hp';
import Preamble from './Elements/Preamble';
import Reactmap from'./Elements/Reactmap';
import Games from'./Elements/Game';
import './Hp.css';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
       

        <Routes>
          <Route path="/" element={<Hp />} />
          <Route path="/preamble" element={<Preamble />} />
          <Route path="/reactmap" element={<Reactmap/>} />
          <Route path="/games" element={<Games/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
