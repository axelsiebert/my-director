/**
 * protelAir inspired theme
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 *
 */

// Third-party dependencies
import { createMuiTheme } from '@material-ui/core';
import { grey, red } from '@material-ui/core/colors';

export const pAirTheme = createMuiTheme({
  palette: {
    primary: {
      main: grey[700],
    },
    secondary: {
      main: red[700],
    },
  },
});
