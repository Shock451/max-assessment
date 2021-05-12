import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';

import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          {/* Routes go here */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;