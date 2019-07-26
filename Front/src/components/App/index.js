// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { MuiThemeProvider } from '@material-ui/core/styles';


// == Import : local
import theme from 'src/components/App/theme';
import NavBar from 'src/components/Includes/Nav';
import Header from 'src/components/Includes/Header';
import CGU from 'src/components/CGU';
import HomePage from 'src/components/HomePage';
import Footer from 'src/components/Includes/Footer';
import WhoAreWe from 'src/components/WhoAreWe';
import Contact from 'src/components/Contact';
import Events from 'src/components/Events';

import './app.scss';

// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
  <React.Fragment>
    <Header>
      <NavBar />
    </Header>
    <Container sm="100%">
      <main>
        <Route exact path="/" component={HomePage} />
        <Route path="/conditions-generales-d-utilisation" component={CGU} />
        <Route path="/qui-sommes-nous" component={WhoAreWe} />
        <Route path="/contact" component={Contact} />
        <Route path="/evenement" component={Events} />
      </main>
    </Container>
    <Footer />
  </React.Fragment>
  </MuiThemeProvider>
);

// == Export
export default App;

