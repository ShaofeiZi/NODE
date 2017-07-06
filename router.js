
function route(handle, pathname,response) {
    console.log('请求路径是' + pathname);
    if (typeof handle[pathname] === 'function') {
        return handle[pathname](response);
    } else {
        return "404 Not found";
    }
}

exports.route = route;