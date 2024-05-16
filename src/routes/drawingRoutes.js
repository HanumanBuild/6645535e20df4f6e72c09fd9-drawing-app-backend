const express = require('express');
const { createDrawing, getDrawings } = require('../controllers/drawingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createDrawing);
router.get('/', authMiddleware, getDrawings);

module.exports = router;