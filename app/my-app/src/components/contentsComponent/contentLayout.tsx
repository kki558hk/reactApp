import { Header, Footer } from '../subcomponents/index';
import Container from '@mui/material/Container';
import { BrowserRouter, useLocation } from "react-router-dom";
import Routes from '../router/router';
import Paper from '@mui/material/Paper';

const ContentLayout = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container maxWidth='xl' sx={{ mt: '5%' }}>
                    <Container disableGutters sx={{ marginTop: '3%', marginBottom: '3%' }}>
                        <Paper elevation={3}>
                            <Routes />
                        </Paper>
                    </Container>
                </Container>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default ContentLayout;