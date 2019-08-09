// == Import : npm
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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


import './app.scss';

// == Composant
class App extends React.Component {
  isLoggedIn = localStorage.getItem('isLoggedIn');

  componentDidMount() {
    this.forceUpdate();
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <React.Fragment>
          <Header>
            <NavBar />
          </Header>
          <Container sm="100%" className="mainContainer">
            <main>
              <Route exact path="/" render={(props) => { return <HomePage {...props} />}} />
              <Route path="/qui-sommes-nous" render={props => (<WhoAreWe {...props} />)} />
              <Route path="/contact" render={props => (<Contact {...props} />)} />
              <Route path="/evenements" render={props => (<Events {...props} />)} />
              <Route path="/mentions-legales" render={props => (<legalMentions {...props} />)} />
              <Route path="/conditions-generales-d-utilisation" render={props => (<CGU {...props} />)} />
              <Route path="/conditions-generales-de-vente" render={props => (<CGV {...props} />)} />
              <Route path="/login" render={props => ((this.isLoggedIn === null) ? <Login {...props} /> : <Redirect to="/" />)} />
              <Route path="/signup" render={props => (<Signup {...props} />)} />
              <Route path="/admin/dashboard" render={props => (<AdminApp {...props} />)} />
              <Route path="/profil" render={props => (<UserProfile {...props} />)} />
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
            </main>
          </Container>
          <Footer />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }

};

// == Export
export default App;

