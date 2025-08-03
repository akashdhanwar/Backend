const http = require("http");
const routes = require("./routes");
const PORT_NUMBER = 3000;

const server = http.createServer(routes);
server.listen(PORT_NUMBER);
