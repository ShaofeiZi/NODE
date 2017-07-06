let http = require("http");
let url = require('url');


let start = (route) => {
    http.createServer(function (request, response) {
        let pathname = url.parse(request.url).pathname;
        route(pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("H2222");
        response.end();
    }).listen(8888);
}
exports.start = start;