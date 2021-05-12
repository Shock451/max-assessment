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

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Pagination from '../../components/Pagination';
import { query } from '../../services/api';
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
        // backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
        '$root.Mui-focusVisible &': {
            outline: '2px auto rgba(19,124,189,.6)',
            outlineOffset: 2,
        },
        'input:hover ~ &': {
            backgroundColor: '#ebf1f5',
        },
    },
}));


function Vehicles() {
    const classes = useStyles();

    const [data, setData] = React.useState({
        results: [],
        next: "",
        prev: "",
        count: 0,
    });

    React.useEffect(() => {
        async function getData() {
            let { payload } = await query("vehicles");
            setData(payload);
        };

        getData();
    }, []);

    const {results, next, prev, count} = data;

    return (
        <>
            <Pagination
                count={count}
                next={next}
                prev={prev}
                title="vehicles" 
                />
            <Box mt={3.5} px={3.5}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Box px={3} py={5} className="table-container">
                            <TableContainer>
                                <Table className={classes.table} aria-label="data table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><Box className="text-16 medium grey"></Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Name</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Model</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Class</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Manufacturer</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Length</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Crew</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Vehicle Passengers</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Cargo Capacity</Box></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results && results.map((vehicle, index) => {
                                            return (
                                                <TableRow key={`${vehicle.name}-${index}`}>
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            checked={false}
                                                            icon={<span className={classes.icon} />}
                                                        />
                                                    </TableCell>
                                                    <TableCell component="th" scope="row"><Box className="text-16 black-2">{cflew(vehicle.name)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.model)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.vehicle_class)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.manufacturer)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.length)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.crew)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.passengers)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(vehicle.cargo_capacity)}</Box></TableCell>
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


export default Vehicles;