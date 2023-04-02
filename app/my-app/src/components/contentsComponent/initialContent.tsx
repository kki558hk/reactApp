import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { SearchArea, ContentCard } from '../subcomponents/index';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useState } from 'react';
import { circularProgressClasses } from '@mui/material';


type peopleData = {
    id: number;
    name: string;
    title: string;
    discript: string;
}

const peopleDatas: peopleData[] = [
    {
        id: 1,
        name: "Warren Buffett",
        title: "CEO of Berksher Hathaway",
        discript: "Investor"
    },

    {
        id: 2, name: "Jeff Bezos",
        title: "Founder of Amazon",
        discript: "Investor,Entreprenor"
    }
    , {
        id: 3, name: "Peter lynch",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 4, name: "Peter lynch",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 5, name: "Chalie Munger",
        title: "Vice president of Berksher Hathaway",
        discript: "Investor"
    }
    , {
        id: 6, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 7, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }, {
        id: 8, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 9, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 10, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 11, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
    , {
        id: 12, name: "Masayoshi Son",
        title: "Mageran Fund",
        discript: "Investor"
    }
]

const imageUrl = 'https://c4.wallpaperflare.com/wallpaper/935/849/231/background-tree-book-wallpaper-preview.jpg';

const InitialContents = () => {

    const [contentPerPage, setContentPerPage] = useState(9);
    const [pageCnt, setPageCnt] = useState(peopleDatas.length % contentPerPage > 0
        ? Math.floor(peopleDatas.length / contentPerPage) + 1
        : peopleDatas.length / contentPerPage);

    const [curPage, setCurPage] = useState(1);
    const [lastContentIndex, setLastContentIndex] = useState(9);
    const [firstContentIndex, setFirstContentIndex] = useState(0);

    const onCurPageChanged = (event: React.ChangeEvent<unknown>, value: number) => {

        event.preventDefault();
        setCurPage(value);
        let nextPgLastIndex = value * contentPerPage;
        let colLastIndex = peopleDatas.length;
        setLastContentIndex(nextPgLastIndex >= colLastIndex
            ? colLastIndex
            : nextPgLastIndex);
        setFirstContentIndex(value == 1
            ? 0
            : (value - 1) * contentPerPage);

    };




    return (
        <>
            <Container maxWidth="lg">
                <SearchArea />
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                >
                    Find your favorite quotes.
                </Typography>
            </Container>
            <Container sx={{ py: 10 }} maxWidth="md">
                <Pagination sx={{ display: 'flex', justifyContent: 'center', marginTop: '0%', marginBottom: '2%' }}
                    count={pageCnt}
                    page={curPage}
                    onChange={onCurPageChanged}
                    showFirstButton
                    showLastButton />
                <Grid container spacing={4}>
                    {peopleDatas.slice(firstContentIndex, lastContentIndex).map((people) => (
                        <Grid item key={people.id} xs={12} sm={6} md={4}>
                            <ContentCard name={people.id} />
                        </Grid>
                    ))}
                </Grid>

                firstContentIndex:{firstContentIndex}
                lastContentIndex:{lastContentIndex}
                curPage:{curPage}
                contentPerPage:{contentPerPage}
            </Container>


        </>
    )
}

export default InitialContents;