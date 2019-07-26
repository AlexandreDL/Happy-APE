// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';

// == Composant
const Contact = () => (
  <div className="contact-form">
    <h1>Formulaire de contact</h1>
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
      <ThemeProvider theme={generalTheme}>
        <Button className="contact-button" variant="contained" color="primary" type="submit">
            envoyer
        </Button>
      </ThemeProvider>
    </form>
  </div>
);

// == Export
export default Contact;
