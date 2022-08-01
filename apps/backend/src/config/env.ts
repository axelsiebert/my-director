/**
 * Environment variables config
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies

// Data models
import {
  EnvironmentConfig,
  HttpProtocol,
  NodeEnvironment,
} from '../models/config/env.model';

export const environment: EnvironmentConfig = {
  API_HOST: process.env.API_HOST || 'localhost',
  API_PORT: parseInt(process.env.API_PORT || '50000', 10),
  API_PROTOCOL: (process.env.API_PROTOCOL as HttpProtocol) || 'http',
  DB_HOST: process.env.DB_HOST || 'localhost',
  DB_PASSWORD: process.env.DB_PASSWORD || '',
  DB_PORT: parseInt(process.env.DB_PORT || '5432', 10),
  DB_USER: process.env.DB_USER || '',
  NODE_ENV: (process.env.NODE_ENV as NodeEnvironment) || 'development',
};
