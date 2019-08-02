// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';


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
        
        <TextField
          onChange={changeHandler}
          value={contactName}
          name="contact_name"
          required
          id="standard-name"
          label="Votre nom"
         
          margin="normal"

        />
        <TextField
          onChange={changeHandler}
          value={contactFirstname}
          name="contact_firstname"
          required
          id="standard-firstname"
          label="Votre prénom"
        
        />
        <TextField
          onChange={changeHandler}
          value={contactEmail}
          name="contact_email"
          required
          id="email"
          label="Votre E-mail"

        />
        <TextField
          onChange={changeHandler}
          value={contactMessage}
          name="contact_message"
          id="standard-multiline-flexible"
          label="Votre message"
          multiline
          rows="4"
         
        />

        <Button className="contact-button" variant="contained" color="primary" type="submit">
              envoyer
        </Button>

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
