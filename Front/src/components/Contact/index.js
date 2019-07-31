// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// == Composant
const Contact = () => (
  <div className="contact-form">
    <Typography variant="h1">Formulaire de contact</Typography>
    <form className="contact">
      <TextField
        required
        id="standard-name"
        label="Votre nom"
        className=''
        margin="normal"
      />
      <TextField
        required
        id="standard-firstname"
        label="Votre prénom"
        className=''
        margin="normal"
      />
      <TextField
        required
        id="email"
        label="Votre-email"
        className=''
        margin="normal"
      />
      <TextField
        id="standard-multiline-flexible"
        label="Votre message"
        multiline
        rows="4" 
        className=''
        margin="normal"
        />
     
        <Button className="contact-button" variant="contained" color="primary" type="submit">
            envoyer
        </Button>
      
    </form>
  </div>
);

// == Export
export default Contact;
