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

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const imageUrl = 'https://c4.wallpaperflare.com/wallpaper/935/849/231/background-tree-book-wallpaper-preview.jpg';
const InitialContents = () => {

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
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <ContentCard />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </>
    )
}

export default InitialContents;