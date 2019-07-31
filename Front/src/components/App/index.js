// == Import : npm
import React from 'react';
import { Route } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { MuiThemeProvider } from '@material-ui/core/styles';


// == Import : local
import theme from 'src/components/App/theme';
import NavBar from 'src/containers/Includes/Nav';
import Header from 'src/containers/Includes/Header';
import CGU from 'src/containers/CGU';
import CGV from 'src/containers/CGV';
import HomePage from 'src/containers/HomePage';
import Footer from 'src/containers/Includes/Footer';
import WhoAreWe from 'src/containers/WhoAreWe';
import Contact from 'src/containers/Contact';
import Events from 'src/containers/Events';
import legalMentions from 'src/containers/legalMentions';
import EventDetail from 'src/containers/EventDetail';

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
          <Route path="/qui-sommes-nous" component={WhoAreWe} />
          <Route path="/contact" component={Contact} />
          <Route path="/evenements" component={Events} />
          <Route path="/mentions-legales" component={legalMentions} />
          <Route path="/conditions-generales-d-utilisation" component={CGU} />
          <Route path="/conditions-generales-de-vente" component={CGV} />
          <Route
            path="/evenement/:slug"
            render={(routeInfo) => {
              const { slug } = routeInfo.match.params;
              return (
                <EventDetail slug={slug} />
              );
            }}
          />
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  </MuiThemeProvider>
);

// == Export
export default App;

