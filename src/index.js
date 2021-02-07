var http = require("http");

const server = http.createServer((req, res)=> {
  if (req.url === "/welcome") {
    res.writeHead(200,{ "Content-Type": "text/plain" });
    res.write("Welcome to Dominos!");
    res.end();
  } else if (req.url === "/contact") {
    res.writeHead(200,{ "Content-Type": "application/json" });
    res.write(
      JSON.stringify({
        phone: "18602100000",
        email: "guestcaredominos@jublfood.com"
      })
    );
    res.end();
  } else {
    res.writeHead(404);
    res.end("404 Not Found");
  }
};
server.listen(8081);

