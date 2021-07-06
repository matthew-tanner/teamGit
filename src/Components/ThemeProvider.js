import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme ({
    palette: {
        primary: {
            light: '#c7dfee',
            main: '#b9d7ea',
            dark: '#8196a3', 
            contrastText: '#fff',
        },
        secondary: {
            light: '#f97373',
            main: '#f85050',
            dark: '#ad3838',
            contrastText: '#000',
        },
    },
})

const ThemeProvider = () => {
    return (
    <ThemeProvider theme={theme}>
    </ThemeProvider>
    );
}

export default ThemeProvider