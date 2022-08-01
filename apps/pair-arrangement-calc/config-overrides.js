/**
 * Babel config overrides for custom webpack config without ejecting
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2020 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 09. November 2020
 */

// Third-party dependencies
import { fixBabelImports, override } from 'customize-cra';

export default override(
  fixBabelImports('lodash', {
    camel2DashComponentName: false,
    libraryDirectory: '',
  }),
  fixBabelImports('@material-ui/core', {
    camel2DashComponentName: false,
    libraryDirectory: 'esm',
  }),
  fixBabelImports('@material-ui/icons', {
    camel2DashComponentName: false,
    libraryDirectory: 'esm',
  }),
);
