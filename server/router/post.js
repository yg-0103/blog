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
    const posts = await Post.create(req.body);
    res.status(201).send(posts);
  } catch (e) {
    res.status(404).send(e);
    console.error(e);
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findOneById(req.params.postId);
    if (!post) return res.send({ err: "Post not found" });
    res.status(200).send(post);
  } catch (e) {
    res.status(500).send(e);
    console.error(e);
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    const post = await Post.deleteOne({ filter: req.params.postId });
    if (!post) return res.send({ err: "Post not found" });
    res.status(200).send(post);
  } catch (e) {
    res.status(500).send(e);
    console.error(e);
  }
});
module.exports = router;
