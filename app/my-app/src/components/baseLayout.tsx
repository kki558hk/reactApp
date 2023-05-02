import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ContentLayout } from './contentsComponent/contentIndex';
import { Client, Provider, cacheExchange, fetchExchange } from 'urql';

const client = new Client({
    url: 'https://quoteapiback-1-n2506521.deta.app/graphql',
    exchanges: [cacheExchange, fetchExchange],
});


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
            text: {
                secondary: 'rgba(255,255,255,255)',
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Provider value={client}>
                <CssBaseline />
                <ContentLayout />
            </Provider>
        </ThemeProvider>
    )
}

export default MainLayout;