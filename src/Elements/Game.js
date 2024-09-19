import React from 'react';
import './Game.css';

import { Link } from 'react-router-dom'; // Import Link from React Router

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar">
      <h1>Nagrik Aur Samvidhan</h1>
      <ul className="nav-options">
        <li>Preamble Literacy</li>
        <li>Duties and Rights</li>
        <li>Blogs</li>
        <li>Daily Challenges</li>
      </ul>
    </nav>
  );
}

// Container Component for the main sections
function Container({ title }) {
  return (
    <div className="container">
      <h2>{title}</h2>
    </div>
  );
}

// Main App Component
function app() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        {/* Left side with text */}
        <div className="left-section">
          <h1 className="constitution-text"><b>Play and Learn</b></h1>
          <div className="container-section">
         <Link to='/reactmap'>
          <Container title="Map my India" />
          </Link>

{/* Wrap Preamble Explorer container in Link */}

  <Container title="Preamble Puzzle" />

 
<Container title="Constitution Trivia" />
<Container title="Fundamental Rights Battle" />
<Container title="Constitutional Quest" />
<Container title="Four Pixer" />
<Container title="Snake and Ladder" />

            {/* Wrap Preamble Explorer container in Link */}
<Container title="Spin the Wheel" />
            
             
            <Container title="Scenario Learning" />
            <Container title="Monopoly" />
            <Container title="Justice Bingo:Law and Order edition" />
            <Container title="The Right's Race" />
          </div>
        </div>

       
        
      </div>

    </div>
  );
}

export default app;
