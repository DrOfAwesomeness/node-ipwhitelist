"use strict";
exports = module.exports = function (ipList) {
    return function (req, res, next) {
        if (ipList.indexOf(req.ip) === -1) {
            res.send(403, "Your IP has not been whitelisted");
        } else {
            next();
        }
    };
};
