import React from "react";
import PropTypes from 'prop-types';
import {
    Grid,
    ButtonBase,
    Box,
    IconButton,
} from "@material-ui/core";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(1.5, 3),
        borderTop: '0.4px solid #DBE3EE',
        backgroundColor: '#ffffff',
    },
}))

function Pagination(props) {

    const classes = useStyles();

    // eslint-disable-next-line no-unused-vars
    const { count, total, prev, next, title } = props;

    return (
        <Grid
            container
            className={classes.root}
            alignItems="center"
            justify="space-between"
        >
            <Grid container item xs={12} md={8} alignItems="center">
                <ButtonBase onClick={() => null}>
                    <Box className="back-btn text-18">
                        <img
                            src="/assets/icons/arrow-point-to-left.svg"
                            alt="arrow left"
                        />
                        Back
                    </Box>
                </ButtonBase>
                <Box ml={2} component="span" className="text-16 black-2">
                    200 Total
                </Box>
                <Grid item xs={12} md>
                    <Box mx={{ xs: 2, md: 5 }} component="span" className="text-16 black-2">
                        Showing 1-20 of {total}
                    </Box>
                    <IconButton className="arrow-btn">
                        <img
                            src="/assets/icons/arrow-point-to-left.svg"
                            alt="arrow left"
                        />
                    </IconButton>
                    <IconButton className="arrow-btn">
                        <img
                            src="/assets/icons/arrow-point-to-left.svg"
                            alt="arrow right"
                            style={{
                                transform: 'rotate(180deg)',
                            }}
                        />
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item xs={12} md={3} className="input-box">
                <input
                    name="search"
                    onChange={null}
                    placeholder={`Search for ${title}`}
                />
                <img src="/assets/icons/search.svg" alt="search" />
            </Grid>
        </Grid >
    )
}

Pagination.propTypes = {
    count: PropTypes.number,
    next: PropTypes.string,
    prev: PropTypes.string,
    total: PropTypes.number,
    title: PropTypes.string,
};

export default Pagination;