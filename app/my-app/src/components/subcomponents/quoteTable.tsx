import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { gql, useQuery } from 'urql';
import CircularProgress from '@mui/material/CircularProgress';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { useState, useEffect } from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';


interface Column {
    id: 'Quote' | 'Share';
    label: string;
    minWidth?: number;
    align?: 'right';
    format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'Quote', label: 'Quote', minWidth: 170 },
    { id: 'Share', label: 'Share', minWidth: 100 }
];

const QuoteTable = (props: quoteTableType) => {
    const [quoteDatas, setQuoteDatas] = useState<quoteData[]>([]);
    const QuoteQuery = gql`
    query ($name :String!) {
        QuotesByPerson(name : $name) {
          Content
        }
      }
  `;
    let name;
    name = props.name;
    const [result, reexecuteQuery] = useQuery({
        query: QuoteQuery,
        variables: { name },
    });

    const { data, fetching, error } = result;
    useEffect(() => {
        if (fetching === false && data.QuotesByPerson !== undefined) {
            setQuoteDatas(data.QuotesByPerson);
        }
    }, [data])


    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            {
                fetching === true ?
                    (
                        <Grid sx={{ display: 'flex' }}>
                            <CircularProgress sx={{ justifyContent: 'center' }} />
                        </Grid>
                    ) : (
                        error !== undefined ? (
                            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                <TableContainer sx={{ maxHeight: 440 }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableBody>
                                            <TableRow>
                                                <Alert severity="error">
                                                    <AlertTitle>Error</AlertTitle>
                                                    Something went wrong!
                                                </Alert>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper>
                        ) : (fetching === false && quoteDatas.length > 0 ?
                            (
                                <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                                    <TableContainer sx={{ maxHeight: 440 }}>
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    {columns.map((column) => (
                                                        <TableCell
                                                            key={column.id}
                                                            align={column.align}
                                                            style={{ minWidth: column.minWidth }}
                                                        >
                                                            {column.label}
                                                        </TableCell>
                                                    ))}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {
                                                    quoteDatas.map((quote: quoteData) =>
                                                        <TableRow>
                                                            <TableCell>
                                                                {quote.Content}
                                                            </TableCell>
                                                            <TableCell>
                                                                <IconButton sx={{ marginLeft: '1%', marginRight: '5%' }}>
                                                                    <TwitterIcon />
                                                                </IconButton>
                                                                <IconButton>
                                                                    <InstagramIcon />
                                                                </IconButton>
                                                            </TableCell>
                                                        </TableRow>
                                                    )
                                                }
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Paper>
                            ) : <></>
                        )
                    )
            }
        </>
        // {/* <TablePagination/> */ }
    );
}

export default QuoteTable;

