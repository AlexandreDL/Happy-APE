import React from 'react';
import {
  FormControl,
  Grid,
  Input,
  InputLabel,
  Button,
  Typography,
  Box,
} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import generalTheme from 'src/components/App/theme';
import './user.scss';

class Login extends React.Component {


  componentDidMount() {
    console.log('lol');
  }

  handleSubmit = evt => {
    evt.preventDefault();
    const userData = JSON.stringify({
      username: evt.target[0].value,
      password: evt.target[1].value,
    });

    const { getLogin } = this.props;
    getLogin(evt.target[0].value, evt.target[1].value);

  }

  render() {

    const { user } = this.props;

    console.log(user);

    return (
      <Box className="whitebox center">
        <Typography variant="h1">Se connecter</Typography>
        <form action="" onSubmit={this.handleSubmit}>
          <Grid container direction="column" alignContent="center" alignItems="center" className="login-form">
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="user_email">Adresse e-mail</InputLabel>
                <Input id="user_email" aria-describedby="e-mail-helper" name="user_email" type="email"/>
              </FormControl>
            </Grid>
            <Grid item>
              <FormControl>
                <InputLabel htmlFor="user_password">Mot de passe</InputLabel>
                <Input id="user_password" aria-describedby="password-helper" name="user_password" type="password"/>
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
  }
}

export default Login;
