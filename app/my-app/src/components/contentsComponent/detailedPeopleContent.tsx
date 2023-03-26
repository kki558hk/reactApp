import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

const imageUrl = 'https://live.staticflickr.com/6053/6211729877_758eb16097_b.jpg';

const DetailedPeopleContent = () => {
    return (
        <>
            <Container disableGutters sx={{
                minHeight: '100vh', marginTop: '4%', marginBottom: '0'
            }}>
                < Paper elevation={3} sx={{ height: '90vh', paddingTop: '5%' }}>
                    <Grid container>
                        <Grid item xs={12} sm={6} md={4}>
                        </Grid>
                        {/* {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <ContentCard />
                        </Grid>
                    ))} */}
                    </Grid>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="famous quotes"
                        sx={{
                            height: '20%', width: '20%', marginLeft: '2%'
                        }}
                    />
                </Paper>
            </Container >
        </>
    )
}

export default DetailedPeopleContent;