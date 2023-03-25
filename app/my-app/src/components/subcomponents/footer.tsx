import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Copyright from '@mui/icons-material/Copyright';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';

const Footer = () => {
    return (
        <>

            <Box sx={{
                bgcolor: 'primary.main'
                , bottom: 0
                , position: 'absolute'
                , width: '100%'
                , top: '93%'
            }} component="footer">
                <Divider />
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Quote.com
                </Typography>
                <Copyright sx={{ color: 'text.secondary' }} />
            </Box>

        </>
    )
}

export default Footer;