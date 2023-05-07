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
    Id: number;
    Name: string;
    Title: string;

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
                        <Grid item xs={12} sm={6} md={12} sx={{ display: 'flex' }}>
                            <CardMedia
                                component="img"
                                image={props.imageUrl}
                                alt="famous quotes"
                                sx={{
                                    minHeight: '200px', maxHeight: '30%'
                                    , minWidth: '200px', maxWidth: '30%'
                                    , justifyContent: 'flex-start'
                                }}
                            />
                            <Container sx={{ justifyContent: 'center' }}>
                                <Typography align='center' variant='h6'>
                                    {props.personInfo.Name}
                                </Typography>
                                <Typography align='center'>
                                    {props.personInfo.Name}
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>

                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>


                            {/* <Container sx={{ display: 'flex' }}>
                                <CircularProgress />
                            </Container> */}
                        </Grid>
                    </Grid>
                </Container>
            </Modal>

        </>
    )

}

export default DetailedInfoModal;