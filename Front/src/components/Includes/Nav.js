// == Import : npm
import React from 'react';


// == Import : local
import './nav.scss';


// == Composant
const NavBar = () => {
  return (
    <div className="navBar">
      <img src="src/media/LOGO-HAPPY-APE.png" alt="img-logo-asso"/>
      <ul>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Evenement</a></li>
        <li><a href="#">Qui sommes nous ?</a></li>
        <li><a href="#">Contact</a></li>
        <li><a href="#">Compte</a></li>
        
      </ul>
      
    </div>
  )
}

// == Export
export default NavBar;
