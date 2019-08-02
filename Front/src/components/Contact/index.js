// == Import : npm
import React from 'react';

// == Import : local

import './contact.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';

// == Composant
const Contact = ({
  changeContactInputValue,
  contact_name,
  contact_firstname,
  contact_email,
  contact_message,
  sendContactForm
 }) => {
  
  const changeHandler = (event) => {
    changeContactInputValue([event.target.name], event.target.value );
    // console.log({ [event.target.name]: event.target.value });
  };
  
  const submitHandler = (event) => {
    event.preventDefault();
    const contactData = {
      name: contact_name,
      firstname: contact_firstname,
      email: contact_email,
      message: contact_message,
    };
    getSendContactForm(contactData);

    // console.log(contactData);
  };

  return (
    
    <div className="contact-form whitebox">
      <Typography variant="h1">Formulaire de contact</Typography>
      <form onSubmit={submitHandler} className="contact">
        <Input
          onChange={changeHandler}
          value={contact_name}
          name="contact_name"
          required
          id="standard-name"
          label="Votre nom"         
      
        />
        <Input
          onChange={changeHandler}
          value={contact_firstname}
          name="contact_firstname"
          required
          id="standard-firstname"
          label="Votre prénom"
               
        />
        <Input
          onChange={changeHandler}
          value={contact_email}
          name="contact_email"
          required
          id="email"
          label="Votre E-mail"     
          
        />
        <Input
          onChange={changeHandler}
          value={contact_message}
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
}

// == Export
export default Contact;
