"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var Auth_1 = __importDefault(require("../controlers/Auth"));
var HomeControler_1 = __importDefault(require("../controlers/HomeControler"));
var route = express_1.Router();
route.route('/home').get(HomeControler_1.default.index);
route.route('/login').post(Auth_1.default.login);
exports.default = route;
