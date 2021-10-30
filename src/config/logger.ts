/**
 * Logging config
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 30. October 2021
 */

// Third-party dependencies
import { LoggerOptions } from 'express-winston';
import { format, transports } from 'winston';

export const loggerConfig: LoggerOptions = {
  colorize: true,
  format: format.combine(format.colorize(), format.json()),
  meta: false,
  transports: [new transports.Console()],
};
