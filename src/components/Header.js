import React from "react";
import {
  Grid,
  Box,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { useLocation } from 'react-router-dom';
import { capitalize } from "../helper/utility";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#FFFFFF',
    padding: theme.spacing(1.5, 10, 1.5, 3),
  },
  avatar: {
    height: '50px',
    width: '50px',
  }
}));

function Header() {

  const classes = useStyles();
  const { pathname } = useLocation();
  let title = capitalize(pathname.substring(pathname.lastIndexOf('/') + 1));

  return (
    <Box className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs>
          <Box className="text-20">
            {title}
          </Box>
        </Grid>
        <Grid item>
          <Box component="span">
            <img src="/assets/avatar.png" alt="avatar" className={classes.avatar} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Header;