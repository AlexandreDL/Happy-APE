// == Import : npm
import React from 'react';

// == Import : local
import { Link } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import './nav.scss';


// == Composant
const NavBar = () => {

  const AccueilLink = React.forwardRef((props, ref) => <RouterLink to="/" innerRef={ref} {...props} />);
  const EvenementLink = React.forwardRef((props, ref) => <RouterLink to="/" innerRef={ref} {...props} />);
  const WhoAreWeLink = React.forwardRef((props, ref) => <RouterLink to="/qui-sommes-nous" innerRef={ref} {...props} />);
  const ContactLink = React.forwardRef((props, ref) => <RouterLink to="/contact" innerRef={ref} {...props} />);
  const AccountLink = React.forwardRef((props, ref) => <RouterLink to="/" innerRef={ref} {...props} />);

  return (
    <div className="navBar">
      <ul className="navBar-ul">
        <li className="navBar-ul-li"><Link component={AccueilLink} color="inherit">Accueil</Link></li>
        <li className="navBar-ul-li"><Link component={EvenementLink} color="inherit">Evenement</Link></li>
        <li className="navBar-ul-li"><Link component={WhoAreWeLink} color="inherit">Qui sommes nous ?</Link></li>
        <li className="navBar-ul-li"><Link component={ContactLink} color="inherit">Contact</Link></li>
        <li className="navBar-ul-li"><Link component={AccountLink} color="inherit">Compte</Link></li>
      </ul>
    </div>
  )
}

// == Export
export default NavBar;
