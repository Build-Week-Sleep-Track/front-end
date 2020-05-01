import { createMuiTheme } from '@material-ui/core/styles';
import { blue, grey } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: {
        light: '#FFFFFF',
        main: '#dedede',
        dark: '#3c3c3c',
        contrastText: '#000'
    },
    field: grey
  },
  status: {
    danger: 'orange',
  },
  overrides: {
      MuiInputLabel: {
          root: {
              '&:hover': {
                  color: 'orange'
              }
          }
      }
  }
});
export default theme;