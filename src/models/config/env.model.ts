/**
 * Data model of environment config data
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies

export type HttpProtocol = 'http' | 'https';

export type HttpHost = 'localhost' | string;

export type NodeEnvironment = 'development' | 'production' | 'test';

export interface EnvironmentConfig {
  API_HOST: HttpHost;
  API_PORT: number;
  API_PROTOCOL: HttpProtocol;
  DB_HOST: string;
  DB_PASSWORD: string;
  DB_PORT: number;
  DB_USER: string;
  NODE_ENV: NodeEnvironment;
}
