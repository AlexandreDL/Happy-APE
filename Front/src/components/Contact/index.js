// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// == Composant
const Contact = () => (
  <div className="contact">
    <TextField
      required
      id="standard-name"
      label="votre nom"
      className=''
      margin="normal"
    />
    <TextField
      required
      id="standard-firstname"
      label="votre prénom"
      className=''
      margin="normal"
    />
    <TextField
      required
      id="email"
      label="votre-email"
      className=''
      margin="normal"
    />
    <TextField
      id="standard-multiline-flexible"
      label="votre message"
      multiline
      rowsMax="4" 
      className=''
      margin="normal"
      />
    <Button className="contact-button" variant="contained" color="primary">
        envoyer
    </Button>
  </div>
    
);

// == Export
export default Contact;
