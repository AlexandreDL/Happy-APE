// == Import : npm
import React from 'react';

// == Import : local
import NavBar from 'src/components/Includes/Nav';
import Header from 'src/components/Includes/Header';
import './app.scss';

// == Composant
const App = () => (
  <Header>
    <NavBar />
  </Header>
);

// == Export
export default App;
