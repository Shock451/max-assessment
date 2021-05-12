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
        backgroundColor: '#ffffff',
    },
}))

function Pagination(props) {

    const classes = useStyles();

    // eslint-disable-next-line no-unused-vars
    const { count, search, handleInput, total, previous, next, title, page, changePage } = props;

    const start = (page * 10) > total ? (total - count + 1) : (((page * 10) - 10)) + 1;
    const end = (start + count) - 1;
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
                    {total} Total
                </Box>
                <Grid item xs={12} md>
                    <Box mx={{ xs: 2, md: 5 }} component="span" className="text-16 black-2">
                        Showing {start || '-'}-{end || '-'} of {total || '-'}
                    </Box>
                    <IconButton className="arrow-btn" disabled={!previous} onClick={() => changePage(-1)}>
                        <img
                            src="/assets/icons/arrow-point-to-left.svg"
                            alt="arrow left"
                        />
                    </IconButton>
                    <IconButton className="arrow-btn" disabled={!next} onClick={() => changePage(1)}>
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
                    onChange={handleInput}
                    value={search}
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
    previous: PropTypes.string,
    total: PropTypes.number,
    title: PropTypes.string,
    page: PropTypes.number,
    changePage: PropTypes.func,
    handleInput: PropTypes.func,
    search: PropTypes.string,
};

export default Pagination;