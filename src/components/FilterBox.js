import React from "react";
import {
    Grid,
    Box,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1.5, 10, 1.5, 3),
        backgroundColor: '#ffffff',
    },
}))

function FilterBox() {
    const classes = useStyles();
    return (
        <Grid container className={classes.root} justify="flex-end">
            <Box>
                <select className="select-box" name="select" onChange={null}>
                    <option value="Current Year">Current Year</option>
                </select>
            </Box>
            <Box ml={2}>
                <select className="select-box" name="select" onChange={null}>
                    <option value="Current Week">Current Week</option>
                </select>
            </Box>
        </Grid>
    )
}

export default FilterBox;