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

/**
 * @openapi
 * tags:
 *   name: Basic
 *   description: Endpoint for heart beat of the api
 */
const baseRouter = Router();

/**
 * @openapi
 * /:
 *   get:
 *     summary: Get the base route of the backend API
 *     tags: [Basic]
 *     responses:
 *       "200":
 *         description: API is up and running
 *         content:
 *           application/json:
 *             schema:
 *               properties:
 *                 message:
 *                   type: string
 */
baseRouter.get('/', (req, res) => {
  return res.status(200).json({ message: 'App running' });
});

export default baseRouter;
