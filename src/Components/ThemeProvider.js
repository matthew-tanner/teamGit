import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';

const theme1 = createMuiTheme ({
    palette: {
        primary: {
            light: '#f7fbfc',
            main: '#d6e6f2',
            dark: '#B9D7EA', 
            contrastText: '#fff',
        },
        secondary: {
            light: '#f7fbfc',
            main: '#d6e6f2',
            dark: '#f85050',
            contrastText: '#000',
        },
    },
})

export default function CustomStyles() {
    return (
    <ThemeProvider theme1={theme1}>
    </ThemeProvider>
    );
}