/**
 * Main App layout
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 */

// Third-party dependencies
import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Own components
import Footer from 'src/app/components/footer/Footer';
import Header from 'src/app/components/header/Header';

const useStyles = makeStyles((theme) => ({
  footer: {
    marginTop: 'auto',
    padding: theme.spacing(3, 2),
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
    minHeight: '100vh',
  },
}));

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header />
      <Footer />
    </div>
  );
};

export default App;
