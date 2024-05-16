const mongoose = require('mongoose');

const drawingSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    data: {
        type: String,
        required: true,
    },
});

const Drawing = mongoose.model('Drawing', drawingSchema);

module.exports = Drawing;