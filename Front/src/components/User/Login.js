import React from 'react';
import { FormControl, Grid, Input, InputLabel, Button } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';

const Login = () => (
  <Grid container direction="column" alignContent="center" alignItems="flex-start" className="whitebox">
      <h1 className="center">Se connecter</h1>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="my-input">Adresse e-mail</InputLabel>
          <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email"/>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl>
          <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
          <Input id="my-input" aria-describedby="password-helper" name="user_email" type="password"/>
        </FormControl>
      </Grid>
      <Grid item>
        <ThemeProvider theme={generalTheme}>
          <Button variant="contained" color="primary" type="submit">
              connection
          </Button>
        </ThemeProvider>
      </Grid>
  </Grid>
);

export default Login;
