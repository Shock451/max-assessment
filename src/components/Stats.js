import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    statBox: {
        padding: theme.spacing(2.5, 3.5, 5),
        backgroundColor: '#ffffff',
    },
    iconBox: {
        borderRadius: '11px',
        width: '41px',
        height: '43px',
        padding: theme.spacing(1),
        '& > img': {
            width: '100%',
            height: 'auto',
        }
    },
}));


function StatBox(props) {
    const classes = useStyles();
    const { name, color, icon, count } = props;

    return (
        <Box className={classes.statBox}>
            <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box className="text-20 medium primary">{name}</Box>
                <Box className={classes.iconBox} bgcolor={color}>
                    <img src={`/assets/icons/${icon}.svg`} alt={`${icon} icon`} />
                </Box>
            </Box>
            <Box mt={7} className="text-20 medium primary">
                {count || '-'}
            </Box>
            <Box mt={1.5} className="text-10">
                <span className="info">20</span>
                <Box ml={1} component="span" className="secondary">More than yesterday</Box>
            </Box>
        </Box>
    )
}

StatBox.propTypes = {
    name: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.string,
    count: PropTypes.number,
};

export default StatBox;
