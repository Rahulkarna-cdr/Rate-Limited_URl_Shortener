import { Router } from "express"
import { getShortUrlAnalytics } from "../controllers/analytics.controller.js"
const router = Router()

/**
 * @swagger
 * /api/analytics/{shortCode}:
 *   get:
 *     summary: Get URL analytics
 *     description: Retrieves analytics data for a shortened URL including click count and details
 *     tags:
 *       - Analytics
 *     parameters:
 *       - in: path
 *         name: shortCode
 *         required: true
 *         schema:
 *           type: string
 *         example: "abc123"
 *     responses:
 *       200:
 *         description: Analytics retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortCode:
 *                   type: string
 *                 clicks:
 *                   type: number
 *       404:
 *         description: Short code not found
 */
router.get('/:shortCode', getShortUrlAnalytics)

export default router;
