const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.use(
    proxy(["/getnews"], { target: "http://localhost:5000" })
  );
};