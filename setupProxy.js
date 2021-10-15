const proxy = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(proxy("api/planets/", { target: "http://localhost:3000" }));
  app.use(proxy("/api/planets/", { target: "https://tender-jones-c0f751.netlify.app/" }));
};
