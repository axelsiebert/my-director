/**
 * App header
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 */

// Third-party dependencies
import * as React from 'react';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, Settings as SettingsIcon } from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  titleContainer: {
    flexGrow: 1,
  },
}));

export const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <AppBar position="static">
      <Toolbar>
        {theme.breakpoints.down('sm') ? (
          <IconButton color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
        ) : (
          ''
        )}
        <Typography className={classes.titleContainer}>
          pAir Arrangement Rechner
        </Typography>

        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
