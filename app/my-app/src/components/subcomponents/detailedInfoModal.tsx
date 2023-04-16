import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

type peopleData = {
    id: number;
    name: string;
    title: string;
    discript: string;
}

type DetailedInfoModalPropsType = {
    handleModalClose: () => void;
    modalOpen: boolean;
    imageUrl: string;
    personInfo: peopleData;
}


const DetailedInfoModal = (props: DetailedInfoModalPropsType) => {

    return (
        <>
            <Modal
                open={props.modalOpen}
                onClose={props.handleModalClose}
            >
                <Container disableGutters sx={{
                    display: 'flex', justifyContent: 'center', width: '200px', position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '80%',
                    minWidth: '80%',
                    bgcolor: 'white',
                    boxShadow: 24,
                    p: 4
                }}>

                    <Grid container>
                        <Grid item xs={12} sm={6} md={8}>
                            <CardMedia
                                component="img"
                                image={props.imageUrl}
                                alt="famous quotes"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Typography align='center'>
                                {props.personInfo.name}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Modal>

        </>
    )

}

export default DetailedInfoModal;