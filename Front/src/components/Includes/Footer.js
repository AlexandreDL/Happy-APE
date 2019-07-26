// == Import : npm
import React from 'react';


// == Import : local
import { Link, Grid } from '@material-ui/core';
import './footer.scss';


// == Composant
const Footer = () => (
  <footer>
    <Grid container justify="space-between">
      <Grid item lg="6">
        <ul className="footer-top-ul-left">
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Mentions légales </Link></li>
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Conditions générales de vente</Link></li>
          <li className="footer-top-ul-left-li"><Link color="inherit" href="/">Conditions générales d'utilisation</Link></li>
        </ul>
      </Grid>
      <Grid item lg="6">
        <ul className="footer-top-ul-right">
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Accueil</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Evenement</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Qui sommes nous?</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Contact</Link></li>
          <li className="footer-top-ul-right-li"><Link color="inherit" href="/">Compte</Link></li>
        </ul>
      </Grid>
    </Grid>
    <p>Copyright &copy; 2019 HAPPY APE - Tous droits réservés</p>
  </footer>
);

// == Export
export default Footer;
