/**
 * Web vitals reporter config.
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 *
 */

// Third-party dependencies
import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry: ReportHandler): void => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
