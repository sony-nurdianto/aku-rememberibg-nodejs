"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeController = /** @class */ (function () {
    function HomeController() {
        this.index = function (req, res) {
            try {
                return res.json({ status: true, message: 'OK', data: {} });
            }
            catch (error) {
                console.log(error);
                res.status(500).json({ status: false, message: 'Internal server error!' });
            }
        };
    }
    return HomeController;
}());
exports.default = new HomeController();
