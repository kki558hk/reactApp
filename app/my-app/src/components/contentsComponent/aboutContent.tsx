import Box from '@mui/material/Box';
import { AboutContentEn, AboutContentJp } from '../subcomponents/index';
import Grid from '@mui/material/Grid';

const movieId = '8OcegOGAGIs';

const AboutContent = () => {
    return (
        <>
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <AboutContentEn />
                </Grid>
                <Grid item xs={12} display={'flex'} justifyContent={'center'} alignItems={'stretch'}>
                    <Box sx={{ paddingTop: '1%', minHeight: '300px' }} className='movieBox'>
                        <iframe className='youtube'
                            src={`https://www.youtube.com/embed/${movieId}?autoplay=1`}
                            title="YouTube"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            width='100%'
                            height='100%'
                        />
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}

export default AboutContent;