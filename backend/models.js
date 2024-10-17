const mongoose = require('mongoose');

const storySchema = new mongoose.Schema({
    title: String,
    content: [String],
    createdAt: { type: Date, default: Date.now }
});

const Story = mongoose.model('Story', storySchema);
module.exports = Story;