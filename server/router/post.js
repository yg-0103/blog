const router = require("express").Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const posts = await Post.findAll();

    res.status(200).send(posts || []);
  } catch (e) {
    res.status(404).send(e);
    console.error(e);
  }
  Post.findAll();
});

router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const post = await Post.create(req.body);
    res.status(201).send(post);
  } catch (e) {
    res.status(404).send(e);
    console.error(e);
  }
});

module.exports = router;
