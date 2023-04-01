import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ContentLayout } from './contentsComponent/contentIndex';


const MainLayout = () => {

    const theme = createTheme({
        palette: {
            mode: 'light',
            primary: {
                main: '#06135a',
                dark: '#051058',
                light: '#c9cce0'
            },
            secondary: {
                main: '#94022a',
                light: '#d4bcc3',
                dark: '#7b132f',
            },
            // background: {
            //     default: '#eadcdc',
            //     paper: '#f7f1f1',
            // },
            text: {
                secondary: 'rgba(255,255,255,255)',
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <ContentLayout />
        </ThemeProvider>
    )
}

export default MainLayout;