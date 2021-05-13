import React from 'react';

import {
    Grid,
    Box,
    Table,
    TableBody,
    TableCell as MuiTableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';

import { query } from '../../services/api';
import { withStyles } from "@material-ui/core/styles";
import Pagination from '../../components/Pagination';
import { cflew } from '../../helper/utility';

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

function People() {
    
    const [data, setData] = React.useState({
        results: [],
        next: "",
        prev: "",
        count: 0,
    });

    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState("");

    async function getData() {
        let { payload } = await query("people", page, search);
        setData(payload);
    };

    React.useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, search]);

    const { results, next, previous, count } = data;

    function handleInput(event){
        setSearch(event.target.value);
    }

    function handleChangePage(num) {
        setPage(page + num);
    }

    return (
        <>
            <Pagination
                search={search}
                handleInput={handleInput}
                count={results.length}
                total={count}
                changePage={handleChangePage}
                next={next}
                previous={previous}
                page={page}
                title="people"
            />
            <Box my={3.5} px={3.5}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box px={3} py={1} className="table-container">
                            <TableContainer>
                                <Table className="mui-table" aria-label="data table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><Box className="text-16 medium grey">Name</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Birth year</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Gender</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Eye color</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Hair color</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Height</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Mass</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Skin color</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Created</Box></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results && results.map((person, index) => {
                                            return (
                                                <TableRow key={`${person.name}-${index}`}>
                                                    <TableCell component="th" scope="row"><Box className="text-16 black-2">{cflew(person.name)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{person.birth_year}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.gender)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.eye_color)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.hair_color)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.height)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.mass)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(person.skin_color)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 info">{cflew(person.created)}</Box></TableCell>
                                                </TableRow>
                                            )
                                        })}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default People;