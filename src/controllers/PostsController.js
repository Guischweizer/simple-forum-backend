import mongoose from "mongoose";

const Posts = mongoose.model("Posts");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;
    const posts = await Posts.paginate({}, { page, limit: 15 });

    return res.json(posts);
  },

  async show(req, res) {
    const post = await Posts.findById(req.params.id);

    return res.json(post);
  },

  async store(req, res) {
    const post = await Posts.create(req.body);

    return res.json(post);
  }
};
