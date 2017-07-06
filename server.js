let http = require("http");
let url = require('url');


let start = () => {
    http.createServer(function (request, response) {
        let pathname = url.parse(request.url).pathname;
        console.log('请求路径是'+pathname);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("H2222");
        response.end();
    }).listen(8888);
}
exports.start = start;