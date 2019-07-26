
import { createMuiTheme } from '@material-ui/core/styles';

// const palette = {
//   primary: { main: '#2ab7ca' },
//   secondary: { main: '#ffc43d' },
// };
// const overrides = {
//   MuiButton: {
//     color: '#fff',
//   },
// };

// export default createMuiTheme({ palette, overrides });


export default createMuiTheme({
  palette: {
    primary: { main: '#2ab7ca' },
    secondary: { main: '#ffc43d' },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: '#fffff',
      },
    },
  },
});
