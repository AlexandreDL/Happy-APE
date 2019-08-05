
import { createMuiTheme } from '@material-ui/core/styles';

const generalTheme = createMuiTheme({
  palette: {
    primary: { main: '#2ab7ca' },
    secondary: { main: '#ffc43d' },
  },
  typography: {
    underline: 'none',
    caption: {
      color: '#f4f4f8',
    },
    h1: {
      fontFamily: 'Raleway',
      color: '#FF732D',
      fontSize: '2rem',
      paddingTop: 20,
      fontWeight: 'bold',
      textAlign: 'left',
      borderBottom: '1px solid #FF732D'
    },

    h2: {
      fontFamily: 'Raleway',
      fontSize: '1.7em',
      fontWeight: 'bold',
      paddingTop: 5,
      marginBottom: 0,
     
    },
    h3: {
      fontFamily: 'Raleway',
      fontSize: '1rem',
      fontWeight: 'bold',
    },

    h4: {
      fontSize: 13,
    },
    body1: {
      fontFamily: 'Raleway',
      fontSize: 16,
      lineHeight: 1.5,
    },
      
    body2: {
      fontFamily: 'Raleway',
      fontSize: 18,
    },
    
  },
  overrides: {

    MuiButton: {
     
    },
  },
});

export default generalTheme;
