import { Header, Footer } from '../subcomponents/index';
import InitialContents from './initialContent';
import AboutContent from './aboutContent';
import DetailedPeopleContent from './detailedPeopleContent';
import Container from '@mui/material/Container';

const ContentLayout = () => {
    return (
        <>
            <Header />
            <Container maxWidth='xl' sx={{ mt: '5%' }}>
                {/* <DetailedPeopleContent /> */}
                {/* <AboutContent /> */}
                <InitialContents />
            </Container>
            <Footer />
        </>
    )
}

export default ContentLayout;