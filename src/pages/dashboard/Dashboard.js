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

import { makeStyles, withStyles } from "@material-ui/core/styles";
import StatBox from '../../components/Stats';
import FilterBox from '../../components/FilterBox';
import { cflew } from '../../helper/utility';
import { queryX } from '../../services/api';

const TableCell = withStyles({
    root: {
        borderBottom: "none"
    }
})(MuiTableCell);

const useStyles = makeStyles((theme) => ({
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
}));


function Dashboard() {
    const classes = useStyles();

    const [data, setData] = React.useState({
        results: [],
        next: "",
        prev: "",
        count: 0,
    });
    const [stats, setStats] = React.useState({
        starships: 0,
        films: 0,
        vehicles: 0,
        people: 0,
        species: 0,
    });

    React.useEffect(() => {

        async function collateStats() {
            let responses = await queryX(["starships", "people", "vehicles", "species", "films"]);
            setStats({
                starships: responses[0].data.count,
                people: responses[1].data.count,
                vehicle: responses[2].data.count,
                species: responses[3].data.count,
                films: responses[4].data.count,
            });
            setData(responses[4].data);
        }

        collateStats();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const statistics = [
        {
            name: 'Films',
            color: 'rgba(3, 212, 182, .2)',
            icon: 'video-camera',
            count: stats.films,
        },
        {
            name: 'Starships',
            color: 'rgba(33, 112, 255, .2)',
            icon: 'ufo',
            count: stats.starships,
        },
        {
            name: 'People',
            color: 'rgba(99, 90, 208, .2)',
            icon: 'group-of-students',
            count: stats.people,
        },
        {
            name: 'Vehicles',
            color: 'rgba(240, 217, 60, .2)',
            icon: 'taxi',
            count: stats.vehicles,
        },
        // {
        //     name: 'Species',
        //     color: 'rgba(99, 90, 208, .2)',
        //     icon: 'phylogenetics',
        //     count: stats.species,
        // },
    ];

    
    // eslint-disable-next-line no-unused-vars
    const { results, next, prev, count } = data;

    return (
        <>
            <FilterBox />
            <Box mt={3.5} px={3.5}>
                <Grid container spacing={2}>
                    {statistics.map((stat, index) => {
                        let { name, color, icon, count} = stat;
                        return (
                            <Grid item xs={12} sm={6} md={3} key={`stat-${name}-${index}`}>
                                <StatBox name={name} color={color} icon={icon} count={count} />
                            </Grid>
                        )
                    })}
                    <Grid item xs={12}>
                        <Box px={{ md: 8, xs: 4 }} py={5} className="table-container">
                            <Box mb={2} className="text-25 medium">Films</Box>
                            <TableContainer>
                                <Table className={classes.table} aria-label="data table">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell><Box className="text-16 medium grey">Film title</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Director</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Producer</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Release Date</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Episode ID</Box></TableCell>
                                            <TableCell><Box className="text-16 medium grey">Characters</Box></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {results && results.map((film, index) => {
                                            return (
                                                <TableRow key={`${film.name}-${index}`}>
                                                    <TableCell component="th" scope="row">
                                                        <Box display="flex" alignItems="center" className="text-16 black-2">
                                                            <Box mr={1} className={classes.iconBox} bgcolor="rgba(3, 212, 182, .2)">
                                                                <img src="/assets/icons/video-camera.svg" alt="video camera icon" />
                                                            </Box>
                                                            {cflew(film.title)}
                                                        </Box>
                                                    </TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(film.director)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(film.producer)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(film.release_date)}</Box></TableCell>
                                                    <TableCell><Box className="text-16 black-2">{cflew(film.episode_id)}</Box></TableCell>
                                                    <TableCell><a href={film.characters[0]} className="text-16 info">{film.characters[0]}</a></TableCell>
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

export default Dashboard;