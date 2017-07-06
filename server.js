let http = require("http");


let start = () => {
    http.createServer(function (request, response) {
        console.log(request);
        console.log(response);
        response.writeHead(200, { "Content-Type": "text/plain" });
        response.write("H2222");
        response.end();
    }).listen(8888);
}
exports.start=start;