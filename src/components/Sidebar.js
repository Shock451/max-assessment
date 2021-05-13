import React from "react";
import clsx from "clsx";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: '#ffffff',
    height: '100vh',
    position: 'sticky',
    top: '0',
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(4),
    borderRight: '0.4px solid #DBE3EE',
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    marginBottom: theme.spacing(4),
  },
  active: {
    borderRight: '3px solid #FDDB00',
  },
  listItemText: {
    marginLeft: theme.spacing(2.5),
  },
}));

function Sidebar() {

  const classes = useStyles();

  const { pathname } = useLocation();

  function isActive(path) {
    if (pathname === path || pathname === path + '/') {
      return "-active";
    }
    return "";
  }

  return (
    <Box className={classes.root}>
      <Box>
        <img src="/assets/star-wars-logo.png" alt="star wars logo" />
      </Box>
      <Box mt={7}>
        {links.map((link, index) => {
          const { url, name, icon } = link;
          return (
            <Link key={url + index} to={url} className={clsx(classes.listItem, {
              [classes.active]: isActive(url)
            })}>
              <img src={`/assets/icons/${icon}${isActive(url)}.svg`} alt={name} className="link-icon" />
              <Box className={clsx(classes.listItemText, 'text-16')}>{name}</Box>
            </Link>
          )
        })}
      </Box>
    </Box>
  );
}

const links = [
  {
    url: '/dashboard',
    name: 'Dashboard',
    icon: 'dashboard',
  },
  {
    url: '/dashboard/starships',
    name: 'Starships',
    icon: 'building',
  },
  {
    url: '/dashboard/people',
    name: 'People',
    icon: 'shopping-basket',
  },
  {
    url: '/dashboard/vehicles',
    name: 'Vehicles',
    icon: 'shopping-basket',
  },
  {
    url: '/dashboard/species',
    name: 'Species',
    icon: 'menu',
  }
]

export default Sidebar;
