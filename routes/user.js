/**
 * @swagger
 * /search:
 *   get:
 *     summary: Cari data berdasarkan nama
 *     tags: [Tools]
 *     parameters:
 *       - in: query
 *         name: nama
 *         schema:
 *           type: string
 *         required: true
 *         description: Nama yang ingin dicari
 *     responses:
 *       200:
 *         description: Data ditemukan
 */
 
import express from "express";
const router = express.Router();
 
router.get('/search', (req, res) => {
  const { nama } = req.query;
  res.json({ hasil: `Data dengan nama ${nama}` });
});

export default router;