
import { createMuiTheme } from '@material-ui/core/styles';

const generalTheme = createMuiTheme({
  palette: {
    primary: { main: '#2ab7ca' },
    secondary: { main: '#ffc43d' },
  },
  typography: {

    h4: {
      fontFamily: 'Indie Flower',
      fontWeight: 'bold',
      paddingTop: 5,
      marginBottom: 0,
    },
    h3: {
      fontFamily: 'Raleway',
      lineHeight: 5,
      fontSize: 12,
    },
    h2: {
      fontSize: 13,
    },
    h1: {
      fontFamily: 'Raleway',
      fontSize: 40,
      paddingTop: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    body2: {
      fontFamily: 'Raleway',
      fontSize: 18,
      lineHeight: 10,
    },
    body3: {
      fontFamily: 'Raleway',
      fontSize: 20,
      lineHeight: 10,
    },
  },
  overrides: {
    root: {
      MuiButton: {
        color: '#fffff',
      },
    },
  },
});

export default generalTheme;
