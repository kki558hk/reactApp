import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import { SearchArea, ContentCard, DetailedInfoModal } from '../subcomponents/index';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import { useState, useEffect } from 'react';
import { gql, useQuery } from 'urql';
import LinearProgress from '@mui/material/LinearProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';




let personInfo: peopleData;
const InitialContents = () => {

    const PeopleQuery = gql`
      {
        AllPeople{
          Name
          Age
          Title
        }
      }
        `;
    const [result, reexecuteQuery] = useQuery({
        query: PeopleQuery,
    });

    const { data, fetching, error } = result;

    const [peopleDatas, setPeopleDatas] = useState<peopleData[]>([]);
    const [searchedPeopleDatas, setSearchedPeopleDatas] = useState<peopleData[]>([]);
    useEffect(() => {
        if (fetching === false && data !== undefined) {
            let pplDatas = data.AllPeople as peopleData[]
            setSearchedPeopleDatas(pplDatas);
            setPeopleDatas(pplDatas);
        }

    }, [data])

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
        setFirstContentIndex(value === 1
            ? 0
            : (value - 1) * contentPerPage);
    };

    const searchTextChanged = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();
        //検索文字列によるフィルタ
        const searchedDatas = peopleDatas
            .filter((people: peopleData) => {
                if ((event.target.value !== '' && people.Name.trim().toLowerCase().indexOf(event.target.value.trim().toLowerCase()) !== -1)
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
    //Modalが開いた時のイベント
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
                    searchedPeopleDatas.length === 0 ? <></> : (
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
                        ) : (fetching === true ?
                            (
                                <Grid item xs={12}>
                                    <LinearProgress />
                                </Grid>
                            ) : error !== undefined ?
                                (
                                    <Grid item xs={12}>
                                        <Alert severity="error">
                                            <AlertTitle>Error</AlertTitle>
                                            Something went wrong!
                                        </Alert>
                                    </Grid>
                                ) : (
                                    <Grid item xs={12}>
                                        <Typography variant='h5' fontWeight='bold' sx={{ display: 'flex', justifyContent: 'center' }}>
                                            No Result Found
                                        </Typography>
                                    </Grid>
                                )
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