/**
 * App footer
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 */

// Third-party dependencies
import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import moment from 'moment';

// Cinfig
import { APP_VERISON } from 'src/config/environment';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 'auto',
    padding: theme.spacing(3, 2),
  },
}));

export const Footer: React.FC = () => {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Grid container justify="space-around" alignItems="center">
        <Typography variant="body2">
          Copyright © {moment().format('YYYY')} Axel Siebert{' '}
        </Typography>
        <Typography variant="body2">Version: {APP_VERISON}</Typography>
      </Grid>
    </footer>
  );
};

export default Footer;
