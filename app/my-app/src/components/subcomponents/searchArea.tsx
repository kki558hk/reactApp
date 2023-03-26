import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

// ----------------------------------------------------------------------

const HEADER_MOBILE = 64;
const HEADER_DESKTOP = 92;

const StyledSearchbar = styled('div')(({ theme }) => ({
    // top: 0,
    // left: 0,
    // zIndex: 99,
    // width: '100%',
    // display: 'flex',
    // position: 'absolute',
    // alignItems: 'center',
    // height: HEADER_MOBILE,
    // padding: theme.spacing(20, 3),
    // [theme.breakpoints.up('md')]: {
    //     height: HEADER_DESKTOP,
    //     padding: theme.spacing(0, 5),
    // },
}));

const SearchArea = () => {
    const [text, setText] = useState('');

    return (

        <>
            <TextField
                label="Search"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='start'>
                            <IconButton>
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    )
                }}
                sx={{ marginTop: 10 }}
                fullWidth
                value={text}
                onChange={(event) => setText(event.target.value)}
            />
            <>{text}</>
        </>
    );
}

export default SearchArea;