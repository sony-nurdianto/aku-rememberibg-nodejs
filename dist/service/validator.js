"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Validator = /** @class */ (function () {
    function Validator() {
        this.emailValiator = function (email) {
            var emailRegxp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return emailRegxp.test(email);
        };
    }
    return Validator;
}());
exports.default = new Validator();
