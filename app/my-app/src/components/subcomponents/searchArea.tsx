import { useState } from 'react';
import { styled } from '@mui/material/styles';

import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';

type searchTextType = {
    searchTextChanged: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

const SearchArea = (props: searchTextType) => {

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
                sx={{ mt: 10 }}
                fullWidth
                onChange={(event) => props.searchTextChanged(event)}
            />
        </>
    );
}

export default SearchArea;