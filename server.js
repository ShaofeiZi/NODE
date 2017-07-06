let http = require("http");
let url = require('url');


let start = (route, handle) => {
    http.createServer(function (request, response) {
        let pathname = url.parse(request.url).pathname;
        let temp = route(handle, pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write(temp);
        response.end();
    }).listen(8888);
}
exports.start = start;