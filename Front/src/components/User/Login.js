import React from 'react';
import { FormControl, Grid, Input, InputLabel, Button, Typography, Box } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';
import './user.scss';


const handleSubmit = evt => {
  evt.preventDefault();
}

const Login = () => (
  <Box className="whitebox center">
    <Typography variant="h1">Se connecter</Typography>
    <form action="" onSubmit={handleSubmit}>
      <Grid container direction="column" alignContent="center" alignItems="center" className="login-form">
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="my-input">Adresse e-mail</InputLabel>
              <Input id="my-input" aria-describedby="e-mail-helper" name="user_email" type="email"/>
            </FormControl>
          </Grid>
          <Grid item>
            <FormControl>
              <InputLabel htmlFor="my-input">Mot de passe</InputLabel>
              <Input id="my-input" aria-describedby="password-helper" name="user_password" type="password"/>
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
    </form>
  </Box>
);

export default Login;
