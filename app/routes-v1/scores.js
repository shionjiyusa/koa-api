const Router = require("koa-router");
const router = new Router({ prefix: "/api/scores" });

router.get("/", (ctx) => {
  ctx.body = "he";
});
router.get("/:id", (ctx) => {
  ctx.body = { name: "yusa" };
});
router.post("/", (ctx) => {
  ctx.body = ctx.request.body;
});
router.put("/:id", (ctx) => {
  ctx.body = { name: "yusa2" };
});
router.delete("/:id", (ctx) => {
  ctx.status = 204;
});

module.exports = router;
