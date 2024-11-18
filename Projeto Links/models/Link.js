const mongoose = require('mongoose');

const linkModel = new mongoose.Schema({
    title: { type: String, requirid: true },
    description: { type: String },
    url: { type: String, requirid: true },
    click: { type: Number, requirid: true },
})

module.exports = mongoose.model('Link', linkModel)