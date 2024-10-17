const Story = require('./models');

const getStories = async (req, res) => {
    const stories = await Story.find();
    res.json(stories);
};

const addContribution = async (req, res) => {
    const { title, paragraph } = req.body;
    const story = await Story.findOneAndUpdate(
        { title },
        { $push: { content: paragraph } },
        { new: true }
    );
    res.json(story);
};

module.exports = { getStories, addContribution };