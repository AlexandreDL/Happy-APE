// == Import : npm
import React from 'react';

// == Import : local

import NavBar from 'src/components/Includes/Nav';
import Header from 'src/components/Includes/Header';
import CGU from 'src/components/CGU';
import Footer from 'src/components/Includes/Footer';

import './app.scss';

// == Composant
const App = () => (
  <React.Fragment>
    <Header>
      <NavBar />
    </Header>
    <main>
      <p>contenu</p>
    </main>
    <Footer />
  </React.Fragment>
);

// == Export
export default App;

