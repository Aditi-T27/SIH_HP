import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Hp from './Hp';
import Preamble from './Elements/Preamble';
import './Hp.css';
import './App.css';
function App() {
  return (
    <Router>
      <div className="App">
       

        <Routes>
          <Route path="/" element={<Hp />} />
          <Route path="/preamble" element={<Preamble />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
