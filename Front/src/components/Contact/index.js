// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core';


// == Composant
const Contact = ({
  changeContactInputValue,
  contactName,
  contactFirstname,
  contactEmail,
  contactMessage,
  getSendContactForm,
}) => {
  const changeHandler = (event) => {
    changeContactInputValue([event.target.name], event.target.value);
    // console.log({ [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const contactData = {
      name: contactName,
      firstname: contactFirstname,
      email: contactEmail,
      message: contactMessage,
    };

    getSendContactForm(contactData);

    // console.log(contactData);
  };

  return (

    <div className="contact-form whitebox">
      <Typography variant="h1">Formulaire de contact</Typography>
      <form onSubmit={submitHandler} className="contact">
        <Grid container direction="row" justify="center" alignContent="center" alignItems="center" className="login-form" spacing={2}>
          <Grid item xs={4} sm={6} xl={6} lg={6}>
          <Grid item>
            <TextField
              onChange={changeHandler}
              value={contactName}
              name="contact_name"
              required
              id="standard-name"
              label="Votre nom"         
              margin="normal"
            />         
          </Grid>

          <Grid item>
            <TextField
              onChange={changeHandler}
              value={contactFirstname}
              name="contact_firstname"
              required
              id="standard-firstname"
              label="Votre prénom"
            />
          </Grid>

          <Grid item>
            <TextField
              onChange={changeHandler}
              value={contactEmail}
              name="contact_email"
              required
              id="email"
              label="Votre E-mail"
            />
          </Grid>

          <Grid item>
            <TextField
              onChange={changeHandler}
              value={contactMessage}
              name="contact_message"
              id="standard-multiline-flexible"
              label="Votre message"
              multiline
              rows="4"  
            />
          </Grid>
          <Button className="contact-button" variant="contained" color="primary" type="submit">
              envoyer
          </Button>
          </Grid>
        </Grid>
      </form>
    </div>
    
  );
};

Contact.propTypes = {
  changeContactInputValue: PropTypes.func.isRequired,
  contactName: PropTypes.string.isRequired,
  contactFirstname: PropTypes.string.isRequired,
  contactEmail: PropTypes.string.isRequired,
  contactMessage: PropTypes.string.isRequired,  
  getSendContactForm: PropTypes.func.isRequired, 
};
// == Export
export default Contact;
