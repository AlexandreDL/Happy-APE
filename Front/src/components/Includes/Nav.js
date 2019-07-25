// == Import : npm
import React from 'react';

// == Import : local
import { Link } from '@material-ui/core';
import './nav.scss';


// == Composant
const NavBar = () => {
  return (
    <div className="navBar">
      <ul>
        <li><Link href="/">Accueil</Link></li>
        <li><Link href="#">Evenement</Link></li>
        <li><Link href="#">Qui sommes nous ?</Link></li>
        <li><Link href="#">Contact</Link></li>
        <li><Link href="#">Compte</Link></li>
        
      </ul>
      
    </div>
  )
}

// == Export
export default NavBar;
