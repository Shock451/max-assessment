import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

import Login from './pages/auth/Login';
import DashboardRoutes from './routes/Dashboard';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/dashboard" component={DashboardRoutes} />
          <Route component={Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;