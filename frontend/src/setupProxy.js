const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    ["/auth", "/posts", "/comments", "/likes", "/uploads"],
    createProxyMiddleware({
      target: "http://localhost:5000",
    })
  );
};
