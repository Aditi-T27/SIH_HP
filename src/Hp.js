// import React from 'react';
// import './Hp.css';


// // Navbar Component
// function Navbar() {
//   return (
//     <nav className="navbar">
//       <h1>Nagrik Aur Samvidhan</h1>
//       <ul className="nav-options">
//         <li>Preamble Literacy</li>
//         <li>Duties and Rights</li>
//         <li>Blogs</li>
//         <li>Daily Challenges</li>
//       </ul>
//     </nav>
//   );
// }

// // Container Component for the main sections
// function Container({ title }) {
//   return (
//     <div className="container">
//       <h2>{title}</h2>
//     </div>
//   );
// }

// // Main App Component
// function Hp() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="main-content">
//         {/* Left side with text */}
//         <div className="left-section">
//           <h1 className="constitution-text">Let's Learn Our Constitution</h1>
//           <div className="container-section">
//         <Container title="Gamified Learning" />
//         <Container title="Preamble Explorer" />
//         <Container title="Constitution Trivia" />
//         <Container title="Fundamental Rights and Duties" />
//         <Container title="Constitution Trivia" />
//         <Container title="Fundamental Rights and Duties" />
//      </div>
//        </div>

//         {/* Right side with map */}
//         <div className="right-section">
//           <div className="map-container">
//             <iframe
//               title="India Map"
//               src="https://upload.wikimedia.org/wikipedia/commons/9/93/India_Map_Animation_Created_by_samnad.s_Kudappanamoodu.gif"
//               width="100%"
//               height="100%"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//             ></iframe>
//             <div className="sparkling-light"></div>
//           </div>
//         </div>
//       </div>

//       {/* Shadow boxes with content */}
    
//     </div>
//   );
// }

// export default Hp;

import React from 'react';
import './Hp.css';
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
function Hp() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        {/* Left side with text */}
        <div className="left-section">
          <h1 className="constitution-text">Let's Learn Our Constitution</h1>
          <div className="container-section">
          <Link to="/Games">
            <Container title="Gamified Learning" />
          </Link>
            {/* Wrap Preamble Explorer container in Link */}
            <Link to="/preamble">
              <Container title="Preamble Explorer" />
            </Link>
             <Link to="/reactmap">
            <Container title="Constitution Trivia" /></Link>
            <Container title="Fundamental Rights and Duties" />
            <Container title="Constitution Trivia" />
            <Container title="Fundamental Rights and Duties" />
          </div>
        </div>

        {/* Right side with map */}
        <div className="right-section">
          <div className="map-container">
            <iframe
              title="India Map"
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/India_Map_Animation_Created_by_samnad.s_Kudappanamoodu.gif"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <div className="sparkling-light"></div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Hp;

