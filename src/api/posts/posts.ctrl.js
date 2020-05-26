import Post from "../../models/post";

export const write = async (ctx) => {
  const { title, body, tags } = ctx.request.body;
  console.log("ctx: ", ctx.request.body);
  const post = new Post({
    title,
    body,
    tags,
  });
  try {
    await post.save();
    console.log("post: ", post);
    ctx.body = post;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const list = async (ctx) => {
  try {
    const posts = await Post.find().exec();
    ctx.body = posts;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const read = (ctx) => {};

export const remove = (ctx) => {};

export const update = (ctx) => {};
