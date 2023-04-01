import React from 'react';
import { AppBar } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


import { RouteComponentProps } from "react-router-dom";
import { Link } from "react-router-dom";
import { Path } from '../router/router';

const Header = (props: any) => {
    return (

        <>
            <AppBar position="fixed" sx={{ bgcolor: 'primary.dark' }}>
                <Toolbar sx={{ display: 'flex' }}>
                    <Typography variant="h4" color="inherit" noWrap
                        sx={{ fontFamily: 'Dancing Script', fontWeight: 'bold' }} >
                        Quote.com
                    </Typography>

                    <Button color='inherit' sx={{ ml: 'auto' }}
                        component={Link} to={Path.about}>About</Button>
                </Toolbar>

            </AppBar>
        </>

    )
}

export default Header;