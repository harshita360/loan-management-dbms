const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/customersignin", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/employeesignin", {
      target: "http://localhost:5000",
    })
  );
  app.use(
    createProxyMiddleware("/busiloanform", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/morloanform", { target: "http://localhost:5000" })
  );

  app.use(
    createProxyMiddleware("/edu/**", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/business/**", { target: "http://localhost:5000" })
  );
  app.use(
    createProxyMiddleware("/loanform/edu", { target: "http://localhost:5000" })
  );
};
