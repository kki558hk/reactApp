import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const imageUrl = 'https://live.staticflickr.com/6053/6211729877_758eb16097_b.jpg';

const ContentCard = () => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={imageUrl}
                        alt="famous quotes"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            cdcccc
                        </Typography>
                        <Typography variant="subtitle1">
                            dddddd
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Share
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}

export default ContentCard;