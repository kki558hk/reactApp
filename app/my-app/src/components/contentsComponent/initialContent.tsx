import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { SearchArea, ContentCard, DetailedInfoModal } from '../subcomponents/index';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { useState } from 'react';
import { circularProgressClasses } from '@mui/material';
import { Console } from 'console';





type peopleData = {
    id: number;
    name: string;
    title: string;
    discript: string;
}



const peopleDatasToDisplay: peopleData[] = []
let personInfo: peopleData;
const InitialContents = () => {


    const [peopleDatas, setPeopleDatas] = useState<peopleData[]>(
        [
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

    );
    const [searchedPeopleDatas, setSearchedPeopleDatas] = useState<peopleData[]>(peopleDatas);
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

    const searchTextChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        //検索文字列によるフィルタ
        const searchedDatas = peopleDatas
            .filter((people: peopleData) => {
                if ((event.target.value !== '' && people.name.trim().toLowerCase().indexOf(event.target.value.trim().toLowerCase()) != -1)
                    || event.target.value === '') {
                    return people
                }
            }
            )
        //ページネーションの設定
        setSearchedPeopleDatas(searchedDatas);
        setFirstContentIndex(0);
        let nextPgLastIndex = 1 * contentPerPage;

        let colLastIndex = searchedDatas.length;
        console.log(colLastIndex);
        setLastContentIndex(nextPgLastIndex >= colLastIndex
            ? colLastIndex
            : nextPgLastIndex);

        setPageCnt(contentPerPage > searchedDatas.length ? 1 :
            searchedDatas.length % contentPerPage > 0
                ? Math.floor(searchedDatas.length / contentPerPage) + 1
                : searchedDatas.length / contentPerPage);

    };

    const [modalOpen, setModalOpen] = useState(false);
    const handleModalOpen = (person: peopleData) => {
        personInfo = person;
        setModalOpen(true);
    }

    const handleModalClose = () => setModalOpen(false);

    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoPZdmBTmKxWdTJ4zE_7_kqq9ZcI7kedXhzw&usqp=CAU';

    return (
        <>
            <Container maxWidth="lg">
                <SearchArea
                    searchTextChanged={searchTextChanged}
                />
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                >
                    Find your favorite quotes.
                </Typography>
            </Container>
            <Container sx={{ p: 10 }} maxWidth="md">
                {
                    searchedPeopleDatas.length == 0 ? <></> : (
                        <Pagination sx={{ display: 'flex', justifyContent: 'center', marginTop: '0%', marginBottom: '4%' }}
                            count={pageCnt}
                            page={curPage}
                            onChange={onCurPageChanged}
                            showFirstButton
                            showLastButton />
                    )
                }
                <Grid container spacing={4}>
                    {
                        searchedPeopleDatas.length > 0 ? (
                            searchedPeopleDatas
                                .slice(firstContentIndex, lastContentIndex)
                                .map((people: any) =>
                                    <Grid item key={people.id} xs={12} sm={6} md={4}>
                                        <ContentCard
                                            personData={people}
                                            imageUrl={imageUrl}
                                            handleModalOpen={handleModalOpen}
                                            handleModalClose={handleModalClose}
                                            modalOpen={modalOpen} />
                                    </Grid>
                                )
                        ) : (
                            <Grid item xs={12}>
                                <Typography variant='h5' fontWeight='bold' sx={{ display: 'flex', justifyContent: 'center' }}>
                                    No Result Found
                                </Typography>
                            </Grid>
                        )
                    }
                </Grid>
            </Container >
            {
                personInfo != null ? (
                    <DetailedInfoModal
                        modalOpen={modalOpen}
                        handleModalClose={handleModalClose}
                        imageUrl={imageUrl}
                        personInfo={personInfo}
                    />
                ) : <></>
            }

        </>
    )
}

export default InitialContents;