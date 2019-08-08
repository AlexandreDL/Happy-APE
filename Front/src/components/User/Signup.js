import React from 'react';
import { FormControl, Grid, Input, InputLabel, Button, Typography, Box, Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';
import './user.scss';




class Signup extends React.Component {
  handleSubmit = (evt) => {
    const { getRegister } = this.props;

    evt.preventDefault();

    const registerData = {
      username: evt.target[0].value,
      password: evt.target[2].value,
      retypedPassword: evt.target[3].value,
      email: evt.target[0].value,
      lastname: evt.target[4].value,
      firstname: evt.target[5].value,
      addressNumber: evt.target[6].value,
      addressStreet: evt.target[7].value,
      addressOther: evt.target[8].value,
      addressZipcode: evt.target[9].value,
      addressCity: evt.target[10].value,
      isParent: evt.target[11].checked,
    };

    console.log(registerData);

    const retour = getRegister(registerData);

    console.log(retour);
  };

  render() {
    return (
      <Box className="whitebox center">
        <Typography variant="h1">Créer un compte</Typography>
        <form action="" onSubmit={this.handleSubmit}>
          <Grid container direction="row" justify="center" alignContent="center" alignItems="center" className="login-form" spacing={2}>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Adresse e-mail</InputLabel>
                <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Confirmez l'adresse e-mail</InputLabel>
                <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Confirmez le mot de passe</InputLabel>
                <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="password" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Nom de famille</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Votre Prénom</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Numéro de rue</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Nom de la rue</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Complément d'adresse (BAT, APPT...)</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Code postal</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <FormControl>
                <InputLabel htmlFor="my-input">Ville</InputLabel>
                <Input id="my-input" aria-describedby="password-helper" name="user_password" type="text" required />
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} xl={6} lg={6}>
              <p>Je suis parent d'élève:</p>
              <Grid component="label" container alignItems="center" alignContent="center" justify="center" spacing={1}>
                <Grid item>Non</Grid>
                <Grid item>
                  <Switch
                    value="1"
                  />
                </Grid>
                <Grid item>Oui</Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ThemeProvider theme={generalTheme}>
                <Button variant="contained" color="primary" type="submit">
                    Envoyer les données
                </Button>
              </ThemeProvider>
            </Grid>
          </Grid>
        </form>
      </Box>
    );
  };

};

export default Signup;
