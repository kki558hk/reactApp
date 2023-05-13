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


let quotes: quoteData[];

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

const name = 'Warren Buffett';
const QuoteTable = (props: any) => {


    const QuoteQuery = gql`
    query ($name :String!) {
        QuotesByPerson(name : $name) {
          Content
        }
      }
  `;
    const [result, reexecuteQuery] = useQuery({
        query: QuoteQuery,
        variables: { name },
    });

    const { data, fetching, error } = result;
    useEffect(() => {
        if (fetching === false && data !== undefined) {
            quotes = data.QuotesByPerson;
            console.log('quotes setted')
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
                            fetching === true ?
                                (
                                    <TableRow>
                                        <CircularProgress />
                                    </TableRow>
                                ) : (
                                    error !== undefined ? (
                                        <TableRow>
                                            <Alert severity="error">
                                                <AlertTitle>Error</AlertTitle>
                                                Something went wrong!
                                            </Alert>
                                        </TableRow>
                                    ) : (quotes !== undefined && fetching === false && quotes.length > 0 ?
                                        (
                                            quotes.map((quote: quoteData) =>
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
                                        ) : <></>
                                    )
                                )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination/> */}
        </Paper>
    );


}

export default QuoteTable;

