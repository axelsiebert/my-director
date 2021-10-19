/**
 * Index file for backend services
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies
import express from 'express';
import { exit } from 'process';

// Config
import { environment } from './config/env';

// Utils
import { shutdown } from './utils/process/process.utils';

// Routes
import baseRouter from './routes/base/base.routes';

// Middlewares
import loggerMiddleware from './middlewares/logger/logger.middleware';

const app = express();

// Apply middlewares
if (environment.NODE_ENV === 'development') {
  app.use(loggerMiddleware);
}

// Apply routes
app.use(baseRouter);

const server = app.listen(environment.API_PORT, () => {
  if (environment.DB_USER === '' && environment.DB_PASSWORD) {
    console.error(
      "Database user and password not set. Set them via environment variables 'DB_USER' and 'DB_PASSWORD' and start app again.",
    );
    exit(1);
  }

  if (environment.DB_USER === '') {
    console.error(
      "Database user not set. Set it via environment variable 'DB_USER' and start the app again.",
    );
    exit(1);
  }

  if (environment.DB_PASSWORD === '') {
    console.error(
      "Database password not set. Set it via environment variable 'DB_PASSWORD' and start the app again.",
    );
    exit(1);
  }

  console.info(
    `MyDirector backend started successfully and listens on ${environment.API_PROTOCOL}://${environment.API_HOST}:${environment.API_PORT}`,
  );
});

app.on('SIGTERM', () => {
  shutdown(server);
});

app.on('SIGKILL', () => {
  shutdown(server);
});
