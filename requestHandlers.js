function start() {
    function sleep(milliSeconds) {
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
   return 'start';
}

function upload() {
    return 'upload';
}

exports.start = start;
exports.upload = upload;