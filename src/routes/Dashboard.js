import React from 'react';
import {
    Redirect,
    Route,
    Switch
} from "react-router-dom";

import Dashboard from '../pages/dashboard/Dashboard';
import Starships from '../pages/dashboard/Starships';
import People from '../pages/dashboard/People';
import Vehicles from '../pages/dashboard/Vehicles';
import Species from '../pages/dashboard/Species';

import { Grid, Hidden } from '@material-ui/core';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

function DashboardRoute() {

    if (!localStorage.getItem("authenticated")){
        return <Redirect to="/login" />
    }
    return (
        <Grid container>
            <Hidden mdDown>
                <Grid item xs={2}>
                    <Sidebar />
                </Grid>
            </Hidden>
            <Grid item xs className="main-area">
                <Header />
                <Switch>
                    <Route path="/dashboard/starships" component={Starships} />
                    <Route path="/dashboard/vehicles" component={Vehicles} />
                    <Route path="/dashboard/people" component={People} />
                    <Route path="/dashboard/species" component={Species} />
                    <Route exact path="/dashboard" component={Dashboard} />
                </Switch>
            </Grid>
        </Grid>
    )
}

export default DashboardRoute;