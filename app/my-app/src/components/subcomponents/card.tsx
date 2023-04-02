import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState } from 'react';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPZdmBTmKxWdTJ4zE_7_kqq9ZcI7kedXhzw&usqp=CAU';

const ContentCard = (props: any) => {
    const [name, setName] = useState('');

    return (
        <>
            <Card sx={{ maxWidth: 345 }} onClick={(event) => { setName('cccc') }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt="famous quotes"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="subtitle1">
                            {props.name}
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