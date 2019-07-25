import React from 'react';
import './header.scss';

const Header = children => (
  <header>
    <img src="src/medias/HAPPY-APE2.png" alt="img-logo-asso" center="true"/>
    {children.children}
  </header>
);

export default Header;
