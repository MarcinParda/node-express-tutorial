const http = require("http");
const { readFileSync } = require("fs");

// get all files
const homePage = readFileSync("./navbar-app/index.html");
const homeStyles = readFileSync("./navbar-app/styles.css");
const homeImage = readFileSync("./navbar-app/logo.svg");
const homeLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  switch (url) {
    // home page
    case "/":
      res.writeHead(200, { "content-type": "text/html" });
      res.write(homePage);
      res.end();
      break;

    // about page
    case "/about":
      res.writeHead(200, { "content-type": "text/html" });
      res.write("<h1>about page</h1>");
      res.end();
      break;

    // styles
    case "/styles.css":
      res.writeHead(200, { "content-type": "text/css" });
      res.write(homeStyles);
      res.end();
      break;

    // image/logo
    case "/logo.svg":
      res.writeHead(200, { "content-type": "image/svg+xml" });
      res.write(homeImage);
      res.end();
      break;

    // logic
    case "/browser-app.js":
      res.writeHead(200, { "content-type": "text/javascript" });
      res.write(homeLogic);
      res.end();
      break;

    // 404
    default:
      res.writeHead(404, { "content-type": "text/html" });
      res.write("<h1>page not found</h1>");
      res.end();
      break;
  }
});

server.listen(5000);
