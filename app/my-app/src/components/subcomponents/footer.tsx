import React from 'react';
import Typography from '@mui/material/Typography';
import Copyright from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';

const Footer = () => {
    return (
        <>
            <Paper elevation={6} sx={{
                marginTop: 'calc(10% + 60px)',
                position: 'fixed',
                bottom: 0,
                width: '100%'
            }} component="footer" square >
                <Box sx={{
                    bgcolor: 'primary.dark'
                    , bottom: 0
                    , width: '100%'
                    , top: 0
                }} component="footer">
                    <Divider />
                    <Container sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Copyright sx={{ color: 'text.secondary' }} />
                        <Typography
                            variant="subtitle1"
                            color="text.secondary"
                            component="p"
                        >
                            Quote.com
                        </Typography>
                    </Container>

                </Box>
            </Paper>
        </>
    )
}

export default Footer;