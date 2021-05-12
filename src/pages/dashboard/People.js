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
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Pagination from '../../components/Pagination';
import { cflew } from '../../helper/utility';

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles((theme) => ({
    mainArea: {
        backgroundColor: '#F6F6F6',
    },
    statBox: {
        padding: theme.spacing(2.5, 3.5, 5),
    },
    table: {
        minWidth: 650,
        border: 'none',
    },
    iconBox: {
        borderRadius: '11px',
        width: '41px',
        height: '43px',
        padding: theme.spacing(1),
        display: 'inline-block',
        verticalAlign: 'middle',
        '& > img': {
            width: '100%',
            height: 'auto',
        }
    },
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


function People() {
    const classes = useStyles();
    const [data, setData] = React.useState({
        results: [],
        next: "",
        prev: "",
        count: 0,
    });

    React.useEffect(() => {
        async function getData() {
            let { payload } = await query("people");
            setData(payload);
        };

        getData();
    }, []);


    const { results, next, prev, count } = data;

    return (
        <>
            <Pagination
                count={count}
                next={next}
                prev={prev}
                title="people"
            />
            <Box mt={3.5} px={3.5}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box px={3} py={5} className="table-container">
                            <TableContainer>
                                <Table className={classes.table} aria-label="data table">
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