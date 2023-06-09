import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';




const ContentCard = (props: ContentCardPropsType) => {
    return (
        <>
            <Card sx={{ maxWidth: 345 }} onClick={(event) => { props.handleModalOpen(props.personData) }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={props.imageUrl}
                        alt="famous quotes"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.personData.Name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {props.personData.Title}
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