import React from 'react';
import { FormControl, Grid, Input, InputLabel, Button, Typography, Box, Switch } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';
import './user.scss';


const handleSubmit = evt => {
  evt.preventDefault();
}

const Signup = () => (
  <Box className="whitebox center">
    <Typography variant="h1">Créer un compte</Typography>
    <form action="" onSubmit={handleSubmit}>
      <Grid container direction="row" justify="center" alignContent="center" alignItems="center" className="login-form" spacing={2}>
      <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Adresse e-mail</InputLabel>
              <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Confirmez l'adresse e-mail</InputLabel>
              <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Confirmez le mot de passe</InputLabel>
              <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Nom de famille</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Votre Prénom</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Numéro de rue</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Nom de la rue</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Complément d'adresse (BAT, APPT...)</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Code postal</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <FormControl>
              <InputLabel htmlFor="my-input">Ville</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} xl={6} lg={6}>
            <p>Je suis parent d'élève:</p>
            <Grid component="label" container alignItems="center" alignContent="center" justify="center" spacing={1}>
              <Grid item>Non</Grid>
              <Grid item>
                <Switch
                  checked={true}
                  onChange={handleSubmit}
                  value="checkedC"
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

export default Signup;
