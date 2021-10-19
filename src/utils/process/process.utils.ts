/**
 * Process utils dealing with runtime tasks
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies
import { Server } from 'http';
import { exit } from 'process';

export const shutdown = (server: Server) => {
  console.info('Shutting down MyDirector backend...');

  server.close(() => {
    console.info('Good bye!');
    exit(0);
  });
};
