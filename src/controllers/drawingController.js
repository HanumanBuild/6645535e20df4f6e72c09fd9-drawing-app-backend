const Drawing = require('../models/Drawing');

const createDrawing = async (req, res) => {
    const { data } = req.body;
    const userId = req.user.userId;

    try {
        const newDrawing = new Drawing({ user: userId, data });
        await newDrawing.save();

        res.status(201).json(newDrawing);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const getDrawings = async (req, res) => {
    const userId = req.user.userId;

    try {
        const drawings = await Drawing.find({ user: userId });
        res.status(200).json(drawings);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createDrawing, getDrawings };