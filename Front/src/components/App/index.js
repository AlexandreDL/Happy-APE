// == Import : npm
import React from 'react';

// == Import : local
import NavBar from 'src/components/Includes/Nav'
import Footer from 'src/components/Includes/Footer'
import './app.scss';

// == Composant
const App = () => (
  <div id="app">
    <NavBar />
    <div> contenu du site</div>
    <Footer />
  </div>
);

// == Export
export default App;
