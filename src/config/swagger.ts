/**
 * Swagger cofiguration
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 30. October 2021
 */

// Third-party dependencies
import { Options } from 'swagger-jsdoc';
import { description, license, name, version } from '../../package.json';
import { resolve } from 'path';

export const swaggerJsdocOptions: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: name,
      version,
      description,
      license: {
        name: license,
      },
    },
  },
  apis: [resolve(__dirname, '..', 'routes', 'base', 'base.routes.ts')],
};
