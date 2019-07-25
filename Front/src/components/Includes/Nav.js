// == Import : npm
import React from 'react';

// == Import : local
import { Link } from '@material-ui/core';
import './nav.scss';


// == Composant
const NavBar = () => {
  return (
    <div className="navBar">
      <ul className="navBar-ul">
        <li className="navBar-ul-li"><Link color="inherit" href="/">Accueil</Link></li>
        <li className="navBar-ul-li"><Link color="inherit" href="#">Evenement</Link></li>
        <li className="navBar-ul-li"><Link color="inherit" href="#">Qui sommes nous ?</Link></li>
        <li className="navBar-ul-li"><Link color="inherit" href="#">Contact</Link></li>
        <li className="navBar-ul-li"><Link color="inherit" href="#">Compte</Link></li>
      </ul>
    </div>
  )
}

// == Export
export default NavBar;
