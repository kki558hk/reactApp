import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Youtube from 'react-youtube';
import { GifBox } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import { AboutContentEn, AboutContentJp } from '../subcomponents/index';

const movieId = '8OcegOGAGIs';
const AboutLayout = () => {
    return (
        <>
            <Container disableGutters sx={{ minHeight: '100vh', marginTop: '4%', marginBottom: '4%' }}>
                <Paper elevation={3} sx={{ height: '90vh' }}>
                    <AboutContentEn />
                    {/* <AboutContentJp /> */}
                    <Box sx={{ marginTop: '1%', height: '50%' }} className='movieBox'>
                        <iframe className='youtube'
                            src={`https://www.youtube.com/embed/${movieId}?autoplay=1`}
                            title="YouTube"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            height='100%'
                            width='60%'
                        />
                    </Box>
                </Paper>
            </Container>

        </>
    )
}

export default AboutLayout;