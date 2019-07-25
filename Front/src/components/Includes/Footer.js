// == Import : npm
import React from 'react';


// == Import : local
import { Link } from '@material-ui/core';
import './footer.scss';


// == Composant
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <ul className="footer-top-ul-left">
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Mentions légales </Link></li>
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Conditions générales de vente</Link></li>
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Conditions générales d'utilisation</Link></li>
        </ul>
        <ul className="footer-top-ul-right">
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Accueil</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Evenement</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Qui sommes nous?</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Contact</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Compte</Link></li>
        </ul>
      </div>
      <p>copyright (c) 2019 APE - Tous drois réservés</p>
      
      
    </div>
  )
}

// == Export
export default Footer;
