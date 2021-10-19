/**
 * Base routes for serving general information of the app
 *
 * ----------------------------------------------------------------------------------------
 * Copyright (c) 2021 Axel Siebert (a.siebert_84@gmx.de)
 *
 * @Created 19. October 2021
 */

// Third-party dependencies
import { Router } from 'express';

const baseRouter = Router();

baseRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'App running' });
});

export default baseRouter;
