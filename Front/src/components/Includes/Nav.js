// == Import : npm
import React from 'react';

// == Import : local
import { Drawer, MenuItem, Button, Link, Typography } from '@material-ui/core';
// import { Link as RouterLink } from 'react-router-dom';
import { Home, Event, ContactSupport, Contacts, AccountCircle } from '@material-ui/icons';
import './nav.scss';


// == Composant
const NavBar = ({ drawerOpen, toggleDrawerAction }) => {

  const AccueilLink = React.forwardRef((props, ref) =>   <Link href="/" innerRef={ref} {...props} />);
  const EvenementLink = React.forwardRef((props, ref) => <Link href="/evenements" innerRef={ref} {...props} />);
  const WhoAreWeLink = React.forwardRef((props, ref) =>  <Link href="/qui-sommes-nous" innerRef={ref} {...props} />);
  const ContactLink = React.forwardRef((props, ref) =>   <Link href="/contact" innerRef={ref} {...props} />);
  const AccountLink = React.forwardRef((props, ref) =>   <Link href="/" innerRef={ref} {...props} />);
  const AdminAppLink = React.forwardRef((props, ref) =>  <Link href="/admin/Dashboard" innerRef={ref} {...props} />);

  const toggleDrawerButton = event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
      toggleDrawerAction();
  };

  return (
    <div>
      <div className="mobile">
        <Button onClick={toggleDrawerButton}>
          Menu
        </Button>
      </div>
      <Typography variant="caption" className="navBar">
        <MenuItem component={AccueilLink} to="/">Accueil</MenuItem>
        <MenuItem component={EvenementLink} to="/evenements">Evenement</MenuItem>
        <MenuItem component={WhoAreWeLink} to="/qui-sommes-nous">Qui sommes-nous ?</MenuItem>
        <MenuItem component={ContactLink} to="/contact">Contact</MenuItem>
        <MenuItem component={AccountLink} to="/">Compte</MenuItem>
        <MenuItem component={AdminAppLink} to="/admin/Dashboard">Dashboard</MenuItem>
      </Typography>
      <Drawer open={drawerOpen} onClose={toggleDrawerButton}>
        <MenuItem onClick={toggleDrawerButton} component={AccueilLink} to="/"><Home />Accueil</MenuItem>
        <MenuItem onClick={toggleDrawerButton} component={EvenementLink} to="/evenements"><Event />Evenement</MenuItem>
        <MenuItem onClick={toggleDrawerButton} component={WhoAreWeLink} to="/qui-sommes-nous"><ContactSupport />Qui sommes-nous ?</MenuItem>
        <MenuItem onClick={toggleDrawerButton} component={ContactLink} to="/contact"><Contacts />Contact</MenuItem>
        <MenuItem onClick={toggleDrawerButton} component={AccountLink} to="/"><AccountCircle />Compte</MenuItem>
        <MenuItem onClick={toggleDrawerButton} component={AdminAppLink} to="/admin/Dashboard">Dashboard</MenuItem>
      </Drawer>
    </div>
  )
};

// == Export
export default NavBar;
