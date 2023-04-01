import { Header, Footer } from '../subcomponents/index';
import Container from '@mui/material/Container';
import { BrowserRouter, useLocation } from "react-router-dom";
import Routes from '../router/router';

const ContentLayout = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Container maxWidth='xl' sx={{ mt: '5%' }}>
                    <Routes />
                </Container>
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default ContentLayout;