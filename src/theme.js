import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#c62828'
    },
    secondary: {
      main: '#e1251b'
    },
    grayColor: {
      main: '#fff'
    },
    fontColorPrimary: {
      main: '#777',
      fontWeight: 400
    },
    colorActive: {
      main: '#47536b'
    }
  },
  shadowBox: {
    generic: '0 3px 5px 2px rgba(0, 0, 0, .4)'
  },
  typography: {
    subtitle1: {
      fontSize: 12
    },
    body1: {
      fontWeight: 500
    },
    button: {
      fontStyle: 'italic'
    }
  }
});

export default theme;
