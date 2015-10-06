(function () {
    "use strict";

    module.exports = {
        port: process.env.port || 3031,
        allowOrigin: process.env.allowOrigin || 'http://localhost:63342'
    };
})();