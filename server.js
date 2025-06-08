const express = require("express");
const unblocker = require("unblocker");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(unblocker({
  prefix: '/proxy/',
  requestMiddleware: [
    (req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      next();
    }
  ]
}));

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Proxy running on port ${PORT}`);
});
