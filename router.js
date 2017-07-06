
function route(handle, pathname, response, postData) {
    console.log('请求路径是' + pathname);
    if (typeof handle[pathname] === 'function') {
       handle[pathname](response, postData);
    } else {
        response.writeHead(404, { "Content-Type": "text/plain" });
        response.write("404 Not found");
        response.end();
    }
}

exports.route = route;