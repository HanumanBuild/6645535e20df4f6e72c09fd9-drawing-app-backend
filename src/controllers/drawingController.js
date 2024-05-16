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

const updateDrawing = async (req, res) => {
    const { id } = req.params;
    const { data } = req.body;
    const userId = req.user.userId;

    try {
        const drawing = await Drawing.findOneAndUpdate({ _id: id, user: userId }, { data }, { new: true });
        if (!drawing) {
            return res.status(404).json({ message: 'Drawing not found' });
        }
        res.status(200).json(drawing);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteDrawing = async (req, res) => {
    const { id } = req.params;
    const userId = req.user.userId;

    try {
        const drawing = await Drawing.findOneAndDelete({ _id: id, user: userId });
        if (!drawing) {
            return res.status(404).json({ message: 'Drawing not found' });
        }
        res.status(200).json({ message: 'Drawing deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

module.exports = { createDrawing, getDrawings, updateDrawing, deleteDrawing };