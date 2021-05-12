import React from 'react';

import {
    Grid,
    Box,
    Hidden,
    makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles(theme => ({
    root: {
        height: "100vh",
        minHeight: "640px",
        display: 'flex',
        overflow: "hidden",
        backgroundColor: '#fff',
    },
    leftArea: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: "rgba(255, 246, 211, .45)",
    },

    rightArea: {
        display: 'flex',
        flexDirection: 'column',
    },
    rightContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    titleText: {
        color: 'rgba(43, 45, 66, 1)',
        fontWeight: "bold",
        fontSize: "1.5em",
    },
    customFormControl: {
        background: 'rgba(250, 250, 250, 1) 0% 0% no-repeat padding-box',
        border: '1px solid rgba(141, 153, 174, 1)',
        borderRadius: '4px',
    }
}));

function Login() {

    const classes = useStyles();
    const history = useHistory();
    const [state, setState] = React.useState({
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        if (state.password.length >= 8 && /\d+/.test(state.password) && /[A-Za-z]+/.test(state.password)) {
            history.push("/dashboard");
        }
    }

    return (
        <Grid comtainer className={classes.root}>
            <img
                src="/assets/astronaut.png"
                className="abs-tr-image"
                alt="astronaut"
            />
            <Hidden smDown>
                <Grid item md={4} className={classes.leftArea}>
                    <Box className={classes.leftContent}>
                        <Box ml={8} my={3} className="hero-text">
                            Welcome to Star Wars <br />
                        the Clone Wars
                    </Box>
                        <Box>
                            <img src={'/assets/to_the_stars.png'} alt="to the stars" style={{
                                width: '350px',
                                height: 'auto',
                            }} />
                        </Box>
                    </Box>
                </Grid>
            </Hidden>
            <Grid item xs={12} md={5} className={classes.rightArea}>
                <Box className={classes.rightContent}>
                    <form id="login-form" onSubmit={handleSubmit}>
                        <Box my={3} className={classes.titleText}>
                            Sign in to continue to your account.
                        </Box>
                        <Box>
                            <Box mb={2.5}>
                                <label>Email address</label>
                                <input
                                    className="form-control"
                                    name="email"
                                    type="email"
                                    value={state.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                    required
                                />
                            </Box>
                            <Box mb={5}>
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    name="password"
                                    type="password"
                                    value={state.password}
                                    onChange={handleChange}
                                    placeholder="Enter strong password"
                                    required />
                            </Box>
                            <Box>
                                <button type="submit" className="primary-button">Sign in</button>
                            </Box>
                        </Box>
                    </form>
                </Box>
                <Box display="inline-flex" px={2} mb={1.5}>
                    <Box component="span" className="copy">All rights reserved © 2020 STAR WARS</Box>
                    <Box display="inline-block" ml="auto">
                        <Box mr={5} component="span" className="copy">Privacy | Terms</Box>
                        <Box component="span" className="copy">English <Box component="span" className="dropdown"></Box></Box>
                    </Box>
                </Box>
            </Grid>
            <Hidden smDown>
                <Grid item xs={0} md={3}>
                </Grid>
            </Hidden>
        </Grid>
    )
}

export default Login;