// == Import : npm
import React from 'react';
import { Route, Switch } from 'react-router-dom';
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
import NewsDetail from 'src/containers/NewsDetail';
import Login from 'src/containers/User/Login';
import Signup from 'src/containers/User/Signup';
import UserProfile from 'src/components/User/profile';
import AdminApp from 'src/components/admin/App';
import Error from 'src/components/Error/error404';


import './app.scss';

// == Composant
const App = () => (
  <MuiThemeProvider theme={theme}>
    <React.Fragment>
      <Header>
        <NavBar />
      </Header>
      <Container sm="100%" className="mainContainer">
        <main>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/qui-sommes-nous" component={WhoAreWe} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/evenements" component={Events} />
            <Route exact path="/mentions-legales" component={legalMentions} />
            <Route exact path="/conditions-generales-d-utilisation" component={CGU} />
            <Route exact path="/conditions-generales-de-vente" component={CGV} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/admin/dashboard" component={AdminApp} />
            <Route exact path="/profil" component={UserProfile} />
            
            <Route
              path="/evenement/:slug"
              render={(routeInfo) => {
                const { slug } = routeInfo.match.params;
                return (
                  <EventDetail slug={slug} />
                );
              }}
            />
            <Route
              path="/actualites/:slug"
              render={(routeInfo) => {
                const { slug } = routeInfo.match.params;
                return (
                  <NewsDetail slug={slug} />
                );
              }}
            />
            <Route path="*" component={Error} />
          </Switch>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  </MuiThemeProvider>
);

// == Export
export default App;

