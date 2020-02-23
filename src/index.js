import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import { teal } from '@material-ui/core/colors';

const theme = createMuiTheme({
    palette:{
        primary:{
            main: "#036"
        },
        secondary:{
            main: teal[500] 
        }
    }
})


ReactDOM.render(<MuiThemeProvider theme={theme}><App /></MuiThemeProvider>, document.getElementById('root'));
