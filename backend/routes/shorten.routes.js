import { Router } from "express";
import { handleShortenUrl, handleRecentLinks } from "../controllers/shorten.controller.js";
import { shortenRateLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();

/**
 * @swagger
 * /api/shorten:
 *   post:
 *     summary: Shorten a URL
 *     description: Creates a short code for a long URL. Rate-limited to 5 requests per minute per IP.
 *     tags:
 *       - URL Shortener
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - originalUrl
 *             properties:
 *               originalUrl:
 *                 type: string
 *                 example: "https://www.example.com/some/very/long/path"
 *     responses:
 *       201:
 *         description: URL shortened successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 shortCode:
 *                   type: string
 *                 shortUrl:
 *                   type: string
 *       400:
 *         description: Invalid URL format
 *       429:
 *         description: Rate limit exceeded
 */
router.post("/", shortenRateLimiter, handleShortenUrl);
/**
 * @swagger
 * /api/shorten/recent:
 *   get:
 *     summary: Get recent shortened URLs
 *     description: Retrieves the most recently created shortened URLs
 *     tags:
 *       - URL Shortener
 *     responses:
 *       200:
 *         description: List of recent URLs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/recent", handleRecentLinks)

export default router;
