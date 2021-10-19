/**
 * Logger middleware
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies
import { Router } from 'express';

const loggerMiddleware = Router();

loggerMiddleware.use((req, res, next) => {
  console.info(`${req.method} ${req.url} on ${new Date().toISOString()}`);
  return next();
});

export default loggerMiddleware;
