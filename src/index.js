const Koa = require("koa");
const Router = require("koa-router");

const app = new Koa();
const router = new Router();

router.get("/", (ctx) => {
  ctx.body = "home";
});

router.get("/about/:name?", (ctx) => {
  const { name } = ctx.params;
  ctx.body = name ? `about ${name}` : "about";
});

router.get("/posts", (ctx) => {
  const { id } = ctx.query;
  ctx.body = id ? `post ${id}` : "no post id";
});

router.get("/about", (ctx) => {
  ctx.body = "about";
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log("Listening to port 4000");
});
