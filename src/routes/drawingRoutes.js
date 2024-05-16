const express = require('express');
const { createDrawing, getDrawings, updateDrawing, deleteDrawing } = require('../controllers/drawingController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createDrawing);
router.get('/', authMiddleware, getDrawings);
router.put('/:id', authMiddleware, updateDrawing);
router.delete('/:id', authMiddleware, deleteDrawing);

module.exports = router;