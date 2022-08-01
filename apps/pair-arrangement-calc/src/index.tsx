/**
 * Main App entry point
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 08. November 2020
 *
 */

// Third-party dependencies
import * as React from 'react';
import { MuiThemeProvider } from '@material-ui/core';
import ReactDOM from 'react-dom';

// Own components
import App from './app/components/app/App';

// Utils
import { sendToGoogleAnalytics } from './app/utils/analytics.utils';
import reportWebVitals from './reportWebVitals';

// Theme
import { pAirTheme } from 'src/app/core/themes/pAir.theme';

// Styles
import './index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MuiThemeProvider theme={pAirTheme}>
      <App />
    </MuiThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(sendToGoogleAnalytics);
