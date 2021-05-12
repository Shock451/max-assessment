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
    Checkbox,
} from '@material-ui/core';

import Pagination from '../../components/Pagination';

import { makeStyles, withStyles } from "@material-ui/core/styles";
import { query } from '../../services/api';
import { cflew } from '../../helper/utility';

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles((theme) => ({
    icon: {
        borderRadius: 3,
        width: 16,
        height: 16,
        backgroundColor: '#DDDBDB',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
    },
}));


function Starships() {
    const classes = useStyles();

    const [data, setData] = React.useState({
        results: [],
        next: "",
        previous: "",
        count: 0,
    });

    const [page, setPage] = React.useState(1);
    const [search, setSearch] = React.useState("");

    async function getData() {
        let { payload } = await query("starships", page, search);
        setData(payload);
    };

    React.useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page, search]);

    const { results, next, previous, count } = data;

    function handleInput(event) {
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
                title="starships"
            />
            <Box mt={3.5} px={3.5}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box px={3} py={5} className="table-container">
                            <TableContainer>
                                <Table className="mui-table" aria-label="data table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><Box className="text-16 medium grey"></Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Name</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Model</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Class</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Cost (in GC)</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Passengers</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Length</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Crew</Box></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results && results.map((starship, index) => {
                                            return (
                                                <TableRow key={`${starship.name}-${index}`}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={false}
                                                            icon={<span className={classes.icon} />}
                                                        />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row"><Box className="text-16 black-2">{cflew(starship.name)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(starship.model)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(starship.starship_class)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 blue">{cflew(starship.cost_in_credits)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(starship.passengers)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(starship.length)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(starship.crew)}</Box></TableCell>
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


export default Starships;