import React from 'react';
import './header.scss';

const Header = children => (
  <header>
    <img src="src/media/LOGO-HAPPY-APE.png" alt="img-logo-asso" center="true"/>
    {children.children}
  </header>
);

export default Header;
