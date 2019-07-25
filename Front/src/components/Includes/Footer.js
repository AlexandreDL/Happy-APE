// == Import : npm
import React from 'react';


// == Import : local
import './footer.scss';


// == Composant
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul className="footer-top-ul-left">
          <li className="footer-top-ul-left-li" ><a href="#">Mentions légales</a></li>
          <li className="footer-top-ul-left-li" ><a href="#">Conditions générales de vente</a></li>
          <li className="footer-top-ul-left-li" ><a href="#">Conditions générlaes d'utilisation</a></li>
        </ul>
        <ul className="footer-top-ul-right">
          <li className="footer-top-ul-right-li" ><a href="#">Accueil</a></li>
          <li className="footer-top-ul-right-li" ><a href="#">Evenement</a></li>
          <li className="footer-top-ul-right-li" ><a href="#">Qui sommes nous ?</a></li>
          <li className="footer-top-ul-right-li" ><a href="#">Contact</a></li>
          <li className="footer-top-ul-right-li" ><a href="#">Compte</a></li>
        </ul>
      </div>
      <p>copyright (c) 2019 APE - Tous drois réservés</p>
      
      
    </div>
  )
}

// == Export
export default Footer;
