const mongoose = require('mongoose')

const geometrySchema = mongoose.Schema({
    type: { type: String, required: true },
    coordinates: {
        type: [[[]]],
        required: true
    }
})
const featureSchema = new mongoose.Schema({
    type: { type: String, required: true },
    properties: { type: mongoose.Schema.Types.Mixed },
    geometry: { type: geometrySchema, required: true }
});

const tileSchema = new mongoose.Schema({
    type: { type: String, required: true },
    features: [featureSchema]
});

const Tiles = mongoose.model('tiles', tileSchema);
module.exports = Tiles;
