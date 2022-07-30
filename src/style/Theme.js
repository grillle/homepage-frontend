import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        primary: {
            light: '#33ab9f',
            dark: '#00695f',
            main: '#009688',
        },
        secondary: {
            light: '#ff8c68',
            dark: '#b24e2e',
            main: '#ff7043',
        },
        neutral: {
            main: '#64748B',
            contrastText: '#fff',
        },
    },
});

export default theme