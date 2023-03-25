import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Header = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h3" color="inherit" noWrap
                    sx={{ fontFamily: 'Dancing Script' }} >
                    Quote.com
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;