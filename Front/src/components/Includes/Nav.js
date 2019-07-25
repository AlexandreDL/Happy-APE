// == Import : npm
import React from 'react';


// == Import : local
import './nav.scss';


// == Composant
const NavBar = () => {
  return (
    <div className="navBar">
        <ul className="navBar-ul">
        <li className="navBar-ul-li"><a href="#">Accueil</a></li>
        <li className="navBar-ul-li"><a href="#">Evenement</a></li>
        <li className="navBar-ul-li"><a href="#">Qui sommes nous ?</a></li>
        <li className="navBar-ul-li"><a href="#">Contact</a></li>
        <li className="navBar-ul-li"><a href="#">Compte</a></li>
        
      </ul>
      
    </div>
  )
}

// == Export
export default NavBar;
