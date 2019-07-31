// == Import : npm
import React from 'react';

// == Import : local
import { Link, AppBar } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';


import './nav.scss';


// == Composant
const NavBar = () => {

  const AccueilLink = React.forwardRef((props, ref) => <RouterLink to="/" innerRef={ref} {...props} />);
  const EvenementLink = React.forwardRef((props, ref) => <RouterLink to="/evenement" innerRef={ref} {...props} />);
  const WhoAreWeLink = React.forwardRef((props, ref) => <RouterLink to="/qui-sommes-nous" innerRef={ref} {...props} />);
  const ContactLink = React.forwardRef((props, ref) => <RouterLink to="/contact" innerRef={ref} {...props} />);
  const AccountLink = React.forwardRef((props, ref) => <RouterLink to="/" innerRef={ref} {...props} />);
  
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div>
      <div className="mobile">
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
          Menu
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={AccueilLink} to="/">Accueil</MenuItem>
          <MenuItem component={EvenementLink} to="/evenement">Evenement</MenuItem>
          <MenuItem component={WhoAreWeLink} to="/qui-sommes-nous">Qui sommes-nous ?</MenuItem>
          <MenuItem component={ContactLink} to="/contact">Contact</MenuItem>
          <MenuItem component={AccountLink} to="/">Compte</MenuItem>
        </Menu>
      </div>
      <div className="navBar">
        <MenuItem component={AccueilLink} to="/">Accueil</MenuItem>
        <MenuItem component={EvenementLink} to="/evenement">Evenement</MenuItem>
        <MenuItem component={WhoAreWeLink} to="/qui-sommes-nous">Qui sommes-nous ?</MenuItem>
        <MenuItem component={ContactLink} to="/contact">Contact</MenuItem>
        <MenuItem component={AccountLink} to="/">Compte</MenuItem>
      </div>
    </div>
  )
};

// == Export
export default NavBar;
