import Router from "koa-router";
import * as postsCtrl from "./posts.ctrl.js";
import checkLoggedIn from "../../lib/checkLoggedIn.js";

const posts = new Router();

const printInfo = (ctx) => {
  ctx.body = {
    method: ctx.method,
    path: ctx.path,
    params: ctx.params
  };
};

posts.get("/", postsCtrl.list);
posts.post("/", checkLoggedIn, postsCtrl.write);

const post = new Router();
post.get("/", postsCtrl.read);
post.delete("/", checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.remove);
post.patch("/", checkLoggedIn, postsCtrl.checkOwnPost, postsCtrl.update);

posts.use("/:id", postsCtrl.getPostById, post.routes());

export default posts;
