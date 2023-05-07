import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DetailedInfoModal from './detailedInfoModal';
import { useState } from 'react';

const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPZdmBTmKxWdTJ4zE_7_kqq9ZcI7kedXhzw&usqp=CAU';


type peopleData = {
    Id: number;
    Name: string;
    Title: string;

}

type ContentCardPropsType = {
    handleModalOpen: (person: peopleData) => void;
    handleModalClose: () => void;
    imageUrl: string;
    personData: peopleData;
    modalOpen: boolean;
}



const ContentCard = (props: ContentCardPropsType) => {
    const [name, setName] = useState('');

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