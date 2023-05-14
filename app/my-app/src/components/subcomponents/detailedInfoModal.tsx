import Container from '@mui/material/Container';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import QuoteTable from './quoteTable';


const DetailedInfoModal = (props: DetailedInfoModalPropsType) => {

    return (
        <>
            <Modal
                open={props.modalOpen}
                onClose={props.handleModalClose}
            >

                <Container disableGutters sx={{
                    width: '200px', position: 'absolute' as 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '80%',
                    minWidth: '80%',
                    bgcolor: 'white',
                    boxShadow: 24
                }}>
                    <Grid container alignItems='center' justifyContent='center' direction="column">
                        <Grid item xs={12}>
                            <CardMedia
                                component="img"
                                image={props.imageUrl}
                                alt="famous quotes"
                                sx={{
                                    // minHeight: '200px'
                                    // , maxHeight: '30%'
                                    // , minWidth: '200px'

                                    paddingTop: '5%'
                                }}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant='h6' sx={{ alignContent: 'center' }}>
                                {props.personInfo.Name}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid sx={{ marginTop: '1%' }}>
                        <Grid item xs={12}>
                            <QuoteTable name={props.personInfo.Name} />
                        </Grid>
                    </Grid>

                    {/* <CardMedia
                        component="img"
                        image={props.imageUrl}
                        alt="famous quotes"
                        sx={{
                            minHeight: '200px'
                            , maxHeight: '30%'
                            , minWidth: '200px'
                            , maxWidth: '30%'
                        }}
                    /> */}

                    {/* <Container sx={{ display: 'flex' }}>
                       
                    </Container>

                    <Grid container>
                        <Grid item md={12} sx={{ display: 'flex' }}>
                            <Container sx={{ justifyContent: 'center' }}>
                                <CardMedia
                                    component="img"
                                    image={props.imageUrl}
                                    alt="famous quotes"
                                    sx={{
                                        minHeight: '200px'
                                        , maxHeight: '30%'
                                        , minWidth: '200px'
                                        , maxWidth: '30%'
                                        , justifyContent: 'center'
                                        , alignItems: 'center'
                                    }}
                                />
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>
                            <Container sx={{ justifyContent: 'center' }}>
                                <Typography variant='h6'>
                                    {props.personInfo.Name}
                                </Typography>
                                <Typography >
                                    {props.personInfo.Name}
                                </Typography>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={12}>

                        </Grid>
                    </Grid> */}
                </Container>
            </Modal>

        </>
    )

}

export default DetailedInfoModal;