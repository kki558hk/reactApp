import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Youtube from 'react-youtube';
import { GifBox } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { height } from '@mui/system';
import { AboutContentEn, AboutContentJp } from '../subcomponents/index';
import Grid from '@mui/material/Grid';

const movieId = '8OcegOGAGIs';



const AboutContent = () => {
    return (
        <>
            <Container disableGutters sx={{ marginTop: '3%', marginBottom: '3%' }}>
                <Paper elevation={3} >
                    <Grid container spacing={0}>
                        <Grid item xs={6}>
                            <AboutContentEn />
                        </Grid>
                        <Grid item xs={6}>
                            <Box sx={{ height: '100%' }} className='movieBox'>
                                <iframe className='youtube'
                                    src={`https://www.youtube.com/embed/${movieId}?autoplay=1`}
                                    title="YouTube"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    height='60%'
                                    width='100%'
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>

        </>
    )
}

export default AboutContent;