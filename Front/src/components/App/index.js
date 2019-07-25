// == Import : npm
import React from 'react';
import {
  Route, Switch,
  Redirect, withRouter,
} from 'react-router-dom';

// == Import : local

import NavBar from 'src/components/Includes/Nav';
import Header from 'src/components/Includes/Header';
import CGU from 'src/components/CGU';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Includes/Footer';
import WhoAreWe from 'src/components/WhoAreWe';
import Contact from 'src/components/Contact';

import './app.scss';

// == Composant
const App = () => (
  <React.Fragment>
    <Header>
      <NavBar />
    </Header>
      <main>
        <Route exact path="/" component={HomePage} />
        <Route path="/conditions-generales-d-utilisation" component={CGU} />
        <Route path="/qui-sommes-nous" component={WhoAreWe} />
        <Route path="/contact" component={Contact} />

      </main>
      <Footer />
  </React.Fragment>
);

// == Export
export default App;

