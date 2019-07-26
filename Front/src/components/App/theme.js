
import { createMuiTheme } from '@material-ui/core/styles';

const generalTheme = createMuiTheme({
  palette: {
    primary: { main: '#2ab7ca' },
    secondary: { main: '#ffc43d' },
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
